import { useState, useEffect } from "react";

import playPink from "./../../media/ui/play[pink].svg";
import stopPink from "./../../media/ui/stop[pink].svg";

import styles from "./CakeBlock.module.css"; 

const CakeBlock = ({ image, soundMp3, soundOgg, heading, description, activeAudio, setActiveAudio, isFirst  }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const fadeDuration = 500; // Время для fade-in и fade-out в миллисекундах

  useEffect(() => {
    const audioElement = new Audio();
    
    // Проверяем, какой формат поддерживается браузером
    if (audioElement.canPlayType('audio/ogg')) {
      audioElement.src = soundOgg;
      console.log("Using OGG format");
    } else if (audioElement.canPlayType('audio/mpeg')) {
      audioElement.src = soundMp3;
      console.log("Using MP3 format");
    } else {
      console.error("No compatible audio format found!");
    }

    // Изначально аудио не слышно
    audioElement.volume = 0;

    setAudio(audioElement);

    // Очистка ресурса при размонтировании компонента
    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.src = ""; // Очищаем источник
      }
    };
  }, [soundMp3, soundOgg]);

  const fadeIn = (audioElement) => {
    let volume = 0;
    audioElement.volume = volume;
    audioElement.play();

    const fadeInInterval = setInterval(() => {
      if (volume < 1) {
        volume = Math.min(1, volume + 0.05); // Увеличиваем громкость
        audioElement.volume = volume;
      } else {
        clearInterval(fadeInInterval); // Останавливаем увеличение громкости
      }
    }, fadeDuration / 20); // 20 шагов за fadeDuration
  };

  const fadeOut = (audioElement) => {
    let volume = 1;

    const fadeOutInterval = setInterval(() => {
      if (volume > 0) {
        volume = Math.max(0, volume - 0.05); // Понижаем громкость
        audioElement.volume = volume;
      } else {
        audioElement.pause();
        clearInterval(fadeOutInterval); // Останавливаем уменьшение громкости
      }
    }, fadeDuration / 20);
  };

  const handlePlaySound = () => {
    if (!audio) return;

    if (isPlaying) {
      // audio.pause();
      fadeOut(audio); 
      setIsPlaying(false);
      setActiveAudio(null);
    } else {
      // Останавливаем другой активный звук
      if (activeAudio && activeAudio !== audio) {
        // activeAudio.pause();
        fadeOut(activeAudio);
      }

      // audio.play();
      fadeIn(audio); // Плавно начинаем воспроизведение нового звука
      setIsPlaying(true);
      setActiveAudio(audio);
    }
    setIsPlaying(!isPlaying);
  };

  // Останавливаем звук, если другой блок начинает играть
  useEffect(() => {
    if (activeAudio && activeAudio !== audio) {
      setIsPlaying(false);
    }
  }, [activeAudio, audio]);

  return (
    <div className={styles.cakeContainer}>
      <div className={styles.whiteGradient}></div>

        <h3 className={`${styles.cakeInfoHeading} ${isFirst ? styles.cakeInfoHeadingWhite : styles.cakeInfoHeading}`} >Коин <br /> {heading}</h3>

        <div className={styles.cakeImgContainer}>
          <img className={styles.cakeImg} src={image} alt={heading} />
        </div>

         <div className={styles.cakeInfoTextContainer}>
          {description.map((text, index) => (
            <p key={index} className={styles.cakeInfoText}>
              {text}
            </p>
          ))}
        </div>

        <button onClick={handlePlaySound} className={styles.playButton}>
          <img 
            src={isPlaying ? stopPink : playPink} 
            alt={isPlaying ? ">" : "''"} 
            className={styles.playIcon} 
          />
          {isPlaying ? "Стоп" : "Послушать"}
        </button>

    </div>
  );
};

export default CakeBlock;

import React, { useEffect, useState } from 'react';

import image1 from '../../images/forms/1.svg';
import image2 from '../../images/forms/2.svg';
import image3 from '../../images/forms/3.svg';
import image4 from '../../images/forms/4.svg';
import image5 from '../../images/forms/5.svg';

import styles from './Preloader.module.css';

function Preloader({ onFinish, intervalSpeed = 500, loop = false, isBackground = false }) {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [image1, image2, image3, image4, image5]; 
  // const changeInterval = 500; 

  // useEffect(() => {
  //   if (currentImage < images.length - 1) {
  //     const timer = setTimeout(() => {
  //       setCurrentImage(currentImage + 1);
  //     }, changeInterval);
  //     return () => clearTimeout(timer);
  //   } else {
  //     const timer = setTimeout(onFinish, changeInterval); 
  //     return () => clearTimeout(timer);
  //   }
  // }, [currentImage, images.length, onFinish]);

  useEffect(() => {
    const changeImage = () => {
      setCurrentImage(prevImage => {
        if (prevImage < images.length - 1) {
          return prevImage + 1;
        } else {
          return loop ? 0 : prevImage;
        }
      });
    };

    const timer = setTimeout(changeImage, intervalSpeed);

    if (!loop && currentImage === images.length - 1) {
      clearTimeout(timer);
      const finishTimer = setTimeout(onFinish, intervalSpeed);
      return () => clearTimeout(finishTimer);
    }

    return () => clearTimeout(timer);
  }, [currentImage, intervalSpeed, images.length, loop, onFinish]);

  return (
    // <div className={styles.preloader}>
    //   <img src={images[currentImage]} alt="Preloader"/>
    // </div>
    <div className={isBackground ? styles.backgroundPreloader : styles.preloader}>
      <img src={images[currentImage]} alt="Preloader" className={isBackground ? styles.backgroundImage : ''} />
    </div>
  );
};

export default Preloader;
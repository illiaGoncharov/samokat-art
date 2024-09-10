import { useState } from "react";

import Preloader from "./../../components/preloader/Preloader";
import CakeBlock from "./../../components/cakeBlock/CakeBlock";

import arrowWhite from './../../media/ui/arrow[white].svg';
import arrowPinkBig from './../../media/ui/arrow[pink+big].svg';

import sun from "./../../media/cakes/1+.jpg";
import onisan from "./../../media/cakes/2+.jpg";
import cube from "./../../media/cakes/3+.jpg";
import taiga from "./../../media/cakes/4+.jpg";
import flower from "./../../media/cakes/5+.jpg";

import sound1Mp3 from './../../media/sounds/mp3/1-sun.mp3';
import sound1Ogg from './../../media/sounds/ogg/1-sun.ogg';
import sound2Mp3 from './../../media/sounds/mp3/2-mountain.mp3';
import sound2Ogg from './../../media/sounds/ogg/2-mountain.ogg';
import sound3Mp3 from './../../media/sounds/mp3/3-forest-shadow.mp3';
import sound3Ogg from './../../media/sounds/ogg/3-forest-shadow.ogg';
import sound4Mp3 from './../../media/sounds/mp3/4-taiga.mp3';
import sound4Ogg from './../../media/sounds/ogg/4-taiga.ogg';
import sound5Mp3 from './../../media/sounds/mp3/5-blossom-garden.mp3';
import sound5Ogg from './../../media/sounds/ogg/5-blossom-garden.ogg';

import styles from "./Cakes.module.css";

function Cakes() {
  const [activeAudio, setActiveAudio] = useState(null);

  const cakesData = [
    {
      image: sun,
      soundMp3: sound1Mp3,
      soundOgg: sound1Ogg,
      type: "Коин",
      heading: "«Солнечное поле»",
      description: [
        "Слоёное тесто, кули из земляники, ванильный крем шантильи.",
        "Сладкий запах нагретой солнцем травы, шум рощи вдалеке и едва слышная свирель — это путешествие даёт вдохнуть полной грудью и вглядеться в горизонт за летним лугом."
      ]
    },
    {
      image: onisan,
      soundMp3: sound2Mp3,
      soundOgg: sound2Ogg,
      type: "Онисан",
      heading: "«Горный склон»",
      description: [
        "Компоте из облепихи и шоколадный ганаш с саган-дайля.",
        "Вкус облепиховой начинки и густой запах саган-дайля переносят на склон горы, освещённый северным солнцем. Добраться сюда непросто, но дело стоит того: это идеальное место для размышлений."
      ]
    },
    {
      image: cube,
      soundMp3: sound3Mp3,
      soundOgg: sound3Ogg,
      type: "Куб",
      heading: "«Лесная тень»",
      description: [
        "Слоёное тесто, заварной крем, фундучное пралине с мёдом.",
        "Ореховая роща, тенистая тропа, хруст тонкой ветки под ногой на пути к опушке. Вокруг можно расслышать жужжание пчёл и щебетание птиц."
      ]
    },
    {
      image: taiga,
      soundMp3: sound4Mp3,
      soundOgg: sound4Ogg,
      type: "Эклер",
      heading: "«Тайга»",
      description: [
        "Крем с исландским мхом, конфи из клюквы и брусники.",
        "Густая начинка из диких ягод и крем на основе исландского мха напоминают о ярких вкусах сдержанной природы тайги."
      ]
    },
    {
      image: flower,
      soundMp3: sound5Mp3,
      soundOgg: sound5Ogg,
      type: "Эклер",
      heading: "«Цветущий сад»",
      description: [
        "Ганаш из белого шоколада с жасмином и кули из розы и малины.",
        "Малиновая начинка, крем из белого шоколада, густой цветочный запах жасмина и розы — портал в сад, полный стрекота насекомых и распускающихся пёстрых бутонов."
      ]
    }
  ];

  // Можно в утилиты
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // плавная прокрутка
    });
  };
  
  return (
    <>
      <div className={styles.main}>
        {/* /samokat-art.ru/samokat-sound-desserts */}
        
        <div className={styles.preloader}>
          <Preloader 
            onFinish={''} 
            intervalSpeed={800}
            loop={true} 
            isBackground={true} 
          />
        </div>
        
        <h1 className={styles.heading}>
          Аудиовкусовые ландшафты
          <span>
            Коллекция десертов <br />
            Самоката и Flowgardenz
          </span>
          
        </h1>
        
        <div className={styles.downArrow}>
          <img src={arrowWhite} alt="Вниз!" />
        </div>

        <div className={styles.intro}>
          <p className={styles.introText}>
          В рамках ярмарки молодого современного искусства blazar мы поддержали проект художников Flowgardenz — инсталляцию из трёх мультимедийных скульптур. Их можно найти на первом этаже Музея Москвы, в нашей лаундж-зоне.
          </p>
          <p className={styles.introText}>
            Эти работы задуманы как коллаж из природных и цифровых материалов. Каждый из них отправит гостей в горы, поле и лес с помощью мультисенсорного опыта и современных технологий. А коллекция арт-десертов, посвящённых разным экосистемам, предложит ещё несколько маршрутов. 
          </p>
          <p className={styles.introText}>
            У каждого из пяти пирожных есть своя история и сертификат подлинности — это тиражные авторские работы. У них есть и свой саунд-дизайн — многослойные композиции на основе звуков полевых ветров, горных рек, птиц и насекомых из разных частей света. 
          </p>
          <p className={styles.introText}>
            Попробовать пирожные можно в нашем кафе на ярмарке. Некоторые из десертов есть в приложении Самоката. 
          </p>
        </div>

        <div className={styles.cakesContainer}>
          <div className={styles.whiteGradient}></div>
          { cakesData.map((cake, index) => (
            <CakeBlock 
              className={styles.cakeContainer}
              key={index}
              image={cake.image}
              soundMp3={cake.soundMp3}
              soundOgg={cake.soundOgg}
              type={cake.type}
              heading={cake.heading}
              description={cake.description}
              activeAudio={activeAudio}
              setActiveAudio={setActiveAudio}
              isFirst={index === 0}
            />
          ))}
        </div>

        <div className={styles.creditsContainer}>
          <div className={styles.creditsSubContainer}>
            <p className={styles.creditsContainerHeading}>
              Над проектом  <br /> работали:
              </p>

              <div className={styles.creditsInnerContainer}>
                <p>
                  Авторы проекта:  <br />
                  Кондитеры: <br />
                  Саунд-дизайн:  <br />
                  <br />
                  Куратор: <br />
                  Фотограф <br /> 
                  Сет-дизайнер:
                </p>
                <p>
                  художники Flowgardenz <br />
                  кафе-пекарня СЛОЙ <br />
                  Георгий Герасичев,  <br />
                  Михаил Гаврилов <br />
                  Юлия Юсма <br />
                  Дарья Фомина  <br />
                  Светлана Жукова<br />
                </p>
              </div>
            </div>
          </div>
         <div className={styles.upArrow} onClick={scrollToTop}>
          <img src={arrowPinkBig} alt="Вверх!" />
         </div>
      </div>
    </>
  )
}
export default Cakes;
import Preloader from "./../../components/preloader/Preloader";

import arrowWhite from './../../media/ui/arrow[white].svg';
import sun from "./../../media/cakes/1.jpg";
import onisan from "./../../media/cakes/1.jpg";
import cube from "./../../media/cakes/1.jpg";
import taiga from "./../../media/cakes/1.jpg";
import flower from "./../../media/cakes/1.jpg";

import styles from "./Cakes.module.css";

function Cakes() {
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
          Аудиовкусовые ландшафты коллекция десертов флоу
        </h1>
        <div className={styles.downArrow}>
          <img src={arrowWhite} alt="Вниз!" />
        </div>
        <div className={styles.intro}>
          <p className={styles.introText}>
          Эти пять пирожных — часть проекта «Сенсорные ландшафты» от художников Flowgardenz, который мы представляем на ярмарке. Инсталляция отправляет зрителей в путешествие по воображаемым экосистемам с помощью мультисенсорного опыта и современных технологий. К запаху, виду и текстурам разных ландшафтов добавляется вкус необычных пирожных, а также авторские музыкальные композиции, собранные из полевых записей звуков природы. 
          </p>
          <p className={styles.introText}>
          Попробовать пирожные можно в нашем кафе на ярмарке. Ещё некоторые из десертов есть в приложении Самоката. 
          </p>
        </div>
        <div className={`${styles.cakesContainer} ${styles.cakes}`}>
          <div className={styles.whiteGradient}></div>
          <div className={styles.cakeContainer}>
            <h3 className={styles.cakeHeading}>Коин <br />«Солнечное поле» </h3>
            <img className={styles.cakeImg} src={sun} alt="" />
            <div className={styles.cakeTextContainer}>
              <p className={styles.cakeText}>
                <span>
                  Слоёное тесто, кули из земляники, ванильный крем шантильи
                </span>
                  Сладкий запах нагретой солнцем травы, шум рощи вдалеке и едва слышная свирель — это путешествие даёт вдохнуть полной грудью и вглядеться в горизонт за летним лугом.              
                </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Cakes;
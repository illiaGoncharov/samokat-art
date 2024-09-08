import Preloader from "./../../components/preloader/Preloader";

import arrowWhite from './../../images/ui/arrow[white].svg';

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
        
      </div>
    </>
  )
}
export default Cakes;
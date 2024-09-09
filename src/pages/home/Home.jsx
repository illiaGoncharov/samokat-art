import { Link } from 'react-router-dom';

import Preloader from "./../../components/preloader/Preloader";

import arrowWhite from './../../media/ui/arrow[white].svg';
import arrowPink from './../../media/ui/arrow[pink].svg';
import calendar from './../../media/ui/calendar.svg';
import map from './../../media/ui/map.svg';
import mapPink from './../../media/ui/map[pink].svg';
import mainSensorLandscape from './../../media/bg/mainSensorLandscape.png';
import flowArtist from './../../media/bg/flowArtist.jpg';

import styles from "./Home.module.css";

function Home() {
  return (
    <>
    <div className={styles.main}>
       <div className={styles.preloader}>
          <Preloader 
            onFinish={''} 
            intervalSpeed={800}
            loop={true} 
            isBackground={true} 
          />
        </div>
        <h1 className={styles.heading}>
          Привет, <br /> это Самокат!
        </h1>
        <div className={styles.downArrow}>
          <img src={arrowWhite} alt="Вниз!" />
        </div>
        <div className={styles.intro}>
          <p className={styles.introText}>
          В этом году мы стали официальным партнером ярмарки молодого современного искусства blazar! На этой странице рассказываем обо всех наших проектах, в рамках события и художников, работы, которых вдохновили нас на коллаборацию и, надеемся, станут для вас увлекательным путешествием к себе, своим ощущениям, новым, необычным и увлекательным опытом. 
          </p>
          <p className={styles.introText}>
          Общей темой нашего присутствия на ярмарке стала фантазия о том, какими будут технологичные сервисы будущего и как наше сознание существует сразу в нескольких мирах – виртуальном и физическом, граница между которыми, в будущем будет почти стерта.
          </p>
        </div>
         <div className={styles.info}>
           <p className={styles.infoHeading}>Время работы ярмарки blazar:</p>
            <div className={styles.infoBlock}>
              <img className={styles.infoBlockImg}src={calendar} alt="" />
              <p className={styles.infoBlockText}>
                12 – 15 сентября, <br /> 
                11:00–21:00
              </p>
            </div>
            <div className={styles.infoBlock}>
              <img className={styles.infoBlockImg}src={map} alt="" />
              <p className={styles.infoBlockTextOther}>
                Музей Москвы <br /> 
                на Зубовском бульваре, 2
              </p>
            </div>
         </div>
         <div className={styles.navigation} id="navigation">
          <h2 className={styles.navigationHeading}>Меню</h2>
          <nav className={styles.navigationBlock}>
            <ul className={styles.navigationList}>
              <li className={styles.navigationListItem}>
                <a href="#sensor-landscape">Сенсорные ландшафты</a>
                <span>Медиаинсталляция</span>
              </li>
              <li className={styles.navigationListItem}>
                <a href="#sensor-landscape">Аудиовкусовые ландшафты</a>
                <span>Коллекция арт-десертов</span>
              </li>
              <li className={styles.navigationListItem}>
                <a href="#sensor-landscape">Аудиовкусовые ландшафты</a>
                <span>Коллекция арт-десертов</span>
              </li>
              <li className={styles.navigationListItem}>
                <a href="#sensor-landscape">Лаборатория #FF335F</a>
                <span>Инсталляция</span>
              </li>
              <li className={styles.navigationListItem}>
                <a href="#sensor-landscape">Самокат кафе</a>
              </li>
              <li className={styles.navigationListItem}>
               <a href="#sensor-landscape"> Искусство исследования</a>
                <span>15 важных тем для обсуждения</span>
              </li>
               <li className={styles.navigationListItem}>
                <a href="#sensor-landscape">Подарок</a>
              </li>
            </ul>
          </nav>
        </div>

        <div id="sensor-landscape" className={`${styles.mainInfoWhite} ${styles.sensorLandscape}`}>
          <div className={styles.whiteGradient}></div>
          <div className={styles.mainInfoContainer}>
            <h3 className={styles.mainInfoWhiteHeading}>Самокат × Flowgardenz</h3>
            <p className={styles.mainInfoWhiteSubheading}>
              Сенсорные ландшафты
              <span>Мультимедийная инсталляция, 2024</span>
            </p>
            <div className={styles.infoBlockOther}>
              <img className={styles.infoBlockImg}src={mapPink} alt="" />
              <p  className={styles.infoBlockText}>
                Музей Москвы <br /> 
                на Зубовском бульваре, 2
              </p>
            </div>
            <img  className={styles.mainInfoImg} src={mainSensorLandscape} alt="Инсталяция" />
            <div className={styles.mainInfoWhiteTextContainer}>
              <p className={styles.mainInfoWhiteText}>
                Совместно с художниками flow мы превратили лаунж зону на первом этаже ярмарки в тотальную инсталляцию и приглашаем вас в путешествие по воображаемым ландшафтам — с помощью ощущений. Каждая из трёх мультимедийных скульптур во входной группе Музея Москвы погружает зрителей в отдельную экосистему: поле, лес, горы. 
                <br />
                <br />
                Эти миры существуют как коллажи, собранные из природных и цифровых материалов: физического объекта, авторской музыкальной композиции, аромата и набора текстур — живых растений и принтов, которые сгенерировала нейросеть. Многомерные авторские ландшафты — фантазия о будущем, где возможно полноценное переживание реальности в цифровых пространствах
              </p>
            </div>
          </div>
          <div className={styles.flowArtistContainer}>
            <img  className={styles.flowArtist} src={flowArtist} alt="Фото художника" />
            <p className={styles.flowArtistText}>
              flow  – художник и UX/UI дизайнер с бэкграундом вархитектуре, преподаватель MSCA (курс НОВЫЕ МЕДИА).Мария закончила МАрхИ и 3 года работала архитектором в бюро Проект Меганом, а также как дизайнер проектировала предметы интерьера длянескольких баров в Москве. После Мария получила степень магистра в Central Saint Martins (2018) в Лондоне
            </p>
            <div className={styles.flowArtistCredits}>
              <p>
                Авторы проекта:  <br />
                Саунд-дизайн:  <br />
                <br />
                Ароматы: <br />
                Куратор:
              </p>
              <p>
                Flowgardenz <br />
                Георгий Герасичев,  <br />
                Михаил Гаврилов <br />
                Иван Якимов <br />
                Юлия Юсма <br />
              </p>
            </div>
          </div>
          <div  className={styles.backToMenuPinkContainer}>
            <a href="#navigation" className={styles.backToMenuPink}>
              Вернуться к меню
            </a>
          </div>
        </div>

        <div id="art-of-research" className={styles.artOfResearch}>
          <h3 className={styles.artOfResearchHeading}>Искусство <br />исследвания</h3>
          <p className={styles.artOfResearchSubheading}>Карточки Самоката <br /> для приятной беседы</p>
          <p className={styles.artOfResearchText}>
            Современные художники часто предлагают зрителю внимательнее приглядеться к себе и тем, кто рядом. Попробуйте, пока пьёте кофе с пирожными — используйте наши карточки с вопросами, которые точно захочется обсудить
          </p>
          <Link to="/samokat-cards" className={styles.artOfResearchButtonContainer}>
            <button className={styles.artOfResearchButton}>
              Перейти к карточкам
              <img src={arrowPink} alt="" />
            </button>
          </Link>
        </div>

        <div id="audio-taste-landscape">
          {/* Контент для Аудиовкусовые ландшафты */}
        </div>

        <div id="lab-ff335f">
          {/* Контент для Лаборатория #FF335F */}
        </div>

        <div id="scooter-cafe">
          {/* Контент для Самокат кафе */}
        </div>


        <div id="gift">
          {/* Контент для Подарок */}
        </div>
    </div>
    </>
  )
}
export default Home;
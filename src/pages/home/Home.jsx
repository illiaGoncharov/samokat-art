import { Link } from 'react-router-dom';

import Preloader from "./../../components/preloader/Preloader";
import Gift from "./../../components/gift/Gift";

import arrowWhite from './../../media/ui/arrow[white].svg';
import arrowPink from './../../media/ui/arrow[pink].svg';
import calendar from './../../media/ui/calendar.svg';
import map from './../../media/ui/map.svg';
import mapPink from './../../media/ui/map[pink].svg';
import mainSensorLandscape from './../../media/bg/mainSensorLandscape.png';
import soundLandscapes from './../../media/bg/soundLandscapes.jpg';
// import mairaOne from './../../media/bg/mairaOne.jpg';
// import mairaTwo from './../../media/bg/mairaTwo.jpg';
import mairaOneGif from './../../media/gifs/MF1.gif'; 
import mairaTwoGif from './../../media/gifs/MF2.gif'; 
import flowArtist from './../../media/bg/flowArtist.jpg';
import mariaArtist from './../../media/bg/mariaArtist.jpg';
import footerBiom from './../../media/forms/4.svg';

import styles from "./Home.module.css";

function Home() {
  return (
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
        Привет! 
      </h1>

      <div className={styles.downArrow}>
        <img src={arrowWhite} alt="Вниз!" />
      </div>

      <div className={styles.intro}>
        <p className={styles.introText}>
          На ярмарке молодого современного искусства blazar мы поддержали несколько художественных проектов и создали кафе, где можно выпить кофе с арт-пирожным и обменяться впечатлениями.
        </p>
        <p className={styles.introText}>       
          Поиск вдохновения в современном мире, возможность заглянуть внутрь себя и симбиоз реальности и цифровых технологий — вот главные темы путешествия, в которое мы предлагаем отправиться в рамках наших проектов на ярмарке. 
        </p>
        <p className={styles.introText}>       
          Команда художников Flowgardenz создала миры, которые существуют на стыке физических объектов, вкусовых ощущений и музыкальных композиций. А в нашем кафе есть дополнение к инсталляции — коллекция десертов, которые мы разработали совместно с художниками. 
        </p>
        <p className={styles.introText}>       
          Мария Федорова в воображаемой лаборатории предлагает зрителям прислушаться к собственным внутренним ощущениям. Чтобы продолжить исследование, мы подготовили карточки с вопросами. Они помогут начать разговор о том, есть ли у искусства какие-либо границы.
        </p>
      </div>

      <div className={styles.info}>
        <p className={styles.infoHeading}>Как работает ярмарка:</p>
        <div className={styles.infoBlock}>
          <img className={styles.infoBlockImg}src={calendar} alt="" />
          <p className={styles.infoBlockText}>
            12–15 сентября,  <br /> 
            с 11:00 по 21:00
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

      <div id="navigation" className={styles.navigation}>
        <h2 className={styles.navigationHeading}>Меню</h2>
        <nav className={styles.navigationBlock}>
          <ul className={styles.navigationList}>
            <li className={styles.navigationListItem}>
              <a href="#sensor-landscape">
                Сенсорные ландшафты
                <span>Медиаинсталляция</span>
              </a>
            </li>
            <li className={styles.navigationListItem}>
              <a href="#scooter-cafe">Самокат кафе</a>
            </li>
            <li className={styles.navigationListItem}>
              <a href="#audio-taste-landscape">
                Аудиовкусовые ландшафты
                <span>Коллекция арт-десертов</span>
              </a>
            </li>
            <li className={styles.navigationListItem}>
              <a href="#art-of-research"> 
                Искусство исследования
                <span>15 важных тем для обсуждения</span>
              </a>
            </li>
            <li className={styles.navigationListItem}>
              <a href="#lab-ff335f">Лаборатория #FF335F
                <span>Инсталляция</span>
              </a>
            </li>
            <li className={styles.navigationListItem}>
              <a href="#gift">Подарок</a>
            </li>
          </ul>
        </nav>
      </div>

      <div id="sensor-landscape" className={`${styles.mainInfoWhite} ${styles.sensorLandscape}`}>
        <div className={styles.whiteGradient}></div>

        <div className={styles.mainInfoContainer}>
          <h3 className={styles.mainInfoWhiteHeading}> Сенсорные ландшафты </h3>
          <p className={styles.mainInfoWhiteSubheading}>
            Мультимедийная инсталляция, 2024
            <span> Совместно с Flowgardenz</span>
          </p>
          <div className={styles.infoBlockOther}>
            <img className={styles.infoBlockImg}src={mapPink} alt="" />
            <p  className={styles.infoBlockText}>
              Лаундж-зона Самоката,<br /> 
              1 этаж Музея Москвы
            </p>
          </div>
          <img  className={styles.mainInfoImg} src={mainSensorLandscape} alt="Инсталяция" />
          <div className={styles.mainInfoWhiteTextContainer}>
            <p className={styles.mainInfoWhiteText}>
              Вместе с художниками Flowgardenz мы превратили лаундж-зону на ярмарке в тотальную инсталляцию, которая приглашает зрителя в путешествие по воображаемым природным ландшафтам. 
              <br />
              <br />
              Эта работа — поиск вдохновения в идее экологичного симбиоза. Фантазия о будущем, где возможно полноценное переживание реальности в гибридных пространствах, сочетающих физические ощущения и цифровую среду. 
              <br />
              <br />
              Каждая из трёх мультимедийных скульптур погружает зрителей в отдельную экосистему: поле, лес или горы. Эти миры существуют как коллажи из природных и цифровых материалов: металлических каркасов и гаджетов, авторских музыкальных композиций, набора запахов и разных текстур в виде живых растений и принтов, сгенерированных нейросетью.
            </p>
          </div>
        </div>

        <div className={styles.flowArtistContainer}>
          <p className={styles.flowArtistSubheadingPink}>
            O художниках:
          </p>
          <img  className={styles.flowArtistImg} src={flowArtist} alt="Фото художника" />
          <p className={styles.flowArtistText}>
            Мультидисциплинарная команда Flowgradenz продвигает альтернативный взгляд на садоводство и искусство, вдохновлённое природой. Художники создают иммерсивные перформансы и инсталляции, размышляя о текучести современной реальности через призму растительной жизни. 
            <br />            
            <br />            
            Победители конкурса Patio Talento Flora 2023, второй приз международного фестиваля Flora Festival 2023
          </p>
          <p className={styles.flowArtistSubheadingBlack}>
            Над инсталляцией <br /> работали:
          </p>
          <div className={styles.flowArtistCredits}>
            <p>
              Авторы проекта:  <br />
              Продюсеры: <br />
              <br />
              Саунд-дизайн:  <br />
              <br />
              Сет-дизайн: <br />
               <br />
               <br />
              Создатель <br /> ароматов:  <br />
              Куратор:
            </p>
            <p>
              Flowgardenz <br />
              Кристина Макарова, <br />
              Татьяна Сиротина<br />
              Георгий Герасичев,  <br />
              Михаил Гаврилов <br />
              Богдан Паук,  <br />
              Алёна Савельева,  <br />
              Евгения Тарасова  <br />
              <br />
              Иван Якимов <br />
              Юлия Юсма <br />
            </p>
          </div>
        </div>
        
        <div  className={styles.backToMenuPinkContainer}>
          <a href="#navigation" className={styles.backToMenuPink}>
            Вернуться в начало
          </a>
        </div>
      </div>

      <div id="scooter-cafe" className={styles.samokatCafe}>
          <h3 className={styles.samokatCafeHeading}>Самокат кафе</h3>
          <div className={styles.infoBlockOther}>
            <img className={styles.infoBlockImg} src={map} alt="" />
            <p  className={styles.infoBlockText}>
              Лаундж-зона Самоката,  <br /> 
              1 этаж Музея Москвы
            </p>
          </div>
          <p className={styles.samokatCafeText}>
            Вы можете посидеть в нашем кафе в любой день ярмарки: перекусить, выпить кофе и попробовать наши десерты.  <br /> 
            <br /> 
            И главное — встретить всех знакомых и обсудить работы или впечатлившие лекции.         
          </p>
          <Link to="/samokat-cafe-menu" className={styles.soundLandscapesButtonContainer}>
            <button className={styles.soundLandscapesButton}>Посмотреть меню
              <img src={arrowPink} alt="" />
            </button>
          </Link>
      </div>

      <div id="audio-taste-landscape" className={styles.soundLandscapes}>
        <h3 className={styles.soundLandscapesHeading}>Аудиовкусовые ландшафты</h3>
        <p className={styles.soundLandscapesSubheading}>
          Коллекция авторских десертов, Flowgardenz
           <span> Совместно с Flowgardenz</span>
        </p>
        
        <div className={styles.infoBlockOther}>
          <img className={styles.infoBlockImg} src={map} alt="" />
          <p  className={styles.infoBlockText}>
            Лаундж-зона Самоката,  <br /> 
            1 этаж Музея Москвы
          </p>
        </div>
        <img className={styles.soundLandscapesImg} src={soundLandscapes} alt="Аудиовкусовые ландшафты" /> 
        <p className={styles.soundLandscapesText}>
          Особый пункт в меню нашего кафе — серия пирожных, которую мы сделали с группой художников Flowgardenz как дополнение к их медиаинсталляции Сенсорные ландшафты. Пять десертов посвящены пяти экосистемам: среди ингредиентов — отсылки к природе разных широт. 
          <br />
          <br />
          Каждое пирожное — это тиражная авторская работа. Поэтому мы выдаём сертификат подлинности при покупке десертов на ярмарке. А ещё у каждого из них есть музыкальная композиция на основе звуков полевых ветров, горных рек, птиц и насекомых из разных частей света.
          <br />
          <br />
          Попробовать пирожные можно не только в кафе на ярмарке — некоторые из них есть в приложении Самоката.    
        </p>
        <Link to="/samokat-sound-desserts" className={styles.soundLandscapesButtonContainer}>
          <button className={styles.soundLandscapesButton}>Послушать музыку
            <img src={arrowPink} alt="" />
          </button>
        </Link>
        <div className={styles.backToMenuWhiteContainer}>
          <a href="#navigation" className={styles.backToMenuWhite}>Вернуться в начало
          </a>
        </div>
      </div>

      <div id="lab-ff335f" className={styles.mariaFedorova}>
        <div className={styles.whiteGradient}></div>

        <div className={styles.mariaFedorovaContainer}>
          <h3 className={styles.mariaFedorovaHeading}>Лаборатория #FF335F</h3>
          <p className={styles.mariaFedorovaSubheading}>
            Мультимедийная инсталляция, 2024
            <span>Совместно с Марией Федоровой</span>
          </p>
          <div className={styles.infoBlockOther}>
            <img className={styles.infoBlockImg}src={mapPink} alt="" />
            <p  className={styles.infoBlockText}>
              Digital-секция ярмарки,<br /> 
              3 этаж Музея Москвы
            </p>
          </div>

          <img  className={styles.mariaFedorovaImg} src={mairaOneGif} alt="Инсталяция" />

          <div className={styles.mariaFedorovaTextContainer}>
            <p className={styles.mariaFedorovaText}>
              Мы поддержали проект художницы Марии Федоровой, которая исследует взаимовлияние природы и технологий и то, как эволюционирует наше восприятие этих сфер. 
              <br />
              <br />
              Лаборатория #FF335F — сервис будущего, который помогает сориентироваться в своих желаниях и вкусах, прислушаться к себе. Проект состоит из пяти станций, каждая из которых отражает одно чувство: осязание, обоняние, слух, зрение и вкус.  Чтобы составить карты своих предпочтений, гостям нужно выбрать ответы из предложенных на станциях. В результате посетители получат AR-сувенир — символ того, что важно именно для них. Этот цифровой талисман можно увидеть через камеру телефона или отправить на почту.
              <br />
              <br />
              Так Мария Федорова затрагивает тему контакта с собой в виртуальном и реальном мирах. Заодно показывает, что они плотно связаны: когда вы создаёте новое в цифровой среде, то по-прежнему опираетесь на собственные ощущения в осязаемой реальности.
            </p>

            <img  className={styles.mariaFedorovaImg} src={mairaTwoGif} alt="Инсталяция" />

          </div>
        </div>

        <div className={styles.mariaArtistContainer}>
          <p className={styles.flowArtistSubheadingPink}>
            O художнице:
          </p>

          <img  className={styles.mariaArtist} src={mariaArtist} alt="Фото художника" />
          
          <p className={styles.mariaArtistText}>
            Мария Федорова — художник и UX/UI-дизайнер, в своей практике она совмещает приёмы искусства взаимодействия, спекулятивного дизайна и архитектуры. Мария исследует, как технологии могут усилить чувство сопричастности между ИИ, людьми и органической природой. Её работы часто сочетают разные медиумы и создают интерактивное пространство для зрителя, размывая границу между виртуальной и физической реальностями. 
            <br />
            <br />
            Работы художницы были представлены на выставках в Европе, Азии, Южной Америке и России. Среди них: Российский павильон на XXII Миланском триеннале и программа Tate Exchange галереи Tate Modern. Мария — номинант Премии Курёхина 2022.
          </p>
          <p className={styles.flowArtistSubheadingBlack}>
            Над инсталляцией <br /> работали:
          </p>
          <div className={styles.mariaArtistCredits}>
            <p>
              Авторы проекта:  <br />
              <br />
              Саунд-дизайн:  <br />
              Создатель ароматов: <br />
              Программная часть и разработка: <br />
              Продюсер: <br />
              Куратор:
            </p>
            <p>
              Мария Федорова <br />
              Алина Фиалка,  <br />
              Иван Якимов <br />
              Илья Гончаров-Серпов <br />
              Татьяна Сиротина <br />
              Юлия Юсма <br />
            </p>
          </div>
        </div>
        
        <div  className={styles.backToMenuPinkContainer}>
          <a href="#navigation" className={styles.backToMenuPink}>
            Вернуться в начало
          </a>
        </div>

        {/* Нелогично, что этот модуль часть Марии */}
        <div id="art-of-research" className={styles.artOfResearch}>
          <h3 className={styles.artOfResearchHeading}>Искусство <br />исследвания</h3>
          <p className={styles.artOfResearchSubheading}>Карточки для разговоров</p>
          <p className={styles.artOfResearchText}>
            Может ли зритель стать соавтором художественной работы, а незнакомый человек на ярмарке — интересным собеседником? Эти вопросы вы можете задать себе или обсудить с другими — с помощью наших карточек. 
          </p>
          <Link to="/samokat-cards" className={styles.artOfResearchButtonContainer}>
            <button className={styles.artOfResearchButton}>
              Посмотреть ближе
              <img src={arrowPink} alt="" />
            </button>
          </Link>
        </div>
      </div>
      
      <div id="gift" className={styles.giftFooter} >
        <h3 className={styles.giftFooterHeading}>Подарок от Самоката!</h3>

        <div className={styles.giftFooterImgContainer}>
          <img src={footerBiom} alt="" className={styles.giftFooterImg} />
        </div>

        <p className={styles.giftFooterText}>
          Чтобы вы продолжили открывать новое после ярмарки, мы приготовили промокод на покупки в нашем приложении. Так попробовать необычный десерт будет проще. 
        </p>

        <Gift />

        <div className={styles.backToMenuWhiteContainer}>
          <a href="#navigation" className={styles.backToMenuWhite}>
            Вернуться в начало
          </a>
        </div>
      </div>

      <div className={styles.creditsFooter}>
        <div class={styles.whiteGradient}></div>

        <p className={styles.creditsFooterText}>
          Мы считаем, что в цифровом мире важно опираться на реальные ощущения и чувства, а также не забывать о связях между людьми. Поэтому хотим поблагодарить каждого из большой команды, которая создала этот проект. 
        </p>

        <p className={styles.creditsFooterListHeading}>
          Художники и креативная команда:
        </p>
        
        <ul className={styles.creditsFooterList}>
          <li className={styles.creditsFooterListItem}>
            Мария Федорова <span>художница </span>
          </li>
          <li className={styles.creditsFooterListItem}>
            Владимир Ваненков, Константин Бушманов <span>художники Flowgardenz</span>
          </li>
          <li className={styles.creditsFooterListItem}>
            Кристина Макарова <span>продюсер</span>
          </li>
          <li className={styles.creditsFooterListItem}>
            Георгий Герасичев, Михаил Гаврилов <span>саунд-дизайнеры инсталляции Сенсорные ландшафты</span>
          </li>
          <li className={styles.creditsFooterListItem}>
            Алина Фиалка <span>саунд-дизайнер инсталляции Лаборатория #FF335F</span>
          </li>
          <li className={styles.creditsFooterListItem}>
            Иван Якимов <span>создатель ароматов</span>
          </li>
          <li className={styles.creditsFooterListItem}>
            Юлия Юсма <span>куратор </span>
          </li>
          <li className={styles.creditsFooterListItem}>
            Татьяна Сиротина <span>продюсер</span>
          </li>
          <li className={styles.creditsFooterListItem}>
            Дарья Долгополова <span>арт-директор и графический дизайнер</span>
          </li>
          <li className={styles.creditsFooterListItem}>
            Фёдор Иванов <span>технический директор</span>
          </li>
          <li className={styles.creditsFooterListItem}>
            Игорь Кудрявцев <span>техническое сопровождение</span>
          </li>
          <li className={styles.creditsFooterListItem}>
            Анастасия Голованова <span>световой дизайнер</span>
          </li>
          <li className={styles.creditsFooterListItem}>
            Илья Гончаров-Серпов <span>программная часть и разработка</span>
          </li>
          <li className={styles.creditsFooterListItem}>
            Михаил Васильев <span>звукорежиссёр</span>
          </li>
          <li className={styles.creditsFooterListItem}>
            Богдан Паук, Алёна Савельева, Евгения Тарасова <span>сет-дизайнеры Flowgardenz</span>
          </li>
          <li className={styles.creditsFooterListItem}>
            Анна Скворцова <span>флорист студии Мак </span>
          </li>
          <li className={styles.creditsFooterListItem}>
            Дарья Ведяшкина <span>ассистент, медиатор</span>
          </li>
        </ul>

        <p className={styles.creditsFooterListHeading}>
          Команда Самоката:
        </p>
        
        <ul className={styles.creditsFooterList}>
          <li className={styles.creditsFooterListItem}>
            Анна Карасёва <span>руководитель направления маркетинговых коммуникаций, руководитель проекта</span>
          </li>
          <li className={styles.creditsFooterListItem}>
            Даниил Зиновик, Александра Яркова, Алёна Сокова <span>старшие креативные продюсеры</span>
          </li>
          <li className={styles.creditsFooterListItem}>
            Анастасия Зятнина <span>продюсер продакшена</span>
          </li>
          <li className={styles.creditsFooterListItem}>
            Варвара Федотова<span>ведущий копирайтер</span>
          </li>
          <li className={styles.creditsFooterListItem}>
            Ксения Яралова<span>старший специалист по публичным коммуникациям</span>
          </li>
          <li className={styles.creditsFooterListItem}>
            Ксения Савчук, Амина Амирова<span>специалисты по связям с общественностью </span>
          </li>
          <li className={styles.creditsFooterListItem}>
            Елена Тагирова<span>руководитель группы по работе с блогерами</span>
          </li>
          <li className={styles.creditsFooterListItem}>
            Наталья Челюскина<span>менеджер по работе с блогерами</span>
          </li>
          <li className={styles.creditsFooterListItem}>
            Юлия Рождественская<span>руководитель отдела по работе с социальными сетями и новыми медиа</span>
          </li>
          <li className={styles.creditsFooterListItem}>
            Полина Исакова<span>ведущий менеджер по работе с социальными сетями и новыми медиа</span>
          </li>
          <li className={styles.creditsFooterListItem}>
            Дмитрий Павлов<span>главный коммуникационный дизайнер</span>

          </li>
          <li className={styles.creditsFooterListItem}>
           Елена Салмина<span>ведущий коммуникационный дизайнер</span>
          </li>
          <li className={styles.creditsFooterListItem}>
            Елена Ковтун, Виталий Морозов, Алексей Панов <span>кафе-пекарня СЛОЙ</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Home;
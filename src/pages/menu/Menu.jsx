import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

import menu from './../../media/pdf/menu.pdf';
import Preloader from "./../../components/preloader/Preloader";

import styles from "./Menu.module.css";

function Menu() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Открытие PDF в новой вкладке
    window.open(`${menu}`, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <>
      <div className={styles.main}>
        {/* /samokat-art.ru/samokat-cafe-menu */}
         <div className={styles.preloader}>
          <Preloader 
            onFinish={''} 
            intervalSpeed={800}
            loop={true} 
            isBackground={true} 
          />
        </div>
        {/* <h1 className={styles.heading}>
          Меню, <br /> это Самокат!
        </h1> */}
        <p className={styles.intro}>
           <p className={styles.introText}>Пожалуйста, проверьте новую вкладку для просмотра меню в PDF.</p>
        </p>
        {/* Кнопка "Назад" */}
        <button 
          className={styles.returnButton}  
          onClick={() => navigate(-1)}    // Возвращаемся на предыдущую 
        >
          Назад
        </button>
      </div>
    </>
  )
}
export default Menu;
import { useState } from 'react';

import ARScene from './../../components/arScene/ARScene';
import Preloader from '../../components/preloader/Preloader';

import style from './Quiz.module.css';

import bg from "./../../media/bg/quiz.jpg";
import crazyBorder from "./../../media/bg/crazyBorder.png";

function Quiz() {
  const [isLoading, setIsLoading] = useState(true); 
  
  const handlePreloaderFinish = () => {
    setIsLoading(false);
  };

  return (
    <>
      <div className={style.quiz}>
        {isLoading ? (
          <Preloader 
              onFinish={handlePreloaderFinish} 
              intervalSpeed={500}
              loop={false} // Прелоадер завершится
              isBackground={false} // Это обычный прелоадер
          />
        ) : (
          <>
            <img src={bg}  className={style.bg} alt="" />
            <img src={crazyBorder} className={style.crazyBorder} alt="" />
            <ARScene />
          </>
        )}
      </div>
    </>
  )
}
export default Quiz;
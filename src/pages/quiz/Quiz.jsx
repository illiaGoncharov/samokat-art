import { useState } from 'react';

import ARScene from './../../components/arScene/ARScene';
import Preloader from '../../components/preloader/Preloader';

import style from './Quiz.module.css';

function Quiz() {
  const [isLoading, setIsLoading] = useState(true); 
  
  // Функция завершения прелоадера
  const handlePreloaderFinish = () => {
    setIsLoading(false);
  };

  return (
    <>
      <div className={style.quiz}>
        {isLoading ? (
          <Preloader onFinish={handlePreloaderFinish} />
        ) : (
          <ARScene />
        )}
      </div>
    </>
  )
}
export default Quiz;
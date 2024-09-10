import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

import arrowWhite from './../../media/ui/arrow[white].svg';
import styles from './InstructionCards.module.css';

// Вынести в data / google forms
const instructions = [
  <>Мы дарим нашим пользователям время и вдохновение на новый опыт, открываем необычные вкусы, рассказываем о трендах. Современные художники часто предлагают зрителю внимательнее приглядеться к себе и тем, кто рядом. Попробуйте, пока пьёте кофе с пирожными — используйте наши карточки с вопросами, которые точно захочется обсудить.</>,
  <>Наши карточки о искусство = практики заботы. произведения искусства которые соединяют людей за одним столом, в одном тексте, в одном поле. тоже образовательная серия карточек – но о том, как художники изобретают формы для людей быть вместе и говорить о то о чем они бы так не поговорили.</>,
  <>1. Чтобы случайным образом выбрать карточку с вопросом нажмите на кнопку внизу страницы. <br/> 
    2. Вопросы надо читать и обсуждать с друзьями. <br/> 
    3. Правильных ответов не существует!"</>,
];

function InstructionCards({ onFinish }) {
  const [currentCard, setCurrentCard] = useState(0); // Индекс текущей инструкции
  const [showIntro, setShowIntro] = useState(true); // Показывать ли приветственное сообщение
  const [fadeClass, setFadeClass] = useState('fadeIn'); 

   // Обработчики свайпов
  const handlers = useSwipeable({
    onSwipedUp: () => {
      if (currentCard < instructions.length - 1) {
        handleNext();
      }
    },
    onSwipedDown: () => {
      if (currentCard < instructions.length - 1) {
        handlePrevious();
      }
    },
  });

  // Отключаем скролл 
  useEffect(() => {
    const disableScroll = () => {
      document.body.style.overflowY = 'hidden'; // Отключаем скролл
    };
    const enableScroll = () => {
      document.body.style.overflowY = ''; // Восстанавливаем скролл
    };
    // Отключаем скролл при монтировании компонента
    disableScroll();
    // Восстанавливаем скролл при размонтировании компонента
    return () => enableScroll();
  }, []);

  useEffect(() => {
    // Устанавливаем анимацию при смене карточки
    setFadeClass('fadeIn');
  }, [currentCard, showIntro]);

  // Переход к следующему шагу
  const handleNext = () => {
    if (showIntro) {
      setFadeClass('fadeOut'); // Сначала анимация исчезновения
      setTimeout(() => {
        setShowIntro(false); 
        setCurrentCard(0); // Переходим к инструкциям
      }, 300); // Задержка для анимации
    } else if (currentCard < instructions.length - 1) {
      setFadeClass('fadeOut');
      setTimeout(() => setCurrentCard(currentCard + 1), 300); // Задержка для плавности
    } else {
      onFinish();
    }
  };

  // Переход к предыдущему шагу
  const handlePrevious = () => {
    if (!showIntro && currentCard > 0) {
      setFadeClass('fadeOut');
      setTimeout(() => setCurrentCard(currentCard - 1), 300);
    }
  };

  // Добавление кликов для десктопа
  const handleClick = (event) => {
    if (window.innerWidth > 768) { // Пример ширины для десктопа
      const { clientX } = event;
      const middle = window.innerWidth / 2;
      if (clientX > middle) {
        handleNext();
      } else {
        handlePrevious();
      }
    }
  };

  return (
    <div {...handlers} className={styles.instructions} onClick={handleClick}>
      {showIntro ? (
        <div className={`${styles.introCard} ${styles[fadeClass]}`}>
          <h1 className={styles.introCardHeading}>Привет, <br /> это Самокат!</h1>
        </div>
      ) : (
        <div className={`${styles.instructionCard} ${styles[fadeClass]}`}>
          <div className={styles.instructionСardHeader}>
            <span className={styles.instructionСardHeaderCount}>{currentCard + 1} / {instructions.length}</span>
            <p className={styles.instructionСardHeaderTitle}>Инструкция</p>
          </div>
          <div className={styles.instructionContent}>
            {instructions[currentCard]}
            {currentCard < instructions.length - 1 && (
              <div className={styles.downArrow}>
                <img src={arrowWhite} alt="Вниз!" />
              </div>
            )}
            {/* Отображаем кнопку "Начать" на последней карточке */}
            {currentCard === instructions.length - 1 && (
              <div className={styles.startButtonContainer}>
                <button onClick={onFinish}>Начать</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default InstructionCards;
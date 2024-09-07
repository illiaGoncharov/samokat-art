import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import arrowWhite from './../../images/ui/arrow[white].svg';
import styles from './InstructionCards.module.css';

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

   // Обработчики свайпов
  const handlers = useSwipeable({
    onSwipedUp: () => handleNext(),
    onSwipedDown: () => handlePrevious(),
  });

  // Переход к следующему шагу
  const handleNext = () => {
    if (showIntro) {
      setShowIntro(false); // Переходим от приветствия к инструкциям
    } else if (currentCard < instructions.length - 1) {
      setCurrentCard(currentCard + 1);
    } else {
      onFinish(); // Завершаем инструкции
    }
  };

  // Переход к предыдущему шагу
  const handlePrevious = () => {
    if (!showIntro && currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };

  // Добавление кликов для десктопа
  const handleClick = (event) => {
    const { clientX } = event; // Получаем координаты клика
    const middle = window.innerWidth / 2; // Находим середину экрана
    if (clientX > middle) {
      handleNext(); // Клик справа -> следующая карточка
    } else {
      handlePrevious(); // Клик слева -> предыдущая карточка
    }
  };

  return (
    <div {...handlers} className={styles.instructions} onClick={handleClick}>
      {showIntro ? (
        <div className={styles.introCard}>
            <h1 className={styles.introCardHeading}>Привет, <br /> это Самокат!</h1>
        </div>
      ) : (
        <div className={styles.instructionCard}>
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
            {/* {currentCard === instructions.length - 1 && (
              <div className={styles.startButtonContainer}>
                <button onClick={onStart}>Начать</button>
              </div>
            )} */}
          </div>
        </div>
      )}
    </div>
  );
}

export default InstructionCards;
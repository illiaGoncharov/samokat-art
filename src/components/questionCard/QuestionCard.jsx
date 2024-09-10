import React, { useState, useEffect } from 'react';
import styles from './QuestionCard.module.css';

function QuestionCard({ question, answers, onNewQuestion, isLastQuestion }) {
  const [currentCard, setCurrentCard] = useState(0);
  const [fadeClass, setFadeClass] = useState('fadeIn'); // Состояние для анимации

  // Отключаем скролл при монтировании и восстанавливаем при размонтировании
  useEffect(() => {
    const disableScroll = () => {
      document.body.style.overflowY = 'hidden'; // Отключаем скролл
    };
    const enableScroll = () => {
      document.body.style.overflowY = ''; // Восстанавливаем скролл
    };

    disableScroll();
    return () => enableScroll();
  }, []);

  // Обновляем анимацию при смене карточки
  useEffect(() => {
    setFadeClass('fadeIn');
  }, [currentCard]);

  const handleClick = (event) => {
    const { clientX } = event;
    const middle = window.innerWidth / 2;

    const direction = clientX > middle ? 1 : -1;
    handleNavigation(direction);
  };

  const handleNavigation = (direction) => {
    setFadeClass('fadeOut');
    setTimeout(() => {
      setCurrentCard((prevCard) => {
        const nextCard = prevCard + direction;
        return Math.max(0, Math.min(nextCard, answers.length));
      });
      setFadeClass('fadeIn');
    }, 300); // Время анимации
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        handleNavigation(1);
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        handleNavigation(-1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={styles.questionCard} onClick={handleClick}>
      {/* Анимация переключения карточек */}
      <div className={`${styles.card} ${styles[fadeClass]}`}>
        {currentCard === 0 && <h2>{question}</h2>}

        {currentCard > 0 && currentCard <= answers.length && <p>{answers[currentCard - 1]}</p>}

        {currentCard === answers.length && (
          <div className={styles.lastCard}>
            <div className={styles.actions}>
              <button className={styles.newQuestionButton} onClick={onNewQuestion}>
                {isLastQuestion ? "Пройтись по новой" : "Другой вопрос"}
              </button>
              <button className={styles.restartButton} onClick={() => window.location.reload()}>
                Вернуться в начало
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionCard;

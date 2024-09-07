import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import styles from './QuestionCard.module.css';

function QuestionCard({ question, answers, onNewQuestion, isLastQuestion }) {
  const [currentCard, setCurrentCard] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  const handlers = useSwipeable({
    onSwipedUp: () => handleSwipe(1),
    onSwipedDown: () => handleSwipe(-1),
    onSwiped: () => setIsSwiping(false),
  });

  const handleSwipe = (direction) => {
    setIsSwiping(true);
    setCurrentCard(prevCard => {
      const nextCard = prevCard + direction;
      return Math.max(0, Math.min(nextCard, answers.length));
    });
  };

  const handleClick = (event) => {
    if (isSwiping) return;
    const { clientX } = event;
    const middle = window.innerWidth / 2;
    handleSwipe(clientX > middle ? 1 : -1);
  };

  // Обработчик клавиш для навигации
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        handleSwipe(1);
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        handleSwipe(-1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div {...handlers} className={styles.questionCard} onClick={handleClick}>
      {currentCard === 0 && (
        <div className={styles.card}>
          <h2>{question}</h2>
        </div>
      )}

      {currentCard > 0 && currentCard <= answers.length && (
        <div className={styles.card}>
          <p>{answers[currentCard - 1]}</p>
        </div>
      )}

      {currentCard === answers.length && (
        <div className={`${styles.card} ${styles.lastCard}`}>
          {/* <p>Это был последний ответ!</p> */}
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

      {/* Навигационные кнопки для десктопа */}
      {/* <div className={styles.desktopControls}>
        <button onClick={() => handleSwipe(-1)} disabled={currentCard === 0}>
          Назад
        </button>
        <button onClick={() => handleSwipe(1)} disabled={currentCard === answers.length}>
          Вперед
        </button>
      </div> */}

      {/* Индикатор прогресса */}
      {/* <div className={styles.progressIndicator}>
        {[...Array(answers.length + 1)].map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentCard ? styles.activeDot : ''}`}
          ></span>
        ))}
      </div> */}
    </div>
  );
}

export default QuestionCard;
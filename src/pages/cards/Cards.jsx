import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Preloader from '../../components/preloader/Preloader';
import InstructionCards from '../../components/instructionCards/InstructionCards';
import QuestionCard from '../../components/questionCard/QuestionCard';

import styles from './Cards.module.css';

import questions from '../../data/questions';

function Cards() {
  const [isPreloading, setIsPreloading] = useState(true);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false); // Убираем showStartButton
  
  const [sessionId, setSessionId] = useState(() => {
    const savedId = localStorage.getItem('sessionId');
    return savedId || uuidv4();
  });

  const [answeredQuestions, setAnsweredQuestions] = useState(() => {
    const saved = localStorage.getItem(`answeredQuestions_${sessionId}`);
    return saved ? JSON.parse(saved) : [];
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    localStorage.setItem('sessionId', sessionId);
    localStorage.setItem(`answeredQuestions_${sessionId}`, JSON.stringify(answeredQuestions));
  }, [sessionId, answeredQuestions]);

  const handlePreloaderFinish = () => {
    setIsPreloading(false);
    setShowInstructions(true); // Показываем инструкции после прелоадера
  };

  // Завершение инструкций: сразу показываем вопрос
  const handleInstructionsFinish = () => {
    setShowInstructions(false); // Скрываем инструкции
    setShowQuestion(true); // Показываем первый вопрос
  };

  // Получение нового вопроса
  const handleNewQuestion = () => {
    setShowQuestion(false);

    const availableQuestions = questions.filter((_, index) => !answeredQuestions.includes(index));

    if (availableQuestions.length === 0) {
      // Все вопросы были заданы, начинаем новую сессию
      const newSessionId = uuidv4();
      setSessionId(newSessionId);
      setAnsweredQuestions([]);
      const newQuestionIndex = Math.floor(Math.random() * questions.length);
      setCurrentQuestionIndex(newQuestionIndex);
      setAnsweredQuestions([newQuestionIndex]);
    } else {
      const randomIndex = Math.floor(Math.random() * availableQuestions.length);
      const newQuestionIndex = questions.indexOf(availableQuestions[randomIndex]);
      setAnsweredQuestions(prev => [...prev, newQuestionIndex]);
      setCurrentQuestionIndex(newQuestionIndex);
    }

    setTimeout(() => setShowQuestion(true), 500);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowRight' && showQuestion) {
        handleNewQuestion();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [showQuestion]);

  const clearCache = () => {
    localStorage.removeItem('sessionId');
    localStorage.removeItem(`answeredQuestions_${sessionId}`);
    setSessionId(uuidv4());
    setAnsweredQuestions([]);
    setCurrentQuestionIndex(null);
    setShowQuestion(false);
  };

  return (
    <div className={styles.cards}>
      {/* Прелоадер */}
      {isPreloading && 
        <Preloader 
          onFinish={handlePreloaderFinish} 
          intervalSpeed={500}
          loop={false}
          isBackground={false}
        />
      }

      {/* Инструкции */}
      {showInstructions && <InstructionCards onFinish={handleInstructionsFinish} />}

      {/* Вопросы */}
      {showQuestion && currentQuestionIndex !== null && (
        <QuestionCard
          question={questions[currentQuestionIndex].question}
          answers={questions[currentQuestionIndex].answers}
          onNewQuestion={handleNewQuestion}
          isLastQuestion={answeredQuestions.length === questions.length}
        />
      )}

      {/* Очистка кэша для разработки */}
      {process.env.NODE_ENV === 'development' && (
        <button onClick={clearCache} style={{ position: 'fixed', bottom: 10, right: 10 }}>
          Очистить кэш
        </button>
      )}
    </div>
  );
}

export default Cards;

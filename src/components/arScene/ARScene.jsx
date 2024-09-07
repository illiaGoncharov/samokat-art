import React, { useState } from 'react';

import '@google/model-viewer';

import styles from './ARScene.module.css';

import ar1And from './../../images/ar-models/AR1.glb';
import ar1IOs from './../../images/ar-models/AR1.usdz';
import ar2And from './../../images/ar-models/AR2.glb';
import ar2IOs from './../../images/ar-models/AR2.usdz';
import ar3And from './../../images/ar-models/AR3.glb';
import ar3IOs from './../../images/ar-models/AR3.usdz';
import ar4And from './../../images/ar-models/AR3.glb';
import ar4IOs from './../../images/ar-models/AR3.usdz';

const ARScene = () => {
  const [answers, setAnswers] = useState({ q1: 0, q2: 0, q3: 0, q4: 0}); // Инициализация ответов по умолчанию (не выбраны)
  const [showAR, setShowAR] = useState(false); // Управляет отображением AR сцены
  const [arModel, setArModel] = useState({ android: ar4And, ios: ar4IOs }); // Модель по умолчанию

  // Функция для обновления ответа и вычисления AR модели
  const handleAnswerChange = (question, answer) => {
    const updatedAnswers = { ...answers, [question]: answer };
    setAnswers(updatedAnswers);
  };

  // Логика для вычисления AR модели на основе ответов
  const calculateARModel = () => {
    const { q1, q2, q3, q4 } = answers;
    let selectedModel = { android: ar1And, ios: ar1IOs }; // Модель по умолчанию

    // Логика для выбора модели
    const combination = `${q1}${q2}${q3}${q4}`;

    switch (combination) {
      case '1111':
        selectedModel = { android: ar1And, ios: ar1IOs };
        break;
      case '2222':
        selectedModel = { android: ar2And, ios: ar2IOs };
        break;
      case '3333':
        selectedModel = { android: ar3And, ios: ar3IOs };
        break;
      default:
        selectedModel = { android: ar4And, ios: ar4IOs };
    }

    setArModel(selectedModel);
    setShowAR(true); // Отображение AR сцены после расчета
  };

  // Проверка, выбраны ли все ответы (включает q4)
  const allQuestionsAnswered = Object.values(answers).every(answer => answer !== 0);


  return (
    <div>
      <div className={styles.quizContainer}>
        <h2>Станция 1</h2>
        <div className={styles.question}>
          <label>
            <input type="radio" name="q1" value={1} checked={answers.q1 === 1} onChange={() => handleAnswerChange('q1', 1)} placeholder='1' />
          </label>
          <label>
            <input type="radio" name="q1" value={2} checked={answers.q1 === 2} onChange={() => handleAnswerChange('q1', 2)} />
            2
          </label>
          <label>
            <input type="radio" name="q1" value={3} checked={answers.q1 === 3} onChange={() => handleAnswerChange('q1', 3)} />
            3
          </label>
        </div>

        <h2>Станция 2</h2>
        <div className={styles.question}>
          <label>
            <input type="radio" name="q2" value={1} checked={answers.q2 === 1} onChange={() => handleAnswerChange('q2', 1)} />
            1
          </label>
          <label>
            <input type="radio" name="q2" value={2} checked={answers.q2 === 2} onChange={() => handleAnswerChange('q2', 2)} />
            2
          </label>
          <label>
            <input type="radio" name="q2" value={3} checked={answers.q2 === 3} onChange={() => handleAnswerChange('q2', 3)} />
            3
          </label>
        </div>

        <h2>Станция 3</h2>
        <div className={styles.question}>
          <label>
            <input type="radio" name="q3" value={1} checked={answers.q3 === 1} onChange={() => handleAnswerChange('q3', 1)} />
            1
          </label>
          <label>
            <input type="radio" name="q3" value={2} checked={answers.q3 === 2} onChange={() => handleAnswerChange('q3', 2)} />
            2
          </label>
          <label>
            <input type="radio" name="q3" value={3} checked={answers.q3 === 3} onChange={() => handleAnswerChange('q3', 3)} />
            3
          </label>
        </div>

        <h2>Станция 4</h2>
        <div className={styles.question}>
          <label>
            <input type="radio" name="q4" value={1} checked={answers.q4 === 1} onChange={() => handleAnswerChange('q4', 1)} />
            1
          </label>
          <label>
            <input type="radio" name="q4" value={2} checked={answers.q4 === 2} onChange={() => handleAnswerChange('q4', 2)} />
            2
          </label>
          <label>
            <input type="radio" name="q4" value={3} checked={answers.q4 === 3} onChange={() => handleAnswerChange('q4', 3)} />
            3
          </label>
        </div>

        {/* Кнопка "Рассчитать", которая активируется, когда все вопросы будут отвечены */}
        <button
          className={styles.calculateButton}
          onClick={calculateARModel}
          disabled={!allQuestionsAnswered} // Отключена, если не все ответы даны
        >
          Рассчитать
        </button>
      </div>

      {/* Плавное появление AR сцены после расчета */}
      {showAR && (
        <div className={styles.ARScene} style={{ opacity: showAR ? 1 : 0, transition: 'opacity 1s' }}>
          <model-viewer
            className={styles.modelImg}
            src={arModel.android} // Динамическая подгрузка модели на Android
            ios-src={arModel.ios} // Динамическая подгрузка модели на iOS
            alt="A 3D model"
            ar
            ar-modes="scene-viewer quick-look webxr"
            camera-controls
            touch-action="pan-y"
            max-camera-orbit="auto auto auto"
            style={{ width: '80%', height: '80%', margin: '0 auto', paddingTop: '10%' }}
          >
            <button slot="ar-button" className={styles.arButton}>
              👋 Activate AR
            </button>
          </model-viewer>
        </div>
      )}
    </div>
  );
};

export default ARScene;

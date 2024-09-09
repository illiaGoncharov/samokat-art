import { useState, useEffect } from 'react';
import '@google/model-viewer';

import styles from './ARScene.module.css';

// DRY
// import ar1And from './../../media/ar-models/AR1.glb';
// import ar1IOs from './../../media/ar-models/AR1.usdz';
// import ar2And from './../../media/ar-models/AR2.glb';
// import ar2IOs from './../../media/ar-models/AR2.usdz';
// import ar3And from './../../media/ar-models/AR3.glb';
// import ar3IOs from './../../media/ar-models/AR3.usdz';
// import ar4And from './../../media/ar-models/AR3.glb';
// import ar4IOs from './../../media/ar-models/AR3.usdz';

import ARModelSelector from '../../utils/ARModelSelector.js';

const ARScene = () => {
  // console.log(ARModelSelector); 
  const [answers, setAnswers] = useState({ q1: 0, q2: 0, q3: 0, q4: 0 });
  const [showAR, setShowAR] = useState(false);
  const [arModel, setArModel] = useState({ android: '', ios: '' });
  
  useEffect(() => {
    if (arModel.android || arModel.ios) {
      setShowAR(true);
    }
  }, [arModel]);


  const handleAnswerChange = (question, answer) => {
    setAnswers(prev => ({ ...prev, [question]: answer }));
  };

  const calculateARModel = () => {
    const combination = Object.values(answers).join('');
    const selectedModel = ARModelSelector(combination);
    setArModel(selectedModel);
    setShowAR(true);
  };

  const allQuestionsAnswered = Object.values(answers).every(answer => answer !== 0);


  // DRY
  const selectedStyle = {
    backgroundColor: '#FF335F',
    borderColor: '#FF335F',
    color: 'white',
  };

  const RadioButtons = ({ question }) => (
    <div className={styles.buttonsRadioContainer}>
      {[1, 2, 3].map((value) => (
        <label key={value}>
          <input
            type="radio"
            name={question}
            value={value}
            checked={answers[question] === value}
            onChange={() => handleAnswerChange(question, value)}
            style={{ display: 'none' }}
          />
          <span className={styles.buttonsRadio} style={{
            ...(answers[question] === value ? selectedStyle : {}),
          }}>
            {value}
          </span>
        </label>
      ))}
    </div>
  );

  const stations = [
    { title: 'Станция 1', question: 'q1',subtitle: 'АРОМАТЫ', description: 'Какой из трёх запахов больше вам подходит?' },
    { title: 'Станция 2', question: 'q2', subtitle: 'ЗВУКИ', description: 'Какая из трёх композиций вам близка?'},
    { title: 'Станция 3', question: 'q3', subtitle: 'ОЩУЩЕНИЯ', description: 'Какое тактильное ощущение вам больше нравится?' },
    { title: 'Станция 4', question: 'q4', subtitle: 'ЗРЕНИЕ/ВКУС',description: 'Какой вкус вы больше любите? И какой визуальный образ лучше всего к нему подходит?' },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.quizContainer}>

        <h1 className={styles.titleMain}>АНКЕТА</h1>
        
        {stations.map(({ title, subtitle, question, description }) => (
          <div className={styles.questionBlock} key={question}>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            {description && <p className={styles.description}>{description}</p>}
            <RadioButtons question={question} />
          </div>
        ))}

        <button
          className={styles.calculateButton}
          onClick={calculateARModel}
          disabled={!allQuestionsAnswered}
        >
          Рассчитать
        </button>

        <p className={styles.disclaimer}></p>
      </div>

      {showAR && (
        <div className={styles.ARScene} style={{ opacity: showAR ? 1 : 0, transition: 'opacity 1s' }}>
          <model-viewer
            className={styles.model}
            src={arModel.android}
            ios-src={arModel.ios}
            alt="A 3D model"
            ar
            ar-modes="scene-viewer quick-look webxr"
            camera-controls
            touch-action="pan-y"
            max-camera-orbit="auto 90deg auto"
            ar-scale="auto"
            xr-environment
            shadow-intensity="2" 
            auto-rotate 
            disable-pan
            style={{ 
              width: '80%', 
              height: '75vh',
              maxHeight: '600px',
              margin: '0 auto', 
              paddingTop: '10%', 
              backgroundImage: 'radial-gradient(circle, #FF335F 0%, #FFFFFF 100%)',
              borderRadius: '28px',
              border: '2px solid #FF335F'
            }}
            onError={() => alert('К сожалению, AR не поддерживается на этом устройстве или браузере.')}
            onLoad={() => console.log('Model loaded successfully.')}
          >
            <button slot="ar-button" className={styles.arButton}>
              Запустить AR 
            </button>
            {/* <div id="error" class="hide">К сожалению AR не поддерживается этим устройством 🥲</div> */}
          </model-viewer>
        </div>
      )}
    </div>
  );
};

export default ARScene;
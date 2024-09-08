import ar1And from './../images/ar-models/AR1.glb';
import ar1IOs from './../images/ar-models/AR1.usdz';
import ar2And from './../images/ar-models/AR2.glb';
import ar2IOs from './../images/ar-models/AR2.usdz';
import ar3And from './../images/ar-models/AR3.glb';
import ar3IOs from './../images/ar-models/AR3.usdz';
import ar4And from './../images/ar-models/AR4.glb';
import ar4IOs from './../images/ar-models/AR4.usdz';
// import ar5And from './../images/ar-models/AR5.glb';
// import ar5IOs from './../images/ar-models/AR5.usdz';
// import ar6And from './../images/ar-models/AR6.glb';
// import ar6IOs from './../images/ar-models/AR6.usdz';
// import ar7And from './../images/ar-models/AR7.glb';
// import ar7IOs from './../images/ar-models/AR7.usdz';
// import ar8And from './../images/ar-models/AR8.glb';
// import ar8IOs from './../images/ar-models/AR8.usdz';
// import ar9And from './../images/ar-models/AR9.glb';
// import ar9IOs from './../images/ar-models/AR9.usdz';

const ARModelSelector = (combination) => {
  let selectedModel;

  switch (combination) {
    case '1111': 
    case '1121': 
    case '1211': 
    case '2111':
      selectedModel = { android: ar1And, ios: ar1IOs }; 
      break;

    case '2222': 
    case '2232': 
    case '2322': 
    case '3222':
      selectedModel = { android: ar2And, ios: ar2IOs }; 
      break;

    case '3333': 
    case '3313': 
    case '3133': 
    case '1333':
      selectedModel = { android: ar3And, ios: ar3IOs }; 
      break;

    case '1112': 
    case '1122': 
    case '1222': 
    case '2122':
      selectedModel = { android: ar4And, ios: ar4IOs }; 
      break;

    case '2221': 
    case '2211': 
    case '2112': 
    case '1212':
      // selectedModel = { android: ar5And, ios: ar5IOs }; 
      selectedModel = { android: ar4And, ios: ar4IOs }; 
      break;

    case '3331': 
    case '3311': 
    case '3111': 
    case '1331':
      // selectedModel = { android: ar6And, ios: ar6IOs }; 
      selectedModel = { android: ar4And, ios: ar4IOs }; 
      break;

    case '1231': 
    case '2312': 
    case '1322': 
    case '3123':
      // selectedModel = { android: ar7And, ios: ar7IOs }; 
      selectedModel = { android: ar4And, ios: ar4IOs }; 
      break;

    case '2133': 
    case '3212': 
    case '1323': 
    case '3213':
      // selectedModel = { android: ar8And, ios: ar8IOs }; 
      selectedModel = { android: ar4And, ios: ar4IOs }; 
      break;

    default: 
      selectedModel = { android: ar1And, ios: ar1IOs }; 
      break;
  }

  return selectedModel;
};

export default ARModelSelector;

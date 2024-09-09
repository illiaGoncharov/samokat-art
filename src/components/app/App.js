import { Routes, Route } from "react-router-dom";
import AppHeader from '../appHeader/AppHeader';
// import AppFooter from '../AppFooter/AppFooter';
import styles from './App.module.css';
import { Home, Cards, Quiz, Cakes, Menu } from '../../pages/index';

function App() {
  return (
    <div className={styles.app}>
      <ApplicationView />
    </div>
  );
}

const ApplicationView = () => {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/samokat-art" exact element={<Home />} />
        <Route path="/samokat-cards" element={<Cards />} />
        <Route path="/laboratoryff335f" element={<Quiz />} />
        <Route path="/samokat-sound-desserts" element={<Cakes />} />
        <Route path="/samokat-cafe-menu" element={<Menu />} />
      </Routes>
    </>
  )
}


export default App;

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';

import AppHeader from '../appHeader/AppHeader';
// import AppFooter from '../AppFooter/AppFooter';

import styles from './App.module.css';

import { Home, Cards, Quiz, Cakes, Menu } from '../../pages/index';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


function App() {
  return (
    <div className={styles.app}>
      <ScrollToTop />
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/samokat-cards" element={<Cards />} />
        <Route path="/laboratoryff335f" element={<Quiz />} />
        <Route path="/samokat-sound-desserts" element={<Cakes />} />
        <Route path="/samokat-cafe-menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;

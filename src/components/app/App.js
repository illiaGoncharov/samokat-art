import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';

import AppHeader from '../appHeader/AppHeader';
// import AppFooter from '../AppFooter/AppFooter';

import styles from './App.module.css';

import { Home, Cards, Quiz, Cakes, Menu } from '../../pages/index';

const isGitHubPages = window.location.hostname.includes('github.io');

function App() {
  return (
    <div className={styles.app} basename={isGitHubPages ? "/samokat-art" : "/"}>
      <ApplicationView />
    </div>
  );
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const ApplicationView = () => {
  return (
    <>
      <ScrollToTop />
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/samokat-art" element={<Home />} />
        <Route path="/samokat-cards" element={<Cards />} />
        <Route path="/laboratoryff335f" element={<Quiz />} />
        <Route path="/samokat-sound-desserts" element={<Cakes />} />
        <Route path="/samokat-cafe-menu" element={<Menu />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  )
}


export default App;

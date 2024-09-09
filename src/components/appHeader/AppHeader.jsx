import { Link } from 'react-router-dom';
import styles from './AppHeader.module.css';

import logoSamokatBlazarWhite from './../../media/logos/samokat-blazar[white].svg';

function AppHeader() {
  return (
    <>
      <div className={styles.header}>
        <Link to="/samokat-art/">
          <img 
              className={styles.logo} 
              alt="Логотип" 
              src={logoSamokatBlazarWhite} />
        </Link>
        {/* { process.env.NODE_ENV === 'development' && ( */}
          <nav className={styles.navbar}>
            <Link to="/samokat-cards" className={styles.links}>Карточки</Link>
            <Link to="/laboratoryff335f" className={styles.links}>Анкета</Link>
            <Link to="/samokat-sound-desserts" className={styles.links}>Пирожные</Link>
            <Link to="/samokat-cafe-menu" className={styles.links}>Меню</Link>
            {/* <a 
              href="/path-to-your-pdf/file.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.links}
            >Меню</a> */}
          </nav>
        {/* )} */}
      </div>
    </>
  )
}
export default AppHeader;
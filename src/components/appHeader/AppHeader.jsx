import { Link } from 'react-router-dom';
import styles from './AppHeader.module.css';

import logoSamokatBlazarWhite from './../../images/logos/samokat-blazar[white].svg';

function AppHeader() {
  return (
    <>
      <div className={styles.header}>
        <Link to="/">
          <img 
              className={styles.logo} 
              alt="Логотип" 
              src={logoSamokatBlazarWhite} />
        </Link>
        <div className={styles.navbar}>
          <Link to="/samokat-cards" className={styles.links}><div>Карточки</div></Link>
          <Link to="/laboratoryff335f" className={styles.links}><div>Анкета</div></Link>
          <Link to="/samokat-sound-desserts" className={styles.links}><div>Пирожные</div></Link>
          <Link to="/samokat-cafe-menu" className={styles.links}><div>Меню</div></Link>
        </div>
      </div>
    </>
  )
}
export default AppHeader;
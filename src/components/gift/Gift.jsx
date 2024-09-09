import { useState, useEffect } from 'react';
import { Copy } from 'lucide-react';
import styles from './Gift.module.css';

const Gift = () => {
  const [giftCode, setGiftCode] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    // Здесь должна быть логика получения кода из Google Таблицы
    // Для примера используем заглушку
    setGiftCode('SAMOKAT2024');
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(giftCode).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.giftFooter}>
        <div className={styles.giftFooterInputWrapper}>
          <input
            type="text"
            value={giftCode}
            readOnly
            className={styles.giftFooterInput}
          />
          <button onClick={copyToClipboard} className={styles.giftFooterCopyButton}>
            <Copy size={20} />
          </button>
        </div>
        {isCopied && <span className={styles.giftFooterCopiedMessage}>Скопировано!</span>}
        <p className={styles.giftFooterText}>
          Промокод даёт скидку 200 рублей при заказе от 1200 ₽ по 20 сентября. Правила и ограничения. 
        </p>
      </div>
    </footer>
  );
};

export default Gift;
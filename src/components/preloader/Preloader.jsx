import React, { useEffect, useState } from 'react';

import image1 from '../../images/forms/1.svg';
import image2 from '../../images/forms/2.svg';
import image3 from '../../images/forms/3.svg';
import image4 from '../../images/forms/4.svg';

import styles from './Preloader.module.css';

function Preloader({ onFinish }) {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [image1, image2, image3, image4]; 
  const changeInterval = 500; 

  useEffect(() => {
    if (currentImage < images.length - 1) {
      const timer = setTimeout(() => {
        setCurrentImage(currentImage + 1);
      }, changeInterval);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(onFinish, changeInterval); 
      return () => clearTimeout(timer);
    }
  }, [currentImage, images.length, onFinish]);

  return (
    <div className={styles.preloader}>
      <img src={images[currentImage]} alt="Preloader"/>
    </div>
  );
};

export default Preloader;
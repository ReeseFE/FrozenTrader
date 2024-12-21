"use client";

import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './CountUpCard.module.css';

const CountUpCard = ({ endValue, title, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;
      
      if (progress < 1) {
        setCount(Math.floor(endValue * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [endValue, duration]);

  useEffect(() => {
    // 模拟组件加载后显示卡片
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // 延迟100毫秒后显示

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.container} ${styles.noselect}`}>
      <div className={styles.canvas}>
        {[...Array(25)].map((_, i) => (
          <div key={i} className={`${styles.tracker} ${styles[`tr-${i + 1}`]}`}></div>
        ))}
        <div id="card" className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`}>
          <Typography variant="h3" className={styles.number}>
            {count}+
          </Typography>
          <Typography variant="h6" className={styles.cardTitle}>
            {title}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default CountUpCard; 
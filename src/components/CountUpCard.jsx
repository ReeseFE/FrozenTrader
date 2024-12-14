"use client";

import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './CountUpCard.module.css';

const CountUpCard = ({ endValue, title, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  
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

  return (
    // <Box className={styles.card}>
    //   <Typography variant="h3" className={styles.number}>
    //     {count}+
    //   </Typography>
    //   <Typography variant="h6" className={styles.title}>
    //     {title}
    //   </Typography>
    // </Box>
    <div className={`${styles.container} ${styles.noselect}`}>
      <div className={styles.canvas}>
        {/* 创建25个追踪器 div */}
        {[...Array(25)].map((_, i) => (
          <div key={i} className={`${styles.tracker} ${styles[`tr-${i + 1}`]}`}></div>
        ))}
        <div id="card" className={styles.card}>
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
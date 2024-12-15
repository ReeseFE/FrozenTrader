"use client";
import styles from './ScrollIndicator.module.css';

const ScrollIndicator = ({ totalSections, currentSection }) => {
  return (
    <div className={styles.indicators}>
      <div 
        className={styles.progressBar} 
        style={{ height: `${(currentSection + 1) * (100 / totalSections)}%` }}
      />
    </div>
  );
};

export default ScrollIndicator;
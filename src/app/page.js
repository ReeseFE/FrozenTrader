'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import CountUpCard from '@/components/CountUpCard';

export default function Home() {
  // 平滑滚动到下一部分
  const scrollToNextSection = () => {
    const sections = document.querySelectorAll('section');
    const currentIndex = Array.from(sections).findIndex(section => 
      section.getBoundingClientRect().top >= 0
    );
    const nextSection = sections[currentIndex + 1];
    
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.section} id="section-0">
        <main className={styles.main}>
          <p className={styles.title}>
            A privacy-focused, easy-to-use quantitative research platform
          </p>
          <p className={styles.desc}>
            Trade any equity assets in one platform. Event-driven backtests on any
            historical data. Live trading with no code changes.
          </p>
          
          <div className={styles.statsGrid}>
            <CountUpCard endValue={1000} title="Active Users" />
            <CountUpCard endValue={500} title="Daily Trades" />
            <CountUpCard endValue={50} title="Trading Strategies" />
          </div>

          <Link href='/playground'>
            <button className={styles.cssbuttons}>
              <span>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z" fill="currentColor"></path>
                </svg>
                Get Started
              </span>
            </button>
          </Link>
        </main>
      </section>

      <section className={styles.section} id="section-1">
        {/* Features section content */}
        <main className={styles.main}>
          <p className={styles.title}>
            A privacy-focused, easy-to-use quantitative research platform
          </p>
        </main>
      </section>

      <section className={styles.section} id="section-2">
        {/* Pricing section content */}
        <main className={styles.main}>
          <p className={styles.title}>
            A privacy-focused, easy-to-use quantitative research platform
          </p>
        </main>
      </section>
    </div>
  );
}

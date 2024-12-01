import Image from 'next/image';
import styles from './page.module.css';
import Navbar from '@/components/Navbar.jsx';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <p className={styles.title}>
          A privacy-focused, easy-to-use quantitative research platform
        </p>
        <p className={styles.desc}>
          Trade any equity assets in one platform. Event-driven backtests 
          on any historical data. Live trading with no code changes.
        </p>
        <button className={styles.btn}>Get Started</button>
      </main>
    </>
  );
}

import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p className={styles.title}>
          A privacy-focused, easy-to-use quantitative research platform
        </p>
        <p className={styles.desc}>
          Trade any equity assets in one platform. Event-driven backtests on any
          historical data. Live trading with no code changes.
        </p>
        <Link href='/playground'>
          <button className={styles.btn}>Get Started</button>
        </Link>
      </main>
    </div>
  );
}

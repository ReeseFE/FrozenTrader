import Image from 'next/image';
import styles from './page.module.css';
import Navbar from '@/components/Navbar.jsx';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Image
          className={styles.logoBg}
          src='/snowBg.png'
          alt='Next.js Logo'
          width={375}
          height={375}
          priority
        />
        <h1>
          A privacy-focused, easy-to-use quantitative research and trading
          platform
        </h1>
        <p>
          Medium to low frequency trading. Event-driven backtests on any
          historical data. Live trading with no code changes.
        </p>
        <button>
          Get Started
        </button>
      </main>
    </>
  );
}

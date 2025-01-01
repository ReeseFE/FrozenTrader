'use client';
import styles from '@/app/page.module.css';
import { TimelineDemo } from '@/constant/timeLine';

export default function Roadmap() {
  return (
    <div className={styles.container}>
      <main>
        {/* <h1>Roadmap</h1> */}
        <TimelineDemo />
      </main>
    </div>
  );
} 
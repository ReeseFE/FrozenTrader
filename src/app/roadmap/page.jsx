'use client';
import styles from '@/app/page.module.css';
import { TimelineDemo } from '@/constant/timeLine';

export default function Roadmap() {
  return (
    <div className={styles.container}>
      <main>
        <TimelineDemo />
      </main>
    </div>
  );
} 
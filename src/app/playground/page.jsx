'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './playground.module.css';
import axios from 'axios';

// 动态引入MonacoEditor组件，并禁用SSR
const MonacoEditor = dynamic(() => import('@/components/MonacoEditor'), {
  ssr: false,
});

// // 假设你有一个图表组件和一个终端组件
// const ChartComponent = dynamic(() => import('@/components/ChartComponent'), {
//   ssr: false,
// });
// const TerminalComponent = dynamic(
//   () => import('@/components/TerminalComponent'),
//   {
//     ssr: false,
//   }
// );

const Playground = () => {
  const [codeText, setCodeText] = useState('');

  const handleBacktestClick = async () => {
    console.log(codeText);

    try {
      const response = await axios.post(
        'http://127.0.0.1:5001/api/strategy/execute',
        {
          strategyCode: codeText,
        }
      );

      console.log('Backtest result:', response.data);
    } catch (error) {
      console.error('Error during backtest:', error);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.editor}>
        <MonacoEditor onChange={(val) => setCodeText(val)} />
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.chart}>
          {/* <ChartComponent /> */}ChartComponent
          <br />
          <button onClick={handleBacktestClick}>Run Backtest</button>
        </div>
        <div className={styles.terminal}>
          {/* <TerminalComponent /> */}TerminalComponent
        </div>
      </div>
    </div>
  );
};

export default Playground;

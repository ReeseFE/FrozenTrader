'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import styles from './playground.module.css';
import mockData from './mock.json';
import LineChart from '@/components/charts/LineChart';

// 动态引入MonacoEditor组件，并禁用SSR
const MonacoEditor = dynamic(() => import('@/components/MonacoEditor'), {
  ssr: false,
});

const Playground = () => {
  const [codeText, setCodeText] = useState('');
  const [result, setResult] = useState(null);

  const handleBacktestClick = async () => {
    console.log(codeText);

    try {
      const response = await axios.post(
        'http://116.205.117.24/api/strategy/execute',
        {
          strategyCode: codeText,
        }
      );

      setResult(response.data);
      console.log('Backtest Result:', response.data);
    } catch (error) {
      setResult(mockData.data);
      console.log('Backtest Result:', mockData.data);
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
          {result ? (
            <LineChart
              xData={result.tradeDates}
              yData1={result.benchmarkReturn}
              yData2={result.strategyReturn}
            />
          ) : (
            <p>Loading chart...</p>
          )}
        </div>
        <div className={styles.terminal}>
          <button onClick={handleBacktestClick}>Run Backtest</button>
          <br />
          {/* <TerminalComponent /> */}TerminalComponent
        </div>
      </div>
    </div>
  );
};

export default Playground;

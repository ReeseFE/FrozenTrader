'use client';
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const LineChart = ({ xData, yData1, yData2 }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const series = [
      {
        name: 'Series 1',
        type: 'line',
        data: yData1,
      },
      {
        name: 'Series 2',
        type: 'line',
        data: yData2,
      },
    ];

    const option = {
      xAxis: {
        type: 'category',
        data: xData,
      },
      yAxis: {
        type: 'value',
        position: 'right',
        axisLabel: {
          formatter: (value) => `${value * 100}%`,
        },
      },
      series,
    };

    console.log('Chart option:', option);
    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, [xData, yData1, yData2]);

  return <div ref={chartRef} style={{ width: '100%', height: '100%' }} />;
};

export default LineChart;

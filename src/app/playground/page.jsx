'use client';
import React from 'react';
import dynamic from 'next/dynamic';

// 动态引入MonacoEditor组件，并禁用SSR
const MonacoEditor = dynamic(() => import('@/components/MonacoEditor'), {
    ssr: false,
});

const Playground = () => {
    return <MonacoEditor />;
};

export default Playground;

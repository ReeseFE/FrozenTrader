import React, { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor';

const MonacoEditor = ({ value, language, onChange }) => {
    const editorRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            editorRef.current = monaco.editor.create(containerRef.current, {
                value,
                language: 'python',
                theme: 'vs-dark',
            });

            editorRef.current.onDidChangeModelContent(() => {
                const newValue = editorRef.current.getValue();
                // onChange(newValue);
            });
        }

        return () => {
            if (editorRef.current) {
                editorRef.current.dispose();
            }
        };
    }, [containerRef]);

    return <div ref={containerRef} style={{ height: '100vh', width: '50%' }} />;
};

export default MonacoEditor;

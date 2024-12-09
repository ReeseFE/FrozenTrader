'use client';
import React, { useState, useLayoutEffect } from 'react';
import { supabase } from '@/utils/supabase/client';
import styles from './login.module.css';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Login = () => {
  // 表单项
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // 表单提交结果提示
  const [error, setError] = useState(null);
  const [isAlert, setIsAlert] = useState(false);
  // 登录卡片翻转
  const [isSigningUp, setIsSigningUp] = useState(false);
  // 控制文字延迟变化，等卡片转到中间再变
  const [flipped, setFlipped] = useState(false);

  useLayoutEffect(() => {
    const labels = document.querySelectorAll(
      `.${styles['form-control']} label`
    );

    labels.forEach((label) => {
      label.innerHTML = label.innerText
        .split('')
        .map(
          (letter, idx) =>
            `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
        )
        .join('');
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (isSigningUp) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        setIsAlert(true);
      } else {
        console.log('Signup successful');
        window.history.back(); // 注册成功后回推到上一页
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        if (error.code === 'invalid_credentials') {
          setError(
            'Invalid login credentials. Please check your email and password.'
          );
        } else {
          setError(error.message);
        }
        setIsAlert(true);
      } else {
        console.log('Login successful');
        window.history.back(); // 登录成功后回推到上一页
      }
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    set(false);
  };

  const handleToggle = () => {
    setIsSigningUp(!isSigningUp);
    setTimeout(() => {
      setFlipped(!flipped);
    }, 300);
  };

  return (
    <div className={styles.background}>
      <div
        className={`${styles.container} ${isSigningUp ? styles.flipped : ''}`}
      >
        <div className={styles.card}>
          {!isSigningUp ? (
            <div className={styles.front}>
              <h1>{flipped ? 'Please Signup' : 'Please Login'}</h1>
              <form onSubmit={handleSubmit}>
                <div className={styles['form-control']}>
                  <input
                    type='text'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label>Email</label>
                </div>

                <div className={styles['form-control']}>
                  <input
                    type='password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label>Password</label>
                </div>

                <button className={styles.btn} type='submit'>
                  Login
                </button>

                <p className={styles.text}>
                  {flipped
                    ? 'Already have an account? '
                    : "Don't have an account? "}
                  <a href='#' onClick={handleToggle}>
                    {flipped ? 'Login' : 'Signup'}
                  </a>
                </p>
              </form>
            </div>
          ) : (
            <div className={styles.back}>
              <h1>{flipped ? 'Please Signup' : 'Please Login'}</h1>
              <form onSubmit={handleSubmit}>
                <div className={styles['form-control']}>
                  <input
                    type='text'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label>Email</label>
                </div>

                <div className={styles['form-control']}>
                  <input
                    type='password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label>Password</label>
                </div>

                <button className={styles.btn} type='submit'>
                  {flipped ? 'Signup' : 'Login'}
                </button>

                <p className={styles.text}>
                  {flipped
                    ? 'Already have an account? '
                    : "Don't have an account? "}
                  <a href='#' onClick={handleToggle}>
                    {flipped ? 'Login' : 'Signup'}
                  </a>
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
      <Snackbar open={isAlert} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
          {error}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default Login;

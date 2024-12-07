'use client';
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import styles from './login.module.css';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const FormInputWave = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
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

    if (isRegistering) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        setOpen(true);
      } else {
        console.log('Registration successful');
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
        setOpen(true);
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
    setOpen(false);
  };

  const handleToggle = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className={styles.background}>
      <div className={`${styles.container} ${isRegistering ? styles.flipped : ''}`}>
        <h1>{isRegistering ? 'Please Register' : 'Please Login'}</h1>
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
            {isRegistering ? 'Register' : 'Login'}
          </button>

          <p className={styles.text}>
            {isRegistering ? (
              <>
                Already have an account?{' '}
                <a href='#' onClick={handleToggle}>
                  Login
                </a>
              </>
            ) : (
              <>
                Don't have an account?{' '}
                <a href='#' onClick={handleToggle}>
                  Register
                </a>
              </>
            )}
          </p>
        </form>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
          {error}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default FormInputWave;

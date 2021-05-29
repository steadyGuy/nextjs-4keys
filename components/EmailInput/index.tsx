import React, { useState } from 'react'
import { UserApi } from '../../api/UserApi';

import styles from './EmailInput.module.scss';
import clsx from 'clsx';

export const EmailInput = ({ className = null, email }) => {
  const [userEmail, setUserEmail] = useState(email);
  const [emailError, setEmailError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, message } = await UserApi().updateEmail(userEmail);
    if (message) {
      setEmailError(message);
    }
    let user = JSON.parse(localStorage.getItem('user'));
    user = { ...user, email };
    localStorage.setItem('user', JSON.stringify(user));
    setUserEmail(email);
  }
  return (
    <>
      <form className={clsx(styles.emailSender, className)} onSubmit={handleSubmit}>
        <label htmlFor="email">Ваша почта</label>
        <input
          onChange={(e) => setUserEmail(e.target.value)}
          type="email"
          id="email"
          placeholder="E-Mail"
          name="email"
          value={userEmail}
        />
        <button type="submit">Ок</button>
        <span className={styles.errorMsg}>{emailError}</span>
      </form>
    </>
  )
}

import clsx from 'clsx';
import React, { useEffect, useState } from 'react'
import { UserApi } from '../../api/UserApi';
import { Button } from '../Button';

import styles from './ProfilePage.module.scss';

// ОБЯЗАТЕЛЬНО РЕАЛИЗОВАТЬ ПРОВЕРКУ EMAIL ЧЕРЕЗ ПОШТУ

export const ProfilePage = ({ user }) => {
  const [userEmail, setUserEmail] = useState(user.email);
  const [emailError, setEmailError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, message } = await UserApi().updateEmail(userEmail);
    if (message) {
      return setEmailError(message);
    }
    setUserEmail(email);
  }

  return (
    <div className="container">
      <div className={styles.profile}>
        <div className={styles.profile__image}
          style={{ background: `url(${user.image})`, backgroundSize: "cover", backgroundPosition: "center center" }}
        />
        <div className={styles.profile__data}>
          <span className={styles.profile__id}>id <span>{user.id}</span></span>
          <span className={styles.profile__name}>{user.username}</span>
          <ul className={styles.profile__list}>
            <li>Покупок <span>{user.orders} шт.</span></li>
            <li>Куплено на суму: <span>{user.wastedBalance} рублей</span></li>
          </ul>
          <form className={styles.profile__emailSender} onSubmit={handleSubmit}>
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
          </form>
          <span className={styles.profile__errorMsg}>{emailError}</span>
        </div>
        <div className={styles.profile__balance}>
          <h3>{user.balance} ₽</h3>
          <Button type="filled" className={styles.button}>Пополнить баланс</Button>
        </div>
      </div>
      <div className={styles.content}>
        {user.orders === 0 ? <h1>У вас ещё нет покупок</h1> : <span>Есть покупки, но нужно их вывести</span>}

      </div>
    </div>
  )
}


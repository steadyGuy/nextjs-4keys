import React from 'react'

import styles from "./Advantages.module.scss";
import clsx from 'clsx';

export const Advantages = () => {

  return (
    <section className={clsx(styles.advantages, "container")}>
      <div className={styles.box}>
        <img src="./static/advantages/boxes.svg" alt="Открыто кейсов" />
        <p>Открыто кейсов: <span>26493</span></p>
      </div>
      <div className={styles.box}>
        <img src="./static/advantages/users.svg" alt="Количество пользователей" />
        <p>Всего пользователей: <span>1022</span></p>
      </div>
      <div className={styles.box}>
        <img src="./static/advantages/usersOnline.svg" alt="Онлайн юзеров" />
        <p>Онлайн пользователей: <span>88</span></p>
      </div>
    </section>
  )
}

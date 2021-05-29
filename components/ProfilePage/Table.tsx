import clsx from 'clsx';
import React from 'react'

import styles from "./Table.module.scss";

export const Table = ({ orders }) => {

  const formatOrderData = (order, type: 'key' | 'account') => {
    if (type === 'key') {
      return order.key;
    }
    return `Login: ${order.account.email}; Pass: ${order.account.password_hash}`;
  }

  return (
    <>
      <h1 className={styles.ordersTitle}>Ваши покупки</h1>
      <div className={clsx(styles.table, styles.table__special)}>
        <div>ID</div>
        <div>Платформа</div>
        <div>Игра</div>
        <div>Данные</div>
        <div>Дата</div>
      </div>
      {orders.map((order, i) => (
        <div className={styles.table} key={Math.random() + i}>
          <p>{order.id}</p>
          <p>{order.platform}</p>
          <p>{order.title}</p>
          <p>{formatOrderData(order, order.key ? 'key' : 'account')}</p>
          <p>{new Date(order.date).toLocaleString()}</p>

        </div>
      ))}
    </>
  );
}

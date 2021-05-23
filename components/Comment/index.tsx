import clsx from 'clsx';
import React from 'react'

import styles from './Comment.module.scss';

export const Comment = ({ className = null }) => {
  return (
    <div className={clsx(className, styles.comment)}>
      <div
        className={styles.comment__itemImage}
        style={{ background: "url(/static/items/example.png)" }}
      />
      <div className={styles.comment__itemData}>
        <p className={styles.comment__text}>Все четко,купил и все работает + акк в онлайне с 50 лимонами и 156 уровнем топ сайт!</p>
        <p className={styles.comment__userAndTime}>Leveeezy<span>,</span> 27.10.2020</p>
      </div>
    </div>
  )
}

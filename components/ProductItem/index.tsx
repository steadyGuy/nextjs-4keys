import React from 'react'
import Link from 'next/link'

import styles from "./ProductItem.module.scss";
import clsx from 'clsx';

function formatDate(date) {
  // let [prefixH, prefixM, prefixS] = ['часов', 'минут', 'секунд'];

  // let endH = new Date().getHours() - new Date(date).getHours();
  // let endM = new Date().getMinutes() - new Date(date).getMinutes();
  // let endS = new Date(date).getSeconds();

  let result = new Date().getTime() - (new Date(date).getTime() + 3 * 3600000);
  if (result < 60000) {
    return 'Только что';
  } else if (result < 600000) {
    return 'Недавно';
  } else if (result < 3600000) {
    return 'Больше 10 минут назад';
  } else {
    return 'Больше часа назад';
  }

  // if (endH === 1 || endH === 21) prefixH = 'час'
  // if ((endH > 1 && endH <= 4) || endH === 22 || endH === 23 || endH === 24) prefixH = 'часа'

  // if (endM === 1) prefixM = 'минута'
  // if (endM > 1 && endM <= 4) prefixM = 'минуты'

  // for (let i = 21; i < 60; i += 10) {
  //   if (endM === i) prefixM = 'минута'
  //   if (endM > i && endM <= i + 3) prefixM = 'минуты'

  //   if (endS === i) prefixS = 'секунда'
  //   if (endS > i && endS <= i + 3) prefixS = 'секунды'
  // }

  return `${endH} ${prefixH} ${endM} ${prefixM} ${endS} ${prefixS}`;
}

export const ProductItem = ({ date, title, photo, className, slug }) => {
  return (
    <Link href={`/product/${slug}`}>
      <div className={clsx(styles.item, className)}>
        <div className={styles.item__image} style={{ background: `url(${photo})`, backgroundSize: "cover" }} />
        <div className={styles.item__text}>
          <h4>{title}</h4>
          <p>{formatDate(date)}</p>
        </div>
      </div>
    </Link>
  )
}

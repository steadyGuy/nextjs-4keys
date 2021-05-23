import React from 'react'
import Link from 'next/link'

import styles from "./ProductItemBig.module.scss";
import clsx from 'clsx';

export const ProductItemBig = ({ className = null, type = "account", title = "5 случайных ключей стим" }) => {
  return (
    <Link href="/">
      <a>
        <div className={clsx(styles.item, className)}>
          <div className={styles.item__image} style={{ background: "url(/static/items/example.png)", backgroundSize: "cover" }}>
            <div className={styles.item__wrapper}>{title}</div>
            <div className={styles.item__topIcon}><img src={`/static/${type}.svg`} alt="Item type" /></div>
            <div className={styles.item__blockFilled}>255₽</div>
          </div>
        </div>
      </a>
    </Link>
  )
}

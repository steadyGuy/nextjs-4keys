import React from 'react'
import Link from 'next/link'

import styles from "./ProductItem.module.scss";
import clsx from 'clsx';

export const ProductItem = ({ className }) => {
  return (
    <Link href="/">
      <div className={clsx(styles.item, className)}>
        <div className={styles.item__image} style={{ background: "url(./static/items/example.png)", backgroundSize: "cover" }} />
        <div className={styles.item__text}>
          <h4>A Way Out</h4>
          <p>6 c. назад</p>
        </div>
      </div>
    </Link>
  )
}

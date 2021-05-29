import React, { FC } from 'react'
import Link from 'next/link'

import styles from "./ProductItemBig.module.scss";
import clsx from 'clsx';

interface ProductItemProps {
  className?: string;
  price: string;
  type: { keys: number, accounts: number };
  title: string;
  slug: string;
  image: string;
}

export const ProductItemBig: FC<ProductItemProps> =
  ({ className, type, title, slug, image, price }) => {
    return (
      <Link href={`/product/${slug}`}>
        <a>
          <div className={clsx(styles.item, className)}>
            <div className={styles.item__image} style={{ background: `url(${image})`, backgroundSize: "cover" }}>
              <div className={styles.item__wrapper}>{title}</div>
              <div className={styles.item__topIconWrapper}>
                {type.keys > 0 && <div className={styles.item__topIcon}>
                  <img src={`/static/key.svg`} alt={`Продукт ${type}`} />
                </div>}
                {type.accounts > 0 && <div className={styles.item__topIcon}>
                  <img src={`/static/account.svg`} alt={`Продукт ${type}`} />
                </div>}
                {/* <div className={styles.item__topIcon}>
                  <img src={`/static/account.svg`} alt={`Продукт ${type}`} />
                </div> */}
              </div>
              <div className={styles.item__blockFilled}>{price}₽</div>
            </div>
          </div>
        </a>
      </Link>
    )
  }

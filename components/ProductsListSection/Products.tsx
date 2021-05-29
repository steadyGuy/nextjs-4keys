import React, { FC, useState } from 'react'
import { Button } from '../Button';
import { ProductItemBig } from '../ProductItemBig';

import styles from './ProductsListSection.module.scss';

interface IProducts {
  productsObj: { products: any[], count: number };
  handleLoadMore: any;
  typeOfGame: string;
}

export const Products: FC<IProducts> = ({ productsObj, handleLoadMore, typeOfGame }) => {

  console.log('productsObj', productsObj)
  console.log('typeOfGametypeOfGame', typeOfGame)
  return (
    <>
      <div className={styles.items}>
        {typeOfGame === 'Все' ? productsObj.products.map((product, idx) => {
          return <ProductItemBig
            key={Math.random() + idx}
            price={product.price}
            title={product.title}
            image={product.photo}
            type={product.type}
            slug={product.slug}
          />
        }) : productsObj.products.filter(item => {
          if (typeOfGame === 'Ключи') {
            return item.type.keys > 0
          } else if (typeOfGame === 'Аккаунты') {
            return item.type.accounts > 0
          }
        }).map((product, idx) => {
          return <ProductItemBig
            key={Math.random() + idx}
            price={product.price}
            title={product.title}
            image={product.photo}
            type={product.type}
            slug={product.slug}
          />
        })}
      </div>
      {/* <Button clickHandler={() => handleLoadMore(productsObj)} className={styles.button}>Загрузить ещё...</Button> */}
    </>
  )
}



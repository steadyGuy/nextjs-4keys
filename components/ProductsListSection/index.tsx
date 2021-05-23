import clsx from 'clsx';
import React, { FC, useState } from 'react'
import { Button } from '../Button';
import { Case } from '../Case';
import { ProductItemBig } from '../ProductItemBig';
import { SectionWrapper } from '../SectionWrapper';

import styles from './ProductsListSection.module.scss';

interface ProductsListSectionProps {
  // title: string;
  // className?: string;
}

export const ProductsListSection: FC<ProductsListSectionProps> = ({ }) => {
  const [platform, setPlatform] = useState('Все');
  const [typeOfGame, setTypeOfGame] = useState('Все');

  const handlePlatform = (plat) => {
    setPlatform(plat);
  }

  const handleTypeOfGame = (type) => {
    setTypeOfGame(type);
  }

  return (
    <div className="container">
      <SectionWrapper title="Другие предложения">
        <div className={styles.tabs}>
          <div className={styles.tabs__platform}>
            <span>Платформа: </span>
            <ul>
              {['Все', 'Steam', 'Origin', 'Uplay'].map((item, i) => (
                <li onClick={() => handlePlatform(item)} key={Math.random() + i} className={clsx(item === platform && styles.active)}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.tabs__general}>
            <ul>
              {['Все', 'Ключи', 'Аккаунты'].map((item, i) => (
                <li onClick={() => handleTypeOfGame(item)} key={Math.random() + i} className={clsx(item === typeOfGame && styles.active)}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.items}>
          <ProductItemBig />
          <ProductItemBig />
          <ProductItemBig />
          <ProductItemBig />
          <ProductItemBig />
          <ProductItemBig />
          <ProductItemBig />
          <ProductItemBig />
          <ProductItemBig />
          <ProductItemBig />
          <ProductItemBig />
          <ProductItemBig />
        </div>
        <Button className={styles.button}>Загрузить ещё...</Button>
      </SectionWrapper>
    </div>
  )
}

import clsx from 'clsx';
import React, { FC, useReducer, useState } from 'react'
import { ProductsApi } from '../../api/ProductsApi';
import { Button } from '../Button';
import { Case } from '../Case';
import { ProductItemBig } from '../ProductItemBig';
import { SectionWrapper } from '../SectionWrapper';
import { Products } from './Products';

import styles from './ProductsListSection.module.scss';

interface ProductsListSectionProps {
  // title: string;
  // className?: string;
  products: any;
}

export const ProductsListSection: FC<ProductsListSectionProps> = ({ products: productsArr = { data: [] } }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {

      case 'LOAD_PRODUCTS_SUCCESS':
        return { ...state, ...action.payload }

      case 'LOAD_PRODUCTS_FETCHING':
        return { ...state, ...action.payload }
      default:
        return state;
    }
  }, {
    ['all']: {
      products: [...productsArr.data],
      count: 12,
      name: 'all',
      loadedAll: false,
    },
    ['steam']: {
      products: [],
      count: 0,
      name: 'steam',
      loadedAll: false,
    },
    ['origin']: {
      products: [],
      count: 4,
      name: 'origin',
      loadedAll: false,
    },
    ['uplay']: {
      products: [],
      count: 0,
      name: 'uplay',
      loadedAll: false,
    },
    loading: false,
  });
  const [platform, setPlatform] = useState('Все');
  const [typeOfGame, setTypeOfGame] = useState('Все');


  const handlePlatform = (plat) => {
    handleLoadMore(productsType(plat));
    setPlatform(plat);
  }

  const handleLoadMore = async (destination) => {
    dispatch({ type: 'LOAD_PRODUCTS_FETCHING', payload: { loading: true } });
    const { data } = await ProductsApi().getProducts(8, destination.count, destination.name);
    let dataSend = {
      [destination.name]: {
        count: destination.count + 8,
        products: data,
        name: destination.name,
        loadedAll: false,
      }
    }
    if (data.length === 0) {
      dataSend[destination.name] = { ...dataSend[destination.name], loadedAll: true }
    }


    switch (destination.name) {
      case 'all':
        dataSend[destination.name].products = [...state[destination.name].products, ...data];
        break;
      case 'steam':
        dataSend[destination.name].products = [...state[destination.name].products, ...data.filter(p => p.platform?.name === 'steam')];
        break;
      case 'uplay':
        dataSend[destination.name].products = [...state[destination.name].products, ...data.filter(p => p.platform?.name === 'uplay')];
        break;
      case 'origin':
        dataSend[destination.name].products = [...state[destination.name].products, ...data.filter(p => p.platform?.name === 'origin')];
        break;
    }

    dispatch({ type: 'LOAD_PRODUCTS_SUCCESS', payload: { ...dataSend, loading: false } });
  }

  const handleTypeOfGame = (type) => {
    setTypeOfGame(type);
  }

  const productsType = (plat = null) => {
    plat = plat ? plat : platform;
    switch (plat) {
      case 'Все':
        return state.all;
      case 'Steam':
        return state.steam;
      case 'Origin':
        return state.origin;
      case 'Uplay':
        return state.uplay;
    }
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
        {
          !state.loading ?
            <>
              <Products
                productsObj={productsType()}
                handleLoadMore={handleLoadMore}
                typeOfGame={typeOfGame}
              />
              <Button
                className={clsx(styles.button, productsType().loadedAll && 'hidden')}
                clickHandler={() => handleLoadMore(productsType())}>
                Загрузить ещё...
          </Button>
            </>
            : <div style={{ display: 'flex', justifyContent: 'center', marginTop: '72px', }}><div className="loader" style={{ width: 100, height: 100, }}></div></div>
        }

      </SectionWrapper>
    </div >
  )
}



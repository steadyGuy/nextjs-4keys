import React from 'react';
import Head from 'next/head';
import { ProductPage } from '../../components/ProductPage';

const DetailProduct = (props) => {
  return (
    <div>
      <Head>
        <title>Привет, мир!</title>
      </Head>
      <ProductPage />
    </div>
  );
};

export default DetailProduct;
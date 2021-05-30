import React from 'react';
import Head from 'next/head';
import { ProductPage } from '../../components/ProductPage';
import { ProductsApi } from '../../api/ProductsApi';

export interface IProduct {
  price: number;
  title: string;
  description: string;
  photo: string;
  platform: 'steam | origin | uplay';
  date: string;
  genres: string[];
  slug: string;
}

const DetailProduct = ({ product, randomProducts, comments }) => {
  return (
    <div>
      <Head>
        <title>{product.data.title}</title>
      </Head>
      <ProductPage comments={comments} product={product} randomProducts={randomProducts} />
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const product = await ProductsApi().getCurrentProduct(ctx.params.slug);
  const randomProducts = await ProductsApi().getRandomProducts(4);

  if (!product || !randomProducts) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  const comments = await ProductsApi().getComments(product.data.id) || [];
  return {
    props: { product, randomProducts, comments }, // will be passed to the page component as props
  }
}


export default DetailProduct;
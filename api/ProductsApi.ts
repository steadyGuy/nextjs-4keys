import nookies from 'nookies';
import axios from "../core/axios";
// import { GetServerSidePropsContext } from "next";

export const ProductsApi = () => {
  return {
    getProducts: async (loadCount: number, offset = 0, platform = 'all'): Promise<any> => {
      try {
        let link = `http://4keys.apeps.pp.ua/public/api/`;
        if (platform === 'all') {
          link += `products/${offset + 1}/${loadCount + offset}`;
        } else {
          link += `${platform}/products/${offset + 1}/${loadCount + offset}`;
        }
        console.log('link', link)
        const { data } = await axios.get(link);
        return data;
      } catch (error) {
        if (error.response) {
          return null;
        } else
          console.log('Error with auth request', error)
      }
    },
    getComments: async (id: number): Promise<any> => {
      try {
        // http://localhost:3000/api
        const { data } = await axios.get(`https://nestjsspecial.herokuapp.com/api/reviews?productId=${id}`);
        return data;
      } catch (error) {
        if (error.response) {
          return [];
        } else
          console.log('Error with auth request', error)
      }
    },
    getCurrentProduct: async (slug): Promise<any> => {
      try {
        const { data } = await axios.get(`http://4keys.apeps.pp.ua/public/api/products/${slug}`);
        return data;
      } catch (error) {
        if (error.response) {
          return null;
        } else
          console.log('Error with auth request', error)
      }
    },

    getRandomProducts: async (count): Promise<any> => {
      try {
        const { data } = await axios.get(`http://4keys.apeps.pp.ua/public/api/random/products/${count}`);
        return data;
      } catch (error) {
        if (error.response) {
          return null;
        } else
          console.log('Error with auth request', error)
      }
    },
  }
};

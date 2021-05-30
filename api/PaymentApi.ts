import nookies, { parseCookies } from 'nookies';
import axios from "../core/axios";
// import { GetServerSidePropsContext } from "next";

export const PaymentApi = () => {
  return {
    execute: async (email: string, productId: number, keyOrAccount): Promise<any> => {
      try {
        const { data } = await axios.post(`/payment?type=${keyOrAccount}`, { email, productId });
        return data;
      } catch (error) {
        if (error.response) {
          return error.response.data;
        } else
          console.log('Error with auth request', error.message);
      }
    },
    popup: async (sum: number): Promise<any> => {
      try {
        const { data } = await axios.post(`/payment/popup-balance`, { sum }, {
          headers: {
            Authorization: 'Bearer ' + parseCookies()?.auth_token,
          },
        });
        return data;
      } catch (error) {
        if (error.response) {
          return error.response.data;
        } else
          console.log('Error with auth request', error.message);
      }
    },
  }
};

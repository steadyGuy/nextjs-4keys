import nookies, { parseCookies } from 'nookies';
import axios from "../core/axios";
// import { GetServerSidePropsContext } from "next";

export const UserApi = () => {
  return {
    getMe: async (ctx): Promise<any> => {
      try {
        const { data } = await axios.get('/auth/me', {
          headers: {
            Authorization: 'Bearer ' + nookies.get(ctx)?.auth_token,
          },
        });
        return data;
      } catch (error) {
        if (error.response) {
          return null;
        } else
          console.log('Error with auth request', error)
      }
    },
    register: async (user: any): Promise<any> => {
      try {
        const { data } = await axios.post('/auth/register', user);
        return data;
      } catch (error) {
        if (error.response) {
          return error.response.data;
        } else
          console.log('Error with auth request', error.message);
      }
    },
    comment: async (productId: number, description: string): Promise<any> => {
      try {
        const { data } = await axios.post('/reviews/create', { productId, description }, {
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
    updateEmail: async (email: string): Promise<any> => {
      try {
        const { data } = await axios.post('/auth/update-email', { email }, {
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
    getBalance: async (): Promise<any> => {
      try {
        const { data } = await axios.get('/auth/balance');
        return data;
      } catch (error) {
        if (error.response) {
          return null;
        } else
          console.log('Error with auth request', error.message);
      }
    },
    loginJwt: async (user: any): Promise<any> => {
      try {
        const { data } = await axios.post('/auth/login', user);
        return data;
      } catch (error) {
        if (error.response) {
          return error.response.data;
        } else
          console.log('Error with auth request', error.message);
      }
    },
    orders: async (ctx): Promise<any> => {
      try {
        const { data } = await axios.get('/auth/orders', {
          headers: {
            Authorization: 'Bearer ' + nookies.get(ctx)?.auth_token,
          },
        });
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

import axios from "../core/axios";

export const CasesApi = () => {
  return {
    getAll: async (): Promise<any> => {
      try {
        const { data } = await axios.get('/cases');
        return data;
      } catch (error) {
        if (error.response) {
          return null;
        } else
          console.log('Error with auth request', error)
      }
    },
    getCasesOrders: async (): Promise<any> => {
      try {
        const { data } = await axios.get('/cases/ordered');
        return data;
      } catch (error) {
        if (error.response) {
          return null;
        } else
          console.log('Error with auth request', error)
      }
    },
    getAllCasesItems: async (): Promise<any> => {
      try {
        const { data } = await axios.get('/cases/all-items');
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
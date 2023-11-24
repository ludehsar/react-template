import Axios, { AxiosInstance } from 'axios';
import { createContext, useContext, useMemo } from 'react';

const AxiosContext = createContext<AxiosInstance | null>(
  Axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: {
      'Content-Type': 'application/json',
    },
  }),
);

export function AxiosProvider({ children }: React.PropsWithChildren<unknown>) {
  const axios = useMemo(() => {
    const axios = Axios.create({
      baseURL: 'https://fakestoreapi.com',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    axios.interceptors.request.use(async (config) => {
      const token = undefined; // Logic to get token, and assign it to the axios header
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });

    return axios;
  }, []);

  return (
    <AxiosContext.Provider value={axios}>{children}</AxiosContext.Provider>
  );
}

export const useAxios = () => {
  return useContext(AxiosContext);
};

'use client';

import { useQuery } from 'react-query';
import axiosInterceptor from './axiosInterceptor';

const useGetquery = (key: string, url: string) => {
  const fn =  () =>  axiosInterceptor({ url });
  const res =  useQuery(key, fn);
  if(res){
    return res?.data?.data
  }
  else{
    return []
  }
};

export default useGetquery;

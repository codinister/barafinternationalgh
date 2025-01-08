'use client';
import Clientssection from '@/components/home/Clientssection';

import Whatwedosection from '@/components/home/Whatwedosection';
import Whowearesection from '@/components/home/Whowearesection';
import Slider from '@/components/slider/Slider';
import useGetquery from '@/data/server/useGetquery';
import { useEffect, useState } from 'react';
import Ourproducts from '@/components/Ourproducts';


export default function Home() {
  const data = useGetquery('slider', '/slider') || [];
  const [getHeight, setHeight] = useState('100vh');



  useEffect(() => {
    const size = window.innerWidth;
    if (size < 769) {
      setHeight('60vh');
    }
  }, []);

  return (
    <>
      {data.length > 0 ? (
        <Slider data={data} width="100%" height={getHeight} />
      ) : (
        ''
      )}
      <Whowearesection />
      <Whatwedosection />
      <Clientssection />

<Ourproducts num={3} />


    </>
  );
}

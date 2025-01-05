'use client';
import Clientssection from '@/components/home/Clientssection';
import ProductCard from '@/components/Products';
import Whatwedosection from '@/components/home/Whatwedosection';
import Whowearesection from '@/components/home/Whowearesection';
import Slider from '@/components/slider/Slider';
import useGetquery from '@/data/server/useGetquery';
import { useEffect, useState } from 'react';
import Readmore from '@/components/Readmore';

export default function Home() {
  const data = useGetquery('slider', '/slider') || [];
  const [getHeight, setHeight] = useState('100vh');

  const prod = useGetquery('products', '/products') || [];

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
      <section className="products">
        <h2>OUR PRODUCTS</h2>

        <div className="container">
          {prod.length > 0 ? (
            <>
              <ProductCard img={prod[0]?.image} title={prod[0]?.title} />
              <ProductCard img={prod[1]?.image} title={prod[1]?.title} />
              <ProductCard img={prod[2]?.image} title={prod[2]?.title} />
            </>
          ) : (
            ''
          )}
        </div>

        <div>
          <Readmore url="/whoweare">Read more</Readmore>
        </div>
      </section>
    </>
  );
}

'use client';

import useGetquery from '@/data/server/useGetquery';
import Image from 'next/image';
import { useState } from 'react';

const Hero = () => {
  const [getImg, setImg] = useState('');

  const products = useGetquery('products', '/products') || [];

  const ourproducts = products.map((v: any, k: number) => {
    const title = v.title.toUpperCase().split('X');
    const size1 = title[0];
    const size2 = Number.parseInt(title[1]);

    return (
      <div
        key={k}
        className={`bx${k}`}
        onClick={() => setImg(v.image)}
        style={{
          backgroundImage: `url(${v.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h5>{size1 + ' X' + size2}</h5>
      </div>
    );
  });

  return (
    <div className="hero">
      <div
        className="header-image"
        style={{
          backgroundImage: `url(${products[0]?.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-content"></div>
      </div>

      <div className="thumbs">{ourproducts}</div>

      <div
        className="slider"
        style={{
          backgroundImage: `url(${getImg || products[1]?.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="intro-box">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

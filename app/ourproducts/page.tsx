'use client';

import Modal from '@/components/Modal';
import Pageheader from '@/components/Pageheader';
import Productbox from '@/components/ourproducts/Productbox';
import useGetquery from '@/data/server/useGetquery';
import { useState } from 'react';

const Ourproducts = () => {
  const products = useGetquery('products', '/products') || [];

  const [toggle, setToggle] = useState(false)
  const [getTitle, setTitle] = useState('')
  const [getImg, setImg] = useState('')


  const handleClick = ()=>{
    setToggle(false)
  }


  const setProduct = (img: string,title: string) => {

    setImg(img)
    setTitle(title)
    setToggle(true)
  }

  return (
    <>
      <Pageheader title="Our Products" />

      <section className="ourproducts">
        <div className="container">
          {products.map((v: any, k: number) => {
            const tit = v.title.split(' ');
            const one = tit[0];
            const two = tit[2];

            const size = one + 'X' + two;
            return <Productbox fn={setProduct} key={k} img={v.image} title={size} />;
          })}
        </div>
      </section>
      <Modal cls={toggle ? 'show' : 'hide'} fn={handleClick} img={getImg} title={getTitle} />
    </>
  );
};

export default Ourproducts;

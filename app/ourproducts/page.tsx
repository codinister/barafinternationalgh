'use client';

import Pageheader from '@/components/Pageheader';
import Products from '@/components/Ourproducts';

const Ourproducts = () => {




  return (
    <>
      <Pageheader title="Our Products" />


    
        <Products num={5} />


      

    </>
  );
};

export default Ourproducts;

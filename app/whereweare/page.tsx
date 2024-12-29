'use client';

import Bodycontent from '@/components/Bodycontent';
import Pageheader from '@/components/Pageheader';
import useGetquery from '@/data/server/useGetquery';


const Whereweare = () => {

  const products = useGetquery('products', '/products')  || []
  const pages = useGetquery('pages', '/pages') || []

  const whereweare = pages?.filter((v: any)=> v.slug === 'where-we-are')


  return (
    <>
      <Pageheader title="Where we are" />
      <section className="whereweare">
        <div className="container">
     
          <Bodycontent body={whereweare[0]?.body} />
        </div>

        <div className="container">
          <div
            style={{
              backgroundImage: `url(${whereweare[0]?.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default Whereweare;

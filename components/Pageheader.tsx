'use client';

import useGetquery from "@/data/server/useGetquery";



const Pageheader = ({ title }: { title: string }) => {

  const products = useGetquery('products', '/products')  || []
  
  const img1 = products[0]?.image;
  const img2 = products[1]?.image;
  const img3 = products[2]?.image;
  const img4 = products[3]?.image;

  return (
    <div className="pageheader">
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <div
          style={{
            backgroundImage: `url(${img4})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${img3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${img2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Pageheader;

'use client';
import ProductCard from '@/components/Products';
import Readmore from './Readmore';
import useGetquery from '@/data/server/useGetquery';

type OurproductsType = {
  num: number;
};

const Ourproducts = ({ num }: OurproductsType) => {
  const prod: {
    image: string;
    title: string;
  }[] = useGetquery('products', '/products') || [];

  return (
    <section className="products">
      <h2>OUR PRODUCTS</h2>

      <div className="container">
        {prod
          .map((v, k: number) => {
            return <ProductCard key={k} img={v.image} title={v.title} />;
          })
          .slice(0, num)}
      </div>

      {num < 4 ? (
        <div>
          <Readmore url="/ourproducts">Read more</Readmore>
        </div>
      ) : (
        ''
      )}
    </section>
  );
};

export default Ourproducts;

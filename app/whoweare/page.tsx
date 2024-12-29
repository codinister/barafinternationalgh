'use client'



import Bodycontent from '@/components/Bodycontent';
import Pageheader from '@/components/Pageheader';
import { products, whoweare } from '@/data/data';
import useGetquery from '@/data/server/useGetquery';

const Whoweare = () => {

  const products = useGetquery('products', '/products')  || []
  const pages = useGetquery('pages', '/pages') || []

  const whoweare = pages?.filter((v: any)=> v.slug === 'who-we-are')

  const img1 = products[2]?.image;
  const img2 = products[3]?.image;
  const img3 = products[4]?.image;

  return (
    <>
      <Pageheader title="Who we are" />

      <section className="whoweare">
        <div className="container">
          <div>
       
            <Bodycontent body={whoweare[0]?.body} />
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>

            <div>
              <div
                style={{
                  backgroundImage: `url(${img2})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div
                style={{
                  backgroundImage: `url(${img3})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Whoweare;

'use client';

import Pageheader from '@/components/Pageheader';
import useGetquery from '@/data/server/useGetquery';
import { PageType } from '@/types/types';


const Whoweare = () => {
  const products = useGetquery('products', '/products') || [];
  const pages: PageType = useGetquery('pages', '/pages') || [];

  const whoweare: PageType = pages?.filter((v) => v.slug === 'who-we-are');

  const img1 = products[2]?.image;
  const img2 = products[3]?.image;
  const img3 = products[4]?.image;

  const body = whoweare[0]?.excerpt

  return (
    <>
      <Pageheader title="Who we are" />

      <section className="whoweare">
        <div className="container">
          <div>
            { body ? body : '' }
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

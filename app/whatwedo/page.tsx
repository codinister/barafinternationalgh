'use client';

import Pageheader from '@/components/Pageheader';
import useGetquery from '@/data/server/useGetquery';
import { PageType } from '@/types/types';


const Whatwedo = () => {
  const pages: PageType = useGetquery('pages', '/pages') || [];
  const products = useGetquery('products', '/products') || [];

  const whatwedo: PageType = pages?.filter((v) => v.slug === 'what-we-do');

  const img1 = products[2]?.image;
  const img2 = products[4]?.image;
  const body = whatwedo[0]?.excerpt 

  return (
    <>
      <Pageheader title="What we do" />

      <section className="whatwedo">
        <div>
          <div
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div>
              <span>1</span>
              <h6>Advertising Consultancy</h6>
            </div>
            <div>
              <span>2</span>
              <h6>Billboard space rental</h6>
            </div>
            <div>
              <span>3</span>
              <h6>Large format printing</h6>
            </div>
          </div>
        </div>

        <div>
          {body }
        </div>
        <div>
          <div
            style={{
              backgroundImage: `url(${img2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default Whatwedo;

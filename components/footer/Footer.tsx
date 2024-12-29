'use client';

import Contactdetails from '../contact/Contactdetails';
import useGetquery from '@/data/server/useGetquery';

const Footer = () => {
  const products = useGetquery('products', '/products') || [];

  return (
    <footer>
      <div className="container">
        <div>
          <div className="footer-products">
            {products?.map((v: any, k: number) => {
              return (
                <div
                  key={k}
                  style={{
                    backgroundImage: `url(${v.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
              );
            })}
          </div>
        </div>

        <div>
          <h4>Get in touch</h4>
          <Contactdetails />
        </div>
      </div>

      <div className="container">
        All rights reserved &copy; 2024 www.xmingeradvertising.com
      </div>
    </footer>
  );
};

export default Footer;

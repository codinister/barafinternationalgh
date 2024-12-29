'use client';

import { useState } from 'react';
import { products } from '@/data/data';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import useGetquery from '@/data/server/useGetquery';

type NavLinksType = {
  url: string;
  name: string;
} & React.ComponentProps<'a'>;

const Nav = () => {
  const [show, setShow] = useState(false);

  const path = usePathname();

  const settings = useGetquery('settings', '/settings') || [];

  return (
    <nav>
      <div className={`panel-1 container ${show ? 'show' : 'hide'}`}>
        <div>
          <div>
            <Image
              src={settings[0]?.comp_logo}
              width="100"
              height="50"
              alt=""
              className="logo"
            />
          </div>

          <div>
            <ul>
              <li>
                <Link
                  href="/"
                  className={path === '/' ? 'active' : ''}
                  onClick={() => setShow(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/whoweare"
                  className={path === '/whoweare' ? 'active' : ''}
                  onClick={() => setShow(false)}
                >
                  Who we are
                </Link>
              </li>
              <li>
                <Link
                  href="/ourproducts"
                  className={path === '/ourproducts' ? 'active' : ''}
                  onClick={() => setShow(false)}
                >
                  Our products
                </Link>
              </li>
              <li>
                <Link
                  href="/whereweare"
                  className={path === '/whereweare' ? 'active' : ''}
                  onClick={() => setShow(false)}
                >
                  Where we are
                </Link>
              </li>
              <li>
                <Link
                  href="/whatwedo"
                  className={path === '/whatwedo' ? 'active' : ''}
                  onClick={() => setShow(false)}
                >
                  What we do
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={path === '/contact' ? 'active' : ''}
                  onClick={() => setShow(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div>
              <div
                style={{
                  backgroundImage: `url(${products[3]?.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div
                style={{
                  backgroundImage: `url(${products[2]?.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div
                style={{
                  backgroundImage: `url(${products[1]?.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div>
                <h4>Our products</h4>
                <Image src={products[0]?.img} alt="" width="150" height="100" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`panel-2 ${show ? 'show' : 'hide'}`}
        onClick={() => setShow(false)}
      ></div>

      <div className="hamburger">
        <Image
          src="/hamburger.jpg"
          onClick={() => setShow(true)}
          alt="Hamburger"
          width="30"
          height="30"
        />
      </div>
    </nav>
  );
};

export default Nav;

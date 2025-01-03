'use client';

import Pageheader from '@/components/Pageheader';
import useGetquery from '@/data/server/useGetquery';
import { PageType } from '@/types/types';
import Blockcontent from '@sanity/block-content-to-react';

const Whereweare = () => {
  const pages: PageType = useGetquery('pages', '/pages') || [];

  const whereweare: PageType = pages?.filter((v) => v.slug === 'where-we-are');

  const body = whereweare[0]?.body;

  return (
    <>
      <Pageheader title="Where we are" />
      <section className="whereweare">
        <div className="container">
          { body ? <Blockcontent projectid={process.env.NEXT_PUBLIC_KEY} blocks={body} /> : ''}
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

'use client';

import { whoweare } from '@/data/data';
import Readmore from '../Readmore';
import useGetquery from '@/data/server/useGetquery';

const Whowearesection = () => {
  const data = useGetquery('pages', '/pages') || [];
  const who = data?.filter((v: any) => v.slug === 'who-we-are');

  return (
    <div className="whowearesection">
      <div>
        <div>
          <h2>{who[0]?.title}</h2>
          <div>{who[0]?.excerpt}</div>
          <div className="mt-24"></div>
          <Readmore url="/whoweare">Read more</Readmore>
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundImage: `url(${who[0]?.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Whowearesection;

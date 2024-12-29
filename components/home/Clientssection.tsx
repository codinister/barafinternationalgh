'use client'

import useGetquery from '@/data/server/useGetquery';

const Clientssection = () => {

  const clients = useGetquery('client', '/client') || []


  return (
    <div className="clientssection">
      <div className="container">
        <div>
          <div>
            <h4>{clients[0]?.title}</h4>

            <div>{clients[0]?.excerpt}</div>
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundImage: `url(${clients[0]?.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Clientssection;

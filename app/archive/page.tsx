'use client';

import Postcard from '@/components/blog/Postcard';
import Blogsection from '@/components/home/Blogsection';
import useGetquery from '@/data/server/useGetquery';

const Archive = () => {
  const blog = useGetquery('postss', '/post') || [];
  const remove = blog?.slice(0, 4).map((v: {_id: string})=> v._id)

  const arr = blog?.filter((v: any)=> !remove.includes(v._id))


  return (
    <section className="archive">
      <Blogsection />

      <div className="container">
        {arr?.map((v: any, k: number) => {
          return (
            <Postcard
              key={k}
              id={v._id}
              img={v.image}
              date={v._createdAt}
              title={v.title}
              excerpt={v.excerpt}
              url=""
            />
          );
        })}
      </div>
    </section>
  );
};

export default Archive;

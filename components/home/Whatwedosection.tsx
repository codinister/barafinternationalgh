'use client';

import Readmore from '../Readmore';
import useGetquery from '@/data/server/useGetquery';

const Whatwedosection = () => {
  const data = useGetquery('pages', '/pages') || [];
  const what = data?.filter((v: any) => v.slug === 'what-we-do');





  return (
    <div className="whatwedosection">
      <div>
        <div>
          <div>
            <i className="fa fa-th-large"></i>
            <h6>Billboard space</h6>
            <h6>rental</h6>
          </div>
        </div>
        <div>
          <div>
            <i className="fa fa-picture-o"></i>
            <h6>Large format</h6>
            <h6>printing</h6>
          </div>
        </div>
        <div>
          <div>
            <i className="fa fa-industry"></i>

            <h6>Advertising</h6>
            <h6>Consultancy</h6>
          </div>
        </div>
      </div>
      <div>
        <h2>{what[0]?.title}</h2>

        <div>{what[0]?.excerpt}</div>
        <div className="mt-24"></div>

        <Readmore url="/whatwedo">Read more</Readmore>
      </div>
    </div>
  );
};

export default Whatwedosection;

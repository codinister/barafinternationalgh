'use client';

import useGetquery from '@/data/server/useGetquery';

const Footer = () => {
  const sett = useGetquery('settings', '/settings') || [];

  console.log(sett)

  return (

    <footer>


<div>
      <div className="container">

        <div>
          <i className="fa fa-map-marker"></i>
          <p>ADDRESS</p>
          <h5>{sett[0]?.location}</h5>
        </div>
        <div>
        <i className="fa fa-envelope"></i>
          <p>EMAIL</p>
          <h5>{sett[0]?.email}</h5>
        </div>
        <div>
        <i className="fa fa-phone"></i>
          <p>PHONE</p>
          <h5>{sett[0]?.email}</h5>
        </div>
        
      </div>

      
      
       

      <div>
        <a href={sett[0]?.facebook}>
          <i className="fa fa-facebook fa-lg"></i>
        </a>
        <a href={sett[0]?.instagram}>
          <i className="fa fa-instagram fa-lg"></i>
        </a>
        <a href={sett[0]?.youtube}>
          <i className="fa fa-youtube fa-lg"></i>
        </a>
      </div>
      </div>


      <div>
      <div className="container">
        All rights reserved &copy; 2024 www.barafinternationalgh.com
      </div>
      </div>

    </footer>

  );
};

export default Footer;

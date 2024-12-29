'use client';

import Map from '@/components/contact/Map';
import ContactForm from '@/components/contact/ContactForm';
import Pageheader from '@/components/Pageheader';
import useGetquery from '@/data/server/useGetquery';

const Contact = () => {
  const set = useGetquery('settings', '/settings') || [];


  return (
    <>
      <Pageheader title="Contact" />
      <section className="contact">
        <div className="container">
          <div className="contactdetails">
            <div>
              <i className="fa fa-phone"> </i>
              <h4>Phone:</h4>
              <h6>{set[0]?.phone1}</h6>
              <h6>{set[0]?.phone2}</h6>
            </div>
            <div>
              <i className="fa fa-map-marker"> </i>
              <h4>Address:</h4>
              <h6>{set[0]?.comp_address}</h6>
            </div>

            <div>
              <i className="fa fa-envelope"> </i>
              <h4>Email:</h4>
              <h6>{set[0]?.email}</h6>
            </div>
            <div>
              <h4>Connect with us:</h4>
              <h6>Contact us for a quote. Help or to join the team.</h6>
              <div className="socialbox">
                <a href={set[0]?.facebook} target="_blank">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href={set[0]?.instagram} target="_blank">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href={set[0]?.youtube} target="_blank">
                  <i className="fa fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contactformwrapper">
          <ContactForm />
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          <Map
            src={set[0]?.gmap}
            width="100%"
            height="200pz"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;

type Teamdata = {
  data: {
    image: string;
    fullname: string;
    role: string;
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
};

const Teamcard = ({ data }: Teamdata) => {
  const { image, fullname, role, facebook, twitter, instagram, linkedin } = data;

  return (
    <div className="team-card">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <div className="socialbox">

          <div>
            <a href={facebook}>
              <i className="fa fa-facebook"></i>
            </a>
            <a href={facebook}>
              <i className="fa fa-twitter"></i>
            </a>
            <a href={facebook}>
              <i className="fa fa-instagram"></i>
            </a>
            <a href={facebook}>
              <i className="fa fa-linkedin"></i>
            </a>
   
          </div>
     
        </div>



      </div>
      <div>
        <h4>{fullname}</h4>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default Teamcard;

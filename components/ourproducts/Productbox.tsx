'use client'


const Productbox = ({ img, title, fn }: { title: string; img: string; fn: Function }) => {

  return (
    <div
      className="prod-box"
      onClick={()=> fn(img,title)}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        cursor: 'pointer'
      }}
    >
      <div>
        <h4>{title}</h4>
      </div>
    </div>
  );

};

export default Productbox;

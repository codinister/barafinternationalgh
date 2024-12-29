'use client'

type DESC = {
  desc: string;
  fa: string;
  url: string;
};

const Contactbox = ({ fa, desc, url }: DESC) => {
  return (
    <div className="cont-box">
      <div>
        <a href={url}>
          <i className={`fa fa-${fa}`}></i>{' '}
        </a>
      </div>
      <div>{desc}</div>
    </div>
  );
};

export default Contactbox;

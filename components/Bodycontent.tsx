import Blockcontent from '@sanity/block-content-to-react';

const Bodycontent = ({ body }: { body: any }) => {
  return (
    <div className="para">
      <Blockcontent projectid={process.env.NEXT_PUBLIC_KEY} blocks={body} />
    </div>
  );
};

export default Bodycontent;

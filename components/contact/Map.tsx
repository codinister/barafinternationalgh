'use client'


type IframeType = {
  src: string;
  width: string;
  height: string;
  allowfullscreen: string;
  loading: string;
  referrerpolicy: string;
};

const Map = ({
  src,
  width,
  height
}: IframeType) => {
  return (
    <>
      <iframe
        title="mapiframe"
        src={src}
        width={width}
        height={height}
      ></iframe>
    </>
  );
};

export default Map;

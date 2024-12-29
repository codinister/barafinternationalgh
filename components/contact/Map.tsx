'use client'


type IframeType = {
  src: any;
  width: any;
  height: any;
  allowfullscreen: any;
  loading: any;
  referrerpolicy: any;
};

const Map = ({
  src,
  width,
  height,
  allowfullscreen,
  loading,
  referrerpolicy,
}: IframeType) => {
  return (
    <>
      <iframe
        title="mapiframe"
        src={src}
        width={width}
        height={height}
        allowFullScreen={allowfullscreen}
        loading={loading}
        referrerPolicy={referrerpolicy}
      ></iframe>
    </>
  );
};

export default Map;

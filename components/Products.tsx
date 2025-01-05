'use client';

type ProductsType = {
  img: string;
  title: string;
};

const ProductCard = ({ img, title }: ProductsType) => {
  return (
    <div
      className="prod-bx"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    >
      <div>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default ProductCard

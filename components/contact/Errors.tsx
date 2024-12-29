'use client'

const Errors = ({ error }: { error: string | undefined }) => {
  return <span className="errors">{error}</span>;
};

export default Errors;

'use client';

import sanityconfig from '@/data/server/sanity/sanityConfig';
import { NextStudio } from 'next-sanity/studio';

const AdminPage = () => {
  return (
    <div className="container adminpage">
      <NextStudio config={sanityconfig} />
    </div>
  );
};

export default AdminPage;

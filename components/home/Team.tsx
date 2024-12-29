'use client';

import useGetquery from '@/data/server/useGetquery';
import Teamcard from '../Teamcard';

const Team = () => {
  const team = useGetquery('team', '/team') || [];

  const teamdata = team
    ?.map((v: any) => ({
      id: v.id,
      image: v.image,
      fullname: v.fullname,
      role: v.role,
      facebook: v.facebook || '#',
      twitter: v.twitter || '#',
      instagram: v.instagram || '#',
      linkedin: v.linkedin || '#',
    }))
    .sort((a: any, b: any) => {
      if (Number(a.id) > Number(b.id)) return 1;
      else if (Number(a.id) < Number(b.id)) return -1;
      else return 0;
    });

  return (
    <div className="team">
      <h2>Meet Our Experience Team</h2>

      <div className="container">
        {teamdata.map((v: any, k: number) => (
          <Teamcard key={k} data={v} />
        ))}
      </div>
    </div>
  );
};

export default Team;

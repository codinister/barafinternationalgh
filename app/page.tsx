'use client';

import Blogsection from '@/components/home/Blogsection';
import Clientssection from '@/components/home/Clientssection';
import Hero from '@/components/home/Hero';
import Team from '@/components/home/Team';
import Whatwedosection from '@/components/home/Whatwedosection';
import Whowearesection from '@/components/home/Whowearesection';

export default function Home() {
  return (
    <>
      <Hero />
      <Whowearesection />
      <Whatwedosection />
      <Clientssection />
      <Team />
      <Blogsection showbtn={true} />
    </>
  );
}

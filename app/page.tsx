'use client';
import Clientssection from '@/components/home/Clientssection';
import Hero from '@/components/home/Hero';
import Whatwedosection from '@/components/home/Whatwedosection';
import Whowearesection from '@/components/home/Whowearesection';

export default function Home() {
  return (
    <>
      <Hero />
      <Whowearesection />
      <Whatwedosection />
      <Clientssection />
  
    </>
  );
}

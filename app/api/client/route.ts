import client from '@/data/server/sanity/sanityClient';
import { groq } from 'next-sanity';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: NextRequest) {
  try {
    const res = await client.fetch(
      groq`
      *[_type == 'client' && title != null]{
      ..., 
      'image': image.asset->url,
      "excerpt": array::join(string::split((pt::text(body)), "")[0..500], "") + "...",
      }
      `
    );

    return NextResponse.json(res)
  } catch (err) {
    console.log(err);
  }
}

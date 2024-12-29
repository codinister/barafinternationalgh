'use client';

import type { Metadata } from 'next';

import './globals.scss';
import Footer from '@/components/footer/Footer';
import Nav from '@/components/nav/Nav';
import { QueryClient, QueryClientProvider } from 'react-query';

const metadata: Metadata = {
  title: 'Xminger Advertising',
  description: 'Outdoor Advertising company in Ghana',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const provider = new QueryClient();

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={provider}>
          <Nav />
          {children}
          <Footer />
        </QueryClientProvider>

        <div id="modal"></div>
      </body>
    </html>
  );
}

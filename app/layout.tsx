import type { Metadata } from 'next';

import './globals.scss';
import Footer from '@/components/footer/Footer';
import Nav from '@/components/nav/Nav';
import QueryProvider from '@/data/QueryProvider';

export const metadata: Metadata = {
  title: 'Baraf International',
  description: 'Outdoor Advertising company in Ghana',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <Nav />
          {children}
          <Footer />
        </QueryProvider>

        <div id="modal"></div>
      </body>
    </html>
  );
}

'use client';
import { QueryClient, QueryClientProvider } from 'react-query';

const QueryProvider = ({children}: { children: React.ReactNode }) => {
  const provider = new QueryClient();

  return (
    <QueryClientProvider client={provider}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;

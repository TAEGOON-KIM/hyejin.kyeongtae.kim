// pages/_app.tsx
import type { AppProps } from 'next/app';
import RootLayout from '../components/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}

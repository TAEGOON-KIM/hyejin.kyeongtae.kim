// pages/_app.tsx
import type { AppProps } from 'next/app';
import RootLayout from '../components/layout';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RootLayout children={undefined}>
      </RootLayout>
      <Component {...pageProps} />
    </>
  );
}

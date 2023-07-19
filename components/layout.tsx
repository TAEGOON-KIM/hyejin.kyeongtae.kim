// components/layout.tsx
import Head from 'next/head';
import { ReactNode } from 'react';
import '../styles/globals.css';

export const metadata = {
  title: '김경태 ❤️ 김혜진',
  ogTitle: '김경태 ❤️ 김혜진 청첩장',
  description: '김경태 ❤️ 김혜진 5월 4일에 결혼합니다.',
  ogDescription: '5월 4일 1:10PM @ MJ 컨벤션 - 소사역',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:type" content="article"/>
        <meta property="og:title" content={metadata.ogTitle}/>
        <meta property="og:description" content={metadata.ogDescription}/>
        <meta property="og:image" content="https://drive.google.com/uc?id=1qFQb88FxV1o9-WOb1E2gJv34vn20_7K2"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
    </>
  );
}

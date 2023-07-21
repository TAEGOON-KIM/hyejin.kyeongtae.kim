// components/layout.tsx
import Head from 'next/head';
import { ReactNode } from 'react';
import '../styles/globals.css';

// export const metadata = {
//   title: '김경태 ❤️ 김혜진',
//   ogTitle: '김경태 ❤️ 김혜진 청첩장',
//   description: '김경태 ❤️ 김혜진 5월 4일에 결혼합니다.',
//   ogDescription: '5월 4일 1:10PM @ MJ 컨벤션 - 소사역',
// };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>김경태 ❤️ 김혜진</title>
        <meta name="description" content="김경태 ❤️ 김혜진 5월 4일에 결혼합니다."/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <meta property="og:type" content="article"/>
        <meta property="og:title" content="김경태 ❤️ 김혜진 청첩장"/>
        <meta property="og:description" content="5월 4일 1:10PM @ MJ 컨벤션 - 소사역"/>
        <meta property="og:image" content="https://hyejin-kyeongtae-kim-weddingcard.vercel.app/images/cover.jpg"/>
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

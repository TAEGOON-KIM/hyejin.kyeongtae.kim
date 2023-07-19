import Image from 'next/image'
import styles from '../styles/page.module.css'
import Modal from '../components/modal';
import React, { useState } from 'react';

export default function Home() {
    const divStyle: React.CSSProperties = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0,
        borderRadius: '30px', // 라운드 처리
      };

    const divStyle2: React.CSSProperties = {
        display: 'block',
        maxWidth: '100%',
        boxSizing: 'border-box',
    };

    const coverImgStyle: React.CSSProperties = {
        display: 'block',
        maxWidth: '100%',
        padding: 0,
        margin: 0,
        border: 'none',
    };

    const coverPictureStyle: React.CSSProperties = {
        position: 'absolute',
        inset: 0,
        boxSizing: 'border-box',
        padding: 0,
        border: 'none',
        margin: 'auto',
        display: 'block',
        width: 0,
        height: 0,
        minWidth: '100%', // 쉼표(,) 빠진 것 수정
        maxWidth: '100%', // 쉼표(,) 빠진 것 수정
        minHeight: '100%', // 쉼표(,) 빠진 것 수정
        maxHeight: '100%', // 쉼표(,) 빠진 것 수정
        filter: 'none',
        backgroundSize: 'cover', // camelCase 형식으로 수정
        backgroundImage: 'none', // camelCase 형식으로 수정
        backgroundPosition: '0% 0%', // camelCase 형식으로 수정
    };

    const photos = [
        '/photos/p0.jpg',
        '/photos/p1.jpg',
        '/photos/p2.jpg',
        '/photos/p3.jpg',
        '/photos/p4.jpg',
        '/photos/p5.jpg',
        '/photos/p6.jpg',
        '/photos/p7.jpg',
        '/photos/p8.jpg',
        '/photos/p9.jpg',
        '/photos/p10.jpg',
        '/photos/p11.jpg',
        '/photos/p12.jpg',
    ];

    const [showModal, setShowModal] = useState(false);

    const handleImageClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <main className={styles.main}>
            <h1 className={styles.header}>
                김경태<hr />김혜진
            </h1>
            
            <div className={styles.coverPicWrap}>
                <div style={divStyle}>
                    {/* <div style={divStyle2}>
                        <img style={coverImgStyle} alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4MCIgaGVpZ2h0PSIxOTIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=="/>
                    </div> */}

                    <div style={divStyle2}>    
                        {/* 4:3 비율의 SVG 이미지 */}
                        <svg style={coverImgStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 3" width="100%" height="100%">
                            {/* <circle cx="2" cy="1.5" r="1.2" fill="red" /> */}
                        </svg>
                    </div>

                    <Image
                        style={coverPictureStyle}
                        src="/images/cover.jpg"
                        alt=""
                        width={100}
                        height={100}
                        priority
                        objectFit="cover"
                    />
                </div>
            </div>

            <div className={styles.description}>
                <p>
                    2024년 5월 4일 토요일 오후 1시 10분<br/>부천 MJ 컨벤션 5층 그랜드볼룸
                </p>
                <hr className={styles.main}/>
            </div>
            
            <h2>결혼합니다.</h2>

            <p className={styles.comment}>
                따뜻한 5월의 봄날<br/>
                풀꽃 향기 그윽한 봄 햇살 아래서<br/>
                사랑하는 두 사람이 하나의 가정을 이루는 날<br/>
                부디 자리하시어 축복해 주시면<br/>더없는 감사의 자리가 되겠습니다.
            </p>
            <p className={styles.comment}>
                김완태 · 정민화의 차남 경태<br/>김영길 · 최종랑의 장녀 혜진
            </p>

            <hr className={styles.main}/>

            <ul className={styles.photoGrid}>
                {photos.map((photo) => (
                    <li key={photo}>
                        <img src={photo} loading="lazy" alt="Photo" className={styles.image} onClick={handleImageClick} />
                    </li>
                ))}
                
                {/* <li>
                    <img role="button" src="/photos/p0.jpg" loading="lazy" alt=""/>
                </li>
                <li>
                    <img role="button" src="/photos/p1.jpg" loading="lazy" alt=""/>
                </li>
                <li>
                    <img role="button" src="/photos/p2.jpg" loading="lazy" alt=""/>
                </li>
                <li>
                    <img role="button" src="/photos/p3.jpg" loading="lazy" alt=""/>
                </li>
                <li>
                    <img role="button" src="/photos/p4.jpg" loading="lazy" alt=""/>
                </li>
                <li>
                    <img role="button" src="/photos/p5.jpg" loading="lazy" alt=""/>
                </li>
                <li>
                    <img role="button" src="/photos/p6.jpg" loading="lazy" alt=""/>
                </li>
                <li>
                    <img role="button" src="/photos/p7.jpg" loading="lazy" alt=""/>
                </li>
                <li>
                    <img role="button" src="/photos/p8.jpg" loading="lazy" alt=""/>
                </li>
                <li>
                    <img role="button" src="/photos/p9.jpg" loading="lazy" alt=""/>
                </li>
                <li>
                    <img role="button" src="/photos/p10.jpg" loading="lazy" alt=""/>
                </li>
                <li>
                    <img role="button" src="/photos/p11.jpg" loading="lazy" alt=""/>
                </li>
                <li>
                    <img role="button" src="/photos/p12.jpg" loading="lazy" alt=""/>
                </li> */}
            </ul>

            {showModal && <Modal images={photos} onClose={handleCloseModal} />}

            <hr className={styles.main}/>

            <h2>오시는 길</h2>

            <hr className={styles.main}/>

            <h2>마음 전하실 곳</h2>

            <hr className={styles.main}/>

            <h2>축하의 한마디</h2>

        </main>
    )
}

/* index.tsx */
import Image from 'next/image'
import styles from '../styles/page.module.css'
import Modal from '../components/modal';
import React, { useState } from 'react';

export default function Home() {
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

    const [currentImage, setCurrentImage] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [showCoverModal, setShowCoverModal] = useState(false);
    const [showMapModal, setShowMapModal] = useState(false);

    const groomName = "경태";
    const brideName = "혜진";
    const kakaoMapText1 = " 카카오맵";
    const naverMapText1 = " 네이버지도";

    const accountNumberKT = "국민은행 696301-01-408276";
    const accountNumberWT = "씨티은행 324-86345-263";
    const accountNumberMH = "농협 141-02-389140";
    const accountNumberHJ = "카카오뱅크 3333-06-3421738";
    const accountNumberYG = "농협 333055-52-000717";

    /* photoGrid */
    const handleImageClick = (index: number) => {
        setCurrentImage(index);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    /* Cover Image */
    const handleCoverImageClick = () => {
        setShowCoverModal(true);
    };

    const handleCloseCoverModal = () => {
        setShowCoverModal(false);
    };

    /* Map Image */
    const handleMapImageClick = () => {
        setShowMapModal(true);
    };

    const handleCloseMapModal = () => {
        setShowMapModal(false);
    };

    /* Copy button */
    const handleCopy = (accountNumber: string) => {
        navigator.clipboard.writeText(accountNumber);
        alert("계좌번호가 복사 되었습니다. \n" + accountNumber);
    };

    const nameStyle: React.CSSProperties = {
        paddingLeft: '10px',
        fontSize: '20px'
    };

    return (
        <main className={styles.main}>
            <h1 className={styles.header}>
                김경태<hr />김혜진
            </h1>

            <div className={styles.coverPicWrap}>
                <div className={styles.divStyle}>
                    <div className={styles.divStyle2}>
                        <svg className={styles.coverImgStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 3" width="100%" height="100%">
                            {/* <circle cx="2" cy="1.5" r="1.2" fill="red" /> */}
                        </svg>
                    </div>

                    <Image
                        className={styles.coverPictureStyle}
                        src="/images/cover.jpg"
                        alt="cover"
                        width={100}
                        height={100}
                        onClick={handleCoverImageClick}
                    />
                </div>
            </div>

            {showCoverModal && <Modal images={["/images/cover.jpg"]} onClose={handleCloseCoverModal} current={0}/>}

            <div className={styles.description}>
                <p>
                    2024년 5월 4일 토요일 오후 1시 10분<br />MJ 컨벤션 5층 그랜드볼룸
                </p>
            </div>

            <hr className={styles.main} />

            <h2>결혼합니다.</h2>

            <p className={styles.comment}>
                봄의 그대는 벚꽃이었고<br />
                여름의 그대는 바람이었으며<br />
                가을의 그대는 하늘이었고<br />
                겨울의 그대는 하얀 눈이었다<br />
                그대는 언제나 행복, 그 자체였다<br />

                - 강현욱, 사계 中 -<br /><br />

                초록빛 싱그러움이 가득한 5월의 봄날,<br />
                사랑하는 두 사람이 같은 곳을 바라보며<br />
                평생 함께 걷고자 합니다.<br />
                아름답고 행복한 가정 가꾸어 나갈 수 있도록<br />
                부디 자리하시어 축복해 주시면<br />
                더없는 기쁨으로 간직하겠습니다.
            </p>

            <p className={styles.comment}>
                <span>김완태 · 정민화</span> 의 차남 <span style={nameStyle}>{groomName}</span> <br />
                <span>김영길 · 최종랑</span> 의 장녀 <span style={nameStyle}>{brideName}</span>
            </p>

            <hr className={styles.main} />

            <ul className={styles.photoGrid}>
                {photos.map((photo, index) => (
                    <li key={photo}>
                        <img src={photo} loading="lazy" alt="Photo" className={styles.image} onClick={() => handleImageClick(index)} />
                    </li>
                ))}
            </ul>

            {showModal && <Modal images={photos} onClose={handleCloseModal} current={currentImage}/>}

            <hr className={styles.main} />

            <h2>오시는 길</h2>

            <div className={styles.mapPicWrap}>
                <div className={styles.mapDivStyle}>
                    <div className={styles.mapDivStyle2}>
                        <svg className={styles.mapImgStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3111 1497" width="100%" height="100%">
                            {/* <circle cx="2" cy="1.5" r="1.2" fill="red" /> */}
                        </svg>
                    </div>

                    <Image
                        className={styles.mapPictureStyle}
                        src="/images/map.png"
                        alt=""
                        width={100}
                        height={100}
                        // priority
                        // layout="fill"
                        onClick={handleMapImageClick}
                    />
                </div>
            </div>

            {showMapModal && <Modal images={["/images/map.png"]} onClose={handleCloseMapModal} current={0}/>}

            <div className={styles.description}>
                <p>
                    부천시 소사구 소사본동 65-7 (경인로 386)<br />MJ 컨벤션 5층 그랜드볼룸
                </p>
            </div>

            <a href="https://place.map.kakao.com/27339651" className={styles.mapButton}>
                <svg width="1.5em" height="1.5em" strokeWidth={1.5} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#1199EE">
                    <path d="M20 10c0 4.418-8 12-8 12s-8-7.582-8-12a8 8 0 1116 0z" stroke="currentColor"></path>
                    <path d="M12 11a1 1 0 100-2 1 1 0 000 2z" fill="currentColor" stroke="currentColor" strokeLinecap='round' strokeLinejoin='round'></path>
                </svg>
                {kakaoMapText1}
            </a>
            <a href="https://map.naver.com/v5/entry/place/37537597" className={styles.mapButton}>
                <svg width="1.5em" height="1.5em" strokeWidth={1.5} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#66BB66">
                    <path d="M20 10c0 4.418-8 12-8 12s-8-7.582-8-12a8 8 0 1116 0z" stroke="currentColor"></path>
                    <path d="M12 11a1 1 0 100-2 1 1 0 000 2z" fill="currentColor" stroke="currentColor" strokeLinecap='round' strokeLinejoin='round'></path>
                </svg>
                {naverMapText1}
            </a>

            <hr className={styles.main} />

            <h2>마음 전하실 곳 💌</h2>
            <div className={styles.gift}>
                <p>
                    <strong>🤵🏻신랑측</strong>
                    <br />
                    (김경태) {accountNumberKT}
                    <button aria-label="복사" className={styles.copy} onClick={() => handleCopy(accountNumberKT)}>
                        <svg width="1.5em" height="1.5em" strokeWidth={1.5} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
                            <path d="M19.4 20H9.6a.6.6 0 01-.6-.6V9.6a.6.6 0 01.6-.6h9.8a.6.6 0 01.6.6v9.8a.6.6 0 01-.6.6z" stroke="currentColor" strokeLinecap='round' strokeLinejoin='round'></path>
                            <path d="M15 9V4.6a.6.6 0 00-.6-.6H4.6a.6.6 0 00-.6.6v9.8a.6.6 0 00.6.6H9" stroke="currentColor" strokeLinecap='round' strokeLinejoin='round'></path>
                        </svg>
                    </button>
                    <br />
                    <a href="http://kko.to/PGiGunjF-u">
                        <img src="/images/kakaopay-logo.png" height="17" />
                    </a>
                    <br />
                    (김완태) {accountNumberWT}
                    <button aria-label="복사" className={styles.copy} onClick={() => handleCopy(accountNumberWT)}>
                        <svg width="1.5em" height="1.5em" strokeWidth={1.5} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
                            <path d="M19.4 20H9.6a.6.6 0 01-.6-.6V9.6a.6.6 0 01.6-.6h9.8a.6.6 0 01.6.6v9.8a.6.6 0 01-.6.6z" stroke="currentColor" strokeLinecap='round' strokeLinejoin='round'></path>
                            <path d="M15 9V4.6a.6.6 0 00-.6-.6H4.6a.6.6 0 00-.6.6v9.8a.6.6 0 00.6.6H9" stroke="currentColor" strokeLinecap='round' strokeLinejoin='round'></path>
                        </svg>
                    </button>
                    <br />
                    (정민화) {accountNumberMH}
                    <button aria-label="복사" className={styles.copy} onClick={() => handleCopy(accountNumberMH)}>
                        <svg width="1.5em" height="1.5em" strokeWidth={1.5} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
                            <path d="M19.4 20H9.6a.6.6 0 01-.6-.6V9.6a.6.6 0 01.6-.6h9.8a.6.6 0 01.6.6v9.8a.6.6 0 01-.6.6z" stroke="currentColor" strokeLinecap='round' strokeLinejoin='round'></path>
                            <path d="M15 9V4.6a.6.6 0 00-.6-.6H4.6a.6.6 0 00-.6.6v9.8a.6.6 0 00.6.6H9" stroke="currentColor" strokeLinecap='round' strokeLinejoin='round'></path>
                        </svg>
                    </button>
                </p>
                <p>
                    <strong>👰🏻️신부측</strong>
                    <br />
                    (김혜진) {accountNumberHJ}
                    <button aria-label="복사" className={styles.copy} onClick={() => handleCopy(accountNumberHJ)}>
                        <svg width="1.5em" height="1.5em" strokeWidth={1.5} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
                            <path d="M19.4 20H9.6a.6.6 0 01-.6-.6V9.6a.6.6 0 01.6-.6h9.8a.6.6 0 01.6.6v9.8a.6.6 0 01-.6.6z" stroke="currentColor" strokeLinecap='round' strokeLinejoin='round'></path>
                            <path d="M15 9V4.6a.6.6 0 00-.6-.6H4.6a.6.6 0 00-.6.6v9.8a.6.6 0 00.6.6H9" stroke="currentColor" strokeLinecap='round' strokeLinejoin='round'></path>
                        </svg>
                    </button>
                    <br />
                    (김영길) {accountNumberYG}
                    <button aria-label="복사" className={styles.copy} onClick={() => handleCopy(accountNumberYG)}>
                        <svg width="1.5em" height="1.5em" strokeWidth={1.5} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
                            <path d="M19.4 20H9.6a.6.6 0 01-.6-.6V9.6a.6.6 0 01.6-.6h9.8a.6.6 0 01.6.6v9.8a.6.6 0 01-.6.6z" stroke="currentColor" strokeLinecap='round' strokeLinejoin='round'></path>
                            <path d="M15 9V4.6a.6.6 0 00-.6-.6H4.6a.6.6 0 00-.6.6v9.8a.6.6 0 00.6.6H9" stroke="currentColor" strokeLinecap='round' strokeLinejoin='round'></path>
                        </svg>
                    </button>
                </p>
            </div>

            <hr className={styles.main} />

            {/* <h2>축하의 한마디</h2> */}

            {/* <div className={styles.visitorsHeader}>
                <p>🤵🏻신랑측</p>
                <p>신부측👰🏻️</p>
            </div>

            <div className={styles.visitors}>

            </div> */}


            {/* <div className={styles.visitorsWrap}>
                <h2>축하의 한마디</h2>

                <div className={styles.visitorsSendMsg}>


                </div>

                <div className={styles.visitosMsg}>

                </div>
            </div> */}

        </main>
    )
}

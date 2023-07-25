/* modal.tsx */
import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import styles from '../styles/modal.module.css';
import QuickPinchZoom, { make3dTransformValue, UpdateAction, } from 'react-quick-pinch-zoom';

interface ModalProps {
  images: string[];
  current: number;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ images, onClose, current }) => {
  //const sliderRef = useRef<Slider | null>(null);
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  type PinchPhotoProps = { src: string; };
  const PinchPhoto = ({ src }: PinchPhotoProps) => {
    const imgRef = useRef<HTMLImageElement>(null);
    const pz = useRef<QuickPinchZoom>(null);
    const handleUpdate = useCallback(
      ({ x, y, scale }: UpdateAction) => {
        if (!imgRef.current) return;
        const value = make3dTransformValue({ x, y, scale });
        imgRef.current.style.setProperty("transform", value);
      },
      []
    );

    return (
      <QuickPinchZoom ref={pz} onUpdate={handleUpdate} draggableUnZoomed={false}>
        <img ref={imgRef} src={src} alt="" />
      </QuickPinchZoom>
    );
  };

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent}>
        <div className={styles.sliderWrapper}>
          {/* <Slider {...sliderSettings} ref={sliderRef} initialSlide={current || 0}>
            {images.map((image, index) => (
              <div key={index} className={styles.slideItem}>
                <img src={image} alt={`Slide ${index}`} />
              </div>
            ))}
          </Slider> */}
          <Slider {...sliderSettings} initialSlide={current || 0}>
            {images.map((image, index) => (
              <div key={index} className={styles.slideItem}>
                <PinchPhoto src={image} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Modal;

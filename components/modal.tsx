/* modal.tsx */
import { useState, useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import styles from '../styles/modal.module.css';

interface ModalProps {
  images: string[];
  current: number;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ images, onClose, current }) => {
  const [currentIndex, setCurrentIndex] = useState(current);
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
  };

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent}>
        <div className={styles.sliderWrapper}>
          <Slider {...settings} ref={sliderRef} initialSlide={current}>
            {images.map((image, index) => (
              <div key={index} className={styles.slideItem}>
                <img src={image} alt={`Slide ${index}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Modal;

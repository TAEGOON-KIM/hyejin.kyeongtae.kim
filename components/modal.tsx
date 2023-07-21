/* modal.tsx */
import { useState, useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import styles from '../styles/modal.module.css';

interface ModalProps {
  images: string[];
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const handlePrev = () => {
    //setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    //setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className={styles.modal} onClick={onClose}>
      {/* <div className={styles.buttonsDivTop}>
        <button className={styles.closeButton} onClick={onClose}>
          
        </button>
      </div> */}

      <div className={styles.modalContent}>
        <div className={styles.sliderWrapper}>
          <Slider {...settings} ref={sliderRef}>
            {images.map((image, index) => (
              <div key={index} className={styles.slideItem}>
                <img src={image} alt={`Slide ${index}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* <div className={styles.buttonsDivBottom}>
        <button className={styles.prevButton} onClick={handlePrev}>
          
        </button>
        <button className={styles.nextButton} onClick={handleNext}>
          
        </button>
      </div> */}

    </div>
  );
};

export default Modal;

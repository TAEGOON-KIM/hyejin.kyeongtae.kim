import { useState } from 'react';
import styles from '../styles/modal.module.css';

interface ModalProps {
  images: string[];
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.modal}>
      <button className={styles.closeButton} onClick={onClose}>
        Close
      </button>
      <div className={styles.imageContainer}>
        <img src={images[currentIndex]} alt="Modal" className={styles.image} />
      </div>
      <button className={styles.prevButton} onClick={handlePrev}>
        Prev
      </button>
      <button className={styles.nextButton} onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Modal;

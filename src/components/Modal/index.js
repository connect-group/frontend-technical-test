import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.scss';

// This component can be moved to a differnt folder that will have core components like buttons, popovers, tooltips, forms etc.
const Modal = ({
  isOpen, onClose, children, className = ''
}) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const closeButtonRef = React.useRef(null);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setTimeout(() => {
        if (closeButtonRef.current) {
          closeButtonRef.current.focus();
        }
      }, 300);
    } else {
      setShouldRender(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    document
      .querySelector(`.${styles.modalContainer__overlay}`)
      .classList.add(styles.fadeOutSlide);

    setTimeout(() => {
      onClose();
    }, 300);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    // Add event listener for keydown
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!shouldRender) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalContainer}>
      <div className={`${styles.modalContainer__overlay} ${className}`}>
        <div className={styles.modalContainer__content}>
          <button
            type="button"
            className={styles.modalContainer__close}
            onClick={handleClose}
            ref={closeButtonRef}
          >
            &#x2715;
          </button>
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;

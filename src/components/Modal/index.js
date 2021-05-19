import React, { useEffect } from 'react';
import './style.scss';

const Modal = ({ modalContent, setModalContent }) => {
  useEffect(() => {
    const activeElementList = document.querySelectorAll(
      '.modal button, .modal input'
    );
    const first = activeElementList[0];
    const last = activeElementList[activeElementList.length - 1];
    first.focus();

    const smartModalListener = (e) => {
      if (e.key === 'Tab' && e.shiftKey && e.target === first) {
        last.focus();
        e.preventDefault();
      } else if (e.key === 'Tab' && e.target === last && !e.shiftKey) {
        first.focus();
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', smartModalListener);
    return () => {
      window.removeEventListener('keydown', smartModalListener);
    };
  }, []);
  return (
    <div className="modal">
      <div className="modal__window">
        <div className="modal__title">
          <div className="modal__title-content">Extra Info</div>
          <button
            type="button"
            className="modal__close"
            onClick={() => setModalContent(null)}
            tabIndex="0"
          >
            &times;
          </button>
        </div>
        <div className="modal__content">
          <span>{modalContent.id.toUpperCase()}</span>
          <p>{modalContent.description}</p>
          <input type="text" tabIndex="0" />
          <p>{modalContent.meta.emissions.template.replace('$value', modalContent.meta.emissions.value)}</p>
          <p>{modalContent.price}</p>
        </div>
        <div className="modal__footer">
          <button type="submit" className="modal__button" tabIndex="0">OK</button>
        </div>
      </div>

    </div>
  );
};

export default Modal;

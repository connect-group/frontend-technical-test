import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Vehicle from '../Vehicle';
import './style.scss';
import { ModalContext } from '../../contexts/ModalContext';

const Modal = () => {
  const {
    showModal, setModal, showDetails, setDetails
  } = useContext(ModalContext);

  const hide = () => {
    setModal(!showModal);
    setDetails('');
  };
  return showModal
    ? ReactDOM.createPortal(
      <>
        <div className="modal__overlay" />
        <div className="modal__wrapper" tabIndex={-1}>
          <div className="modal__body">
            <div className="modal__header">
              <button
                type="button"
                className="modal__close"
                onClick={hide}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <Vehicle
              key={showDetails.id}
              details={showDetails}
              showMore
            />
          </div>
        </div>
      </>,
      document.body
    )
    : null;
};

export default Modal;

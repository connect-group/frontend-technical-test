import React, { useEffect, useRef } from 'react';
import ReactDom from 'react-dom';
import useStore from '../Context/useStore';
import './style.scss';

export default function Modal() {
  const { state, dispatch } = useStore();
  const {
    id: title, description, price, meta, modelYear, media, id
  } = state.modal.data;
  const overlay = useRef();
  const content = useRef();
  const closeModal = () => dispatch({ type: 'TOGGLEMODAL', payload: { isOpen: false, data: null } });
  useEffect(() => {
    const esc = document.addEventListener('keyup', (e) => {
      if (e.code === 'Escape') {
        closeModal();
      }
    });
    if (state.modal.isOpen) {
      overlay.current.classList.add('modal--enter');
      content.current.classList.add('modal__body--enter');
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'visible';
      document.removeEventListener('keypress', esc);
    };
  }, [state.modal.isOpen]);
  return ReactDom.createPortal((
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="title"
      ref={overlay}
      onClick={({ target }) => {
        if (overlay.current === target) {
          closeModal();
        }
      }}
    >
      <div className="modal__body" ref={content}>
        <img className="modal__image" src={media[0].url} alt={id} />
        <header>
          <div id="title" className="modal__title">{title}</div>
        </header>
        <p className="card__price">
          {`From ${price}`}
        </p>
        <p className="card__description">{description}</p>
        <div className="modal__details">
          <li>
            {`Passengers: ${meta.passengers}`}
          </li>
          <li>
            {`Bodystyle: ${meta.bodystyles.join(', ')}`}
          </li>
          <li>
            {` Drivetrain: ${meta.drivetrain.join(', ')}`}
          </li>
          <li>
            {`Emissions: ${meta.emissions.template.replace('$value', meta.emissions.value)}`}
          </li>
          <li>
            {`Year: ${modelYear}`}
          </li>
        </div>
        <button type="button" className="modal__button" aria-label="Close" onClick={closeModal}>Close</button>
      </div>
    </div>
  ), document.querySelector('.modal-root'));
}

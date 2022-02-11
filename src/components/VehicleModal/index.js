import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import VehicleInfo from '../VehicleInfo';
import VehicleMedia from '../VehicleInfo/VehicleMedia';
import VehicleInfoAdditional from '../VehicleInfo/VehicleInfoAdditional';
import { setModalVisibilityAction, setVisibleVehicleAction } from '../../redux/actions';
import './style.scss';

export default function VehicleModal() {
  const dispatch = useDispatch();
  const [isAdditionalInfoVisible, setAdditionalInfoVisibility] = useState(false);
  const { visibleVehicle, vehicles } = useSelector((state) => state);
  const {
    media, meta, ...info
  } = vehicles[visibleVehicle];

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const hideModal = () => {
    dispatch(setModalVisibilityAction(false));
    dispatch(setVisibleVehicleAction(null));
  };

  const showAdditionalInfo = (e) => {
    e.stopPropagation();
    setAdditionalInfoVisibility(!isAdditionalInfoVisible);
  };

  return (
    <div data-testid="modal" className="over" role="presentation" onClick={hideModal}>
      <div className="modal" role="presentation" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          data-testid="button"
          className="modal__button"
          onClick={hideModal}
        >
          &times;
        </button>
        <div className="modal-content">
          <VehicleMedia media={media} className="modal" />

          <div className="modal-info">
            <VehicleInfo data={info} className="modal" />

            {meta
              && (
              <div data-testid="additional">
                <button
                  type="button"
                  className="modal-info__button"
                  onClick={showAdditionalInfo}
                >
                  {isAdditionalInfoVisible ? 'Show less' : 'Read more'}
                </button>

                {isAdditionalInfoVisible
                  && <VehicleInfoAdditional meta={meta} className="modal" />}
              </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

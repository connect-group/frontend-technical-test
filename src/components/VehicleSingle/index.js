import React from 'react';
import { useDispatch } from 'react-redux';
import VehicleInfo from '../VehicleInfo';
import VehicleMedia from '../VehicleInfo/VehicleMedia';
import { setModalVisibilityAction, setVisibleVehicleAction } from '../../redux/actions';
import './style.scss';

export default function VehicleSingle({
  index, data, delay, duration
}) {
  const dispatch = useDispatch();
  const {
    media, ...info
  } = data;

  const showModal = () => {
    dispatch(setVisibleVehicleAction(index));
    dispatch(setModalVisibilityAction(true));
  };

  const createAnimation = () => {
    return `fadein ${duration}ms ease-out ${index * delay}ms forwards`;
  };

  return (
    <div
      role="presentation"
      data-testid="result"
      className="vehicle"
      style={{ animation: createAnimation() }}
      onClick={showModal}
    >
      <VehicleMedia media={media} className="vehicle" data-testid="media" />

      <div className="vehicle-info">
        <VehicleInfo data={info} className="vehicle" data-testid="info" />
      </div>
    </div>
  );
}

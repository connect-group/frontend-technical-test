import React, { useState } from 'react';
import useData from './useData';
import './style.scss';
import Vehicle from '../Vehicle';
import Modal from '../Modal';

const VehicleList = () => {
  const [modalContent, setModalContent] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [loading, error, vehicles] = useData();
  // eslint-disable-next-line
    console.log("loading, error, vehicles");
  // eslint-disable-next-line
    console.log(loading, error, vehicles);
  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{error}</div>;
  }

  return (
    <>
      <div className="VehicleList" data-testid="results">
        {vehicles.map((car) => <Vehicle key={car.id} data={car} setModalContent={setModalContent} />)}
      </div>
      {modalContent && <Modal setModalContent={setModalContent} modalContent={modalContent} />}
    </>
  );
};

export default VehicleList;

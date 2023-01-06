import React from 'react';
import useData from './useData';
import './style.scss';
import Vehicle from '../Vehicle';
import Modal from '../Modal';
import useStore from '../Context/useStore';

export default function VehicleList() {
  const [loading, error, vehicles] = useData();
  const { state: { modal } } = useStore();

  if (loading) {
    return <div data-testid="loading" className="loading">Loading...</div>;
  }

  if (error) {
    return <div data-testid="error">{ error }</div>;
  }

  return (
    <>
      <div data-testid="results" className="VehicleList">
        {vehicles.map((data) => <Vehicle data={data} key={data.id} />)}
      </div>
      {modal.isOpen && <Modal />}
    </>
  );
}

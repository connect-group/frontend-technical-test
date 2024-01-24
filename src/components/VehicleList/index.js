import React, { useState } from "react";

import Modal from "../Modal";
import useData from "./useData";
import "./style.scss";

export default function VehicleList() {
  const [loading, error, vehicles] = useData();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [vehicleData, setVehicleData] = useState({});

  if (loading) {
    return <div data-testid="loading" className="loader" />;
  }

  if (error) {
    return (
      <div data-testid="error" role="alert">
        {error}
      </div>
    );
  }

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const handleReadMoreClick = (vehicle) => () => {
    setVehicleData(vehicle);
    openDialog();
  };

  const handleOnClose = () => {
    setVehicleData({});
    closeDialog();
  };

  return (
    <>
      <section data-testid="results" className="vehicles">
        {vehicles.map((vehicle, index) => {
          const [
            { url: imageLargeUrl },
            { url: imageSmallUrl, name: altText },
          ] = vehicle.media;

          return (
            <article
              className="vehicle-card"
              key={vehicle.id}
              style={{ "--animation-order": index + 1 }}
            >
              <div className="vehicle-card__image-container">
                <picture>
                  <source media="(max-width: 600px)" srcSet={imageSmallUrl} />
                  <source media="(min-width: 601px)" srcSet={imageLargeUrl} />
                  <img
                    className="vehicle-card__image"
                    src={imageSmallUrl}
                    alt={altText}
                  />
                </picture>
              </div>
              <div className="vehicle-card__info">
                <h2 className="vehicle-card__name">{vehicle.id}</h2>
                <h3 className="vehicle-card__price">{`From ${vehicle.price}`}</h3>
                <p className="vehicle-card__description">
                  {vehicle.description}
                </p>
                <button
                  type="button"
                  className="vehicle-card__button"
                  onClick={handleReadMoreClick(vehicle)}
                  aria-label="Read More"
                >
                  <span className="vehicle-card__screen-reader-text">
                    Read More
                  </span>
                </button>
              </div>
            </article>
          );
        })}
      </section>
      <Modal
        isOpen={isDialogOpen}
        onClose={handleOnClose}
        vehicleData={vehicleData}
      />
    </>
  );
}

import React from "react";
import useData from "./useData";
import "./style.scss";

export default function VehicleList() {
  const [loading, error, vehicles] = useData();
  console.log(vehicles);

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{error}</div>;
  }

  return (
    <section data-testid="results" className="vehicles">
      {vehicles.map((vehicle) => {
        const [{ url: imageLargeUrl }, { url: imageSmallUrl, name: altText }] =
          vehicle.media;

        return (
          <article className="vehicle-card" key={vehicle.id}>
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
              <h2 className="vehicle-car__name">{vehicle.id}</h2>
              <h3 className="vehicle-car__price">{vehicle.details.price}</h3>
              <p className="vehicle-car__description">
                {vehicle.details.description}
              </p>
            </div>
          </article>
        );
      })}
    </section>
  );
}

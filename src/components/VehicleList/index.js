import React from "react";
import useData from "./useData";
import "./style.scss";

export default function VehicleList() {
  const [loading, error, vehicles] = useData();
  // console.log(vehicles);

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

  return (
    <section data-testid="results" className="vehicles">
      {vehicles
        // .concat(vehicles)
        // .concat(vehicles) // To test for larger amount of data
        .map((vehicle) => {
          const [
            { url: imageLargeUrl },
            { url: imageSmallUrl, name: altText },
          ] = vehicle.media;

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
                <h2 className="vehicle-card__name">{vehicle.id}</h2>
                <h3 className="vehicle-card__price">{`From ${vehicle.price}`}</h3>
                <p className="vehicle-card__description">
                  {vehicle.description}
                </p>
              </div>
            </article>
          );
        })}
    </section>
  );
}

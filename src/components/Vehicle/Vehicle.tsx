import React, { FC } from "react";
import { MergedVehicleDetails } from "@types";
import styles from "./Vehicle.module.scss";

export type VehicleProps = {
  vehicle: MergedVehicleDetails;
  onClick: (vehicle: MergedVehicleDetails) => void;
};

const Vehicle: FC<VehicleProps> = ({ vehicle, onClick }) => {
  const { id, description, modelYear, price, media } = vehicle;
  const smallImage = media?.find(({ url }) => url.includes("1x1"));
  const largeImage = media?.find(({ url }) => url.includes("16x9"));
  const hasMedia = !!smallImage || !!largeImage;
  const title = [id, modelYear].filter((x) => !!x).join(" ") || "New Vehicle";

  return (
    <div className={styles.container}>
      {hasMedia && (
        <picture className={styles.image}>
          {!!largeImage && (
            <source media="(min-width:768px)" srcSet={largeImage.url} />
          )}
          {!!smallImage && <img src={smallImage.url} alt={title} />}
        </picture>
      )}
      <a href="#" className={styles.content} onClick={() => onClick(vehicle)}>
        {!!title && <p className={styles.title}>{title}</p>}
        {!!price && <p className={styles.price}>{`From ${price}`}</p>}
        {!!description && <p className={styles.description}>{description}</p>}
      </a>
    </div>
  );
};

export default Vehicle;

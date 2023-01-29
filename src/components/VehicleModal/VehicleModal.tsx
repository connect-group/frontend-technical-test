import React, { FC } from "react";
import { MergedVehicleDetails } from "@types";
import styles from "./VehicleModal.module.scss";

export type VehicleModalProps = {
  vehicle?: MergedVehicleDetails;
};

const VehicleModal: FC<VehicleModalProps> = ({ vehicle }) => {
  if (!vehicle) {
    return null;
  }

  const { media, id, price, description, meta, modelYear } = vehicle;

  return (
    <>
      <img src={media[0].url} alt={`${id} vehicle`} className={styles.image} />

      <div className={styles.content}>
        <header>
          <h1 className={styles.header}>
            {id} {modelYear}
          </h1>
        </header>

        <p>{`From ${price}`}</p>

        <p>{description}</p>

        <ul className={styles.list}>
          <li>Up to {meta.passengers} passengers</li>
          <li>Body style: {meta.bodystyles.join(", ")}</li>
          <li>Drive train: {meta.drivetrain.join(", ")}</li>
          <li>
            Emissions:{" "}
            {meta.emissions.template.replace(
              "$value",
              meta.emissions.value.toString() || ""
            )}
          </li>
          <li>Year: {modelYear}</li>
        </ul>
      </div>
    </>
  );
};

export default VehicleModal;

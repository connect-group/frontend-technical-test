import React, { FC } from "react";
import { VehicleDetails, VehicleOverview } from "@types";
import styles from "./Vehicle.module.scss";

type Props = Pick<
  VehicleOverview & VehicleDetails,
  "id" | "description" | "modelYear" | "price" | "media"
>;

const Vehicle: FC<Props> = ({ id, description, modelYear, price, media }) => {
  const smallImage = media?.find(({ url }) => url.includes("1x1"));
  const largeImage = media?.find(({ url }) => url.includes("16x9"));
  const hasMedia = !!smallImage || !!largeImage;

  return (
    <div className={styles.container}>
      {hasMedia && (
        <picture className={styles.image}>
          {!!largeImage && (
            <source media="(min-width:768px)" srcSet={largeImage.url} />
          )}
          {!!smallImage && (
            <img src={smallImage.url} alt={`Foo driving on road.`} />
          )}
        </picture>
      )}
      <div className={styles.content}>
        <p className={styles.title}>
          {[id, modelYear].filter((x) => !!x).join(" ")}
        </p>
        <p className={styles.price}>{`From ${price}`}</p>
        {!!description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
};

export default Vehicle;

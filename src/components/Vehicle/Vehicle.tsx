import React, { FC } from "react";
import { VehicleDetails, VehicleOverview } from "@types";
import styles from "./Vehicle.module.scss";

export type VehicleProps = Pick<
  VehicleOverview & VehicleDetails,
  "id" | "description" | "modelYear" | "price" | "media"
>;

const Vehicle: FC<VehicleProps> = ({
  id,
  description,
  modelYear,
  price,
  media,
}) => {
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
      <div className={styles.content}>
        {!!title && <p className={styles.title}>{title}</p>}
        {!!price && <p className={styles.price}>{`From ${price}`}</p>}
        {!!description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
};

export default Vehicle;

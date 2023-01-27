import React from "react";
import styles from "./Vehicle.module.scss";

const formatter = Intl.NumberFormat("en-GB", {
  currency: "GBP",
  style: "currency",
  maximumFractionDigits: 0,
});

const Vehicle = () => {
  return (
    <div className={styles.container}>
      <picture className={styles.image}>
        <source media="(min-width:768px)" srcSet="/images/16x9/fpace_k17.jpg" />
        <img src="/images/1x1/fpace_k17.jpg" alt={`Foo driving on road.`} />
      </picture>
      <div className={styles.content}>
        <p className={styles.title}>Vehicle Name</p>
        <p className={styles.price}>{`From ${formatter.format(76350)}`}</p>
        <p className={styles.description}>The pinnacle of refined capability</p>
      </div>
    </div>
  );
};

export default Vehicle;

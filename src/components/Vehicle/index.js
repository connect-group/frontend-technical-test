import React from 'react';
import styles from './vehicle.module.scss';

export default function Vehicle({data}) {
    const {media, id, description, price} = data;

    return (
        <div className={styles.vehicle} data-testid="vehicle">
            <picture className={styles.image} data-testid="vehicle-image">
                <source media="(min-width: 769px)" srcSet={media[0].url} />
                <img src={media[1].url} alt={media[1].name} />
            </picture>

            <div className={styles.details}>
                <div className={styles.name} data-testid="vehicle-name">{id}</div>
                {price && <div className={styles.price} data-testid="vehicle-price">From: {price}</div>}
                {<div className={styles.description} data-testid="vehicle-description">{description}</div>}
            </div>
        </div>
    )
}

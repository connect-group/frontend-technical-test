import React from "react";
import { TVehicleId } from "../../@typings/vehicle";
import Picture from "./picture";
import ShowMore from "./show-more";

const ImageWrapper: React.FC<TVehicleId> = ({ id }) => {
    return (
        <div className="vehicle__image_wrapper">
            <Picture id={id} />
            <ShowMore />
        </div>
    );
};
export default ImageWrapper;

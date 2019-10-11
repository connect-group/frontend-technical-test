import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";

const VehicleListItem = (props) => {
  return (
    props.vehicle ?
      <div className="vehicle-panel vehicle-panel-md">
        <div className="vehicle-panel-header">
          <img src={props.vehicle.media[0].url} alt="test" className="vehicle-img" />
        </div>
        <div className="vehicle-panel-body">
          <span className="title">
            {props.vehicle.id}
          </span>
          <span className="description">
            {props.vehicle.details ? props.vehicle.details.description : "-"}
          </span>
          <span className="price">
            <FontAwesomeIcon icon={faMoneyBillWave} />{" "}
            {props.vehicle.details ? props.vehicle.details.price : "-"}
          </span>
        </div>
      </div >
      : null
  )
}

export default VehicleListItem;
import { TVehicle, TVehicleDetail } from "../@typings/vehicle";
import { request } from "./helpers";

export const getVehicleDetails = async (vehicle: TVehicle): Promise<TVehicle > => {
    try {
      const vehicleDetail: TVehicleDetail = await request(vehicle.apiUrl);
      return vehicleDetail.price && vehicleDetail.price !== ""
        ? { ...vehicle, detail: vehicleDetail }
        : { ...vehicle };
    } catch (e) {
      throw new Error("Failed to fetch vehicle details");
    }
  };

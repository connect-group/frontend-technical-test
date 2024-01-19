import { TVehicle } from "../@typings/vehicle";
import { request } from "./helpers";

export const getVehiclesList = async (): Promise<TVehicle[]> => {
    try {
      const vehicleList: TVehicle[] = await request("/api/vehicles.json");
      return vehicleList;
    } catch (e) {
      throw new Error("Failed to fetch vehicle list");
    }
  };

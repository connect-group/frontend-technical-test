import { ApiUrl, VehicleDetails } from "@types";
import { mergeVehicleData } from "@utils";
import { request } from "./helpers";

const getData = async () => {
  try {
    const vehiclesOverview = await request("/api/vehicles.json");

    const detailsUrls = vehiclesOverview.map(
      ({ apiUrl }) => apiUrl as keyof ApiUrl
    );

    const responses = await Promise.allSettled(
      detailsUrls.map((detail) => request(detail))
    );

    const allVehicleData = responses
      .filter((x) => x.status !== "rejected")
      .map(({ value }: PromiseFulfilledResult<VehicleDetails>) => value)
      .filter(({ price }) => !!price);

    return mergeVehicleData(vehiclesOverview, allVehicleData);
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error(error);
    }
  }
};

export default getData;

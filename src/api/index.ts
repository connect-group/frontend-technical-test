import { TVehicle } from '../@typings/vehicle.d';
import { getVehiclesList } from './get-vehicles-list';
import { getVehicleDetails } from './get-vehicle-details';




export default async function getData() {
  try {
    const vehicleList = await getVehiclesList();
    const vehicleDetailsPromises = vehicleList.map(vehicle => getVehicleDetails(vehicle));

    return await Promise.allSettled(vehicleDetailsPromises)
      .then(results => results
        .filter(result => result.status === "fulfilled")
        .map((result: PromiseFulfilledResult<TVehicle>) => result.value)
        .filter(vehicle => vehicle.detail)
      );
  } catch (e) {
    throw new Error("Failed to fetch vehicles data");
  }
}

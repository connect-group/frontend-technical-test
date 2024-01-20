import { TVehicle } from "../@typings/vehicle.d";
import { getVehiclesList } from "./get-vehicles-list";
import { getVehicleDetails } from "./get-vehicle-details";

/**
 * The function `getData` fetches a list of vehicles and their details, filters out vehicles without
 * price, and returns the filtered list.
 * @returns a promise that resolves to an array of vehicle objects that have a "detail" property.
 */
export default async function getData() {
    try {
        const vehicleList = await getVehiclesList();
        const vehicleDetailsPromises = vehicleList.map((vehicle) =>
            getVehicleDetails(vehicle)
        );

        // The `allSettled` method is used here because it allows us to wait for all the promises
        // in `vehicleDetailsPromises` to settle, regardless of whether they are fulfilled or rejected.
        // A filtering on fullfilled promises is applied to remove any rejected promises.
        return await Promise.allSettled(vehicleDetailsPromises).then(
            (results) =>
                results
                    .filter((result) => result.status === "fulfilled")
                    .map(
                        (result: PromiseFulfilledResult<TVehicle>) =>
                            result.value
                    )
                    .filter((vehicle) => vehicle.detail)
        );
    } catch (e) {
        throw new Error("Failed to fetch vehicles data");
    }
}

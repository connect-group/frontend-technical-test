import { request } from "./helpers";

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */

export default async function getData() {
    //Fetch Vehicles
    const baseUrl = "/api/vehicles.json";
    const response = await fetch(baseUrl);
    const vehicles = await response.json();
    if (!response.ok) {
        console.log(`Couldn't fetch:`, baseUrl);
    }

    //Fetch Vehicle Summary
    const results = await Promise.all(vehicles.map((v) => request(v)));

    //Filter vehicle without any price information
    const vehicleSummaryPayload = results.filter((r) => r && r.price);

    return vehicleSummaryPayload;
}

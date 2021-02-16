/**
* This is an example request. Create your own using best practises for
* handling asynchronous data fetching
**/
import fetch from "node-fetch";

const BASE_URL = "http://localhost:9988";

export const getData = async () => {
	const vehicles = await fetch(`${BASE_URL}/api/vehicle`);

	if (vehicles.status === 200) {
	  return await vehicles.json();
	}
  
	return null;
};

export const getVehicleAdditionalInformation = async (vehicleId) => {
	const additionalInforamtion = await fetch(
	  `${BASE_URL}/api/vehicle/` + vehicleId
	);
  
	if (additionalInforamtion.status === 200) {
	  return await additionalInforamtion.json();
	}
  
	return null;
  };
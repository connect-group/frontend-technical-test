export function noEmptyValues(data, valuesToCheck) {
  const notEmpty = (key) => data[key] !== '' && data[key] !== undefined && data[key] !== null;
  return valuesToCheck.every(notEmpty);
}

export function mergeVehicleData (vehicles, vehicleDetails) {
  return vehicleDetails.map((data) => {
    const vehicle = { ...data };
    const match = vehicles.find((obj) => data.id === obj.id);
    if (match) {
      Object.assign(vehicle, match);
    }
    return vehicle;
  });
}

import { IVehiclesStore } from "../../../@typings/vehicles.store";

export const vehicleDescriptionSelector = (s: IVehiclesStore) =>
    s.selectedVehicle
        ? s.vehicles.filter((v) => v.id === s.selectedVehicle)[0].detail
              .description
        : "";

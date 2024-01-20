import { TVehicle } from "./vehicle";

export interface IVehiclesStore {
    vehicles: TVehicle[];
    setVehicles: (v: TVehicle[]) => void;
    selectedVehicle: string | null;
    selectVehicle: (id: string) => void;
    unselectVehicle: () => void;
}

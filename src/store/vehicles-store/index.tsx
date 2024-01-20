import { create } from "zustand";
import { IVehiclesStore } from "../../@typings/vehicles.store";

const useVehiclesStore = create<IVehiclesStore>((set) => ({
    vehicles: [],
    selectedVehicle: null,
    setVehicles: (vehicles) => set({ vehicles }),
    selectVehicle: (id) => set({ selectedVehicle: id }),
    unselectVehicle: () => set({ selectedVehicle: null }),
}));
export default useVehiclesStore;

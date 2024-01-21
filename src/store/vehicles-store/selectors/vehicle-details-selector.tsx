import { IVehiclesStore } from "../../../@typings/vehicles.store";

export const vehicleDetailsSelector = (
    state: IVehiclesStore
): {
    label: string;
    value: string;
}[] => {
    if (!state.selectedVehicle) return [];
    const vehicleDetail = state.vehicles.filter(
        (v) => v.id === state.selectedVehicle
    )[0].detail;
    return Object.keys(vehicleDetail.meta).reduce((v, a) => {
        switch (a) {
            case "passengers":
                return [
                    ...v,
                    {
                        label: "Passengers",
                        value: String(vehicleDetail.meta[a]),
                    },
                ];
            case "drivetrain":
                return [
                    ...v,
                    {
                        label: "Drive Train",
                        value: vehicleDetail.meta[a].join(", ") || "N/A",
                    },
                ];
            case "bodystyles":
                return [
                    ...v,
                    {
                        label: "Body styles",
                        value: vehicleDetail.meta[a].join(", ") || "N/A",
                    },
                ];
            case "emissions":
                return [
                    ...v,
                    {
                        label: "Body styles",
                        value:
                            vehicleDetail.meta[a].template.replace(
                                "$value",
                                String(vehicleDetail.meta[a].value)
                            ) || "N/A",
                    },
                ];
        }
    }, []);
};

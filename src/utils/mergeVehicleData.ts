import { MergedVehicleDetails, VehicleDetails, VehicleOverview } from "@types";

const mergeVehicleData = (
  overview: VehicleOverview[],
  details: VehicleDetails[]
) =>
  details.reduce<MergedVehicleDetails[]>((acc, curr) => {
    const overviewData = overview.find(({ id }) => id === curr.id);
    return [
      ...acc,
      {
        ...curr,
        ...overviewData,
      },
    ];
  }, []);

export default mergeVehicleData;

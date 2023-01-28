import { MergedVehicleDetails, VehicleDetails, VehicleOverview } from "@types";

const mergeVehicleData = (
  overview: VehicleOverview[],
  details: VehicleDetails[]
) => {
  if (!overview?.length || !details?.length) {
    return [];
  }

  return details.reduce<MergedVehicleDetails[]>((acc, curr) => {
    const overviewData = overview.find(({ id }) => id === curr.id);
    return [
      ...acc,
      {
        ...curr,
        ...overviewData,
      },
    ];
  }, []);
};

export default mergeVehicleData;

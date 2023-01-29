import { faker } from "@faker-js/faker";
import { MergedVehicleDetails, VehicleDetails, VehicleOverview } from "@types";
import { mergeVehicleData } from "@utils";

describe("mergeVehicleData tests", () => {
  it("should return empty array when no vehicle overview to merge", () => {
    const overview: VehicleOverview[] = [];
    const details: VehicleDetails[] = [
      { id: faker.datatype.string() } as VehicleDetails,
    ];
    const expectedResult: MergedVehicleDetails[] = [];

    const result = mergeVehicleData(overview, details);

    expect(result).toEqual(expectedResult);
  });

  it("should return empty array when no vehicle details to merge", () => {
    const overview: VehicleOverview[] = [
      { id: faker.datatype.string() } as VehicleOverview,
    ];
    const details: VehicleDetails[] = [];
    const expectedResult: MergedVehicleDetails[] = [];

    const result = mergeVehicleData(overview, details);

    expect(result).toEqual(expectedResult);
  });

  it("should return empty array when no data available", () => {
    const overview: VehicleOverview[] = [];
    const details: VehicleDetails[] = [];
    const expectedResult: MergedVehicleDetails[] = [];

    const result = mergeVehicleData(overview, details);

    expect(result).toEqual(expectedResult);
  });

  it("should merge vehicle data correctly", () => {
    const overview: VehicleOverview[] = [
      {
        id: "test-id",
        apiUrl: "http://test-api-url",
      } as VehicleOverview,
    ];
    const details: VehicleDetails[] = [
      {
        id: "test-id",
        description: "test description",
      } as VehicleDetails,
    ];
    const expectedResult: MergedVehicleDetails[] = [
      {
        id: "test-id",
        apiUrl: "http://test-api-url",
        description: "test description",
      } as MergedVehicleDetails,
    ];

    const result = mergeVehicleData(overview, details);

    expect(result).toEqual(expectedResult);
  });
});

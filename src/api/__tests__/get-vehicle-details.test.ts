import { getVehicleDetails } from "../get-vehicle-details";
import { TVehicle } from "../../@typings/vehicle";
import { request } from "../helpers";

jest.mock("../helpers", () => ({
    request: jest.fn(),
}));

describe("getVehicleDetails", () => {
    it("should return vehicle details with price when price is available", async () => {
        // Arrange: Create a mock vehicle with a price
        const mockVehicle: TVehicle = {
            id: "123",
            modelYear: "2021",
            apiUrl: "api/vehicle_with_price.json",
            media: [],
        };
        // Arrange: Create expected vehicle details including the price
        const mockVehicleDetail = {
            id: "123",
            description: "Test Vehicle",
            price: "25000",
            meta: {
                passengers: 4,
                drivetrain: ["AWD"],
                bodystyles: ["SUV"],
                emissions: {
                    template: "CO2 Emissions {value} g/km",
                    value: 192,
                },
            },
        };
        // Arrange: Mock the request to resolve with the mock vehicle details
        (request as jest.Mock).mockResolvedValue(mockVehicleDetail);

        // Act and Assert: Verify that the service returns the expected vehicle details
        await expect(getVehicleDetails(mockVehicle)).resolves.toEqual({
            ...mockVehicle,
            detail: mockVehicleDetail,
        });
    });

    it("should return vehicle without details when price is not available", async () => {
        // Arrange: Create a mock vehicle without a price
        const mockVehicle: TVehicle = {
            id: "456",
            modelYear: "2021",
            apiUrl: "api/vehicle_without_price.json",
            media: [],
        };
        // Arrange: Create expected vehicle details without the price
        const mockVehicleDetail = {
            id: "456",
            description: "Test Vehicle",
            price: "",
            meta: {
                passengers: 4,
                drivetrain: ["AWD"],
                bodystyles: ["SUV"],
                emissions: {
                    template: "CO2 Emissions {value} g/km",
                    value: 192,
                },
            },
        };

        // Arrange: Mock the request to resolve with the mock vehicle details
        (request as jest.Mock).mockResolvedValue(mockVehicleDetail);

        // Act and Assert: Verify that the service returns the vehicle without details
        await expect(getVehicleDetails(mockVehicle)).resolves.toEqual(
            mockVehicle
        );
    });

    it("should throw an error when request fails", async () => {
        // Arrange: Create a mock vehicle that will trigger a request error
        const mockVehicle: TVehicle = {
            id: "789",
            modelYear: "2021",
            apiUrl: "api/vehicle_with_error.json",
            media: [],
        };

        // Arrange: Define the expected error message
        const errorMessage = "Failed to fetch vehicle details";

        // Arrange: Mock the request to reject with an error
        (request as jest.Mock).mockRejectedValue(new Error(errorMessage));

        // Act and Assert: Verify that the service throws the expected error
        await expect(getVehicleDetails(mockVehicle)).rejects.toThrow(
            errorMessage
        );
    });
});

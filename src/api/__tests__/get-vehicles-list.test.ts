import { getVehiclesList } from "../get-vehicles-list";
import { request } from "../helpers";
import { TVehicle } from "../../@typings/vehicle";

jest.mock("../helpers", () => ({
    request: jest.fn(),
}));

describe("getVehiclesList", () => {
    // Test case: Get vehicle list successfully
    it("should fetch the vehicle list successfully", async () => {
        // Arrange: Create a mock response for the vehicle list
        const mockVehicles: TVehicle[] = [
            {
                id: "ftype",
                modelYear: "k17",
                apiUrl: "/api/vehicle_ftype.json",
                media: [],
            },
            {
                id: "xj",
                modelYear: "k17",
                apiUrl: "/api/vehicle_xj.json",
                media: [],
            },
        ];
        // Arrange: Mock the request to resolve with the mock vehicles
        (request as jest.Mock).mockResolvedValueOnce(mockVehicles);

        // Act: Call the getVehiclesList function
        const result = await getVehiclesList();

        // Assert: Check if the request was called with the correct endpoint
        expect(request).toHaveBeenCalledWith("/api/vehicles.json");
        // Assert: Verify the function returns the expected vehicle list
        expect(result).toEqual(mockVehicles);
    });

    // Test case: Handle error when fetching vehicle list fails
    it("should throw an error when the request fails", async () => {
        // Arrange: Define the error message for a failed request
        const errorMessage = "Failed to fetch vehicle list";
        // Arrange: Mock the request to reject with an error
        (request as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

        // Act and Assert: Expect the getVehiclesList function to throw an error
        await expect(getVehiclesList()).rejects.toThrow(errorMessage);
    });
});

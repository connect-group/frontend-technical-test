// import React from "react";
// import { render } from "@testing-library/react";
// import VehicleList from "..";
// import useData from "../useData";

// jest.mock("../useData");

// describe("<VehicleList /> Tests", () => {
//     beforeEach(() => {
//         const { result } = renderHook(() => useVehiclesStore());
//         act(() => result.current.setVehicles(vehicles));
//     });
//     it("Should show loading state if it not falsy", () => {
//         useData.mockReturnValue([true, "An error occurred", "results"]);
//         const { queryByTestId } = render(<VehicleList />);

//         expect(queryByTestId("loading")).not.toBeNull();
//         expect(queryByTestId("error")).toBeNull();
//         expect(queryByTestId("results")).toBeNull();
//     });

//     it("Should show error if it is not falsy and loading is finished", () => {
//         useData.mockReturnValue([false, "An error occurred", "results"]);
//         const { queryByTestId } = render(<VehicleList />);

//         expect(queryByTestId("loading")).toBeNull();
//         expect(queryByTestId("error")).not.toBeNull();
//         expect(queryByTestId("results")).toBeNull();
//     });

//     it("Should show results if loading successfully finished", () => {
//         useData.mockReturnValue([false, false, "results"]);
//         const { queryByTestId } = render(<VehicleList />);

//         expect(queryByTestId("loading")).toBeNull();
//         expect(queryByTestId("error")).toBeNull();
//         expect(queryByTestId("results")).not.toBeNull();
//     });
// });
import React from "react";
import { render, screen } from "@testing-library/react";
import VehicleList from "../";
import useData from "../useData";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import useVehiclesStore from "../../../store/vehicles-store";
import vehicles from "../../../__mocks__/vehiclesMock";

jest.mock("../useData");

describe("<VehicleList />", () => {
    it("renders loading state", () => {
        // Mock the useData hook to return a loading state
        useData.mockReturnValue([true, null, []]);
        // Render the VehicleList component
        render(<VehicleList />);
        // Assert that the loading element is present in the component
        expect(screen.getByTestId("loading")).toBeDefined();
    });

    it("renders error state", () => {
        // Simulate a scenario where an error occurs during data fetching
        useData.mockReturnValue([false, "Error occurred", []]);
        // Render the VehicleList component to the document
        render(<VehicleList />);
        // Expect that the error message is shown in the document
        expect(screen.getByTestId("error")).toBeDefined();
    });

    it("renders list of vehicles", () => {
        // Mock the return value of useData hook to simulate successful data fetch
        useData.mockReturnValue([false, null, vehicles]);
        // Render the custom hook useVehiclesStore to manage vehicle state
        const { result } = renderHook(() => useVehiclesStore());
        // Update the vehicle state with the mock vehicles data
        act(() => result.current.setVehicles(vehicles));
        // Render the VehicleList component for inspection
        render(<VehicleList />);
        // Query all the vehicle elements by a test ID that starts with "vehicle-"
        const vehicleElements = screen.queryAllByTestId(
            (content, element) =>
                element.dataset.testid &&
                element.dataset.testid.startsWith("vehicle-") &&
                element.className === "vehicle"
        );
        // Assert that the number of rendered vehicle elements matches the mock data length
        expect(vehicleElements).toHaveLength(vehicles.length);
    });
});

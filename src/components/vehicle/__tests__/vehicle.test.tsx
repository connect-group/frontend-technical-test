import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Vehicle from "../";
import useVehiclesStore from "../../../store/vehicles-store";
import vehiclesMock from "../../../__mocks__/vehiclesMock";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";

describe("<Vehicle />", () => {
    let vehicles;
    beforeEach(() => {
        vehicles = vehiclesMock;
        const { result } = renderHook(() => useVehiclesStore());
        act(() => result.current.setVehicles(vehicles));
    });
    it("renders without crashing", () => {
        const { queryByTestId } = render(<Vehicle id={vehicles[0].id} />);
        expect(queryByTestId("vehicle")).toBeDefined();
    });

    it("Should render Vehicle component", async () => {
        const { queryByTestId, container } = render(
            <Vehicle id={vehicles[0].id} />
        );

        expect(queryByTestId("vehicle-title").textContent).toBe(vehicles[0].id);
        expect(queryByTestId("vehicle-price").textContent).toBe(
            `From ${vehicles[0].detail.price}`
        );
        expect(queryByTestId("vehicle-description").textContent).toBe(
            vehicles[0].detail.description
        );

        expect(container).toMatchSnapshot();
    });

    // it('calls selectVehicle when "Enter" key is pressed', () => {
    //     const vehicleId = "12345";
    //     const mockSelectVehicle = jest.fn();
    //     (useVehiclesStore as unknown as jest.Mock).mockReturnValue({
    //         selectVehicle: mockSelectVehicle,
    //     });

    //     render(<Vehicle id={vehicleId} />);
    //     const vehicleElement = screen.getByTestId("vehicle");
    //     fireEvent.keyDown(vehicleElement, { key: "Enter" });
    //     expect(mockSelectVehicle).toHaveBeenCalledWith(vehicleId);
    // });
    // it("calls selectVehicle on enter key press", () => {
    //     const vehicleId = "12345";
    //     const mockSelectVehicle = jest.fn();
    //     (useVehiclesStore as unknown as jest.Mock).mockReturnValue({
    //         selectVehicle: mockSelectVehicle,
    //     });
    //     render(<Vehicle id={vehicles[0].id} />);
    //     const vehicleElement = screen.getByTestId("vehicle");
    //     fireEvent.keyDown(vehicleElement, { key: "Enter" });
    //     expect(mockSelectVehicle).toHaveBeenCalledWith(vehicleId);
    // });

    // it("does not call selectVehicle on other key press", () => {
    //     const vehicleId = "12345";
    //     const mockSelectVehicle = jest.fn();
    //     (useVehiclesStore as unknown as jest.Mock).mockReturnValue({
    //         selectVehicle: mockSelectVehicle,
    //     });
    //     render(<Vehicle id={vehicleId} />);
    //     const vehicleElement = screen.getByTestId("vehicle");
    //     fireEvent.keyDown(vehicleElement, { key: "Escape" });
    //     expect(mockSelectVehicle).not.toHaveBeenCalled();
    // });
});

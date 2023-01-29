import React from "react";
import { render, screen } from "@testing-library/react";
import { Vehicle } from "@components";
import type { VehicleProps } from "@components/Vehicle/Vehicle";

describe("<Vehicle /> tests", () => {
  it("should render a vehicle with all props visible", () => {
    const props = {
      vehicle: {
        id: "test-id",
        description: "test-description",
        modelYear: "test-modelYear",
        price: "test-price",
        media: [
          {
            url: `/img/1x1/foo.jpg`,
          },
          {
            url: `/img/16x9/foo.jpg`,
          },
        ],
      },
    } as VehicleProps;

    render(<Vehicle {...props} />);

    expect(
      screen.getByAltText(`${props.vehicle.id} ${props.vehicle.modelYear}`)
    ).toBeTruthy();
    expect(
      screen.getByText(`${props.vehicle.id} ${props.vehicle.modelYear}`)
    ).toBeTruthy();
    expect(screen.getByText(props.vehicle.description)).toBeTruthy();
    expect(
      screen.getByText(props.vehicle.price, { exact: false })
    ).toBeTruthy();
  });

  it("should fall back to placeholder title", () => {
    const props = {
      vehicle: {
        id: null,
        modelYear: null,
      },
    } as VehicleProps;

    render(<Vehicle {...props} />);

    expect(
      screen.queryByText(`${props.vehicle.id} ${props.vehicle.modelYear}`)
    ).toBeFalsy();
    expect(screen.getByText(`New Vehicle`)).toBeTruthy();
  });

  it("should omit the model year when it is falsy", () => {
    const props = {
      vehicle: {
        id: "test-id",
        modelYear: null,
      },
    } as VehicleProps;

    render(<Vehicle {...props} />);

    expect(
      screen.queryByText(`${props.vehicle.id} ${props.vehicle.modelYear}`)
    ).toBeFalsy();
    expect(screen.getByText(`${props.vehicle.id}`)).toBeTruthy();
  });
});

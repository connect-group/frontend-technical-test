import React from "react";
import { faker } from "@faker-js/faker";
import { render } from "@testing-library/react";
import { MergedVehicleDetails } from "@types";
import { VehicleList } from "@components";
import { useData } from "@hooks";

jest.mock("@hooks");

const MockedUseData = jest.mocked(useData);

const MockResults = [
  {
    id: faker.datatype.uuid(),
  },
] as MergedVehicleDetails[];

describe("<VehicleList /> Tests", () => {
  it("Should show loading state if it not falsy", () => {
    const result = {
      loading: true,
      error: "An error occurred",
      vehicles: MockResults,
    };
    MockedUseData.mockReturnValue(result);
    const { queryByTestId } = render(<VehicleList />);

    expect(queryByTestId("loading")).not.toBeNull();
    expect(queryByTestId("error")).toBeNull();
    expect(queryByTestId("results")).toBeNull();
    expect(queryByTestId("nodata")).toBeNull();
  });

  it("Should show error if it is not falsy and loading is finished", () => {
    const result = {
      loading: false,
      error: "An error occurred",
      vehicles: MockResults,
    };
    MockedUseData.mockReturnValue(result);
    const { queryByTestId } = render(<VehicleList />);

    expect(queryByTestId("loading")).toBeNull();
    expect(queryByTestId("error")).not.toBeNull();
    expect(queryByTestId("results")).toBeNull();
    expect(queryByTestId("nodata")).toBeNull();
  });

  it("Should show results if loading successfully finished", () => {
    const result = {
      loading: false,
      error: "",
      vehicles: MockResults,
    };
    MockedUseData.mockReturnValue(result);
    const { queryByTestId } = render(<VehicleList />);

    expect(queryByTestId("loading")).toBeNull();
    expect(queryByTestId("error")).toBeNull();
    expect(queryByTestId("results")).not.toBeNull();
    expect(queryByTestId("nodata")).toBeNull();
  });

  it("Should show missing data message", () => {
    const result = {
      loading: false,
      error: "",
      vehicles: [],
    };
    MockedUseData.mockReturnValue(result);
    const { queryByTestId } = render(<VehicleList />);

    expect(queryByTestId("loading")).toBeNull();
    expect(queryByTestId("error")).toBeNull();
    expect(queryByTestId("results")).toBeNull();
    expect(queryByTestId("nodata")).not.toBeNull();
  });
});

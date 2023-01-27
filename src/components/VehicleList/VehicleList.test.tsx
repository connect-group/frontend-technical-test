import React from "react";
import { render } from "@testing-library/react";
import VehicleList from "@components/VehicleList/VehicleList";
import useData from "@hooks/useData";

jest.mock("@hooks/useData");

const MockedUseData = jest.mocked(useData);

describe("<VehicleList /> Tests", () => {
  it("Should show loading state if it not falsy", () => {
    MockedUseData.mockReturnValue([true, "An error occurred", "results"]);
    const { queryByTestId } = render(<VehicleList />);

    expect(queryByTestId("loading")).not.toBeNull();
    expect(queryByTestId("error")).toBeNull();
    expect(queryByTestId("results")).toBeNull();
  });

  it("Should show error if it is not falsy and loading is finished", () => {
    MockedUseData.mockReturnValue([false, "An error occurred", "results"]);
    const { queryByTestId } = render(<VehicleList />);

    expect(queryByTestId("loading")).toBeNull();
    expect(queryByTestId("error")).not.toBeNull();
    expect(queryByTestId("results")).toBeNull();
  });

  it("Should show results if loading successfully finished", () => {
    MockedUseData.mockReturnValue([false, false, "results"]);
    const { queryByTestId } = render(<VehicleList />);

    expect(queryByTestId("loading")).toBeNull();
    expect(queryByTestId("error")).toBeNull();
    expect(queryByTestId("results")).not.toBeNull();
  });
});

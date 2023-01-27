import React from "react";
import { faker } from "@faker-js/faker";
import { render } from "@testing-library/react";
import { VehicleOverview } from "@types";
import { VehicleList } from "@components";
import { useData } from "@hooks";

jest.mock("@hooks");

const MockedUseData = jest.mocked(useData);

const MockResults = [
  {
    id: faker.datatype.uuid(),
  },
] as VehicleOverview[];

describe("<VehicleList /> Tests", () => {
  it("Should show loading state if it not falsy", () => {
    MockedUseData.mockReturnValue([true, "An error occurred", MockResults]);
    const { queryByTestId } = render(<VehicleList />);

    expect(queryByTestId("loading")).not.toBeNull();
    expect(queryByTestId("error")).toBeNull();
    expect(queryByTestId("results")).toBeNull();
  });

  it("Should show error if it is not falsy and loading is finished", () => {
    MockedUseData.mockReturnValue([false, "An error occurred", MockResults]);
    const { queryByTestId } = render(<VehicleList />);

    expect(queryByTestId("loading")).toBeNull();
    expect(queryByTestId("error")).not.toBeNull();
    expect(queryByTestId("results")).toBeNull();
  });

  it("Should show results if loading successfully finished", () => {
    MockedUseData.mockReturnValue([false, false, MockResults]);
    const { queryByTestId } = render(<VehicleList />);

    expect(queryByTestId("loading")).toBeNull();
    expect(queryByTestId("error")).toBeNull();
    expect(queryByTestId("results")).not.toBeNull();
  });
});

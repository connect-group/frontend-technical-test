import React from "react";
import { render } from "@testing-library/react";
import VehicleList from "..";
import useData from "../useData";

jest.mock("../useData");

describe("<VehicleList /> Tests", () => {
  it("Should show loading state if it not falsy", () => {
    useData.mockReturnValue([true, "An error occurred", []]);
    const { queryByTestId } = render(<VehicleList />);

    expect(queryByTestId("loading")).not.toBeNull();
    expect(queryByTestId("error")).toBeNull();
    expect(queryByTestId("results")).toBeNull();
  });

  it("Should show error if it is not falsy and loading is finished", () => {
    useData.mockReturnValue([false, "An error occurred", []]);
    const { queryByTestId } = render(<VehicleList />);

    expect(queryByTestId("loading")).toBeNull();
    expect(queryByTestId("error")).not.toBeNull();
    expect(queryByTestId("results")).toBeNull();
  });

  it("Should show results if loading successfully finished", () => {
    useData.mockReturnValue([
      false,
      false,
      [
        {
          id: "exampleId",
          modelYear: "k17",
          apiUrl: "/api/vehicle_fpace.json",
          media: [
            {
              name: "vehicle",
              url: "/example-image-small.jpg",
            },
            {
              name: "vehicle",
              url: "/example-image-large.jpg",
            },
          ],
          price: "£30,000",
          description: "Example description",
        },
      ],
    ]);
    const { queryByTestId } = render(<VehicleList />);

    expect(queryByTestId("loading")).toBeNull();
    expect(queryByTestId("error")).toBeNull();
    expect(queryByTestId("results")).not.toBeNull();
    expect(queryByTestId("results").children.length).toBe(1);
  });
});

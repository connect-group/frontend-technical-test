import { faker } from "@faker-js/faker";
import { waitFor } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { MergedVehicleDetails } from "@types";
import { getData } from "@api";
import useData from "./useData";

jest.mock("@api");

const MockedGetData = jest.mocked(getData);

describe("useData tests", () => {
  it("should return vehicles from API with no errors", async () => {
    const vehicles = [
      {
        id: faker.datatype.uuid(),
      },
    ] as MergedVehicleDetails[];

    MockedGetData.mockReturnValue(Promise.resolve(vehicles));

    const { result } = renderHook(() => useData());

    expect(result.current.loading).toBeTruthy();

    await waitFor(() => {
      expect(result.current.loading).toBeFalsy();
    });

    expect(result.current.error).toBeFalsy();
    expect(result.current.vehicles).toEqual(vehicles);
  });

  it("should return empty vehicles when error occurs", async () => {
    const error = "Something went wrong, sorry.";

    MockedGetData.mockReturnValue(Promise.reject(error));

    const { result } = renderHook(() => useData());

    expect(result.current.loading).toBeTruthy();

    await waitFor(() => {
      expect(result.current.loading).toBeFalsy();
    });

    expect(result.current.error).toEqual(error);
    expect(result.current.vehicles).toEqual([]);
  });
});

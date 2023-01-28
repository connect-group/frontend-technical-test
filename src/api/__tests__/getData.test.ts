import { VehicleDetails, VehicleOverview } from "@types";
import { getData } from "@api";
import { request } from "@api/helpers";

jest.mock("../helpers");

const MockedRequest = jest.mocked(request);

describe("getData Tests", () => {
  beforeEach(() => {
    MockedRequest.mockClear();
  });

  const safelyCallApi = async () => {
    try {
      return await getData();
    } catch (e) {
      return null;
    }
  };

  it("Should fail if initial api call is failed", () => {
    MockedRequest.mockRejectedValueOnce("An error occurred");

    return expect(() => getData()).rejects.not.toBeFalsy();
  });

  it("Should make an api call to receive a list of general vehicle information", async () => {
    expect.assertions(1);
    MockedRequest.mockResolvedValueOnce([]);
    await safelyCallApi();

    expect(MockedRequest).toBeCalledWith("/api/vehicles.json");
  });

  it("Should traverse and make further api calls on main results", async () => {
    expect.assertions(3);

    MockedRequest.mockResolvedValueOnce([
      { apiUrl: "/api/vehicle_ftype.json" },
      { apiUrl: "/api/vehicle_xj.json" },
    ] as VehicleOverview[]);

    MockedRequest.mockResolvedValueOnce({
      id: "ftype",
      price: "£36,000",
    } as VehicleDetails);

    MockedRequest.mockResolvedValueOnce({
      id: "xj",
      price: "£40,000",
    } as VehicleDetails);

    await safelyCallApi();

    expect(MockedRequest).toBeCalledWith("/api/vehicles.json");
    expect(MockedRequest).toBeCalledWith("/api/vehicle_ftype.json");
    expect(MockedRequest).toBeCalledWith("/api/vehicle_xj.json");
  });

  it("Should ignore failed API calls during traversing", () => {
    MockedRequest.mockResolvedValueOnce([
      { apiUrl: "/api/vehicle_ftype.json" },
      { apiUrl: "/api/vehicle_xj.json" },
    ] as VehicleOverview[]);

    MockedRequest.mockResolvedValueOnce({
      id: "ftype",
      price: "£36,000",
    } as VehicleDetails);

    MockedRequest.mockRejectedValueOnce("An error occurred");

    expect(safelyCallApi()).resolves.toEqual([
      {
        // Think there is a mistake in the original test here.
        // ApiURL is not supposed to be part of the VehicleDetails object
        // apiUrl: "/api/vehicle_ftype.json",
        id: "ftype",
        price: "£36,000",
      },
    ]);
  });

  it("Should ignore vehicles without valid price during traversing", () => {
    MockedRequest.mockResolvedValueOnce([
      { apiUrl: "/api/ftype.json" },
      { apiUrl: "/api/xe.json" },
      { apiUrl: "/api/xj.json" },
    ] as VehicleOverview[]);

    MockedRequest.mockResolvedValueOnce({
      id: "ftype",
      price: "",
    } as VehicleDetails);

    MockedRequest.mockResolvedValueOnce({ id: "xe" } as VehicleDetails);

    MockedRequest.mockResolvedValueOnce({
      id: "xj",
      price: "£40,000",
    } as VehicleDetails);

    return expect(safelyCallApi()).resolves.toEqual([
      {
        // Think there is a mistake in the original test here.
        // ApiURL is not supposed to be part of the VehicleDetails object
        // apiUrl: "/api/xj.json",
        id: "xj",
        price: "£40,000",
      },
    ]);
  });
});

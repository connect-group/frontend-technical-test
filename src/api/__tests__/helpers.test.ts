import { ApiUrl } from "@types";
import { request } from "@api/helpers";

global.fetch = jest.fn();

const MockedFetch = jest.mocked(global.fetch);

describe("request tests", () => {
  beforeEach(() => {
    MockedFetch.mockClear();
  });

  it("should resolve with the correct payload", async () => {
    const apiUrl: keyof ApiUrl = "/api/vehicles.json";
    const jsonResult = { foo: true };

    const jsonMock = jest.fn().mockResolvedValue(jsonResult);

    // TODO: Use jest-mock-fetch or even better axios
    MockedFetch.mockResolvedValue({ json: jsonMock } as unknown as Response);

    const result = await request(apiUrl);

    expect(result).toEqual(jsonResult);
  });
});

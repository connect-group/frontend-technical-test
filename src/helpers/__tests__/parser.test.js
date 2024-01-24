import { parser } from "../parser";

describe("parser Tests", () => {
  it("Should return correct output for given correctly formatted input", () => {
    const mockTemplate = {
      template: "CO2 Emissions $value g/km",
      value: 234,
    };

    const actual = parser(mockTemplate);
    const expected = "CO2 Emissions 234 g/km";

    return expect(actual).toBe(expected);
  });

  it("Should return output with unreplaced placeholders if they are not listed in input object", () => {
    const mockTemplate = {
      template: "CO2 Emissions $value g/km. Speed $speed",
      value: 123,
    };

    const actual = parser(mockTemplate);
    const expected = "CO2 Emissions 123 g/km. Speed $speed";

    return expect(actual).toBe(expected);
  });

  it("Should return undefined, if input is not an object or an object does not contain template key", () => {
    expect.assertions(8);
    expect(
      parser({
        value: 123,
      })
    ).toBe(undefined);
    expect(parser({})).toBe(undefined);
    expect(parser(undefined)).toBe(undefined);
    expect(parser(undefined)).toBe(undefined);
    expect(parser(NaN)).toBe(undefined);
    expect(parser(100)).toBe(undefined);
    expect(parser("string")).toBe(undefined);
    expect(parser([])).toBe(undefined);
  });
});

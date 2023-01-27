module.exports = {
  testEnvironment: "jest-environment-jsdom",
  roots: ["<rootDir>/src"],
  moduleNameMapper: {
    "\\.(scss)$": "<rootDir>/src/__mocks__/styleMock.js",
  },
};

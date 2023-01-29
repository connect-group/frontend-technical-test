module.exports = {
  testEnvironment: "jest-environment-jsdom",
  roots: ["<rootDir>/src"],
  moduleNameMapper: {
    "\\.(scss)$": "<rootDir>/src/__mocks__/styleMock.js",
    "^@api(.*)$": "<rootDir>/src/api/$1",
    "^@components(.*)$": "<rootDir>/src/components/$1",
    "^@hooks(.*)$": "<rootDir>/src/hooks/$1",
    "^@utils(.*)$": "<rootDir>/src/utils/$1",
  },
};

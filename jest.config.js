module.exports = {
    moduleNameMapper: {
      "\\.(scss|sass|css)$": "identity-obj-proxy"
    },
    testMatch: [
      '(/test/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
      '**/?(*.)+(spec|test).[tj]s?(x)',
    ],
    transform: {
      '^.+\\.[t|j]sx?$': 'babel-jest',
      
    },
    preset: 'ts-jest',
   
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',
      },
    },
  };
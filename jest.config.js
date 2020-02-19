// https://jestjs.io/docs/en/configuration
module.exports = {
  verbose: true,
  testTimeout: 30 * 1000,
  testRegex: [/\.spec.js/],
  //preset: "jest-puppeteer",
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};

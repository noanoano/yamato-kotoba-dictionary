import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  reporters: [
    'default',
    ['jest-html-reporters', { filename: 'jest.html', publicPath: '__reports__' }],
  ],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1"
  },
  coverageDirectory: "__coverage__",
};

export default createJestConfig(config);


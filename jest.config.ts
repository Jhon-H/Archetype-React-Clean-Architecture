/** @type {import('jest').Config} */
export default {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  preset: 'ts-jest/presets/default-esm',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.app.json',
      useESM: true,
    },
  },

  // Path aliases
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a)$': '<rootDir>/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // Coverage
  coveragePathIgnorePatterns: ['node_modules'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  coverageReporters: ['lcov'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
};

module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts'],
  testEnvironment: 'node',
  testRunner: 'jest-circus/runner',
  transform: {
    '^.+\\.ts$': 'babel-jest',
  },
  collectCoverage: false,
  projects: [
    {
      displayName: 'automatic-releases',
      testRegex: '__tests__',
      testPathIgnorePatterns: ['__tests__/payloads', '__tests__/utils/', '__tests__/assets'],
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    },
  ],
  coverageReporters: ['text'],
  collectCoverageFrom: [
    '**/**/*.ts',
    '!**/src/index.ts',
    '!**/src/uploadReleaseArtifacts.ts',
    '!**/__tests__/**',
    '!**/dist/**',
  ],
};

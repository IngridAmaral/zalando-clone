module.exports = {
  preset: 'ts-jest',
  roots: [
    '<rootDir>/src',
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
  ],
  moduleDirectories: [
    'node_modules',
  ],
  setupFiles: [
    './setupTests.js',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/fileTransformer.js',
  },
};

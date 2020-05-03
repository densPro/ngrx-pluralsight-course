module.exports = {
  preset: 'jest-preset-angular',
  roots: ['src'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  transformIgnorePatterns: ['^.+\\.js$']
};

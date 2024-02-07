module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[jt]sx?$': 'ts-jest'
  },
  moduleNameMapper: {
    'react-leaflet': '<rootDir>/src/test/mocks/reactLeafletMock.js',
    '\\.(css|less)$': '<rootDir>/src/test/mocks/styleMock.js'
  }
}

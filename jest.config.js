
module.exports = {
  // jsdom用js实现了一套 Node.js 环境下的 Web 标准 API
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    './tests/jest-setup.ts'
  ],
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  }
};

module.exports = function(wallaby) {
  const wallabyYoshi = require('yoshi/config/wallaby-jest')(wallaby);
  wallabyYoshi.tests = ['src/**/*.spec.js', '!test/export-components.spec.js'];
  wallabyYoshi.files.push({ pattern: 'test/types/**/*.*', ignore: true });
  wallabyYoshi.files.push({ pattern: 'src/**/*.tsx', ignore: true });
  return wallabyYoshi;
};

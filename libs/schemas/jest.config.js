module.exports = {
  name: 'schemas',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/schemas',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

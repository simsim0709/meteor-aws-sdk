Package.describe({
  summary: 'SDK for AWS services including Amazon S3, Amazon EC2, DynamoDB, and Amazon SWF',
  version: '2.4.9_1',
  name: 'thelohoadmin:aws-sdk-server',
  git: 'https://github.com/simsim0709/meteor-aws-sdk-server.git',
});

Npm.depends({
  'aws-sdk': '2.4.9',
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.0.3.2');
  api.use(['peerlibrary:blocking@0.5.2', 'underscore'], 'server');

  api.export('AWS', 'server');

  api.add_files([
    'server.js',
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['thelohoadmin:aws-sdk-server', 'tinytest', 'test-helpers'], 'server');
  api.add_files('server-tests.js', 'server');
});

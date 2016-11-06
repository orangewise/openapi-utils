var test = require('tape');
var openapiUtils = require('../.');

test('functions should be available in module', function (t) {
  t.plan(1);
  t.equal(typeof openapiUtils.pathForUri, 'function', 'pathForUri is a function');
  t.end();
});

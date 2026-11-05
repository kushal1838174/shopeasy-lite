const assert = require('assert');
const app = require('./app');

try {
  assert.strictEqual(typeof app, 'function');
  console.log('✓ All tests passed successfully!');
  process.exit(0);
} catch (err) {
  console.error('✗ Test failed:', err.message);
  process.exit(1);
}
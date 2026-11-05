const test = require('node:test');
const assert = require('node:assert');
const app = require('./app');

test('ShopEasy Lite App module loads properly', () => {
  assert.strictEqual(typeof app, 'function');
});
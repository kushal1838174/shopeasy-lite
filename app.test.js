const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('should return 200 OK and correct greeting', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Welcome to ShopEasy Lite!');
  });
});
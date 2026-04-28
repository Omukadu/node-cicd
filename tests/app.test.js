const request = require("supertest");
const app = require("../app");

test("GET / returns 200", async () => {
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(200);
});

test("GET /unknown returns 404", async () => {
  const res = await request(app).get("/unknown");
  expect(res.statusCode).toBe(404);
});
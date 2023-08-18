const express = require("express");
// const request = require("supertest");

const login = require("./login");

const app = express();

app.post("/api/users/login", login);

describe("test login controller", () => {
  //   beforeAll(() => app.listen(3000));
  //   afterAll(() => app.close());

  test("відповідь повина мати статус-код 200", () => {
    return request(app)
      .post("/api/users/login")
      .send({
        email: "test15@email.com",
        password: "123456",
      })
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });

  test("у відповіді повинен повертатися токен", () => {});

  test("у відповіді повинен повертатися об'єкт user з 2 полями email и subscription з типом даних String", () => {});
});

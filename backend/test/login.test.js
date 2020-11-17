const chai = require("chai");
const should = chai.should();
const chaiHttp = require("chai-http");
const faker = require("faker");
const db = require("../database/mongodb.js");
const { app, server } = require("../app.js");
const baseUrl = "localhost:5000/";

chai.use(chaiHttp);

describe("Login service", () => {
  before("Generating test data", () => {
    this.userData1 = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: "test"
    };

    this.userData2 = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: "test"
    };
  });

  before("Cleaning DB", async () => {
    await db.collection("users").deleteMany();
    await db.collection("users").insertOne(this.userData2);
  });

  describe("When a new user registers", () => {
    it("should create a new user and return OK", async () => {
      const res = await chai
        .request(app)
        .post("/users/register")
        .send(this.userData1);

      res.status.should.equal(200);
    });
  });

  describe("When a registed user attempts to login", () => {
    it("should return OK with userData including token", async () => {
      const res = await chai
        .request(app)
        .post("/users/login")
        .send({
          email: this.userData1.email,
          password: this.userData1.password
        });

      res.status.should.equal(200);
      res.body.data.should.have("data");
    });
  });

  context("When an unregistered user attempts to login", () => {
    it("should return error", async () => {
      const res = await chai
        .request(app)
        .post("/users/login")
        .send({
          email: "unregistered@test.com",
          password: "unregistered"
        });

      res.status.should.equal(500);
    });
  });

  context("When the email is already registered", () => {
    it("should return conflict", async () => {
      const res = await chai
        .request(app)
        .post("/users/register")
        .send(this.userData2);

      res.status.should.equal(409);
    });
  });
});

after("Teardown server", done => {
  server.close();
  done();
});

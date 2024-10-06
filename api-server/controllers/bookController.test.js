const request = require("supertest");
const server = require("../server");

describe("POST /books", () => {
  test("should create a book", async () => {
    return request(server)
      .post("/books")
      .send({
        title: "Spiderman Comic",
        description: "Great comic of the year",
      })
      .expect(200);
  });
});

describe("PUT /books/:id", () => {
  test("should update a book", async () => {
    return request(server)
      .put("/books/3")
      .send({
        title: "Avenger",
        description: "Best comic ever",
      })
      .expect(200);
  });

  test("should return 404 if passing an invalid id", async () => {
    return request(server)
      .put("/books/4")
      .send({
        title: "Avenger",
        description: "Best comic ever",
      })
      .expect(404);
  });
});

describe("GET /books", () => {
  test("should return a list of books", async () => {
    return request(server)
      .get("/books")
      .expect(200)
      .then((res) => {
        expect(res.body).toStrictEqual([
          {
            id: 1,
            title: "Lord of the Ring",
            description: "One of the best selling in 2020",
          },
          {
            id: 2,
            title: "Harry Potter",
            description: "Most recommended for teenages",
          },
          {
            id: 3,
            title: "Naruto",
            description: "One of the trending manga series now",
          },
        ]);
      });
  });
});

describe("GET /books/:id", () => {
  test("should create a book", async () => {
    return request(server)
      .get("/books/1")
      .expect(200)
      .then((res) => {
        expect(res.body).toStrictEqual({
          id: 1,
          title: "Lord of the Ring",
          description: "One of the best selling in 2020",
        });
      });
  });

  test("should return 404 if passing an invalid id", async () => {
    return request(server).get("/books/4").expect(404);
  });
});

describe("DELETE /books/:id", () => {
  test("should create a book", async () => {
    return request(server).delete("/books/1").expect(200);
  });

  test("should return 404 if passing an invalid id", async () => {
    return request(server).delete("/books/4").expect(404);
  });
});

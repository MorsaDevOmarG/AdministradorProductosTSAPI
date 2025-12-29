import request from "supertest";
import server from "../../server";

describe("POST /api/products", () => {
  it("should create a new product", async () => {
    const response = await request(server)
      .post("/api/products")
      // send: es lo que vamos a pasarle
      .send({
        name: "Test Product",
        price: 19.99,
      });
    
    expect(response.status).toEqual(201);
    expect(response.body).toHaveProperty('data');
    expect(response.status).not.toBe(404);
    expect(response.status).not.toBe(200);
    expect(response.body).not.toHaveProperty('error');

  });
});

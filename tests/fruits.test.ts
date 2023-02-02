import app from "app";
import { FruitInput } from "services/fruits-service";
import supertest from "supertest";

const api = supertest(app);

describe("fruits test", () => {
    it("testando get all", async () => {
        const resultado = await api.get('/fruits');
        console.log(resultado)
    })
})

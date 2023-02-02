import app from "app";
import { FruitInput } from "services/fruits-service";
import supertest from "supertest";

const api = supertest(app);

describe("fruits test", () => {
    it("testing createFruit", async () => {
        const body: FruitInput = {
            name: "Banana",
            price: 10
        }
        const resultado = await api.post('/fruits').send(body);
        expect(resultado.status).toBe(201);
        console.log(resultado.status);
    })

    it("testing getAllFruits", async () => {
        const resultado = await api.get('/fruits');
        expect(resultado.status).toBe(200);
        console.log(resultado.status);
    })

    it("testing getSpecificFruit", async () => {
        const params = {
            id: 1,
        }
        const resultado = await api.get(`/fruits/${params.id}`);
        expect(resultado.status).toBe(200);
        console.log(resultado.status);
    })
})

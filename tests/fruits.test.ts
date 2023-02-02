import app from "app";
import { FruitInput } from "services/fruits-service";
import supertest from "supertest";

const api = supertest(app);

describe("fruits test", () => {
    it("testando getAllFruits", async () => {
        const resultado = await api.get('/fruits');
        console.log(resultado)
    })

    it("testando createFruit", async () => {
        const body: FruitInput = {
            name: "Banana",
            price: 10
        }
        const resultado = await api.post('/fruits').send(body);
        console.log(resultado)
    })
})

// const request = require("supertest");
// const appRoute = require("../../../index.ts");

// describe("POST /v1/cars/create", () => {
//   test("should create car with response status 201", async () => {
//     const id_car_brand = 12345;
//     const name = "test123";

//     await request(appRoute)
//       .post("/v1/cars/create")
//       .send({id_car_brand, name})
//       .set("Content-Type", "application/json")
//       .then((res: any)=> {
//         console.log({res});
//         expect(res.statusCode).toBe(201)
//       })
//   },);
// });


const request = require("supertest");
const appRoute = require("../../../index")

describe("POST /v1/cars/create", ()=> {
    test("should create car w/ response status 201", async () => {
        const mockDataReBody = {
            id_car_brand: 12345, 
            name: "dsfksdlfknsd"
        }

        await request(appRoute)
            .post("/v1/cars/create")
            .send(mockDataReBody)
            .set("Content-Type", "application/json")
            .then((res: any)=> {
                expect(res.statusCode).toBe(201);
            })
    })
})


describe("GET /v1/cars/getAll", ()=> {
    //... 
})
const carsController = require("./../carsControllers");
import CarService from "./../../services/cars";
const carBrand = [
  { id_car_brand: 1, name: "TOYOTA" },
  { id_car_brand: 2, name: "MITSUBISHI" },
  { id_car_brand: 3, name: "PROTON" },
];

// jest.mock("../../repositories/cars.ts")

// jest.mock("./../../services/cars", ()=> {
//   jest.fn().mockImplementation(()=> {
//     getAll: jest.fn().mockReturnValue(carBrand)
//   })
// })

describe("CarsController", () => {
  describe("handleGetCars", () => {
    test.skip("should return status 200 with data car list", async () => {
      const name = "Hello";
      const prompt = "World";
      

      const mockRequest = {
        body: {
          name,
          prompt,
        },
      };

      const car = new CarService();
      // @ts-ignore
      jest.spyOn(car, "getAll").mockImplementation(() => Promise.resolve(carBrand))
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };

      await carsController.get(mockRequest, mockResponse);
      expect(mockResponse.json).toHaveBeenCalled();
      // expect(car.getAll).toHaveBeenCalled()
    });

    test.todo("should return status 404 when error happen");
  });

  describe("handle getById Car", () => {});
  describe("handle delete", () => {});
  describe("update", () => {});
});

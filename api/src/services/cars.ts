import CarRepository from "../repositories/cars";

export default class CarService {
    #carRepository: CarRepository;

    constructor(){
        this.#carRepository = new CarRepository();
    }

   async getAll(){
        return await this.#carRepository.getAll();
    }

    async getById(){
        // ...
    }

    async post(){
        // ...
    }

    async delete(){
        // ...
    }

    async update(){
        // ...
    }

    // ...
}
import { CarBrandsModel } from "../models/CarBrands"

export default class CarRepository {
    async getAll(){
        return await CarBrandsModel.query() || [];
    }

    async post(req: Request) {
        const reqBody = req.body;
        //@ts-ignore
       
        const id_car_brand = reqBody.id
       
        //@ts-ignore
        const name = reqBody?.name
        
        return await CarBrandsModel.query().insert({id_car_brand, name}).returning("*");
    }

    async getById(){
        // ...
    }

    async update(){
        // ...
    }

    async delete(){
        // ...
    }
}

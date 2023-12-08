import {Model, ModelObject} from "objection";

export class CarBrandsModel extends Model {
    id_car_brand!:number;
    name!: string;

    static get tableName(){
        return "car_brands";
    }
}


export type CarBrands = ModelObject<CarBrandsModel>
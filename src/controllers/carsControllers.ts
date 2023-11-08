import { CarBrandsModel } from "../models/CarBrands";

const Request  = require("express").Request;
const Response  = require("express").Response;
const {v4: uuidv4} = require("uuid")
const carListData = require("./../models/dummyData")

//  
const get = async (req:Request, res: Response)=> { 
    const getCarBrands = await CarBrandsModel.query() || [];
    //@ts-ignore
    res.status(200).json(getCarBrands);
}

const post = async (req: Request, res: Response)=> {
    const reqBody = req.body;
    //@ts-ignore
   
    const id_car_brand = reqBody.id
   
    //@ts-ignore
    const name = reqBody?.name
    
    const postCar = await CarBrandsModel.query().insert({id_car_brand, name}).returning("*");
    // const newId = uuidv4().number;
    //@ts-ignore

    return res.json(postCar);



//@ts-ignore
    // const newCarList = [...carListData, newObjCarWithId]
   
}

const getById = async (req:Request, res:Response) => {
    //@ts-ignore
    const id = Number(req.params.id);
    const getData = await CarBrandsModel.query().where("id_car_brand", id).throwIfNotFound()
    //@ts-ignore
    return res.json(getData);
}


const deleteById = async (req:Request, res: Response) => {
         //@ts-ignore

    const reqParam  = req.params;
    const id_car_brand = Number(reqParam.id);

    const deleteData  = await CarBrandsModel.query().where("id_car_brand", id_car_brand).del();

         //@ts-ignore
        return res.json({
            status: 'OK', 
            message: deleteData
        });
}

const updateById = async (req:Request, res: Response) => {
    const reqBody = req.body;
     //@ts-ignore
    const reqParam  = req.params;
    //@ts-ignore
   
    const id_car_brand = Number(reqParam.id)
   
    //@ts-ignore
    const name = reqBody?.name
 //@ts-ignore
    const update  = await CarBrandsModel.query().where("id_car_brand", '=', id_car_brand).update({name})
      //@ts-ignore
    
    return res.json(update);
}

module.exports = {
    get, 
    getById, 
    post, 
    deleteById, 
    updateById
}
import { CarBrandsModel } from "../models/CarBrands";
import CarService from "../services/cars";

const Request = require("express").Request;
const Response = require("express").Response;
const { v4: uuidv4 } = require("uuid");

//
const get = async (req: Request, res: Response) => {
  const getAll = await new CarService().getAll();
  //   @ts-ignore
  res.status(200).json({
    message: "Success",
    data: getAll,
  });

  //   new CarService()
  //     .getAll()
  //     .then((response) => {
  //       console.log("test UT");
  //       console.log({ response });
  //       //@ts-ignore
  //       res.status(200).json({
  //         message: "success",
  //         data: response,
  //       });
  //     })
  //     .catch((err) => {
  //       //@ts-ignore
  //       res.status(404).json({
  //         message: "error",
  //         data: err,
  //       });
  //     });
};

const post = async (req: Request, res: Response) => {
  const reqBody = req.body;

  console.log({reqBody})
  //@ts-ignore

  const id_car_brand = reqBody.id;

  //@ts-ignore
  const name = reqBody?.name;

  const postCar = await CarBrandsModel.query()
    .insert({ id_car_brand, name })
    .returning("*");
  // const newId = uuidv4().number;
  //@ts-ignore

  return res.status(201).json(postCar);

  //@ts-ignore
  // const newCarList = [...carListData, newObjCarWithId]
};

const getById = async (req: Request, res: Response) => {
  //@ts-ignore
  const id = Number(req.params.id);

  try {
    const getData = await CarBrandsModel.query().where("id_car_brand", id);
    // @ts-ignore
    return res.json(getData);
  } catch (error) {
    // @ts-ignore
    return res.json(error);
  }

  // CarBrandsModel.query().where("id_car_brand", id).then((response)=> {
  //     //@ts-ignore
  //     return res.json(response)
  // })
  // .catch((err)=> {
  //      //@ts-ignore
  //     return res.status(404).json({
  //         status: "Error",
  //         message: "not found"
  //     })
  // })
};

const deleteById = async (req: Request, res: Response) => {
  //@ts-ignore

  const reqParam = req.params;
  const id_car_brand = Number(reqParam.id);

  const deleteData = await CarBrandsModel.query()
    .where("id_car_brand", id_car_brand)
    .del();

  //@ts-ignore
  return res.json({
    status: "OK",
    message: deleteData,
  });
};

const updateById = async (req: Request, res: Response) => {
  const reqBody = req.body;
  //@ts-ignore
  const reqParam = req.params;
  //@ts-ignore

  const id_car_brand = Number(reqParam.id);

  //@ts-ignore
  const name = reqBody?.name;
  //@ts-ignore
  const update = await CarBrandsModel.query()
    .where("id_car_brand", "=", id_car_brand)
    .update({ name });
  //@ts-ignore

  return res.json(update);
};

module.exports = {
  get,
  getById,
  post,
  deleteById,
  updateById,
};

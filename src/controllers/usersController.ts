import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import UserService from "../services/users";
import { NextApiHandler } from "next";

const {v4: uuidv4} = require("uuid");
const  encryptPassword = require("./../utilities/encryptPassword")
const  checkPassword = require("./../utilities/checkPassword")

interface UserPayload {
    email: string
    password?: string
}

const createToken = (payload: UserPayload) => {
    return jwt.sign(payload, process.env.SIGNATURE_KEY || "Rahasia")
} 

// add new user to user table database;
const register = async (req: Request, res: Response)=> {
    const email = req.body.email;
    const password = req.body.password || "";
    
    // encrypting sudah bisa teman2 implementasikan
    const encryptedPassword = await encryptPassword(password);
    
    // silahkan teman2 explore lebih lanjut seputar database creation new row in table users
    await new UserService().post({email, password: encryptedPassword})

    // silahkan explore untuk condition jika register gagal maka akan return json xxxxxx. 
    return res.json({
      message: "success", 
    })
}

// do some checkings based on email and password encrypted compared to pass unencrypted;
const login  =  async (req:Request, res: Response) => {
    const email = req.body.email.toLowerCase().trim();
    const password = req.body.password || "";

    // to check whether user email exists in db or not;
    const user = await new UserService().get({email});

    if(!user){
        return res.status(404).json({
            message: "Email is not exist, try another one!", 
            data: []
        })
    }

    const passwordChecked = await checkPassword(user.password, password)

    if(!passwordChecked){
        return res.status(401).json({
            message: "Password is wrong, try again!", 
            data: []
        })
    }

    const token = createToken({
        // @ts-ignore
        user_id: user.user_id,
        email: user.email, 
    })

    return res.status(200).json({
        status: 200,
        message: "Successfully Logged In",
        token
    })

    // get user by email; 
    // if not found return 404 err;
    // if true, check password in payload with pass in db, in checkPassword. 
    // if true, return data user logged In.
}


// get user currently logged In, monggo bikin sendiri;
 // @ts-ignore
const getUserProfile =  (req:Request, res) => {
     // @ts-ignore
    res.status(200).json(req.user)
}

//
const authorize = async (req:Request, res:Response, next: unknown) => {
    try {
    const bearerToken = req.headers.authorization;
    const token = bearerToken?.split("Bearer ")?.[1] || "";
    const tokenPayload = jwt.verify(token, process.env.SIGNATURE_KEY || "Rahasia");
    console.log({bearerToken, token, tokenPayload})

    // @ts-ignore
    req.user = await new UserService().getById(tokenPayload.user_id);
     // @ts-ignore
    next()
    } catch (error) {
           res.status(401).json({
            message: "Unauthorized"
           }) 
    }``
}


module.exports = {
    register, 
    login,
    getUserProfile, 
    authorize
}
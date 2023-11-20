import { Request, Response } from "express";
import UserService from "../services/users";

const {v4: uuidv4} = require("uuid");
const  encryptPassword = require("./../utilities/encryptPassword")
const  checkPassword = require("./../utilities/checkPassword")

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

    return res.status(200).json({
        status: 200,
        message: "Successfully Logged In",
    })

    // get user by email; 
    // if not found return 404 err;
    // if true, check password in payload with pass in db, in checkPassword. 
    // if true, return data user logged In.
}


// get user currently logged In, monggo bikin sendiri;
const getUserProfile = async () => {
    return await new Promise(()=> {});
}


module.exports = {
    register, 
    login,
    getUserProfile
}
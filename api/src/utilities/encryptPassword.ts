import { Request, Response } from "express";
const bcrypt = require("bcryptjs");
const salt = 10;

function encryptPassword(pass: string){
    return new Promise((resolve, reject)=> {
        bcrypt.hash(pass, salt, (err: Error, passEncrypted: string)=> {
            if(err){
                reject(err);
                return;
            }

            resolve(passEncrypted)
        })
    })
}

module.exports = encryptPassword;
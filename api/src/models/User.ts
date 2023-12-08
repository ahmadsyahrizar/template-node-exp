import {Model, ModelObject} from "objection";

export class UserModel extends Model {
    email!: string;
    password!: string;

    static get tableName(){
        return "users"
    }
};
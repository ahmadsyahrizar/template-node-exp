import UserRepository from "../repositories/users";

interface Payload {
    email: string; 
    password?: string;
}


/**
 * class untuk kebutuhan database connection
 */

export default class UserService {
    #userRepository: UserRepository;

    constructor(){
        this.#userRepository = new UserRepository();
    }


    async post(param: Payload){
        return await this.#userRepository.post(param);
    }

    async get(param: Payload){
        const email = param.email || "";
        return await this.#userRepository.get(email)
    }
}
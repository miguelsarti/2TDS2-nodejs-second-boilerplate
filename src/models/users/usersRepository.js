import User from "./User.js";

class UsersRepository {
    constructor() {
        this.users = [];
    }

    getAllUsers() {
        return this.users;
    }
}

export default UsersRepository;
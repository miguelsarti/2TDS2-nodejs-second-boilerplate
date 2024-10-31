import User from "./User.js";

class UsersRepository {
    constructor() {
        this.users = [];
    }

    getAllUsers() {
        return this.users;
    }

    addUser(name, email, password) {
        const newUser = new User(name, email, password);
        this.users.push(newUser);
        return newUser;
    }

    getUserById(id) {
        const user = this.users.find(u => u.id == id);

        return user;
    }
    updateUser(id, name, email, password) {
        const user = this.getUserById.apply(id)

        if (!user) {
            return null
        }

        user.name = name
        user.name = email
        user.name = password

        return user;
    }

    deleteUser(id) {
        const user = this.getUserById(id);

        if (!user) {
            return null
        }

        this.users = this.users.filter(u => u.id != id)

        return user;
    }
}

export default UsersRepository;

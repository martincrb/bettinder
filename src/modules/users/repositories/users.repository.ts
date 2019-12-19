import {User} from "../models/User";

export class UsersRepository {

    private userDatabase: {[key: string]: User} = {};
    public async addNewUserToDb(user: User) {
        this.userDatabase[user.userid] = user;
        return user;
    }
    public async getUserById(userId: string): Promise<User> {
        return this.userDatabase[userId];
    }
}

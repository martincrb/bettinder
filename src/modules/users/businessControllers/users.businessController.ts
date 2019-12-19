import {User} from "../models/User";
import {UsersRepository} from "../repositories/users.repository";

export class UsersBusinessController {
    private userRepository: UsersRepository;

    constructor(userRepository: UsersRepository = new UsersRepository()) {
        this.userRepository = userRepository;
    }
    public createNewUser(user: User): Promise<User> {
        return this.userRepository.addNewUserToDb(user);
    }

    public getUserById(userid: string): Promise<User> {
        return this.userRepository.getUserById(userid);
    }
}

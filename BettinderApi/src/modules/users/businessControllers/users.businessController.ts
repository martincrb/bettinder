import {User} from "../models/User";
import {UsersRepository} from "../repositories/users.repository";

export class UsersBusinessController {
    private userRepository: UsersRepository;

    constructor(userRepository: UsersRepository = new UsersRepository()) {
        this.userRepository = userRepository;
    }
    public async createNewUser(user: User): Promise<User> {
        this.userRepository.addNewUserToDb(user);
        return user;
    }

    public async getUserById(userid: string): Promise<User> {
        return this.userRepository.getUserById(userid);
    }

    public async getUserProposals(userid: string): Promise<User[]> {
        return this.userRepository.getUserProposals(userid);
    }
}

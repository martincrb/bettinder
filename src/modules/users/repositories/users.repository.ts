import { Client } from "pg";
import App from "../../../app";
import {User} from "../models/User";

export class UsersRepository {

    private userDatabase: {[key: string]: User} = {};
    private client: Client = new Client();

    public async addNewUserToDb(user: User) {
        this.userDatabase[user.userid] = user;
        const result = await App.retrieveDbClient().query("INSERT INTO users (userid) VALUES ($1)", [user.userid]);
        return result;
    }
    public async getUserById(userId: string): Promise<User> {
        // return this.userDatabase[userId];
        await this.client.connect();
        const queryRes = await App.retrieveDbClient().query<User>("SELECT * FROM users WHERE userid = $1", [userId]);
        return queryRes.rows[0];
    }

    public async getUserProposals(userId: string): Promise<User[]> {
        // return this.userDatabase[userId];
        await this.client.connect();
        const queryRes = await App.retrieveDbClient().query<User>("SELECT * FROM users WHERE userid != $1", [userId]);
        return queryRes.rows;
    }
}

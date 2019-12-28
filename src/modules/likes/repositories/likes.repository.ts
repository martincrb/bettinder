import App from "../../../app";
import {Like} from "../models/Like";

export class LikesRepository {

    private likes: {[key: string]: Like[]} = {};

    public async addLike(fromUser: string, toUser: string) {
        console.log(fromUser, toUser);
        const result = await App.retrieveDbClient().query(
            "INSERT INTO likes (fromUser, toUser) VALUES ($1, $2)",
            [fromUser, toUser]);
        if (this.likes[fromUser]) {
            this.likes[fromUser].push(new Like(fromUser, toUser));
        } else {
            this.likes[fromUser] = [new Like(fromUser, toUser)];
        }
    }

    public async getLikesFromUser(user: string): Promise<Like[]> {
        const result = await App.retrieveDbClient().query<Like>(
            "SELECT * FROM likes WHERE fromUser = $1",
            [user]
        );
        console.log("returning likes", result.rows);
        return result.rows || [];
        // return this.likes[user] || [];
    }
}

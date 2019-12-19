import {Like} from "../models/Like";

export class LikesRepository {

    private likes: {[key: string]: Like[]} = {};

    addLike(fromUser: string, toUser: string) {
        if (this.likes[fromUser]) {
            this.likes[fromUser].push(new Like(fromUser, toUser));
        } else {
            this.likes[fromUser] = [new Like(fromUser, toUser)];
        }
    }

    async getLikesFromUser(user: string): Promise<Like[]> {
        return this.likes[user] || [];
    }
}
import {MatchesBusinessController} from "../../matches/businessControllers/matches.businessController";
import {Like} from "../models/Like";
import {LikesRepository} from "../repositories/likes.repository";

export class LikesBusinessController {
    private likesRepo: LikesRepository;
    private matchesController: MatchesBusinessController;

    constructor(likesRepo: LikesRepository = new LikesRepository(),
                matchesController: MatchesBusinessController = new MatchesBusinessController()) {
        this.likesRepo = likesRepo;
        this.matchesController = matchesController;
    }
    public async addLike(fromUser: string, toUser: string) {
        this.likesRepo.addLike(fromUser, toUser);

        // check toUser likes for an appearance of fromUser to create a Match if it exists
        const toUserLikes = await this.likesRepo.getLikesFromUser(toUser);
        console.log("Likes as model?", toUserLikes);
        if (toUserLikes.filter((like: Like) => like.touser === fromUser).length > 0) {
            // Both ways like 🤭
            this.matchesController.addMatch(fromUser, toUser);
        }
    }

    public async getLikesFromUser(user: string) {
        return this.likesRepo.getLikesFromUser(user);
    }
}

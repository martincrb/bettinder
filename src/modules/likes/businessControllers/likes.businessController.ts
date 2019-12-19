import {LikesRepository} from "../repositories/likes.repository";
import {Like} from "../models/Like";
import {MatchesBusinessController} from "../../matches/businessControllers/matches.businessController";

export class LikesBusinessController {
    private likesRepo: LikesRepository;
    private matchesController: MatchesBusinessController;

    constructor(likesRepo: LikesRepository = new LikesRepository(), matchesController: MatchesBusinessController = new MatchesBusinessController()) {
        this.likesRepo = likesRepo;
        this.matchesController = matchesController;
    }
    async addLike(fromUser: string, toUser: string) {
        this.likesRepo.addLike(fromUser, toUser);

        //check toUser likes for an appearance of fromUser to create a Match if it exists
        let toUserLikes = await this.likesRepo.getLikesFromUser(toUser);
        if (toUserLikes.filter((like: Like) => like.likeTo === fromUser).length > 0) {
            //Both ways like 🤭
            this.matchesController.addMatch(fromUser, toUser);
        }
    }

    async getLikesFromUser(user: string) {
        return this.likesRepo.getLikesFromUser(user);
    }
}
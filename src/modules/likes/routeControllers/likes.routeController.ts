import {Request, Response} from "express";
import {LikesBusinessController} from "../businessControllers/likes.businessController";

export class LikesRouteController {
    private likesBusiness: LikesBusinessController;

    constructor(likesBusiness: LikesBusinessController = new LikesBusinessController()) {
        this.likesBusiness = likesBusiness;
    }

    addLike(req: Request, res: Response) {
        let fromUser = req.body.from;
        let toUser = req.body.to;
        this.likesBusiness.addLike(fromUser, toUser);
    }
}
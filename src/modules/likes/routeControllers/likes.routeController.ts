import {Request, Response} from "express";
import {LikesBusinessController} from "../businessControllers/likes.businessController";

export class LikesRouteController {
    private likesBusiness: LikesBusinessController;

    constructor(likesBusiness: LikesBusinessController = new LikesBusinessController()) {
        this.likesBusiness = likesBusiness;
    }

    public addLike = async (req: Request, res: Response) => {
        const fromUser = req.body.from;
        const toUser = req.body.to;
        this.likesBusiness.addLike(fromUser, toUser);
        res.status(200).send({});
    }
}

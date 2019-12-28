import {Request, Response} from "express";
import {MatchesBusinessController} from "../businessControllers/matches.businessController";

export class MatchesRouteController {
    private matchesBusiness: MatchesBusinessController;

    constructor(matchesBusiness: MatchesBusinessController = new MatchesBusinessController()) {
        this.matchesBusiness = matchesBusiness;
    }

    public getMatchesFromUser = async (req: Request, res: Response) => {
        const matches = await this.matchesBusiness.getMatchesByUser(req.body.userid);
        res.status(200).send({matches});
    }
}

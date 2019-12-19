import {MatchesBusinessController} from "../businessControllers/matches.businessController";

export class MatchesRouteController {
    private matchesBusiness: MatchesBusinessController;

    constructor(matchesBusiness: MatchesBusinessController = new MatchesBusinessController()) {
        this.matchesBusiness = matchesBusiness;
    }
}
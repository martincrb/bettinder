
import {Express} from "express";
import {MatchesRouteController} from "./routeControllers/matches.routeController";

export class Routes {
    private routeController: MatchesRouteController;

    constructor(app: Express, routeController: MatchesRouteController) {
        this.routeController = routeController;
        this.configureRoutes(app);
    }

    private configureRoutes(app: Express) {
        app.route("/matches")
            .get(this.routeController.getMatchesFromUser);
    }
}

import {Express} from "express";
import {MatchesRouteController} from "./routeControllers/matches.routeController";
import {Routes} from "./routes";

export class MatchesModule {
    public routes: Routes;

    constructor(app: Express) {
        this.routes = new Routes(app, new MatchesRouteController());
    }
}

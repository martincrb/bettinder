import {Express} from "express";
import {Routes} from "./routes";
import {MatchesRouteController} from "./routeControllers/matches.routeController";

export class MatchesModule {
    public routes: Routes;

    constructor(app: Express) {
        this.routes = new Routes(app, new MatchesRouteController());
    }
}

import {Express} from "express";
import {LikesRouteController} from "./routeControllers/likes.routeController";
import {Routes} from "./routes";

export class LikesModule {
    public routes: Routes;

    constructor(app: Express) {
        this.routes = new Routes(app, new LikesRouteController());
    }
}

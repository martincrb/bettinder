import {Express} from "express";
import {Routes} from "./routes";
import {LikesRouteController} from "./routeControllers/likes.routeController";

export class LikesModule {
    public routes: Routes;

    constructor(app: Express) {
        this.routes = new Routes(app, new LikesRouteController());
    }
}

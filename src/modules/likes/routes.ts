
import {Express} from "express";
import {LikesRouteController} from "./routeControllers/likes.routeController";

export class Routes {
    private routeController: LikesRouteController;

    constructor(app: Express, routeController: LikesRouteController) {
        this.routeController = routeController;
        this.configureRoutes(app);
    }

    private configureRoutes(app: Express) {
        app.route("/likes");
    }
}

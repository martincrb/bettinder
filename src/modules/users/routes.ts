
import {Express} from "express";
import {UsersRouteController} from "./routeControllers/users.routeController";

export class Routes {
    private routeController: UsersRouteController;

    constructor(app: Express, routeController: UsersRouteController) {
        this.routeController = routeController;
        this.configureRoutes(app);
    }

    private configureRoutes(app: Express) {
        app.route("/users")
            .post(this.routeController.addUser);
        app.route("/users/:userid")
            .get(this.routeController.getUser);
    }
}

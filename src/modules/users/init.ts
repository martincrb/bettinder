import {Express} from "express";
import {UsersRouteController} from "./routeControllers/users.routeController";
import {Routes} from "./routes";

export class UsersModule {
    public routes: Routes;

    constructor(app: Express) {
        this.routes = new Routes(app, new UsersRouteController());
    }
}

import * as bodyParser from "body-parser";
import express, {Express} from "express";
import {UsersModule} from "./modules/users/init";

class App {

    public app: Express = express();

    constructor() {
        this.config();
        this.initModules();
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private initModules() {
        const _ = new UsersModule(this.app);
    }
}

export default new App().app;

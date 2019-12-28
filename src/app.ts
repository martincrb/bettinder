import * as bodyParser from "body-parser";
import express, {Express} from "express";
import {Client} from "pg";
import {LikesModule} from "./modules/likes/init";
import {MatchesModule} from "./modules/matches/init";
import {UsersModule} from "./modules/users/init";

class App {

    public app: Express = express();

    private dbClient: Client;

    constructor() {
        this.config();
        this.initDatabase();
        this.initModules();
    }

    public retrieveDbClient() {
        return this.dbClient;
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private async initDatabase() {
        const config = {
            database: process.env.PGDATABASE || "bettinder",
            host: process.env.PGHOST || "localhost",
            password: process.env.PGPASSWORD || "postgres",
            user: process.env.PGUSER || "postgres",
        };
        this.dbClient = new Client(config);
        try {
            this.dbClient.connect();
            console.log(this.dbClient);
        } catch (error) {
            console.log("DB Error", error);
        }
    }

    private initModules() {
        const uM = new UsersModule(this.app);
        const lM = new LikesModule(this.app);
        const mM = new MatchesModule(this.app);
    }

}

export default new App();

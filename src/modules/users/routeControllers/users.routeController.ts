import {Request, Response} from "express";
import {UsersBusinessController} from "../businessControllers/users.businessController";
import {User} from "../models/User";

export class UsersRouteController {
    private userBusinessController: UsersBusinessController;

    constructor(userBusinessController: UsersBusinessController = new UsersBusinessController()) {
        this.userBusinessController = userBusinessController;
    }

    public addUser = async (req: Request, res: Response) => {
        const userid = req.body.userid;
        if (!userid) { return res.status(400).send({message: "userid is mandatory"}); }
        try {
            const newUser = await this.userBusinessController.createNewUser(new User(userid));
            return res.status(200).send(newUser);
        } catch (error) {
            console.log("Error creating new user", error);
            return res.status(400).send({message: "Error creating new user: " + error});
        }
    }

    public getUserProposals = async (req: Request, res: Response) => {
        const userid = req.params.userid;
        if (!userid) { return res.status(400).send({message: "userid is mandatory"}); }
        try {
            const user = await this.userBusinessController.getUserProposals(userid);
            return res.status(200).send(user);
        } catch (error) {
            return res.status(400).send({message: error});
        }
    }

    public getUser = async (req: Request, res: Response) => {
        const userId = req.params.userid;
        try {
            const user = await this.userBusinessController.getUserById(userId);
            return res.status(200).send(user);
        } catch (error) {
            return res.status(400).send({message: error});
        }
    }
}

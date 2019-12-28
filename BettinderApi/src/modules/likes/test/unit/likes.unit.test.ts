import {expect} from "chai";
import {MatchesBusinessController} from "../../../matches/businessControllers/matches.businessController";
import {LikesBusinessController} from "../../businessControllers/likes.businessController";
import {LikesRepository} from "../../repositories/likes.repository";

describe("Like System tests", () => {
    it("Should save a like from a given user", async () => {
        const likeController = new LikesBusinessController();
        await likeController.addLike("userOne", "userTwo");
        const likes = await likeController.getLikesFromUser("userOne");
        expect(likes[0].fromuser).to.equal("userOne");
        expect(likes[0].touser).to.equal("userTwo");
    });

    it("Should save multiple likes from a given user", async () => {
        const likeController = new LikesBusinessController();
        await likeController.addLike("userOne", "userTwo");
        await likeController.addLike("userOne", "userThree");
        const likes = await likeController.getLikesFromUser("userOne");
        expect(likes[0].fromuser).to.equal("userOne");
        expect(likes[0].touser).to.equal("userTwo");
        expect(likes[1].fromuser).to.equal("userOne");
        expect(likes[1].touser).to.equal("userThree");
    });

    it("Should save a match if users like each other", async () => {
        const matchesController = new MatchesBusinessController();
        const likeController = new LikesBusinessController(new LikesRepository(), matchesController);
        await likeController.addLike("userOne", "userTwo");
        await likeController.addLike("userTwo", "userOne");
        // Usertwo likes after, so the match is created by userTwo
        let matches = await matchesController.getMatchesByUser("userOne");
        expect(matches[0].partnerOne).to.equal("userTwo");
        expect(matches[0].partnerTwo).to.equal("userOne");

        // Should return the same match for the other user
        matches = await matchesController.getMatchesByUser("userTwo");
        expect(matches[0].partnerOne).to.equal("userTwo");
        expect(matches[0].partnerTwo).to.equal("userOne");
    });
});

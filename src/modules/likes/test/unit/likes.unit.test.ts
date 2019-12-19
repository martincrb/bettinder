import {expect} from "chai";
import {LikesBusinessController} from "../../businessControllers/likes.businessController";
import {LikesRepository} from "../../repositories/likes.repository";
import {MatchesBusinessController} from "../../../matches/businessControllers/matches.businessController";

describe('Like System tests', () => {
    it('Should save a like from a given user', async () => {
        let likeController = new LikesBusinessController();
        await likeController.addLike('userOne', 'userTwo');
        let likes = await likeController.getLikesFromUser('userOne');
        expect(likes[0].likeBy).to.equal('userOne');
        expect(likes[0].likeTo).to.equal('userTwo');
    })

    it('Should save multiple likes from a given user', async () => {
        let likeController = new LikesBusinessController();
        await likeController.addLike('userOne', 'userTwo');
        await likeController.addLike('userOne', 'userThree');
        let likes = await likeController.getLikesFromUser('userOne');
        expect(likes[0].likeBy).to.equal('userOne');
        expect(likes[0].likeTo).to.equal('userTwo');
        expect(likes[1].likeBy).to.equal('userOne');
        expect(likes[1].likeTo).to.equal('userThree');
    })

    it('Should save a match if users like each other', async () => {
        let matchesController = new MatchesBusinessController();
        let likeController = new LikesBusinessController(new LikesRepository(), matchesController);
        await likeController.addLike('userOne', 'userTwo');
        await likeController.addLike('userTwo', 'userOne');
        //Usertwo likes after, so the match is created by userTwo
        let matches = await matchesController.getMatchesByUser('userOne');
        expect(matches[0].partnerOne).to.equal('userTwo');
        expect(matches[0].partnerTwo).to.equal('userOne');

        //Should return the same match for the other user
        matches = await matchesController.getMatchesByUser('userTwo');
        expect(matches[0].partnerOne).to.equal('userTwo');
        expect(matches[0].partnerTwo).to.equal('userOne');
    })
});
import {expect} from "chai";
import sinon from 'sinon';
import {UsersBusinessController} from "../../businessControllers/users.businessController";
import {UsersRepository} from "../../repositories/users.repository";

describe('random test', () => {
    it('should sum the numbers', () => {
        let businessController = new UsersBusinessController(new UsersRepository())
    });
});
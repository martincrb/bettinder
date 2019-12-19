import {MatchesRepository} from "../repositories/matches.repository";

export class MatchesBusinessController {
    private matchesRepo: MatchesRepository;

    constructor(matchesRepo: MatchesRepository = new MatchesRepository()) {
        this.matchesRepo = matchesRepo;
    }

    addMatch(userOne: string, userTwo: string) {
        this.matchesRepo.addMatch(userOne, userTwo);
    }

    getMatchesByUser(user: string) {
        return this.matchesRepo.getMatchesByUser(user);
    }
}
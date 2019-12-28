import {MatchesRepository} from "../repositories/matches.repository";

export class MatchesBusinessController {
    private matchesRepo: MatchesRepository;

    constructor(matchesRepo: MatchesRepository = new MatchesRepository()) {
        this.matchesRepo = matchesRepo;
    }

    public addMatch(userOne: string, userTwo: string) {
        this.matchesRepo.addMatch(userOne, userTwo);
    }

    public getMatchesByUser(user: string) {
        return this.matchesRepo.getMatchesByUser(user);
    }
}

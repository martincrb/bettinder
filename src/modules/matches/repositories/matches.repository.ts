import {Match} from "../models/Match";

export class MatchesRepository {

    private matches: Match[] = [];

    addMatch(userOne: string, userTwo: string) {
        this.matches.push(new Match(userOne, userTwo))
    }

    async getMatchesByUser(user: string): Promise<Match[]> {
        return this.matches.filter((match: Match) => match.partnerOne === user || match.partnerTwo === user);
    }
}
import App from "../../../app";
import {Match} from "../models/Match";

export class MatchesRepository {

    private matches: Match[] = [];

    public async addMatch(userOne: string, userTwo: string) {
        const result = await App.retrieveDbClient().query(
            "INSERT INTO matches (userOne, userTwo) VALUES ($1, $2)",
            [userOne, userTwo]);
        this.matches.push(new Match(userOne, userTwo));
    }

    public async getMatchesByUser(user: string): Promise<Match[]> {
        const result = await App.retrieveDbClient().query<Match>(
            "SELECT * FROM matches WHERE userOne = $1 OR userTwo = $1",
            [user]
        );
        return result.rows || [];
        // return this.matches.filter((match: Match) => match.partnerOne === user || match.partnerTwo === user);
    }
}

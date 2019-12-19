export class Match {

    constructor(partnerOne: string, partnerTwo: string) {
        this.partnerOne = partnerOne;
        this.partnerTwo = partnerTwo;
        this.matchDate = new Date();
    }

    matchDate: Date;
    partnerOne: string;
    partnerTwo: string;
}
export class Match {
    public matchDate: Date;
    public partnerOne: string;
    public partnerTwo: string;

    constructor(partnerOne: string, partnerTwo: string) {
        this.partnerOne = partnerOne;
        this.partnerTwo = partnerTwo;
        this.matchDate = new Date();
    }

}

export class Like {

    public fromuser: string;
    public touser: string;

    constructor(likeBy: string, likeTo: string) {
        this.fromuser = likeBy;
        this.touser = likeTo;
    }

}

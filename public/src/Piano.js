import SingleKey from "./SingleKey.js";

export default class Piano {
    constructor(whites, blacks) {
        this.keyArray = [];
        this.whites = whites;
        this.blacks = blacks;
    }

    addKeytoPiano(keyboardEventId, mp3Id, isWhite) {
        this.keyArray[keyboardEventId] = new SingleKey(keyboardEventId, mp3Id, isWhite);
    }
}

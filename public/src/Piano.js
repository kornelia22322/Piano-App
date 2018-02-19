import SingleKey from "./SingleKey.js";

export default class Piano {
  constructor(whites, blacks) {
    this.keyArray = [];
    this.whites = whites;
    this.blacks = blacks;
  }

  addKeytoPiano(id, mp3Id, keyboardEventId, isWhite) {
    this.keyArray.push(new SingleKey(id, mp3Id, keyboardEventId, isWhite));
  }
}

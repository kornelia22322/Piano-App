export default class SingleKey {
    constructor(keyboardEventId, mp3Id, isWhite) {
        let URL = 'http://localhost:3003/music?id=a';
        this.keyboardEventId = keyboardEventId;
        this.mp3Id = mp3Id;
        this.isWhite = isWhite;
        this.stringPattern = "";
        URL += mp3Id + '.mp3';
        this.URL = URL;
        this.setStringPattern();
    }

    setStringPattern() {
        if(this.isWhite) {
            this.stringPattern = "#key-white-" + this.keyboardEventId;
        }
        else {
            this.stringPattern = "#key-black-" + this.keyboardEventId;
        }
    }
}

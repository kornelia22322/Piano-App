export default class SingleKey {
    constructor(id, mp3Id, keyboardEventId, isWhite) {
        let URL = 'http://localhost:3003/music?id=a';
        this.id = id;
        this.mp3Id = mp3Id;
        this.keyboardEventId = keyboardEventId;
        this.isWhite = isWhite;
        this.stringPattern = "";
        URL += mp3Id + '.mp3';
        this.URL = URL;
        this.setStringPattern();
    }

    setStringPattern() {
        if(this.isWhite) {
            this.stringPattern = "key-white-" + this.id;
        }
        else {
            this.stringPattern = "key-black-" + this.id;
        }
    }
}

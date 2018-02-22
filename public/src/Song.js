import {translateSong} from './translator.js';

export default class Song {
    constructor(songArray) {
        this.songArray = songArray;
        this.count = 0;
        this.translatedArray = translateSong(songArray);
    }

    inc() {
        this.count++;
    }
}

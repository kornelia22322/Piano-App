import {translateSong} from './translator.js';

export default class Song {
    constructor(songArray) {
        this.partSize = 32;
        this.songArray = songArray;
        this.translatedArray = translateSong(songArray);
        /* actual position in part */
        this.count = 0;
        /* parts - how many times array of partSize or less will be injected into progressBar */
        this.parts = this.calculateParts();
        /* which part of the song is actual */
        this.actualPartCounter = 0;
        /* how many elements will be injected into progressbar */
        this.buforSize = Math.min(this.songArray.length, this.partSize);
    }

    incCount() {
        this.count++;
    }

    incPartCounter() {
        this.actualPartCounter++;
        this.calculateBuforSize();
    }

    setPartCounter(partCounter) {
        this.actualPartCounter = partCounter;
    }

    setCount(count) {
        this.count = count;
    }

    refreshBuforSize() {
        this.buforSize = Math.min(this.songArray.length, this.partSize);
    }

    calculateBuforSize() {
        this.buforSize = Math.min(this.songArray.length - (this.actualPartCounter*this.partSize), this.partSize);
    }

    calculateParts() {
        return Math.ceil(this.songArray.length/this.partSize);
    }
}

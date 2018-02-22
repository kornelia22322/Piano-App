import PianoBuilder from './PianoBuilder.js';
import {initStyleAdding,} from './script.js';
import {addClickEvents} from './audio.js';
import {silentNight, hallelujah, titanic} from './Data.js';
import {translateSong} from './translator.js';
import {injectSong, playerFun, setSong} from './keysDownHandle.js';
import Song from './Song.js'

$(document).ready(function() {
    //Builder design pattern
    let pianoBuilder = new PianoBuilder();
    const piano = pianoBuilder.build();

    initStyleAdding(pianoBuilder, piano);
    addClickEvents(piano);

    let noSongMode = true;
    playerFun(piano);
    initprogress();
});

function initprogress(){
    let song = titanic;

    let songobj = new Song(song);
    setSong(songobj);


    console.log(songobj.songArray);

    console.log(songobj.translatedArray);
}

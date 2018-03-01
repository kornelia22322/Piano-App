import PianoBuilder from './PianoBuilder.js';
import {initStyleAdding,} from './staticStyleAdder.js';
import {songsRawData} from './Data.js';
import {translateSong} from './translator.js';
import {injectSong, keyboardHandle, setSong, addClickEvents} from './keyboard.js';
import Song from './Song.js'
import {playButtonClick, stopButtonClick} from './buttons.js';
import {loadSongsIntoDivs} from './songsProvider.js';
import {addScroll} from './scroll.js';

console.log("HELLO");
    //Builder design pattern
    let pianoBuilder = new PianoBuilder();
    const piano = pianoBuilder.build();

    initStyleAdding(pianoBuilder, piano);
    addClickEvents(piano);
    keyboardHandle(piano);
    loadExampleSong();
    addScroll();
    playButtonClick(piano);
    stopButtonClick();
    loadSongsIntoDivs();

function loadExampleSong(){
    let song = songsRawData[0].dataset;
    let songobj = new Song(song);
    setSong(songobj);
}

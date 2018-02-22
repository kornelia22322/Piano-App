import PianoBuilder from './PianoBuilder.js';
import {initStyleAdding,} from './script.js';
import {addClickEvents} from './audio.js';
import {silentNight, hallelujah, titanic, nothingElseMatters} from './Data.js';
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
    addScroll();
});

function initprogress(){
    let song = silentNight;
    let songobj = new Song(song);
    setSong(songobj);
}

function addScroll() {
    $("#menu-items").click(function(e) {
        e.preventDefault();
        let elem = e.target.href;
        console.log(elem);
        $("#songs-wrapper").addClass('transition');
        $('html, body').animate({
            scrollTop: $("#songs-wrapper").offset().top
        }, 500);
    })
}

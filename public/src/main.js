import PianoBuilder from './PianoBuilder.js';
import {initStyleAdding,} from './staticStyleAdder.js';
import {addClickEvents} from './audio.js';
import {silentNight, titanic, nothingElseMatters, lalaLand, happyBirthday} from './Data.js';
import {translateSong} from './translator.js';
import {injectSong, keyboardHandle, setSong} from './keyboard.js';
import Song from './Song.js'
import {playButtonClick} from './buttons.js';

$(document).ready(function() {
    //Builder design pattern
    let pianoBuilder = new PianoBuilder();
    const piano = pianoBuilder.build();

    initStyleAdding(pianoBuilder, piano);
    addClickEvents(piano);

    let noSongMode = true;
    keyboardHandle(piano);
    initprogress();
    addScroll();
    playButtonClick(piano);
});

function initprogress(){
    let song = lalaLand.dataset;
    let songobj = new Song(song);
    setSong(songobj);
}

function addScroll() {
    $(".menu-items").click(function(e) {
        e.preventDefault();
        let elem = e.target.href;
        console.log(elem);
        let href = $(this).attr("href").split("#");
        let hrefSplit = href[1];
        let offsetTop = $("#" + hrefSplit).offset().top;

        if("#"+hrefSplit == "#songs-outer-scrollto") {
            $("#songs-outer").addClass('transition');
        }
        $('html, body').animate({
            scrollTop: offsetTop
        }, 500);
    })
}

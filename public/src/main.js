import PianoBuilder from './PianoBuilder.js';
import {initStyleAdding, changeWhiteKeyColor, changeBlackKeyColor,
        getBackBlackKeyColor, getBackWhiteKeyColor} from './script.js';
import {context, addClickEvents, getData} from './audio.js';
import {silentNight, hallelujah, titanic} from './Data.js';
import {translateSong} from './translator.js';
import {injectSong} from './injectSong.js';

$(document).ready(function() {
    //Builder design pattern
    let pianoBuilder = new PianoBuilder();
    const piano = pianoBuilder.build();

    initStyleAdding(pianoBuilder, piano);
    addClickEvents(piano);

    $(document).keydown((e) => {
        let val = piano.keyArray[e.keyCode];
        if (val != undefined) {
            console.log(piano.keyArray[e.keyCode]);
            if(val.isWhite) {
                changeWhiteKeyColor(val.stringPattern);
            } else if(!val.isWhite) {
                changeBlackKeyColor(val.stringPattern);
            }
            getData(piano.keyArray[e.keyCode].URL, context);
        }
    });
    $(document).keyup((e) => {
        let val = piano.keyArray[e.keyCode];
        if (val != undefined) {
            if(val.isWhite) {
                getBackWhiteKeyColor(val.stringPattern);
            } else if(!val.isWhite) {
                getBackBlackKeyColor(val.stringPattern);
            }
        }
    });


        console.log(silentNight);
    initprogress();
});

function initprogress(){
    let song = titanic;
    console.log(song);
    let output = translateSong(song);
    console.log(output);
    injectSong(output);
}

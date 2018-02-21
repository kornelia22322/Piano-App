import PianoBuilder from './PianoBuilder.js';
import {initStyleAdding, changeWhiteKeyColor, changeBlackKeyColor,
        getBackBlackKeyColor, getBackWhiteKeyColor} from './script.js';
import {context, addClickEvents, getData} from './audio.js';

$(document).ready(function() {
    //Builder design pattern
    let pianoBuilder = new PianoBuilder();
    const piano = pianoBuilder.build();

    initStyleAdding(pianoBuilder, piano);
    addClickEvents(piano);

    $(document).keydown((e) => {
        let val = piano.keyArray[e.keyCode];
        if (val != undefined) {
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
});

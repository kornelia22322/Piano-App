import PianoBuilder from './PianoBuilder.js';
import AudioHandler from './AudioHandler.js';
import {initStyleAdding} from './script.js';
import {addClickEvents} from './audio.js';

function init() {
    initStyleAdding();

    //Builder design pattern
    let pianoBuilder = new PianoBuilder();
    const piano = pianoBuilder.build();
    
    addClickEvents(piano);
}

init();

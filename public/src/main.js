import PianoBuilder from './PianoBuilder.js';
import AudioHandler from './AudioHandler.js';
import {initStyleAdding} from './script.js';
import {addClickEvents} from './AudioHandler.js';

function init() {
  initStyleAdding();
  let pianoBuilder = new PianoBuilder();
  const piano = pianoBuilder.build();
  addClickEvents(piano);
}

init();

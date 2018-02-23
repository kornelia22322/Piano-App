import {playSongAutomatically, refreshInjection, clearTimeOutsArray} from "./keyboard.js"
import Piano from "./Piano.js"

export function playButtonClick(piano) {
    $("#button-play").click((e) => {
        clearTimeOutsArray();
        refreshInjection();
        playSongAutomatically(piano);
    });
}

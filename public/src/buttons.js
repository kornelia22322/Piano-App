import {playSongAutomatically, refreshInjection} from "./keyboard.js"
import Piano from "./Piano.js"

export function playButtonClick(piano) {
    $("#button-play").click((e) => {
        refreshInjection();
        playSongAutomatically(piano);
    });
}

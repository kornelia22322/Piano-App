import {playSongAutomatically, refreshInjection, clearTimeOutsArray} from "./keyboard.js";

export function playButtonClick(piano) {
    $("#button-play").click(() => {
        Promise.all([clearTimeOutsArray()]).then(() => {
            refreshInjection();
        }).then(() => {
            playSongAutomatically(piano);
        });
    });
}

export function stopButtonClick() {
    $("#button-stop, #button-refresh").click(() => {
        Promise.all([clearTimeOutsArray()]).then(() => {
            refreshInjection();
        });
    });
}

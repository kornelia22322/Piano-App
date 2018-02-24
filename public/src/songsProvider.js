import {songsRawData} from './Data.js';
import {setSong, clearTimeOutsArray} from './keyboard.js';
import Song from './Song.js';

const songsObjArray = [];

export function loadSongsIntoDivs() {
    for(let i = 0; i < songsRawData.length; i++) {
        let template = '';
        template += '<div class="single-song" id="single-song-' + i + '"><p>' + songsRawData[i].name + '</p></div>';
        $("#songs-inner").append(template);
        songsObjArray[i] = null;
        addEventListenerToDiv(i);
    }
}

function addEventListenerToDiv(i) {
    let pattern = "#single-song-" + i;
    $(pattern).click((e) => {
        let val = e.currentTarget.id.split("-")[2];
        if(songsObjArray[val] == null) {
            songsObjArray[val] = new Song(songsRawData[val].dataset);
        }
        Promise.all([clearTimeOutsArray()]).then(() => {
            setSong(songsObjArray[val]);
            $('html, body').animate({scrollTop:0}, 500);
        });
    });
}

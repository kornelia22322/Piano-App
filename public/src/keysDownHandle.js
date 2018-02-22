import {changeWhiteKeyColor, changeBlackKeyColor,
        getBackBlackKeyColor, getBackWhiteKeyColor} from './script.js';
import {context, getData} from './audio.js';
import Song from './Song.js'

let songToPlay = null;

export function setSong(song) {
    songToPlay = song;
    injectSong();
}

function injectSong() {
    let len = songToPlay.length;
    let singleWidth = (100/len).toFixed(5);
    let template = '';
    singleWidth += "%";
    for(let i in songToPlay.translatedArray) {
        template += '<div class = "single-letter" id = "single-letter-'+ i +'"><p>' + songToPlay.translatedArray[i] + '</p>' +
        '<div class= "single-letter-follow" id="single-letter-follow-' + i + '"></div></div>';
    }
    $(".spans#black").append(template);
    //$(".single-letter").css({"width" : singleWidth, "height" : "100%", "position" : "absolute"});
}

export function playerFun(piano) {
    $(document).keydown((e) => {
        let val = piano.keyArray[e.keyCode];
        if (val != undefined) {
            console.log(piano.keyArray[e.keyCode]);
            if(val.isWhite) {
                changeWhiteKeyColor(val.stringPattern);
            } else if(!val.isWhite) {
                changeBlackKeyColor(val.stringPattern);
            }
            getData(val.URL, context);
            if(songToPlay!=null) {
                if(e.keyCode == songToPlay.songArray[songToPlay.count]) {
                    console.log("BRAWO!");
                    let pattern = "#single-letter-follow-" + songToPlay.count;
                    colorDivsWidthVal(pattern);
                    songToPlay.inc();
                }
            }
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
}

function colorDivsWidthVal(pattern) {
    let timesRun = 0;
    let interval = setInterval(function(){
        timesRun += 1;
        if(timesRun === 100){
            clearInterval(interval);
        }
        let stringPattern = timesRun + "%";
        console.log(stringPattern);
        $(pattern).css({"width" : stringPattern});
    }, 1);
}

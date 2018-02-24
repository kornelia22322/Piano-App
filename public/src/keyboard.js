import {changeWhiteKeyColor, changeBlackKeyColor,
        getBackBlackKeyColor, getBackWhiteKeyColor} from './staticStyleAdder.js';
import {context, getData} from './audio.js';
import Song from './Song.js'

let songToPlay = null;
let timeoutsArray = [];

export function clearTimeOutsArray() {
    for (let i = 0; i < timeoutsArray.length; i++) {
        clearTimeout(timeoutsArray[i]);
    }
    timeoutsArray = [];
}

export function setSong(song) {
    songToPlay = song;
    refreshInjection();
}

export function keyboardHandle(piano) {
    keyDownHandle(piano);
    keyUpHandle(piano);
}

export function refreshInjection() {
    console.log(songToPlay);
    songToPlay.setCount(0);
    songToPlay.setPartCounter(0);
    injectSong();
}

export function addClickEvents(piano){
    for(let i in piano.keyArray){
        if(piano.keyArray[i]!=undefined) {
            $(piano.keyArray[i].stringPattern).on("click", function() {
                console.log(piano.keyArray[i]);
                getData(piano.keyArray[i].URL, context);
            });
        }
    }
}

function injectSong() {
    let template = '';
    //in case there are some already
    $(".single-letter").remove();
    $(".single-letter-follow").remove();
    for(let i = 0; i < songToPlay.buforSize; i++) {
        template += '<div class = "single-letter" id = "single-letter-'+ i +'"><p>' + songToPlay.translatedArray[songToPlay.partSize*songToPlay.actualPartCounter+i] + '</p>' +
        '<div class= "single-letter-follow" id="single-letter-follow-' + i + '"></div></div>';
    }
    $(".spans#black").append(template);
}

function keyDownHandle(piano) {
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
                progressBar(e.keyCode);
            }
        }
    });
}

function keyUpHandle(piano) {
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

function progressBar(keyCode) {
    if(keyCode == songToPlay.songArray[songToPlay.partSize*songToPlay.actualPartCounter+songToPlay.count]) {
        if(songToPlay.count == songToPlay.partSize-1) {
            songToPlay.setCount(0);
            songToPlay.incPartCounter();
            injectSong();
        } else {
            let pattern = "#single-letter-follow-" + songToPlay.count;
            colorDivsWidthVal(pattern);
            songToPlay.incCount();
        }
    }
}

function colorDivsWidthVal(pattern) {
    let timesRun = 0;
    let interval = setInterval(function(){
        timesRun += 1;
        if(timesRun === 100){
            clearInterval(interval);
        }
        let stringPattern = timesRun + "%";
        $(pattern).css({"width" : stringPattern});
    }, 1);
}

/* key down, getData, progressBar
and then key up trigger */
export function playSongAutomatically(piano) {
    for(let i = 0; i < songToPlay.parts; i++) {
        for(let j = 0; j < songToPlay.buforSize; j++) {
            timeoutsArray.push(setTimeout(function() {
                let partCounter = songToPlay.actualPartCounter;
                let currentVal = piano.keyArray[songToPlay.songArray[(partCounter*songToPlay.partSize)+j]];
                addTrigger(currentVal.stringPattern, "mouseover");
                getData(currentVal.URL, context);
                progressBar(songToPlay.songArray[(partCounter*songToPlay.partSize)+j]);
                setTimeout(function() {
                    addTrigger(piano.keyArray[songToPlay.songArray[(partCounter*songToPlay.partSize)+j]].stringPattern, "mouseout");
                }, 420);
            }, 500*j + (i*songToPlay.buforSize)*500));
        }
    }
}

function addTrigger(element, e) {
    $(element).trigger(e);
}

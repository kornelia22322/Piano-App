/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SingleKey = __webpack_require__(8);

var _SingleKey2 = _interopRequireDefault(_SingleKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Piano = function () {
    function Piano(whites, blacks) {
        _classCallCheck(this, Piano);

        this.keyArray = [];
        this.whites = whites;
        this.blacks = blacks;
    }

    _createClass(Piano, [{
        key: "addKeytoPiano",
        value: function addKeytoPiano(keyboardEventId, mp3Id, isWhite) {
            this.keyArray[keyboardEventId] = new _SingleKey2.default(keyboardEventId, mp3Id, isWhite);
        }
    }]);

    return Piano;
}();

exports.default = Piano;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Piano = __webpack_require__(0);

var _Piano2 = _interopRequireDefault(_Piano);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PianoBuilder = function () {
    function PianoBuilder() {
        _classCallCheck(this, PianoBuilder);

        this.mapWhiteKeys = [{ 17: 16 }, { 20: 18 }, { 27: 20 }, { 49: 21 }, { 65: 23 }, { 18: 25 }, { 88: 27 }, { 87: 28 }, { 51: 30 }, { 68: 32 }, { 67: 33 }, { 86: 35 }, { 82: 37 }, { 53: 39 }, { 84: 40 }, { 66: 42 }, { 72: 44 }, { 89: 45 }, { 55: 47 }, { 74: 49 }, { 188: 51 }, { 75: 52 }, { 56: 54 }, { 79: 56 }, { 76: 57 }, { 191: 59 }, { 80: 61 }, { 189: 63 }, { 219: 64 }, { 39: 66 }, { 221: 68 }, { 187: 69 }, { 13: 71 }, { 38: 73 }, { 37: 75 }, { 35: 76 }];
        this.mapBlackKeys = [{ 16: 17 }, { 192: 19 }, { 81: 22 }, { 90: 24 }, { 83: 26 }, { 50: 29 }, { 69: 31 }, { 32: 34 }, { 70: 36 }, { 52: 38 }, { 71: 41 }, { 78: 43 }, { 54: 46 }, { 85: 48 }, { 77: 50 }, { 73: 53 }, { 57: 55 }, { 190: 58 }, { 186: 60 }, { 48: 62 }, { 222: 65 }, { 220: 67 }, { 8: 70 }, { 40: 72 }, { 46: 74 }];
        this.whites = Object.keys(this.mapWhiteKeys).length;
        this.blacks = Object.keys(this.mapBlackKeys).length;
        this.piano = null;
    }

    _createClass(PianoBuilder, [{
        key: "step1",
        value: function step1() {
            this.piano = new _Piano2.default(this.whites, this.blacks);
        }
    }, {
        key: "step2",
        value: function step2() {
            for (var i in this.mapWhiteKeys) {
                var val = Object.keys(this.mapWhiteKeys[i])[0];
                this.piano.addKeytoPiano(Number(val), this.mapWhiteKeys[i][val], true);
            }
            for (var _i in this.mapBlackKeys) {
                var _val = Object.keys(this.mapBlackKeys[_i])[0];
                this.piano.addKeytoPiano(Number(_val), this.mapBlackKeys[_i][_val], false);
            }
        }
    }, {
        key: "build",
        value: function build() {
            this.step1();
            this.step2();
            return this.piano;
        }
    }]);

    return PianoBuilder;
}();

exports.default = PianoBuilder;
;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.initStyleAdding = initStyleAdding;
exports.changeWhiteKeyColor = changeWhiteKeyColor;
exports.getBackWhiteKeyColor = getBackWhiteKeyColor;
exports.changeBlackKeyColor = changeBlackKeyColor;
exports.getBackBlackKeyColor = getBackBlackKeyColor;

var _Piano = __webpack_require__(0);

var _Piano2 = _interopRequireDefault(_Piano);

var _PianoBuilder = __webpack_require__(1);

var _PianoBuilder2 = _interopRequireDefault(_PianoBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initStyleAdding(pianoBuilder, piano) {
	addDivs(pianoBuilder);
	addMouseOverEvent(piano);
}

function addDivs(pianoBuilder) {
	var templateforWhite = '';
	var templateforBlack = '';
	var templateforWhiteSpan = '';

	var leftforWhite = 0;
	var leftforBlack = 2.02777;
	var iteratorforBlack = 0;

	for (var i in pianoBuilder.mapWhiteKeys) {
		var val = Object.keys(pianoBuilder.mapWhiteKeys[i])[0];
		templateforWhite += '<div class = "single-key-white" id = "key-white-' + val + '"></div>';
		$('<style>#key-white-' + val + '{ left:' + leftforWhite + '%;  }</style>').appendTo('head');
		templateforWhiteSpan = '<div class = "single-span" id = "span-white-' + val + '></div>';
		$('<style>#key-white-' + val + '{ left:' + leftforWhite + '%;  }</style>').appendTo('head');
		leftforWhite += 2.7777;
	}

	for (var _i in pianoBuilder.mapBlackKeys) {
		templateforBlack += '<div class = "single-key-black" id = "key-black-' + Object.keys(pianoBuilder.mapBlackKeys[_i])[0] + '"></div>';
		$('<style>#key-black-' + Object.keys(pianoBuilder.mapBlackKeys[_i])[0] + '{ left:' + leftforBlack + '%;  }</style>').appendTo('head');
		if (iteratorforBlack % 5 != 1 && iteratorforBlack % 5 != 4) {
			leftforBlack += 2.7777;
		} else {
			leftforBlack += 5.5554;
		}
		iteratorforBlack++;
	}
	$("#whites").append(templateforWhite);
	$("#black").append(templateforBlack);
}

function addMouseOverEvent(piano) {
	var _loop = function _loop(i) {
		if (piano.keyArray[i] != undefined && piano.keyArray[i].isWhite) {
			$(piano.keyArray[i].stringPattern).on({
				"mouseover": function mouseover() {
					console.log(piano.keyArray[i].stringPattern);
					changeWhiteKeyColor(piano.keyArray[i].stringPattern);
				},
				"mouseout": function mouseout() {
					getBackWhiteKeyColor(piano.keyArray[i].stringPattern);
				}
			});
		} else if (piano.keyArray[i] != undefined && !piano.keyArray[i].isWhite) {
			$(piano.keyArray[i].stringPattern).on({
				"mouseover": function mouseover() {
					console.log(piano.keyArray[i].stringPattern);
					changeBlackKeyColor(piano.keyArray[i].stringPattern);
				},
				"mouseout": function mouseout() {
					getBackBlackKeyColor(piano.keyArray[i].stringPattern);
				}
			});
		}
	};

	for (var i in piano.keyArray) {
		_loop(i);
	}
}

function changeWhiteKeyColor(divId) {
	$(divId).css({ "background": "linear-gradient(0deg, rgb(176,176,176), rgb(176,176,176) 5%, rgb(255,255,255))" });
}

function getBackWhiteKeyColor(divId) {
	$(divId).css({ "background": "linear-gradient(0deg, rgb(224,224,224), rgb(224,224,224) 5%, rgb(255,255,255))" });
}

function changeBlackKeyColor(divId) {
	$(divId).css({ "background": "linear-gradient(0deg, rgb(64,64,64), rgb(64,64,64) 5%, rgb(0,0,0))" });
}

function getBackBlackKeyColor(divId) {
	$(divId).css({ "background": "rgb(0,0,0)" });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addClickEvents = addClickEvents;
exports.getData = getData;
var context = exports.context = new AudioContext();

function addClickEvents(piano) {
    var _loop = function _loop(i) {
        if (piano.keyArray[i] != undefined) {
            $(piano.keyArray[i].stringPattern).on("click", function () {

                console.log(piano.keyArray[i]);
                getData(piano.keyArray[i].URL, context);
            });
        }
    };

    for (var i in piano.keyArray) {
        _loop(i);
    }
}

function getData(URL, context) {
    window.fetch(URL).then(function (response) {
        return response.arrayBuffer();
    }).then(function (arrayBuffer) {
        return context.decodeAudioData(arrayBuffer);
    }).then(function (audioBuffer) {
        var yodelBuffer = audioBuffer;
        play(yodelBuffer, context);
    });
}

function play(audioBuffer, context) {
    var source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination);
    source.start();
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.translateSong = translateSong;
var KeysTranslator = { 17: "LC", 20: "CLk", 27: "Esc", 49: "1", 65: "a", 18: "LAlt", 88: "x",
    87: "w", 51: "3", 68: "d", 67: "c", 86: "v", 82: "r", 53: "5",
    84: "t", 66: "b", 72: "h", 89: "y", 55: "7", 74: "j", 188: "<",
    75: "k", 56: "8", 79: "o", 76: "l", 191: "/", 80: "p", 189: "-",
    219: "{", 16: "b", 221: "}", 187: "+", 13: "Ent", 38: "UA", 37: "LA",
    35: "End", 39: "RA", 192: "~",
    81: "q", 90: "z", 83: "s",
    50: "2", 69: "e",
    32: "Spc", 70: "f", 52: "UA",
    71: "g", 78: "n",
    54: "6", 85: "u", 77: "m",
    73: "i", 57: "9",
    190: ">", 186: ":", 48: "0",
    222: "\"", 220: "\\",
    8: "BS", 40: "DA", 46: "Del" };
//UA - up arrow

function translateSong(song) {
    var array = [];
    for (var i in song) {
        array.push(KeysTranslator[song[i]]);
    }
    return array;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setSong = setSong;
exports.keyboardHandle = keyboardHandle;
exports.refreshInjection = refreshInjection;
exports.playSongAutomatically = playSongAutomatically;

var _script = __webpack_require__(2);

var _audio = __webpack_require__(3);

var _Song = __webpack_require__(6);

var _Song2 = _interopRequireDefault(_Song);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var songToPlay = null;

function setSong(song) {
    songToPlay = song;
    refreshInjection();
}

function keyboardHandle(piano) {
    keyDownHandle(piano);
    keyUpHandle(piano);
}

function refreshInjection() {
    injectSong();
}

function injectSong() {
    var template = '';
    //in case there are some already
    $(".single-letter").remove();
    $(".single-letter-follow").remove();
    for (var i = 0; i < songToPlay.buforSize; i++) {
        template += '<div class = "single-letter" id = "single-letter-' + i + '"><p>' + songToPlay.translatedArray[songToPlay.partSize * songToPlay.actualPartCounter + i] + '</p>' + '<div class= "single-letter-follow" id="single-letter-follow-' + i + '"></div></div>';
    }
    $(".spans#black").append(template);
}

function keyDownHandle(piano) {
    $(document).keydown(function (e) {
        var val = piano.keyArray[e.keyCode];
        if (val != undefined) {
            console.log(piano.keyArray[e.keyCode]);
            if (val.isWhite) {
                (0, _script.changeWhiteKeyColor)(val.stringPattern);
            } else if (!val.isWhite) {
                (0, _script.changeBlackKeyColor)(val.stringPattern);
            }
            (0, _audio.getData)(val.URL, _audio.context);
            if (songToPlay != null) {
                progressBar(e.keyCode);
            }
        }
    });
}

function keyUpHandle(piano) {
    $(document).keyup(function (e) {
        var val = piano.keyArray[e.keyCode];
        if (val != undefined) {
            if (val.isWhite) {
                (0, _script.getBackWhiteKeyColor)(val.stringPattern);
            } else if (!val.isWhite) {
                (0, _script.getBackBlackKeyColor)(val.stringPattern);
            }
        }
    });
}

function progressBar(keyCode) {
    if (keyCode == songToPlay.songArray[songToPlay.partSize * songToPlay.actualPartCounter + songToPlay.count]) {
        if (songToPlay.count == songToPlay.partSize - 1) {
            songToPlay.setCount(0);
            songToPlay.incPartCounter();
            injectSong();
        } else {
            var pattern = "#single-letter-follow-" + songToPlay.count;
            colorDivsWidthVal(pattern);
            songToPlay.incCount();
        }
    }
}

function colorDivsWidthVal(pattern) {
    var timesRun = 0;
    var interval = setInterval(function () {
        timesRun += 1;
        if (timesRun === 100) {
            clearInterval(interval);
        }
        var stringPattern = timesRun + "%";
        $(pattern).css({ "width": stringPattern });
    }, 1);
}

function playSongAutomatically(piano) {
    for (var i = 0; i < songToPlay.parts; i++) {
        var _loop = function _loop(j) {
            var partCounter = songToPlay.actualPartCounter;
            setTimeout(function () {
                (0, _audio.getData)(piano.keyArray[songToPlay.songArray[partCounter * songToPlay.partSize + j]].URL, _audio.context);
                console.log(songToPlay.songArray[partCounter * songToPlay.partSize + j]);
                progressBar(songToPlay.songArray[partCounter * songToPlay.partSize + j]);
            }, 500 * j + i * songToPlay.parts * 500);
        };

        for (var j = 0; j < songToPlay.buforSize; j++) {
            _loop(j);
        }
    }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _translator = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Song = function () {
    function Song(songArray) {
        _classCallCheck(this, Song);

        this.partSize = 32;
        this.songArray = songArray;
        this.translatedArray = (0, _translator.translateSong)(songArray);
        /* actual position in part */
        this.count = 0;
        /* parts - how many times array of partSize or less will be injected into progressBar */
        this.parts = this.calculateParts();
        /* which part of the song is actual */
        this.actualPartCounter = 0;
        /* how many elements will be injected into progressbar */
        this.buforSize = Math.min(this.songArray.length, this.partSize);
    }

    _createClass(Song, [{
        key: 'incCount',
        value: function incCount() {
            this.count++;
        }
    }, {
        key: 'incPartCounter',
        value: function incPartCounter() {
            this.actualPartCounter++;
            this.calculateBuforSize();
        }
    }, {
        key: 'setCount',
        value: function setCount(count) {
            this.count = count;
        }
    }, {
        key: 'calculateBuforSize',
        value: function calculateBuforSize() {
            this.buforSize = Math.min(this.songArray.length - this.actualPartCounter * this.partSize, this.partSize);
        }
    }, {
        key: 'calculateParts',
        value: function calculateParts() {
            return Math.ceil(this.songArray.length / this.partSize);
        }
    }]);

    return Song;
}();

exports.default = Song;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PianoBuilder = __webpack_require__(1);

var _PianoBuilder2 = _interopRequireDefault(_PianoBuilder);

var _script = __webpack_require__(2);

var _audio = __webpack_require__(3);

var _Data = __webpack_require__(9);

var _translator = __webpack_require__(4);

var _keyboard = __webpack_require__(5);

var _Song = __webpack_require__(6);

var _Song2 = _interopRequireDefault(_Song);

var _buttons = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
    //Builder design pattern
    var pianoBuilder = new _PianoBuilder2.default();
    var piano = pianoBuilder.build();

    (0, _script.initStyleAdding)(pianoBuilder, piano);
    (0, _audio.addClickEvents)(piano);

    var noSongMode = true;
    (0, _keyboard.keyboardHandle)(piano);
    initprogress();
    addScroll();
    (0, _buttons.playButtonClick)(piano);
});

function initprogress() {
    var song = _Data.happyBirthday.dataset;
    var songobj = new _Song2.default(song);
    (0, _keyboard.setSong)(songobj);
}

function addScroll() {
    $("#menu-items").click(function (e) {
        e.preventDefault();
        var elem = e.target.href;
        console.log(elem);
        $("#songs-outer").addClass('transition');
        $('html, body').animate({
            scrollTop: $("#songs-outer").offset().top
        }, 500);
    });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SingleKey = function () {
    function SingleKey(keyboardEventId, mp3Id, isWhite) {
        _classCallCheck(this, SingleKey);

        var URL = 'http://localhost:3003/music?id=a';
        this.keyboardEventId = keyboardEventId;
        this.mp3Id = mp3Id;
        this.isWhite = isWhite;
        this.stringPattern = "";
        URL += mp3Id + '.mp3';
        this.URL = URL;
        this.setStringPattern();
    }

    _createClass(SingleKey, [{
        key: 'setStringPattern',
        value: function setStringPattern() {
            this.stringPattern = this.isWhite ? "#key-white-" + this.keyboardEventId : this.stringPattern = "#key-black-" + this.keyboardEventId;
        }
    }]);

    return SingleKey;
}();

exports.default = SingleKey;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var silentNight = exports.silentNight = { name: "Silent Night", dataset: [55, 74, 55, 72, 55, 74, 55, 72, 56, 56, 188, 75, 75, 55, 74, 74, 75, 188, 74, 55, 74, 55, 72, 74, 74, 75, 188, 74, 55, 74, 55, 72, 56, 56, 76, 56, 188, 75, 79, 75, 55, 72, 55, 89, 66, 84] };

var titanic = exports.titanic = { name: "My heart will go on", dataset: [79, 190, 190, 186, 80, 186, 190, 79, 190, 189, 80, 186, 79, 73, 188, 79, 190, 190, 186, 80, 186, 190, 79, 190, 189, 186, 189, 222, 189, 186, 190, 79, 79, 79, 79, 57, 79, 79, 57, 79, 79, 186, 190, 79, 79, 79, 79, 57, 79, 74, 188, 73, 79, 80, 189, 222, 220, 79, 79, 79, 79, 57, 57, 79, 79, 57, 79, 190, 186] };

var nothingElseMatters = exports.nothingElseMatters = { name: "Nothing Else Matters", dataset: [27, 86, 53, 66, 53, 86, 27, 86, 53, 66, 53, 86, 27, 86, 53, 66, 53, 86, 27, 86, 53, 66, 53, 86, 27, 188, 53, 86, 53, 188, 66, 53, 86, 27, 86, 53, 188, 53, 75, 188, 74, 53, 188, 74, 55, 219, 66] };

var lalaLand = exports.lalaLand = { name: "La la land", dataset: [73, 190, 186, 80, 186, 190, 56, 56, 190, 186, 80, 186, 190, 57, 57, 190, 186, 80, 186, 190, 56, 189, 80, 186, 80, 186, 190, 73, 222, 8, 40, 38, 40, 8, 39, 39, 8, 40, 38, 40, 8, 222, 222, 8, 40, 38, 40, 8, 39, 37, 38, 40, 38, 40, 8, 222, 39, 222, 189, 222, 189, 80, 190, 186, 222, 189, 80, 189, 80, 186, 190, 39, 222, 189, 222, 189, 80, 190, 39, 222, 189, 222, 189, 80, 190, 186, 222, 72, 89, 190, 80, 222, 8, 221, 39, 221, 39, 222, 189, 40, 8, 187, 39, 222, 189, 40, 8, 187, 39, 222, 189, 80, 190, 79, 190, 186, 190, 186, 80, 190, 186, 190, 186, 80, 190, 186, 190, 186, 80, 190, 222] };

var happyBirthday = exports.happyBirthday = { name: "Happy Birthday", dataset: [191, 191, 80, 191, 219, 189, 191, 191, 80, 191, 39, 219, 191, 191, 13, 221, 219, 189, 80, 187, 187, 221, 219, 39, 219] };

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.playButtonClick = playButtonClick;

var _keyboard = __webpack_require__(5);

var _Piano = __webpack_require__(0);

var _Piano2 = _interopRequireDefault(_Piano);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function playButtonClick(piano) {
    $("#button-play").click(function (e) {
        (0, _keyboard.refreshInjection)();
        (0, _keyboard.playSongAutomatically)(piano);
    });
}

/***/ })
/******/ ]);
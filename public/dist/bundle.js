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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

var _Piano = __webpack_require__(1);

var _Piano2 = _interopRequireDefault(_Piano);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PianoBuilder = function () {
    function PianoBuilder() {
        _classCallCheck(this, PianoBuilder);

        this.mapWhiteKeys = [{ 17: 16 }, { 20: 18 }, { 27: 20 }, { 49: 21 }, { 65: 23 }, { 18: 25 }, { 88: 27 }, { 87: 28 }, { 51: 30 }, { 68: 32 }, { 67: 33 }, { 86: 35 }, { 82: 37 }, { 53: 39 }, { 84: 40 }, { 66: 42 }, { 72: 44 }, { 89: 45 }, { 55: 47 }, { 74: 49 }, { 188: 51 }, { 75: 52 }, { 56: 54 }, { 79: 56 }, { 76: 57 }, { 191: 59 }, { 80: 61 }, { 189: 63 }, { 219: 64 }, { 16: 66 }, { 221: 68 }, { 187: 69 }, { 13: 71 }, { 38: 73 }, { 37: 75 }, { 35: 76 }];
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SingleKey = __webpack_require__(3);

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PianoBuilder = __webpack_require__(0);

var _PianoBuilder2 = _interopRequireDefault(_PianoBuilder);

var _script = __webpack_require__(4);

var _audio = __webpack_require__(5);

var _Data = __webpack_require__(6);

var _translator = __webpack_require__(7);

var _injectSong = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
    //Builder design pattern
    var pianoBuilder = new _PianoBuilder2.default();
    var piano = pianoBuilder.build();

    (0, _script.initStyleAdding)(pianoBuilder, piano);
    (0, _audio.addClickEvents)(piano);

    $(document).keydown(function (e) {
        var val = piano.keyArray[e.keyCode];
        if (val != undefined) {
            console.log(piano.keyArray[e.keyCode]);
            if (val.isWhite) {
                (0, _script.changeWhiteKeyColor)(val.stringPattern);
            } else if (!val.isWhite) {
                (0, _script.changeBlackKeyColor)(val.stringPattern);
            }
            (0, _audio.getData)(piano.keyArray[e.keyCode].URL, _audio.context);
        }
    });
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

    console.log(_Data.silentNight);
    initprogress();
});

function initprogress() {
    var song = _Data.hallelujah;
    console.log(song);
    var output = (0, _translator.translateSong)(song);
    console.log(output);
    (0, _injectSong.injectSong)(output);
}

/***/ }),
/* 3 */
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
            if (this.isWhite) {
                this.stringPattern = "#key-white-" + this.keyboardEventId;
            } else {
                this.stringPattern = "#key-black-" + this.keyboardEventId;
            }
        }
    }]);

    return SingleKey;
}();

exports.default = SingleKey;

/***/ }),
/* 4 */
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

var _Piano = __webpack_require__(1);

var _Piano2 = _interopRequireDefault(_Piano);

var _PianoBuilder = __webpack_require__(0);

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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
                            value: true
});
var silentNight = exports.silentNight = [55, 74, 55, 72, 55, 74, 55, 72, 56, 56, 188, 75, 75, 55, 74, 74, 75, 188, 74, 55, 74, 55, 72, 74, 74, 75, 188, 74, 55, 74, 55, 72, 56, 56, 76, 56, 188, 75, 79, 75, 55, 72, 55, 89, 66, 84];

var hallelujah = exports.hallelujah = [72, 55, 55, 55, 55, 74, 74, 74, 72, 55, 55, 55, 55, 55, 74, 74, 74, 74, 74, 74, 74, 74, 74];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KeysTranslator;

exports.translateSong = translateSong;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var KeysTranslator = (_KeysTranslator = { 17: 16, 20: 18, 27: 20, 49: 21, 65: 23, 18: 25, 88: 27,
    87: 28, 51: 30, 68: 32, 67: 33, 86: 35, 82: 37, 53: 39,
    84: "t", 66: "b", 72: "h", 89: "y", 55: "7", 74: "j", 188: "<",
    75: "k", 56: "8", 79: "o", 76: "l", 191: 59, 80: 61, 189: 63,
    219: 64, 16: 66, 221: 68, 187: 69, 13: 71, 38: 73, 37: 75,
    35: 76 }, _defineProperty(_KeysTranslator, "16", 17), _defineProperty(_KeysTranslator, 192, 19), _defineProperty(_KeysTranslator, 81, 22), _defineProperty(_KeysTranslator, 90, 24), _defineProperty(_KeysTranslator, 83, 26), _defineProperty(_KeysTranslator, 50, 29), _defineProperty(_KeysTranslator, 69, 31), _defineProperty(_KeysTranslator, 32, 34), _defineProperty(_KeysTranslator, 70, 36), _defineProperty(_KeysTranslator, 52, 38), _defineProperty(_KeysTranslator, 71, 41), _defineProperty(_KeysTranslator, 78, 43), _defineProperty(_KeysTranslator, 54, 46), _defineProperty(_KeysTranslator, 85, 48), _defineProperty(_KeysTranslator, 77, 50), _defineProperty(_KeysTranslator, 73, 53), _defineProperty(_KeysTranslator, 57, 55), _defineProperty(_KeysTranslator, 190, 58), _defineProperty(_KeysTranslator, 186, 60), _defineProperty(_KeysTranslator, 48, 62), _defineProperty(_KeysTranslator, 222, 65), _defineProperty(_KeysTranslator, 220, 67), _defineProperty(_KeysTranslator, 8, 70), _defineProperty(_KeysTranslator, 40, 72), _defineProperty(_KeysTranslator, 46, 74), _KeysTranslator);

function translateSong(song) {
    var array = [];
    for (var i in song) {
        array.push(KeysTranslator[song[i]]);
    }
    return array;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.injectSong = injectSong;
function injectSong(song) {
    var len = song.length;
    var singleWidth = (100 / len).toFixed(5);
    var template = '';
    singleWidth += "%";
    for (var i in song) {
        template += '<div class = "single-letter"><p>' + song[i] + '</p></div>';
    }
    $(".spans#black").append(template);
    //$(".single-letter").css({"width" : singleWidth, "height" : "100%", "position" : "absolute"});
}

/***/ })
/******/ ]);
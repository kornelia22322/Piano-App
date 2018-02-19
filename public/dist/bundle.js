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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PianoBuilder = __webpack_require__(1);

var _PianoBuilder2 = _interopRequireDefault(_PianoBuilder);

var _AudioHandler = __webpack_require__(4);

var _AudioHandler2 = _interopRequireDefault(_AudioHandler);

var _script = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init() {
  (0, _script.initStyleAdding)();
  var pianoBuilder = new _PianoBuilder2.default();
  var piano = pianoBuilder.build();
  (0, _AudioHandler.addClickEvents)(piano);
}

init();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Piano = __webpack_require__(2);

var _Piano2 = _interopRequireDefault(_Piano);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PianoBuilder = function () {
  function PianoBuilder() {
    _classCallCheck(this, PianoBuilder);

    this.mapWhiteKeys = { 0: 16, 1: 18, 2: 20, 3: 21, 4: 23, 5: 25, 6: 27,
      7: 28, 8: 30, 9: 32, 10: 33, 11: 35, 12: 37, 13: 39,
      14: 40, 15: 42, 16: 44, 17: 45, 18: 47, 19: 49, 20: 51,
      21: 52, 22: 54, 23: 56, 24: 57, 25: 59, 26: 61, 27: 63,
      28: 64, 29: 66, 30: 68, 31: 69, 32: 71, 33: 73, 34: 75, 35: 76 };
    this.mapBlackKeys = { 0: 17, 1: 19,
      2: 22, 3: 24, 4: 26,
      5: 29, 6: 31,
      7: 34, 8: 36, 9: 38,
      10: 41, 11: 43,
      12: 46, 13: 48, 14: 50,
      15: 53, 16: 55,
      17: 58, 18: 60, 19: 62,
      20: 65, 21: 67,
      22: 70, 23: 72, 24: 74 };

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
      for (var i = 0; i < this.whites; i++) {
        this.piano.addKeytoPiano(i, this.mapWhiteKeys[i], " ", true);
      }
      for (var _i = 0; _i < this.blacks; _i++) {
        this.piano.addKeytoPiano(_i, this.mapBlackKeys[_i], " ", false);
      }
      console.log(this.piano.keyArray);
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
    value: function addKeytoPiano(id, mp3Id, keyboardEventId, isWhite) {
      this.keyArray.push(new _SingleKey2.default(id, mp3Id, keyboardEventId, isWhite));
    }
  }]);

  return Piano;
}();

exports.default = Piano;

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
  function SingleKey(id, mp3Id, keyboardEventId, isWhite) {
    _classCallCheck(this, SingleKey);

    var URL = 'http://localhost:3003/music?id=a';
    this.id = id;
    this.mp3Id = mp3Id;
    this.keyboardEventId = keyboardEventId;
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
        this.stringPattern = "key-white-" + this.id;
      } else {
        this.stringPattern = "key-black-" + this.id;
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
exports.addClickEvents = addClickEvents;
var yodelBuffer = void 0;

function addClickEvents(piano) {
  var context = new AudioContext();

  var _loop = function _loop(i) {
    $("#" + piano.keyArray[i].stringPattern).on("click", function () {
      console.log(piano.keyArray[i].URL);
      getData(piano.keyArray[i].URL, context);
    });
  };

  for (var i = 0; i < piano.keyArray.length; i++) {
    _loop(i);
  }
}

function getData(URL, context) {
  window.fetch(URL).then(function (response) {
    return response.arrayBuffer();
  }).then(function (arrayBuffer) {
    return context.decodeAudioData(arrayBuffer);
  }).then(function (audioBuffer) {
    yodelBuffer = audioBuffer;
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.initStyleAdding = initStyleAdding;
function initStyleAdding() {
	var numofWhiteKeys = 36;
	var numofBlackKeys = 25;
	var total = numofWhiteKeys + numofBlackKeys;
	addWhiteDivs(numofWhiteKeys);
	addBlackDivs(numofBlackKeys);
	addMouseOverEvent(numofWhiteKeys, numofBlackKeys);
}

function addWhiteDivs(numofKeys) {
	var template = '';
	var left = 0;
	for (var i = 0; i < numofKeys; i++) {
		template += '<div class = "single-key-white" id = "key-white-' + i + '"></div>';
		$('<style>#key-white-' + i + '{ left:' + left + '%;  }</style>').appendTo('head');
		left += 2.7777;
	}
	$("#whites").append(template);
}

function addBlackDivs(numofKeys) {
	var template = '';
	var left = 2.0277;
	for (var i = 0; i < numofKeys; i++) {
		template += '<div class = "single-key-black" id = "key-black-' + i + '"></div>';
		$('<style>#key-black-' + i + '{ left:' + left + '%;  }</style>').appendTo('head');
		if (i % 5 != 1 && i % 5 != 4) {
			left += 2.7777;
		} else {
			left += 5.5554;
		}
	}
	$("#black").append(template);
}

function addMouseOverEvent(numofWhiteKeys, numofBlackKeys) {
	var _loop = function _loop(i) {
		var stringPattern = "#key-white-" + i;
		console.log("Git");
		$(stringPattern).on("mouseover", function () {
			console.log("I see you");
			$(stringPattern).css({ "background": "linear-gradient(0deg, rgb(176,176,176), rgb(176,176,176) 5%, rgb(255,255,255))" });
		});
		$(stringPattern).on("mouseout", function () {
			console.log("I see you");
			$(stringPattern).css({ "background": "linear-gradient(0deg, rgb(224,224,224), rgb(224,224,224) 5%, rgb(255,255,255))" });
		});
	};

	for (var i = 0; i < numofWhiteKeys; i++) {
		_loop(i);
	}

	var _loop2 = function _loop2(i) {
		var stringPattern = "#key-black-" + i;
		console.log("Git");
		$(stringPattern).on("mouseover", function () {
			console.log("I see you");
			$(stringPattern).css({ "background": "linear-gradient(0deg, rgb(64,64,64), rgb(64,64,64) 5%, rgb(0,0,0))" });
		});
		$(stringPattern).on("mouseout", function () {
			console.log("I see you");
			$(stringPattern).css({ "background": "rgb(0,0,0)" });
		});
	};

	for (var i = 0; i < numofBlackKeys; i++) {
		_loop2(i);
	}
}

/***/ })
/******/ ]);
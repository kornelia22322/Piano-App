import Piano from "./Piano.js"
import PianoBuilder from "./PianoBuilder.js"

export function initStyleAdding(pianoBuilder, piano) {
	addDivs(pianoBuilder);
	addMouseOverEvent(piano);
}

function addDivs(pianoBuilder) {
	addWhiteDivs(pianoBuilder.mapWhiteKeys, 0, "#whites");
	addBlackDivs(pianoBuilder.mapBlackKeys, 2.02777, "#black");
}

function addWhiteDivs(whiteKeysArray, left, divToAppend) {
	let template = '';
	let templateforWhiteSpan = '';
	for(let i in whiteKeysArray) {
		let val = Object.keys(whiteKeysArray[i])[0];
		template += '<div class = "single-key-white" id = "key-white-' + val + '"></div>';
		$('<style>#key-white-'+ val +'{ left:'+left+'%;  }</style>').appendTo('head');
		left += 2.7777;
	}
	$(divToAppend).append(template);
}

function addBlackDivs(blackKeysArray, left, divToAppend) {
	let template = '';
	let iterator = 0;
	for(let i in blackKeysArray) {
		let val = Object.keys(blackKeysArray[i])[0];
		template += '<div class = "single-key-black" id = "key-black-' + val + '"></div>';
		$('<style>#key-black-'+ val +'{ left:'+left+'%;  }</style>').appendTo('head');
		if(iterator%5 != 1 && iterator%5 != 4) {
			left += 2.7777;
		} else {
			left += 5.5554;
		}
		iterator++;
	}
	$(divToAppend).append(template);
}

function addMouseOverEvent(piano){
	for(let i in piano.keyArray) {
		if(piano.keyArray[i] != undefined && piano.keyArray[i].isWhite) {
			$(piano.keyArray[i].stringPattern).on({
				"mouseover" : function() {
					changeWhiteKeyColor(piano.keyArray[i].stringPattern);
	  			},
				"mouseout" : function() {
					getBackWhiteKeyColor(piano.keyArray[i].stringPattern);
				}
			});
		} else if(piano.keyArray[i] != undefined && !piano.keyArray[i].isWhite) {
			$(piano.keyArray[i].stringPattern).on({
				"mouseover": function() {
		      		changeBlackKeyColor(piano.keyArray[i].stringPattern);
	  			},
				"mouseout" : function() {
					getBackBlackKeyColor(piano.keyArray[i].stringPattern);
				}
			});
		}
	}
}

export function changeWhiteKeyColor(divId) {
	$(divId).css({"background" : "linear-gradient(0deg, rgb(176,176,176), rgb(176,176,176) 5%, rgb(255,255,255))"});
}

export function getBackWhiteKeyColor(divId) {
	$(divId).css({"background" : "linear-gradient(0deg, rgb(224,224,224), rgb(224,224,224) 5%, rgb(255,255,255))"});
}

export function changeBlackKeyColor(divId) {
	$(divId).css({"background" : "linear-gradient(0deg, rgb(64,64,64), rgb(64,64,64) 5%, rgb(0,0,0))"});
}

export function getBackBlackKeyColor(divId) {
	$(divId).css({"background" : "rgb(0,0,0)"});
}

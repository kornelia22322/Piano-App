import Piano from "./Piano.js"
import PianoBuilder from "./PianoBuilder.js"


export function initStyleAdding(pianoBuilder, piano) {
	addDivs(pianoBuilder);
	addMouseOverEvent(piano);
}

function addDivs(pianoBuilder) {
	let templateforWhite = '';
	let templateforBlack = '';
	let templateforWhiteSpan = '';
	
	let leftforWhite = 0;
	let leftforBlack = 2.02777;
	let iteratorforBlack = 0;

	for(let i in pianoBuilder.mapWhiteKeys) {
		let val = Object.keys(pianoBuilder.mapWhiteKeys[i])[0];
		templateforWhite += '<div class = "single-key-white" id = "key-white-' + val + '"></div>';
		$('<style>#key-white-'+ val +'{ left:'+leftforWhite+'%;  }</style>').appendTo('head');
		templateforWhiteSpan = '<div class = "single-span" id = "span-white-' + val + '></div>';
		$('<style>#key-white-'+ val +'{ left:'+leftforWhite+'%;  }</style>').appendTo('head');
		leftforWhite += 2.7777;
	}

	for(let i in pianoBuilder.mapBlackKeys) {
		templateforBlack += '<div class = "single-key-black" id = "key-black-' + Object.keys(pianoBuilder.mapBlackKeys[i])[0] + '"></div>';
		$('<style>#key-black-'+ Object.keys(pianoBuilder.mapBlackKeys[i])[0] +'{ left:'+leftforBlack+'%;  }</style>').appendTo('head');
		if(iteratorforBlack%5 != 1 && iteratorforBlack%5 != 4) {
			leftforBlack += 2.7777;
		} else {
			leftforBlack += 5.5554;
		}
		iteratorforBlack++;
	}
	$("#whites").append(templateforWhite);
	$("#black").append(templateforBlack);
}

function addMouseOverEvent(piano){
	for(let i in piano.keyArray) {
		if(piano.keyArray[i] != undefined && piano.keyArray[i].isWhite) {
			$(piano.keyArray[i].stringPattern).on({
				"mouseover" : function() {
					console.log(piano.keyArray[i].stringPattern);
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

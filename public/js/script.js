(function() {
	const numofWhiteKeys = 36;
	const numofBlackKeys = 25;
	const total = numofWhiteKeys + numofBlackKeys;

	function init() {
		addWhiteDivs(numofWhiteKeys);
		addBlackDivs(numofBlackKeys);
		addMouseOverEvent();
	}

	function addWhiteDivs(numofKeys) {
		var template = '';
		var left = 0;
		for(var i = 0; i < numofKeys; i++){
			template += '<div class = "single-key-white" id = "key-white-' + i + '"></div>';
			$('<style>#key-white-'+i+'{ left:'+left+'%;  }</style>').appendTo('head');
			left += 2.7777;
		}
		$("#whites").append(template);
	}

	function addBlackDivs(numofKeys) {
		var template = '';
		var left = 2.0277;
		for(var i = 0; i < numofKeys; i++) {
			template += '<div class = "single-key-black" id = "key-black-' + i + '"></div>';
			$('<style>#key-black-'+i+'{ left:'+left+'%;  }</style>').appendTo('head');
			if(i%5 != 1 && i%5 != 4) {
				left += 2.7777;
			} else {
				left += 5.5554;
			}
		}
		$("#black").append(template);
	}

	function addMouseOverEvent(){
		for(let i = 0; i < numofWhiteKeys; i++){
      let stringPattern = "#key-white-"+i;
			console.log("Git");
      $(stringPattern).on("mouseover", function() {
				console.log("I see you");
        $(stringPattern).css({"background" : "linear-gradient(0deg, rgb(176,176,176), rgb(176,176,176) 5%, rgb(255,255,255))"});
    	});
			$(stringPattern).on("mouseout", function() {
				console.log("I see you");
        $(stringPattern).css({"background" : "linear-gradient(0deg, rgb(224,224,224), rgb(224,224,224) 5%, rgb(255,255,255))"});
    	});
		}

    for(let i = 0; i < numofBlackKeys; i++){
			let stringPattern = "#key-black-"+i;
			console.log("Git");
      $(stringPattern).on("mouseover", function() {
				console.log("I see you");
        $(stringPattern).css({"background" : "linear-gradient(0deg, rgb(64,64,64), rgb(64,64,64) 5%, rgb(0,0,0))"});
    	});
			$(stringPattern).on("mouseout", function() {
				console.log("I see you");
        $(stringPattern).css({"background" : "rgb(0,0,0)"});
    	});
    }
	}

	init();
})();

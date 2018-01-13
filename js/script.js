(function injectDivs() {
	this.init = function() {
		addWhiteDivs(36);
		addBlackDivs(25);
	}

	this.addWhiteDivs = function(numofKeys) {
		var template = '';
		var left = 0;
		for(var i = 0; i < numofKeys; i++){
			template += '<div class = "single-key-white" id = "key-white-' + i + '"></div>';
			$('<style>#key-white-'+i+'{ left:'+left+'%;  }</style>').appendTo('head');	
			left += 2.7777;		
		}	
		$("#whites").append(template);
	}

	this.addBlackDivs = function(numofKeys) {
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

	this.init();
})();
var dotProgress = dotProgress || {};
dotProgress.Dot = (function() {

	'use strict';

	var Dot = function(document) {
		this.div = document.createElement('div');
	};


	Dot.prototype.setPosition = function(x, y, scale, zIndex, active) {
		this.div.style.position = 'absolute';
		this.div.style.left = x + 'px';
		this.div.style.top = y + 'px';
		this.div.style.transform = 'scale('+scale+', '+scale+')';
		if(active) {
			this.div.className = 'active';
		}
		else {
			this.div.className = 'inactive';
		}
	};


	return(Dot);

}());
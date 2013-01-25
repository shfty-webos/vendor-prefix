enyo.vendor = '';

(function() {
	var prefix = '';
	var prefixes = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform'];
	var tmp = document.createElement('div');
	for(var i = 0; i < prefixes.length; i++) {
		if(typeof tmp.style[prefixes[i]] != 'undefined') {
			prefix = prefixes[i];
			break;
		}
		else {
			prefix = null;
		}
	}
	
	switch(prefix) {
		case 'transform':
			enyo.vendor = '';
			break;
		case 'WebkitTransform':
			enyo.vendor = '-webkit-';
			break;
		case 'MozTransform':
			enyo.vendor = '-moz-';
			break;
		case 'OTransform':
			enyo.vendor = '-o-';
			break;
		case 'msTransform':
			enyo.vendor = '-ms-';
			break;
	}
})();

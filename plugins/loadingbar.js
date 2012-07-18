var LoadingBar = function() {
	var my = {}, that = {};
	my.len = 25;
	my.count = 0;
	my.line = [];
	that.init = function(terminal) {
		my.terminal = terminal;
	};
	that.run = function() {
		var dfd = $.Deferred();
		my.count = 0;
		my.line = ['['];
		_.times(my.len, function() { my.line.push('&nbsp;'); });
		my.line.push(']');
		my.runner(dfd, 0);		
		return dfd.promise();
	};
	my.runner = function(dfd, index) {
		index = index + 1;
		_.times(index, function(i) { my.line[i+1] = '='; });
		my.terminal.replaceln(my.line.join(''));
		if(index == my.len+1) {
			dfd.resolve();
		}
		else {
			_.delay(function() {
				my.runner(dfd, index);
			}, 250);
		}
	};
	return that;
};
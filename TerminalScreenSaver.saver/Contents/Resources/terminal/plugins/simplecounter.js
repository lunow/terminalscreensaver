var SimpleCounter = function() {
	var my = {}, that = {};
	my.count = 0;
	my.getCount = function() {
		return my.count+'%';
	};
	that.init = function(terminal) {
		my.terminal = terminal;
	};
	that.run = function() {
		var dfd = $.Deferred();
		my.terminal.writeln(my.getCount());
		my.startCount(dfd);
		return dfd.promise();
	};
	my.startCount = function(dfd) {
		if(my.count < 100) {
			my.count++;
		}
		my.terminal.replaceln(my.getCount());
		_.delay(function() {
			if(my.count < 100) {
				my.startCount(dfd);
			}
			else {
				my.count = 0;
				dfd.resolve();
			}
		}, rand(10, 20));	
	};
	return that;
};
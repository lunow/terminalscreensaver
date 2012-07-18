/*
 *	Perform a wave! Yeaha.
 */
var TheWave = function() {
	var my = {}, that = {};
	my.len = 100;
	my.sign1 = '_';
	my.sign2 = '=';
	my.line = [];
	my.count = 0;
	my.up = true;
	that.init = function(terminal) {
		my.terminal = terminal;
	};
	that.run = function() {
		//do something
		var dfd = $.Deferred();
		_.times(my.len, function(i) { my.line[i] = my.sign1; });
		my.count = -1;
		my.up = true;
		my.run(dfd);
		return dfd.promise();
	};
	my.run = function(dfd) {
		if(my.up && my.count > my.len) {
			my.up = false;
			my.count++;
		}
		if(my.up) {
			my.count++;
			s = my.sign2;
		}
		else {
			my.count--;
			s = my.sign1;
		}
		my.line[my.count] = s;
		my.terminal.writeln(my.line.join(''));
		
		if(my.count ===  0 && !my.up) {
			dfd.resolve();
		}
		else {
			_.delay(function() { my.run(dfd); }, 50);
		}
	};
	return that;
};
/*
 * 	BaseProcess
 *	This is a cool one!
 *	Use it for printing multiple lines to the terminal
 *	Its a wrapper and has no own output
 *
 *	Use it like this:
 *
	 var UseProcess = function() {
		var lines = [];
		lines.push('Hello World');
		lines.push('Thanks for the fish');
		return BaseProcess(lines);
	 };
 */
var BaseProcess = function(lines, speed) {
	var my = {}, that = {};
	my.lines = lines;
	my.index = 0;
	my.speed = speed || 50;

	that.init = function(terminal) {
		my.terminal = terminal;
	};

	that.run = function() {
		var dfd = $.Deferred();
		my.write(dfd, -1);
		return dfd.promise();
	};

	my.write = function(dfd, index) {
		my.index = index + 1;
		if(my.index < my.lines.length) {
			my.terminal.writeln(my.lines[my.index]);
			_.delay(function() {
				my.write(dfd, my.index);
			}, rand(my.speed, my.speed * 5));
		}
		else {
			dfd.resolve();
		}
	};

	return that;
};
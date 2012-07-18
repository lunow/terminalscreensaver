/*
 * Plugin Template Title
 */
var PluginTemplate = function() {
	//my is private, that are public variables
	var my = {}, that = {};

	//the init function is called when adding the plugin and get an instance from the terminal
	that.init = function(terminal) {
		//save it for later use
		my.terminal = terminal;
	};

	//run is called every time when the plugin should say something
	that.run = function() {
		//use the jquery deferred object for perform multiple output
		var dfd = $.Deferred();
		//display a line:
		my.terminal.writeln('hello');
		//and replace the last line
		my.terminal.replaceln('world');
		//use the magic underscore library for cool shorthands
		_.delay(dfd.resolve, 100);
		//return the dfd.promise(), so the terminal is waiting for you
		return dfd.promise();
	};

	//dont forget to return your public methods!
	return that;
};
The TerminalScreensaver for OSX
===============================

This is the a very small working demo for a nice looking "Terminal Screeensaver". And its easy extendeable.

The screensaver is build with the WebviewScreensaver (https://github.com/liquidx/webviewscreensaver) developed by liquidx.


Demo
----
You find the Demo here: [http://lunow.github.com/terminalscreensaver/](http://lunow.github.com/terminalscreensaver/)



Download
--------
Download the *TerminalScreenSaver.saver* from this repository and add it by double click. Done!


Working
-------
Its just a simple jQuery App printing div by div to the screen. The content for the div containers are provided by plugins.


Building the simplest plugin
----------------------------
The simplest way is prompting a number of lines to the screen. Its integreated in ten seconds:

	var myProcess = function() {
		var lines = [];
		lines.push('Hello');
		lines.push('World');
		return BaseProcess(lines);
	}

`BaseProcess` is a class serves the Plugin inteface for you. As second paramter you can provide an integer value for the speed in milliseconds.

Next and last step is adding the plugin to the terminal:

	app = Terminal();
	app.addPlugin(myProcess, 20);
	app.start();

`addPlugin` adds the plugin. Second parameter is for controling the frequency.


Build a more complex plugin
---------------------------

If you need more than a few lines, in fact replace the last line, you can build a complete new plugin. This is the template:

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

Its important to return a Deferred Object in the `run` function! Everything else is commented and easy to understand.

*If you have build a plugin, please send me an pull request, so everybody can see it!*


Todos
-----
This is only a very simple and fast demo. There are a few things to do:

- build some cool or funny plugins
- publish the screensaver x code project
- remove the unused lines from screen after a while
- make the terminal faster
- possiblity to replace more then one line
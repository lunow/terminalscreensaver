The TerminalScreensaver for OSX
===============================

This is a very small working demo for my nice looking "Terminal Screensaver".

The screensaver is built with the [WebviewScreensaver](https://github.com/liquidx/webviewscreensaver) developed by liquidx.


Demo
----
You find the demo here: [http://lunow.github.com/terminalscreensaver/demo.html](http://lunow.github.com/terminalscreensaver/demo.html)



Download
--------
Download the [TerminalScreenSaver.saver](https://github.com/lunow/terminalscreensaver/zipball/master) from this repository and add it by double clicking. Done!


Working
-------
It's just a simple jQuery App printing div by div to the screen. The content of the divs is provided by plugins.


Build a simple plugin
----------------------------
The simplest way is prompting a number of lines on the screen. It's integrated in ten seconds:

	var myProcess = function() {
		var lines = [];
		lines.push('Hello');
		lines.push('World');
		return BaseProcess(lines);
	}

`BaseProcess` is an object that provides the Plugin interface for you. As second parameter you can provide an integer value for the speed in milliseconds.

Next and last step is adding the plugin to the terminal:

	app = Terminal();
	app.addPlugin(myProcess, 20);
	app.start();

`addPlugin` adds the plugin. Second parameter is for controlling the frequency.


Build a more complex plugin
---------------------------

If you need more than a few lines, in fact you want to replace the last line, you can build a completly new plugin. This is the template:

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

*If you have built a plugin, please send me a pull request, so everybody can see it!*


Todos
-----
This is only a very simple and short demo. There are a few things to do:

- build some cool or funny plugins
- publish the screensaver x code project
- remove the unused lines from screen after a while
- make the terminal faster
- possiblity to replace more than one line
- themes support
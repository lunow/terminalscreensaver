var Terminal = function() {
	var my = {}, that = {};
	my.lines = [];
	my.plugins = [];
	my.$last = $('');

	that.writeln = function(ln) {
		if(!ln) ln = my.getLn();
		var $ln = $('<div class="ln">'+ln+'</div>');
		$('body').append($ln);
		$(window).scrollTop($ln.offset().top);
		my.$last = $ln;
	};

	that.replaceln = function(ln) {
		if(my.$last) {
			my.$last.remove();
		}
		that.writeln(ln);
	};

	my.getPlugin = function() {
		return my.plugins[rand(0, my.plugins.length-1)];
	};

	that.addPlugin = function(plugin, count) {
		count = count || 1;
		_.times(count, function() {
			my.plugins.push(plugin());
		});
	};

	that.start = function() {
		var plugin = my.getPlugin();
		if(plugin) {
			plugin.init(that);
			$.when(plugin.run()).then(that.start);
		}
	};

	return that;
};
var SimpleLine = function() {
	var lines = [];
	lines.push('git push');
	lines.push('hello world');
	lines.push('where is the fish');
	lines.push('mvn clean install');
	lines.push('jstd-server-starlines.push');
	return BaseProcess(lines, 250);
};
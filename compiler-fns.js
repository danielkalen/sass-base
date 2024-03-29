var fs = require('fs'),
	path = require('path'),
	sass = require('sass');

module.exports = {
	'base64Font($file)': function(file) {
		var fontLocation = process.env.fontsDir || '/public/fonts/',
			filePath = path.resolve(fontLocation, file.getValue()),
			output, data;
		
		data = fs.readFileSync(filePath);
		output = data.toString('base64');
		return new sass.types.String(output);
	}
};
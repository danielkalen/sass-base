var fs = require('fs'),
	path = require('path'),
	sass = require('node-sass');

module.exports = {
	'base64Font($file)': function(file) {
		var fontLocation = process.env.fontsDir || '/public/fonts/',
			filePath = path.join(process.cwd(), fontLocation, file.getValue()),
			output, data;
		
		data = fs.readFileSync(filePath);
		output = data.toString('base64');
		return new sass.types.String(output);
	}
};
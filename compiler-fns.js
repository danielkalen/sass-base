var fs = require('fs'),
	path = require('path'),
	sass = require('node-sass'),
	functions = function(fontLocation){
		fontLocation = fontLocation || process.env.fontsDir || '/public/fonts/';
	
		return {
			'base64Font($file)': function(file) {
				var filePath = path.join(__dirname, fontLocation, file.getValue()),
					output, data;
				
				data = fs.readFileSync(filePath);
				output = data.toString('base64');
				return new sass.types.String(output);
			}
		}
	};

module.exports = functions;
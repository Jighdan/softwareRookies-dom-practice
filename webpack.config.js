const path = require("path");

module.exports = {
	entry: "./src/scripts/index.js",
	mode: process.env.NODE_ENV === "production" ? "production" : "development",
	module: {
		rules: []
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "script.js"
	}
}
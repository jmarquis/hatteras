module.exports = function (grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON("package.json"),

		bower: {
			install: {
				options: {
					targetDir: "./styles",
					cleanBowerDir: true,
					layout: function (type, component) {
						return ".";
					}
				}
			}
		}

	});

	grunt.loadNpmTasks("grunt-bower-task");

	grunt.registerTask("install", ["bower"]);
	grunt.registerTask("default", ["install"]);

};

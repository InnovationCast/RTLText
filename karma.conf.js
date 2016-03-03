/* global module */
module.exports = function (config) {
	'use strict';
	config.set({
		autoWatch: true,
		singleRun: true,
        port: 5000,

		frameworks: ['jspm', 'jasmine'],

		files: [
			'node_modules/babel-polyfill/dist/polyfill.js'
		],

		jspm: {
			config: 'config.js',
			loadFiles: [
				'test/**/*.js'
			],
			serveFiles: [
				'src/*.js'
			]
		},

		proxies: {
			'/src/': '/base/src/',
            '/test/': '/base/test/',
            '/jspm_packages/': '/base/jspm_packages/'
		},

		browsers: ['PhantomJS'],

		preprocessors: {
			'src/*.js': ['babel', 'sourcemap']
		},

		babelPreprocessor: {
			options: {
				sourceMap: 'inline'
			},
			sourceFileName: function(file) {
				return file.originalPath;
			}
		},

		reporters: ['progress']
	});

	function normalizationBrowserName(browser) {
		return browser.toLowerCase().split(/[ /-]/)[0];
	}
};

define({
	// Maximum number of simultaneous integration tests that should be executed on the remote WebDriver service
	maxConcurrency: 3,

	// Non-functional test suite(s) to run in each browser
	suites: [
		'tests/Creational/Singleton',
		'tests/Creational/FactoryMethod'
	],

	// Functional test suite(s) to run in each browser once non-functional tests are completed
	functionalSuites: [ /* 'myPackage/tests/functional' */ ],

	// A regular expression matching URLs to files that should not be included in code coverage analysis
	excludeInstrumentation: /^(?:tests|node_modules)\//
});

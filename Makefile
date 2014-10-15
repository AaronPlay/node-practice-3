TESTS = test/*.js
TEST_TIMEOUT = 15000
MOCHA_OPTS = spec

test: 
	./node_modules/.bin/mocha

cov test-cov:
	./node_modules/.bin/istanbul cover _mocha
	
.PHONY: test cov test-cov
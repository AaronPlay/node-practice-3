TESTS = test/*.js
TEST_TIMEOUT = 15000
MOCHA_REPORTER = spec

test:
  @Node_ENV=test ./node_modules/mocha/bin/mocha \
      --reporter $(MOCHA_REPORTER) \
      --timeout $(TEST_TIMEOUT) \
      $(TESTS)

cov test-cov:
  @Node_ENV=test node \
      node_modules/.bin/istanbul cover --preserver-comments \
      ./node_modules/.bin/_mocha \
      -- \
      --reporter $(MOCHA_REPORTER) \
      --timeout $(TEST_TIMEOUT) \
      $(TESTS)

.PHONY: test cov test-cov
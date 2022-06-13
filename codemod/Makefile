CIRCLE_SHA1 ?= 0000000000
SHORT_GIT_HASH := $(shell echo ${CIRCLE_SHA1} | cut -c -9)




install:
	yarn install --frozen-lockfile

unit_test_codemod:
	yarn test:unit:ci --projects=codemod

lint:
	yarn lint

# publish_codemod_npm:
# 	yarn build:sync-codemod-version; cd codemod; yarn publish --no-git-tag-version --access public;

publish_codemod_npm_dev:
	cd codemod; yarn publish --no-git-tag-version --new-version 0.0.0-${SHORT_GIT_HASH} --tag unstable --access public;

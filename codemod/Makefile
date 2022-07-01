SHORT_GIT_HASH := $(shell echo ${CIRCLE_SHA1} | cut -c -9)

install:
	cd codemod; yarn install --frozen-lockfile

lint:
	yarn lint

unit_test:
	yarn test:unit:ci --projects=codemod	

publish_npm:
	yarn publish --no-git-tag-version --access public;

publish_npm_dev:
	yarn publish --no-git-tag-version --new-version 0.0.0-${SHORT_GIT_HASH} --tag unstable --access public;
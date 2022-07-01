SHORT_GIT_HASH := $(shell echo ${CIRCLE_SHA1} | cut -c -9)

install:
	echo "$PWD" 
	ls
	yarn install --frozen-lockfile;

lint:
	yarn lint

unit_test:
	yarn test:unit:ci --projects=codemod	

publish_npm:
	yarn publish --no-git-tag-version --access public;

publish_npm_dev:
	yarn publish --no-git-tag-version --new-version 0.0.0-${SHORT_GIT_HASH} --tag unstable --access public;

set_git_identity:
	git config --global user.email "ncu-product-platforms@news.co.uk"
	git config --global user.name "Product Platforms Service"
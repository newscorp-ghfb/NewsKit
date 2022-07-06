SHORT_GIT_HASH := $(shell echo ${CIRCLE_SHA1} | cut -c -9)

install:
	yarn install --frozen-lockfile;

lint:
	yarn lint

unit_test:
	yarn test:ci	

publish_npm:
	yarn publish --no-git-tag-version --access public;

publish_npm_dev:
	yarn publish --no-git-tag-version --new-version 0.0.0-${SHORT_GIT_HASH} --tag unstable --access public;

set_git_identity:
	git config --global user.email "ncu-product-platforms@news.co.uk"
	git config --global user.name "Product Platforms Service"

bump_version:
	git checkout main
	git pull
	yarn config set version-git-message "Bumping Codemod version to v%s - [skip ci]"
	yarn config set version-tag-prefix "codemod-v"
	echo "Updating package.json and creating a tag for `${NEW_VERSION}`"
	yarn version --new-version ${NEW_VERSION}
		

delete_trigger_release_tag:
	git checkout main
	git push origin --delete trigger-release-codemod@${VERSION}	
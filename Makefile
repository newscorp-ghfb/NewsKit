DOCKER_REGISTRY_URL ?= ncu-product-platforms
DOCKER_REPO ?= design-system-site
DOCKER_TAG ?= latest
CIRCLE_SHA1 ?= 0000000000
SHORT_GIT_HASH := $(shell echo ${CIRCLE_SHA1} | cut -c -9)

# CURRENT BRANCH CHECKED OUT
CURRENT_BRANCH = $(shell git symbolic-ref --short -q HEAD)

# Cleans branch into a url friendly format
BASE_PATH = $(shell node -p "/(^main$$)/.test('${CURRENT_BRANCH}') ? '' : require('./scripts/branch-name-to-url.js').branchNameToUrl('${CURRENT_BRANCH}')")

BASE_URI = ${SITE_BASE_URL}${BASE_PATH}/

install:
	yarn install --frozen-lockfile

download_headless_chrome:
	sudo apt-get update && sudo apt-get install --download-only -yq gconf-service libasound2 libatk1.0-0 libatk-bridge2.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libgbm-dev libappindicator1 libnss3 lsb-release xdg-utils wget
	mkdir -p vendor/apt
	sudo cp -R /var/cache/apt vendor/
	sudo chown -R ${USER}:${USER} vendor/apt
	sudo chmod -R 755 vendor/apt

install_headless_chrome:
	sudo dpkg -i vendor/apt/archives/*.deb

# When changing the version, make sure it matches the one used in the `test_newskit_in_nextjs_app` CircleCI's job.
install_cypress:
	yarn add -D cypress@12.3.0;

build_icons:
	yarn build:icons

build_components:
	yarn build:comps

build_storybook:
	yarn build:storybook

build_docs:
	SITE_ENV=${SITE_ENV} BASE_URI=${BASE_URI} BASE_PATH=${BASE_PATH} yarn build:docs && yarn postbuild:docs

build_docs_pr_with_no_base_url:
	SITE_ENV=${SITE_ENV} yarn build:docs && yarn postbuild:docs

unit_test_docs:
	yarn test:unit:ci --projects=site

unit_test_comps:
	yarn test:unit:ci --projects=src

lint:
	yarn lint

check_broken_links_docs:
	yarn e2e:findbrokenlinks:ci

comps_visual_test:
	yarn test:visual:comps:ci

comps_visual_test_percy:
	yarn test:visual:comps:ci:percy

skip_comps_visual_test_percy:
	yarn test:visual:comps:ci:percy:skip

e2e_test_comps:
	yarn e2e:comps:ci;

e2e_test_build:
	yarn e2e:build;

e2e_test_docs:
	yarn e2e:docs:ci;

e2e_visual_test_docs:
	yarn e2e:visual:docs:ci;

e2e_visual_test_docs_percy:
	yarn e2e:visual:docs:ci:percy;

skip_e2e_visual_test_docs_percy:
	yarn e2e:visual:docs:ci:percy:skip;

publish_npm_dev:
	cd dist; yarn publish --no-git-tag-version --new-version 0.0.0-${SHORT_GIT_HASH} --tag unstable;

publish_npm:
	cd dist; yarn publish --no-git-tag-version;

build_docker:
	docker build -t ncu-newskit .

push_docker:
	docker tag ncu-newskit:latest $(DOCKER_REGISTRY_URL)/$(DOCKER_REPO):$(DOCKER_TAG)
	docker push $(DOCKER_REGISTRY_URL)/$(DOCKER_REPO):$(DOCKER_TAG)

set_git_identity:
	git config --global user.email "ncu-product-platforms@news.co.uk"
	git config --global user.name "Product Platforms Service"

bump_version:
	git checkout main
	git pull
	yarn config set version-git-message "Bumping to version v%s - [skip ci]"
	echo "Updating package.json and creating a tag for `${NEW_VERSION}`"
	yarn version --new-version ${NEW_VERSION}
	git push
	git push origin v${NEW_VERSION}

# The tag deleted should match the expected tag in the `only_on_trigger_release_tag` filter.
delete_trigger_release_tag:
	git checkout main
	git push origin --delete trigger-release@${VERSION}


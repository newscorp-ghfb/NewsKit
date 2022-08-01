#!/bin/bash

# this script sets the environment variables required to run Applitools tests locally

USERNAME=$(git config user.name)
BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)
COMMIT_SHA=$(git rev-parse HEAD)
STATUS=$(git status)

# the commit needs to be pushed (so that the Applitools / GitHub integration can retrieve its info)
if [[ "$STATUS" != *"Your branch is up to date with 'origin/${BRANCH_NAME}'."* ]]; then
  echo "Please make sure you are up-to-date with remote before running Applitools tests."
  exit 1
fi

# guide the user to only running a subset of tests to keep usage down
if [[ $1 = "comps" ]]; then
  CONFIG_FILE="applitools.components.config.js"
  DOCS_LINK="https://www.npmjs.com/package/@applitools/eyes-storybook"
else
  CONFIG_FILE="applitools.config.js"
  DOCS_LINK="https://www.npmjs.com/package/@applitools/eyes-cypress"
fi

echo "If you have not added an include prop in ${CONFIG_FILE}, all ${1} tests will run."$'\n'
echo "See ${DOCS_LINK}"$'\n'
read -r -p "Proceed? (y/n) " response
if [[ $response =~ ^(yes|y) ]] || [[ -z $response ]]; then
  :
else
  echo Aborting
  exit 1
fi

# ask the user to input their API key
read -p "Enter your API key (you can find this in the Applitools UI): " apiKey

# the batch id must be set to the commit sha for the integration to work
export APPLITOOLS_BATCH_ID=$(git rev-parse HEAD);
# batch name can be anything (make it easy to identify)
export APPLITOOLS_BATCH_NAME="LOCAL RUN by ${USERNAME} for commit ${COMMIT_SHA} on ${BRANCH_NAME}";
# set to the user's API key
export APPLITOOLS_API_KEY=$apiKey
# make sure the batch closes after running
export APPLITOOLS_DONT_CLOSE_BATCHES=false

# once the tests start, warn the user that force quitting may lead to an unclosed batch
trap 'echo "Force quitting means that a batch may have been created but not closed. If so, tests in the next run for this commit will be added to the same batch. To prevent this you can close the batch using CURL or delete it in the Applitools UI."' INT

if [[ "$1" == "comps" ]]; then
  echo "Running component tests..."
  yarn test:visual:comps:ci
else
  echo "Running doc site tests..."
  yarn e2e:visual:docs:ci
fi

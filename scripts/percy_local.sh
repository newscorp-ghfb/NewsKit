#!/bin/bash

# this script sets the environment variables required to run Applitools tests locally

USERNAME=$(git config user.name)
BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)
COMMIT_SHA=$(git rev-parse HEAD)
STATUS=$(git status)

# the commit needs to be pushed (so that the Applitools / GitHub integration can retrieve its info)
#if [[ "$STATUS" != *"Your branch is up to date with 'origin/${BRANCH_NAME}'."* ]]; then
#  echo "Please make sure you are up-to-date with remote before running Applitools tests."
#  exit 1
#fi

# ask the user to input their API key
read -p "Enter the API key for the 'newskit-$1' project (you can find this in the Percy UI): " apiKey

# set to the user's API key
export PERCY_TOKEN=$apiKey

if [[ "$1" == "comps" ]]; then
  echo "Running component tests..."
  yarn test:visual:comps:ci:percy
else
  echo "Running doc site tests..."
  yarn e2e:visual:docs:ci:percy
fi

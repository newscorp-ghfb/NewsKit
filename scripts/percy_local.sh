#!/bin/bash

# this script sets the environment variables required to run Percy tests locally

USERNAME=$(git config user.name)
BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)
COMMIT_SHA=$(git rev-parse HEAD)
STATUS=$(git status)

if [[ $BRANCH_NAME == "main" ]]; then
# the commit needs to be pushed (so that the Percy / GitHub integration can retrieve its info)
  if [[ "$STATUS" != *"Your branch is up to date"* ]]; then
    echo "Please make sure you are up-to-date with remote before running Percy visual regression tests."
    exit 1
  fi
  echo "Running on main, so baseline images will be updated"
  read -p "Are you sure you want to update the baselines? (y/n)" updateBaselinesRes
  if [[ "$updateBaselinesRes" != "y" ]]; then
    exit 1
  fi
else
  export PERCY_BRANCH="local run by ${USERNAME}"
fi

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

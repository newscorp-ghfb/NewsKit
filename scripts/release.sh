#!/bin/bash
# This script creates a branch to trigger the release process for newskit. It will create a branch that signifies to the pipeline what type of update you are creating patch, minor, or major.
# This branch creation triggers a job in the pipeline to create release branches and PR's.

PATCH="patch"
MINOR="minor"
MAJOR="major"
QUIT="quit"

BASE="trigger-release"
CURRENT_BRANCH=$(git symbolic-ref --short HEAD)
RELEASE_BRANCH=""
OPTIONS=($PATCH $MINOR $MAJOR $QUIT)

function release {
    echo "Creating $1 release"

    if [ `git branch --list "$BASE-$1"` ]
    then
        echo "Branch name "$BASE-$1" already exists. Removing it now."
        git branch -D "$BASE-$1"
    fi

    git checkout -b "$BASE-$1"

    git push --set-upstream origin "$BASE-$1"

    git checkout $CURRENT_BRANCH

    git branch -D "$BASE-$1"
} 

echo 'Please update package version: '

select opt in "${OPTIONS[@]}"
do
    case $opt in
        $PATCH)
            release $PATCH
            break
            ;;
        $MINOR)
            release $MINOR
            break
            ;;
        $MAJOR)
            release $MAJOR
            break
            ;;
        $QUIT)
            break
            ;;
        *) echo "invalid option $REPLY";;
    esac
done
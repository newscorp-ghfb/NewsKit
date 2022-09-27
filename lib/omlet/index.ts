const shell = require('shelljs');
const fs = require('fs-extra');
const path = require('path');

const projectsToAnalyse = {
  // TODO refactor using the real folder name. Use this key name instead of grabbing the folder name from git url
  factiva: {
    'git-url': 'https://github.com/newscorp-ghfb/factiva-design-system',
    // TODO is path exhaustive? only "components"? need more complex path? array of multiple paths? ask patrick insight
    'input-flag-path': 'src/components/**/{index, styled}.{jsx,js,ts,tsx}',
    // TODO is path exhaustive? only "components"? need more complex path? array of multiple paths? ask patrick insight
    // test ignore when data can be deleted
    'ignore-flag-path': 'src/components/**/*.{stories,test}.{jsx,js,ts,tsx}',
  },
  // sun: {
  //   'git-url': 'https://github.com/newsuk/nu-sun-titan',
  //   'packages': {
  //     "nuk-ge-sun-web-component-library": {
  //       // TODO is path exhaustive? only "components"? need more complex path? array of multiple paths? ask patrick insight
  //       // see article-header for example
  //       'input-flag-path': 'src/components/**/*.{jsx,js,ts,tsx}',
  //       'ignore-flag-path': 'src/components/**/*.{stories,test,spec}.{jsx,tsx}',
  //     },
  //   },
  // },
  // render: {
  //   // TODO remove it and change logic to.. "If includes "packages"
  //   'git-url': 'https://github.com/newscorp-ghfb/ncu-newskit-render',
  //   'packages': {
  //     "shared-components": {
  //       'input-flag-path': 'src/**/*.{jsx,js,ts,tsx}',
  //     },
  //     "checkout": {
  //       'input-flag-path': 'src/**/*.{jsx,js,ts,tsx}',
  //       // TODO check ignore path is ok
  //       // 'ignore-flag-path': 'packages/checkout/src/**/*.{stories,test}.{jsx,js,ts,tsx}',
  //     },
  //   }
  // },
};

const gitClonePromisified = (project, projectFolderName) =>
  new Promise((resolve, reject) => {
    shell.exec(
      `git clone ${projectsToAnalyse[project]['git-url']} repos/${projectFolderName}`,
      {},
      (value, error) => {
        if (error) {
          return reject(error);
        }
        return resolve(value);
      },
    );
  });

const omletScript = async () => {

  // Creating repos folder
  await fs.promises
    .mkdir(path.join(process.cwd(), 'repos'), {recursive: true})
    .then(console.log('Repos folder created ✅'));

  // Looping into "projectsToAnalyse"
  Object.keys(projectsToAnalyse).forEach(async project => {
    const gitUrlSplit = projectsToAnalyse[project]['git-url'].split('/');
    const projectFolderName = gitUrlSplit[gitUrlSplit.length - 1];
    const isMonorepo = 'packages' in projectsToAnalyse[project]

    // Removing old project folder, so we can pull an updated one
    await fs
      .remove(path.join(process.cwd(), `repos/${projectFolderName}`))
      .then(console.log(`Old ${projectFolderName} has been deleted ✅`));
    //

    // Git Cloning the repo
    try {
      await gitClonePromisified(project, projectFolderName);
    } catch (error) {
      console.error(error);
    }

    if (isMonorepo) {
      // Object.keys(projectsToAnalyse[project]['packages']).forEach(subProject => {   
      //   const subProjectObject = projectsToAnalyse[project]['packages'][subProject]
      //   const inputFlagPath = subProjectObject['input-flag-path']
      //   const ignoreFlagPath = subProjectObject['ignore-flag-path']

      //   // -r flag is necessary for avoiding Omlet to take the name from the package.json existing in the path where the script is being run from.
      //   shell.exec(
      //     `npx omlet analyze -i '${inputFlagPath}' --ignore ${ignoreFlagPath} -r 'repos/${projectFolderName}/packages/${subProject}'`,
      //   );
      // })

    } else {
      shell.exec(
        `npx omlet analyze -i '${projectsToAnalyse[project]['input-flag-path']}' -r 'repos/${projectFolderName}'`,
      );
    }
  });
};

omletScript();

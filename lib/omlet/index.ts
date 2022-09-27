const shell = require('shelljs');
const fs = require('fs-extra');
const path = require('path');

const projectsToAnalyse = {
  factiva: {
    'git-url': 'https://github.com/newscorp-ghfb/factiva-design-system',
    'input-flag-path': 'src/components/**/{index, styled}.{jsx,js,ts,tsx}',
    'ignore-flag-path': 'src/components/**/*.{stories,test}.{jsx,js,ts,tsx}',
  },
  sun: {
    'git-url': 'https://github.com/newsuk/nu-sun-titan',
    'input-flag-path':
      'packages/nuk-ge-sun-web-component-library/src/**/*/*.{jsx,js,ts,tsx}',
    'ignore-flag-path':
      'packages/shared-components/src/**/*.{stories,test}.{jsx,js,ts,tsx}',
  },
  // render: {
  //   'git-url': 'https://github.com/newscorp-ghfb/ncu-newskit-render',
  //   'input-flag-path': 'packages/shared-components/src/**/*.{jsx,js,ts,tsx}',
  //   'input-flag-path-2': 'packages/checkout/src/**/*.{jsx,js,ts,tsx}',
  //   'ignore-flag-path':
  //     'packages/shared-components/src/**/*.{stories,test}.{jsx,js,ts,tsx}',
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
    console.log(
      `repos/${projectFolderName}/${projectsToAnalyse[project]['input-flag-path']}`,
      'hello',
    );
    // Running Omlet analyse
    // '/${projectsToAnalyse[project]['input-flag-path-two']}'
    shell.exec(
      `npx omlet analyze -i '${projectsToAnalyse[project]['input-flag-path']}' -r 'repos/${projectFolderName}'`,
    );
  });
};

omletScript();

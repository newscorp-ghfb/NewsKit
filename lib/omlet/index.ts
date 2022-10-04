const shell = require('shelljs');
const fs = require('fs-extra');
const path = require('path');

// name of project should match github repo name ie factiva-design-system
const projectsToAnalyse = {
  'factiva-design-system': {
    'git-url': 'https://github.com/newscorp-ghfb/factiva-design-system',
    'input-flag-path': 'src/components/**/{index, styled}.{jsx,js,ts,tsx}',
    'ignore-flag-path': 'src/components/**/*.{stories,test}.{jsx,js,ts,tsx}',
  },
  'nu-sun-titan': {
    'git-url': 'https://github.com/newsuk/nu-sun-titan',
    packages: {
      'nuk-ge-sun-web-component-library': {
        'input-flag-path': 'src/components/**/*.{jsx,js,ts,tsx}',
        'ignore-flag-path': 'src/components/**/*.{stories,test,spec}.{jsx,tsx}',
      },
    },
  },
  'ncu-newskit-render': {
    'git-url': 'https://github.com/newscorp-ghfb/ncu-newskit-render',
    packages: {
      'shared-components': {
        'input-flag-path': 'src/**/*.{jsx,js,ts,tsx}',
        'ignore-flag-path': 'src/**/**/*.{stories,test}.{jsx,js,ts,tsx}',
      },
      checkout: {
        'input-flag-path': 'src/**/**/**/*.{jsx,js,ts,tsx}',
        'ignore-flag-path': 'src/**/*.{stories,test}.*',
      },
    },
  },
};

const gitClone = project =>
  new Promise((resolve, reject) => {
    shell.exec(
      `git clone ${projectsToAnalyse[project]['git-url']} repos/${project}`,
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
    const isMonorepo = 'packages' in projectsToAnalyse[project];

    // Removing old project folder, so we can pull an updated one
    await fs
      .remove(path.join(process.cwd(), `repos/${project}`))
      .then(console.log(`Old ${project} has been deleted ✅`));
    //

    // Git Cloning the repo
    try {
      await gitClone(project);
    } catch (error) {
      console.error(error);
    }

    if (isMonorepo) {
      Object.keys(projectsToAnalyse[project]['packages']).forEach(
        subProject => {
          const subProjectObject =
            projectsToAnalyse[project]['packages'][subProject];
          const inputFlagPath = subProjectObject['input-flag-path'];
          const ignoreFlagPath = subProjectObject['ignore-flag-path'];
          // -r flag is necessary for avoiding Omlet to take the name from the package.json existing in the path where the script is being run from.
          shell.exec(
            `npx omlet analyze -i '${inputFlagPath}' --ignore ${ignoreFlagPath} -r 'repos/${project}/packages/${subProject}'`,
          );
        },
      );
    } else {
      const ignoreFlag =
        'ignore-flag-path' in projectsToAnalyse[project]
          ? `--ignore '${projectsToAnalyse[project]['ignore-flag-path']}'`
          : '';
      shell.exec(
        `npx omlet analyze -i '${projectsToAnalyse[project]['input-flag-path']}' ${ignoreFlag} -r 'repos/${project}'`,
      );
    }
  });
};

omletScript();

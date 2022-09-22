const shell = require('shelljs');
const fs = require('fs-extra');
const path = require('path');

const omletScript = async () => {
  const projectsToAnalyse = {
    factiva: {
      'git-url': 'https://github.com/newscorp-ghfb/factiva-design-system',
      'input-flag-path': 'src/components/**/{index, styled}.{jsx,js,ts,tsx}',
      'ignore-flag-path': 'src/components/**/*.{stories,test}.{jsx,js,ts,tsx}',
    },
  };

  // const makeFolder = () => {
  //   fs.promises.mkdir('/omlet', error => {
  //     console.log(error);
  //   });
  // };

  await fs.promises
    .mkdir(path.join(process.cwd(), 'omlet'), {recursive: true})
    .then(console.log('Omlet folder created ✅'));

  /* istanbul ignore next */
  // throw err;

  // await fs.promises.mkdir(path.join(__dirname, 'omlet'), 'hello');
  // text.split('.')[text.split('.').length -1]

  Object.keys(projectsToAnalyse).forEach(async project => {
    const gitUrlArray = projectsToAnalyse[project]['git-url'].split('/');
    const projectFolderName = gitUrlArray[gitUrlArray.length - 1];
    await fs
      .remove(path.join(process.cwd(), `omlet/${projectFolderName}`))
      .then(console.log(`old ${projectFolderName} has been deleted ✅`));

    console.log(`git clone ${projectsToAnalyse[project]['git-url']}`);

    // shell.exec(
    //   `git clone ${projectsToAnalyse[project]['git-url']} omlet/${projectFolderName}`,
    // );
    try {
      await new Promise((resolve, reject) =>
        shell.exec(
          `git clone ${projectsToAnalyse[project]['git-url']} omlet/${projectFolderName}`,
          {},
          (code, value, error) => {
            if (error) {
              return reject(error);
            }
            return resolve(value);
          },
        ),
      );
    } catch (error) {
      console.error(error);
    }

    shell.exec(
      `npx omlet analyze -i 'omlet/${projectFolderName}${projectsToAnalyse[project]['input-flag-path']}' `,
    );
  });
};
omletScript();

// run omlet script

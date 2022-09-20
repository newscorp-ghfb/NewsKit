const shell = require('shelljs');
const fs = require('fs');

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

fs.mkdir('/omlet', error => {
  if (error) {
    console.log(error);
  } else {
    shell.exec('cd');
  }
});

Object.keys(projectsToAnalyse).forEach(project => {
  console.log(`git clone ${projectsToAnalyse[project]['git-url']}`);
  shell.exec(`git clone ${projectsToAnalyse[project]['git-url']}`);
});

// git authenticate

// loop and clone every key inside my object-> in desktop/newsuk/omlet-> if exsist we dont clone again

// omlet/suntitan-> if they do then skip else clone
// fs-folder with name already exsist

// run omlet script

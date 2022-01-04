/* eslint-disable no-console */
const fetch = require('node-fetch');

const maxTries = 180;
const timeout = 10000;
const [, , url] = process.argv;

process.on('unhandledRejection', error => {
  throw error;
});

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const tryPage = (depth = 0) => {
  if (depth >= maxTries) {
    throw new Error(`${url} was not ready after ${maxTries} tries. 💔`);
  } else {
    console.log(`trying ${url}, attempt #${depth + 1}... ⏱`);
    fetch(url, {timeout})
      .then(({ok}) => ok || Promise.reject())
      .then(() => console.log(`${url} responded! 🎉`))
      .catch(() =>
        wait(1000).then(() => {
          tryPage(depth + 1);
        }),
      );
  }
};

tryPage();

/* eslint-env node */

const {addMatchImageSnapshotPlugin} = require('cypress-image-snapshot/plugin');

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
};

require('@applitools/eyes-cypress')(module);

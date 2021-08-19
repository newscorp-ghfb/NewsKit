/* eslint-disable no-use-before-define */
const fg = require('fast-glob');
const parser = require('@babel/parser');
const fs = require('fs');
const path = require('path');

const ignoreScenarios = ['stack'];

// const files = fg.sync('./src/**/stack.scenario.tsx');
const files = fg.sync('./src/**/*.scenario.tsx');
files
  .filter(
    filePath =>
      !ignoreScenarios.some(ignore =>
        filePath.endsWith(`/${ignore}.scenario.tsx`),
      ),
  )
  .forEach(filePath => {
    try {
      const source = fs.readFileSync(
        path.join(__dirname, '../', filePath),
        'utf8',
      );

      const ast = parser.parse(source, {
        sourceType: 'module',
        plugins: ['jsx', 'typescript'],
      });
      // get tge default export
      const [getDefaultExport] = ast.program.body.filter(
        e => e.type === 'ExportDefaultDeclaration',
      );

      // find a title object in default export
      const [titleObj] = getDefaultExport.declaration.properties.filter(
        node => node.key.name === 'title',
      );
      const title = titleObj.value.value;

      // the code that's common and sits above scenarios
      const commonSource = source.substring(0, getDefaultExport.start);

      const stories = getDefaultExport.declaration.properties[1].value.elements;

      const data = stories
        .map(story => {
          if (story.properties && story.properties.length > 1) {
            const storyRawName = story.properties[0].value.value;
            const storyCodeBlock = story.properties[1].value.body;
            // eslint-disable-next-line no-console
            console.log(title, '->', storyRawName);

            const {value} = story.properties[2] || {};
            let storyParams = '';
            if (value) {
              storyParams = source.substring(value?.start, value?.end).trim();
            }

            const {start, end} = storyCodeBlock;
            const storySource = source.substring(start, end).trim();
            const storyName = createStoryName(storyRawName);
            return {storySource, storyRawName, storyName, storyParams};
          }
          return null;
        })
        .filter(story => story);

      const defaultStory = `

        export default {
          title: 'NewsKit Light/${title}',
          component: () => 'None',
        };

      `;

      const newStories = data.map(convertOldToNew).join('\n\n\n');
      const content = commonSource + defaultStory + newStories;
      const newFilePath = getFilePath(filePath);

      fs.writeFileSync(newFilePath, content);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  });

function convertOldToNew({storyName, storyRawName, storyParams, storySource}) {
  const main = `
    export const ${storyName} = () => ${storySource};
    ${storyName}.storyName = '${storyRawName}';
  `;
  const params = storyParams ? `${storyName}.parameters = ${storyParams};` : '';

  return main + params;
}

function createStoryName(storyRawName) {
  const name = `Story${capitalizeFirstLetter(
    camelize(storyRawName.replaceAll(' ', '-')),
  )}`;

  // eslint-disable-next-line no-useless-escape
  return name.replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g, '');
}

function camelize(str) {
  const arr = str.split('-');
  const capital = arr.map((item, index) =>
    index
      ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
      : item.toLowerCase(),
  );
  // ^-- change here.
  return capital.join('');
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getFilePath(p) {
  return p.replace('scenario', 'stories');
}

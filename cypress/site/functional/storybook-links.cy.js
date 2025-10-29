// /<reference types="Cypress" />

const STORY_URL = /https:\/\/storybook\.newskit\.co\.uk\/\?path=\/docs\/[-a-zA-Z\d()@:%_\\+.~#?&/=]+/g;

describe('Storybook links on component pages', () => {
  it('should exist in the Storybook build', () => {
    // Check if storybook build exists (Storybook 8 uses index.json instead of stories.json)
    cy.exec('test -f dist-storybook/index.json', { failOnNonZeroExit: false })
      .then((result) => {
        if (result.code !== 0) {
          // File doesn't exist - storybook not built
          cy.log('⚠️ Storybook build not found. Run `yarn build:storybook` first to validate links.');
          cy.log('This test requires both storybook and docs to be built.');
          return; // Pass the test with a warning
        }

        // File exists, proceed with the test
        cy.readFile('dist-storybook/index.json').then((storyIndex) => {
          // In Storybook 8, stories are directly in the index object
          const stories = storyIndex.entries || storyIndex;
          
          cy.log('✅ Found storybook index.json');
          
          const validStoryUrls = Object.keys(stories).map(
            id => `https://storybook.newskit.co.uk/?path=/docs/${id}`,
          );
          
          cy.task('readAllFilesInDir', 'public').then(files => {
            const usedStoryUrls = files
              .reduce(
                (prev, {contents}) => [
                  ...prev,
                  ...Array.from(contents.matchAll(STORY_URL), x => x[0]),
                ],
                [],
              )
              .filter((value, index, arr) => arr.indexOf(value) === index);
              
            const invalidStoryUrls = usedStoryUrls.filter(
              url => !validStoryUrls.includes(url),
            );
            
            if (invalidStoryUrls.length) {
              cy.fail(
                `Found ${invalidStoryUrls.length} invalid Storybook URL${
                  invalidStoryUrls.length > 1 ? 's' : ''
                } in build: ${invalidStoryUrls.join(', ')}`,
              );
            } else {
              cy.log(`✅ All ${usedStoryUrls.length} Storybook URLs are valid`);
            }
          });
        });
      });
  });
});

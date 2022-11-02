// /<reference types="Cypress" />

const STORY_URL = /https:\/\/storybook\.newskit\.co\.uk\/\?path[-a-zA-Z\\d()@:%_\\+.~#?&/=]*/g;

describe('Storybook links on component pages', () => {
  it('should all be valid', () => {
    cy.readFile('dist-storybook/stories.json').then(({stories}) => {
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
        }
      });
    });
  });
});

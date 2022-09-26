/* eslint-disable no-console */
/* eslint-env browser */

import React from 'react';

interface StoryType {
  default: {
    title: string;
    decorators: Array<(Story: StoryType) => JSX.Element>;
  };
}

const req = require.context('../src', true, /\.stories\.tsx$/);
const stories = req.keys().map(req) as StoryType[];

const nameCounts = stories.reduce((acc, s) => {
  const {title} = s.default;
  if (!acc[title]) {
    acc[title] = 1;
  } else {
    acc[title] += 1;
  }
  return acc;
}, {} as Record<string, number>);

const collisions = Object.entries(nameCounts).filter(([, count]) => count > 1);
if (collisions.length >= 1) {
  console.error(`Found colliding story name(s): ${collisions
    .map(([name]) => name)
    .join(', ')}. Double check your story file name export.
  `);
}

interface A11yFailProps {
  message: string;
}

const A11yFail = ({message}: A11yFailProps) => <div role={message} />;

export default function showTestcase() {
  // needs polyfill for IE
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');

  if (!name) {
    const message = 'No story name provided.';
    console.error(message);
    return <A11yFail message={message} />;
  }

  const story = stories.find(
    s => s.default.title.replace('Components/', '') === name,
  );

  if (!story) {
    const message = `No story found with the name: '${name}.'`;
    console.error(message);
    return <A11yFail message={message} />;
  }

  // This checks to see if the story has a decorator and if so wraps the Story component in it.
  // This ensures story specific custom themes are applied to the components in the e2e tests
  if (story.default.decorators) {
    return (
      <>
        {Object.values(story)
          .filter(storyComponent => typeof storyComponent === 'function')
          .map(Story => (
            <>{story.default.decorators[0](Story)}</>
          ))}
      </>
    );
  }

  return (
    <div>
      {Object.values(story)
        .filter(storyComponent => typeof storyComponent === 'function')
        .map(Story => (
          <Story />
        ))}
    </div>
  );
}

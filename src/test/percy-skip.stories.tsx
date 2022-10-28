import * as React from 'react';

export const EmptyStory = () => <div>skip me</div>;
EmptyStory.storyName = 'skip-percy-tests';

// styling in .storybook/manager-head.html hides this from Storybook sidebar
export default {
  title: 'hide-from-sidebar',
};

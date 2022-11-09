import React from 'react';
import {Breadcrumbs} from '../breadcrumbs';
import {BreadcrumbItem} from '../breadcrumb-item';
import {StorybookPage} from '../../test/storybook-comps';
import {IconFilledAccountBalance} from '../../icons';

// const arrowIcon = (
//   <IconFilledAccountBalance
//     overrides={{
//       size: 'iconSize010',
//       stylePreset: 'inkContrast',
//     }}
//   />
// );

export const StoryDefault = () => (
  <StorybookPage>
    <Breadcrumbs size="small" separator={IconFilledAccountBalance}>
      <BreadcrumbItem href="www.google.com">hello</BreadcrumbItem>
      <BreadcrumbItem href="www.google.com">bye</BreadcrumbItem>
    </Breadcrumbs>
  </StorybookPage>
);
StoryDefault.storyName = 'Default';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    nkDocs: {
      title: 'Breadcrumbs',
      url: 'https://newskit.co.uk/components/divider',
      description:
        'A divider is used to provide visual separation of different content. Dividers can be applied vertically or horizontally.',
    },
  },
};

import React from 'react';
import {Breadcrumbs} from '../breadcrumbs';
import {BreadcrumbItem} from '../breadcrumb-item';
import {StorybookPage} from '../../test/storybook-comps';
import {IconFilledAccountBalance} from '../../icons';

// eslint-disable-next-line no-script-url
const href = 'javascript:;';

export const StoryDefault = () => (
  <StorybookPage>
    <Breadcrumbs size="small">
      <BreadcrumbItem selected href={href}>
        hello
      </BreadcrumbItem>
      <BreadcrumbItem href={href}>bye</BreadcrumbItem>
      <BreadcrumbItem href={href}>hello</BreadcrumbItem>
      <BreadcrumbItem href={href}>bye</BreadcrumbItem>
    </Breadcrumbs>
    <Breadcrumbs
      size="small"
      overrides={{
        separator: props => (
          <IconFilledAccountBalance
            {...props}
            overrides={{
              size: 'iconSize020',
              stylePreset: 'inkSubtle',
            }}
          />
        ),
      }}
    >
      <BreadcrumbItem href={href}>hello</BreadcrumbItem>
      <BreadcrumbItem href={href}>bye</BreadcrumbItem>
      <BreadcrumbItem href={href}>hello</BreadcrumbItem>
      <BreadcrumbItem href={href}>bye</BreadcrumbItem>
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

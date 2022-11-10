import React from 'react';
import {Breadcrumbs} from '../breadcrumbs';
import {BreadcrumbItem} from '../breadcrumb-item';
import {StorybookPage} from '../../test/storybook-comps';
import {IconFilledAccountBalance, IconFilledAddCircle} from '../../icons';

// eslint-disable-next-line no-script-url
const href = 'javascript:;';

export const StoryDefault = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <Breadcrumbs showTrailingSeparator size="small">
      <BreadcrumbItem selected href={href}>
        Breadcrumb item
      </BreadcrumbItem>
      <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
      <BreadcrumbItem href={href}>Breadcrumb item </BreadcrumbItem>
    </Breadcrumbs>
    <Breadcrumbs
      overrides={{
        separator: props => <IconFilledAccountBalance {...props} />,
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

export const StoryVariations = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <Breadcrumbs>
      <BreadcrumbItem selected href={href}>
        Breadcrumb item
      </BreadcrumbItem>
      <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
      <BreadcrumbItem href={href}>
        <IconFilledAddCircle overrides={{stylePreset: 'inkSubtle'}} />
        Breadcrumb item
      </BreadcrumbItem>
    </Breadcrumbs>
    {/* <Breadcrumbs
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
      </Breadcrumbs> */}
  </StorybookPage>
);
StoryVariations.storyName = 'Variations';

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

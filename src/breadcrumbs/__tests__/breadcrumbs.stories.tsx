import React from 'react';
import {Story as StoryType} from '@storybook/react';
import {Breadcrumbs} from '../breadcrumbs';
import {BreadcrumbItem} from '../breadcrumb-item';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {IconFilledAccountBalance, IconFilledAddCircle} from '../../icons';
import {CreateThemeArgs, ThemeProvider} from '../../theme';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

// eslint-disable-next-line no-script-url
const href = 'javascript:;';

const blockGridCols = '1fr 1fr 1fr auto';
const blockCustomThemeObject: CreateThemeArgs = {
  name: 'block-custom-theme',
  overrides: {
    stylePresets: {
      blockDefault: {
        base: {
          backgroundColor: '{{colors.amber020}}',
          borderWidth: '{{borders.borderWidth010}}',
          borderStyle: 'solid',
          borderColor: '{{colors.interfaceBrand010}}',
        },
      },
    },
  },
};

export const StoryDefault = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <Breadcrumbs
      showTrailingSeparator
      overrides={{
        stylePreset: 'blockDefault',
      }}
    >
      <BreadcrumbItem selected href={href}>
        Breadcrumb item
      </BreadcrumbItem>
      <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
      <BreadcrumbItem href={href}>Breadcrumb itemx </BreadcrumbItem>
    </Breadcrumbs>
    <Breadcrumbs
      size="large"
      overrides={{
        separator: {
          paddingInline: 'space030',
          stylePreset: 'inkSubtle',
          // size: 'iconSize040',
        },
      }}
    >
      <BreadcrumbItem selected href={href}>
        Breadcrumb item
      </BreadcrumbItem>
      <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
      <BreadcrumbItem href={href}>Breadcrumb item </BreadcrumbItem>
    </Breadcrumbs>
    <Breadcrumbs
      overrides={{
        separator: props => (
          <IconFilledAccountBalance
            {...props}
            overrides={{
              size: 'iconSize030',
              stylePreset: 'inkNegative',
              paddingInline: 'space080',
            }}
          />
        ),
      }}
    >
      <BreadcrumbItem
        href={href}
        overrides={{
          stylePreset: 'inkNegative',
        }}
      >
        hello
      </BreadcrumbItem>
      <BreadcrumbItem href={href}>bye</BreadcrumbItem>
      <BreadcrumbItem href={href}>hello</BreadcrumbItem>
      <BreadcrumbItem href={href}>bye</BreadcrumbItem>
    </Breadcrumbs>
  </StorybookPage>
);
StoryDefault.storyName = 'Default';

export const StorySize = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Small">
      <Breadcrumbs size="small">
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem selected href={href}>
          Breadcrumb item
        </BreadcrumbItem>
      </Breadcrumbs>
    </StorybookCase>
    <StorybookCase title="Medium">
      <Breadcrumbs>
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem selected href={href}>
          Breadcrumb item
        </BreadcrumbItem>
      </Breadcrumbs>
    </StorybookCase>
    <StorybookCase title="Large">
      <Breadcrumbs size="large">
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem selected href={href}>
          Breadcrumb item
        </BreadcrumbItem>
      </Breadcrumbs>
    </StorybookCase>
  </StorybookPage>
);
StorySize.storyName = 'Size';

export const StoryStates = () => (
  <StorybookPage columns={blockGridCols} columnGap="8px">
    <StorybookCase title="Base">
      <Breadcrumbs showTrailingSeparator>
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
      </Breadcrumbs>
    </StorybookCase>
    <StorybookCase title="Selected">
      <Breadcrumbs>
        <BreadcrumbItem selected href={href}>
          Breadcrumb item
        </BreadcrumbItem>
      </Breadcrumbs>
    </StorybookCase>
    <StorybookCase title="Hover">
      <Breadcrumbs showTrailingSeparator>
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
      </Breadcrumbs>
    </StorybookCase>
    <StorybookCase title="Active">
      <Breadcrumbs showTrailingSeparator>
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
      </Breadcrumbs>
    </StorybookCase>
  </StorybookPage>
);
StoryStates.storyName = 'States';

export const StoryVariations = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <Breadcrumbs showTrailingSeparator>
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
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          blockCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};

import React from 'react';
import {Story as StoryType} from '@storybook/react';
import {Breadcrumbs} from '../breadcrumbs';
import {BreadcrumbItem} from '../breadcrumb-item';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {
  IconFilledAddCircle,
  IconOutlinedTrendingFlat,
  IconFilledHome,
} from '../../icons';
import {TextBlock} from '../../text-block';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {CreateThemeArgs, ThemeProvider} from '../../theme';
import {IconButton} from '../../icon-button';

// eslint-disable-next-line no-script-url
const href = 'javascript:;';

const blockGridCols = '1fr 1fr 1fr auto';

const breadcrumbItemCustomThemeObject: CreateThemeArgs = {
  name: 'breadcrumb-custom-theme',
  overrides: {
    stylePresets: {
      breadcrumbDefault: {
        base: {
          color: '{{colors.interactiveLink010}}',
        },
      },
      breadcrumbSelected: {
        selected: {
          color: '{{colors.inkBase}}',
        },
      },
      breadcrumbHover: {
        base: {
          color: '{{colors.interactiveLink020}}',
          textDecoration: 'underline',
        },
        hover: {
          color: '{{colors.interactiveLink020}}',
          textDecoration: 'underline',
        },
      },
      breadcrumbActive: {
        base: {
          color: '{{colors.interactiveLink030}}',
          textDecoration: 'underline',
        },
      },
    },
  },
};

export const StoryDefault = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <Breadcrumbs aria-label="default">
      <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
      <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
      <BreadcrumbItem selected href={href}>
        Breadcrumb item{' '}
      </BreadcrumbItem>
    </Breadcrumbs>
  </StorybookPage>
);
StoryDefault.storyName = 'Default';

export const StorySize = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Small">
      <Breadcrumbs aria-label="small" size="small">
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem selected href={href}>
          Breadcrumb item
        </BreadcrumbItem>
      </Breadcrumbs>
    </StorybookCase>
    <StorybookCase title="Medium">
      <Breadcrumbs aria-label="medium">
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem selected href={href}>
          Breadcrumb item
        </BreadcrumbItem>
      </Breadcrumbs>
    </StorybookCase>
    <StorybookCase title="Large">
      <Breadcrumbs size="large" aria-label="large">
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
      <Breadcrumbs showTrailingSeparator aria-label="base">
        <BreadcrumbItem
          overrides={{stylePreset: 'breadcrumbDefault'}}
          href={href}
        >
          Breadcrumb item
        </BreadcrumbItem>
      </Breadcrumbs>
    </StorybookCase>
    <StorybookCase title="Selected" aria-label="selected">
      <Breadcrumbs>
        <BreadcrumbItem
          overrides={{stylePreset: 'breadcrumbSelected'}}
          selected
          href={href}
        >
          Breadcrumb item
        </BreadcrumbItem>
      </Breadcrumbs>
    </StorybookCase>
    <StorybookCase title="Hover" aria-label="hover">
      <Breadcrumbs showTrailingSeparator aria-label="hover">
        <BreadcrumbItem
          overrides={{stylePreset: 'breadcrumbHover'}}
          href={href}
        >
          Breadcrumb item
        </BreadcrumbItem>
      </Breadcrumbs>
    </StorybookCase>
    <StorybookCase title="Active">
      <Breadcrumbs showTrailingSeparator aria-label="active">
        <BreadcrumbItem
          href={href}
          overrides={{stylePreset: 'breadcrumbActive'}}
        >
          Breadcrumb item
        </BreadcrumbItem>
      </Breadcrumbs>
    </StorybookCase>
  </StorybookPage>
);
StoryStates.storyName = 'States';

export const StoryVariations = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Leading icon">
      <Breadcrumbs aria-label="leading icon">
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem selected href={href}>
          <IconFilledAddCircle />
          Breadcrumb item
        </BreadcrumbItem>
      </Breadcrumbs>
    </StorybookCase>
    <StorybookCase title="Trailing icon">
      <Breadcrumbs aria-label="trailing icon">
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem selected href={href}>
          Breadcrumb item
          <IconFilledAddCircle />
        </BreadcrumbItem>
      </Breadcrumbs>
    </StorybookCase>
    <StorybookCase title="Both">
      <Breadcrumbs aria-label="both icon">
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem selected href={href}>
          <IconFilledAddCircle />
          Breadcrumb item
          <IconFilledAddCircle />
        </BreadcrumbItem>
      </Breadcrumbs>
    </StorybookCase>
    <StorybookCase title="'Home' icon for the first breadcrumb item">
      <Breadcrumbs aria-label="home icon">
        <BreadcrumbItem href={href}>
        <IconButton
            size="medium"
            overrides={{
              stylePreset: 'iconButtonMinimalPrimary',
            }}
            aria-label="home-icon"
          >
            <IconFilledHome />
          </IconButton>
        </BreadcrumbItem>
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem selected href={href}>
          Breadcrumb item
        </BreadcrumbItem>
      </Breadcrumbs>
    </StorybookCase>
    <StorybookCase title="showTrailingSeparator">
      <Breadcrumbs showTrailingSeparator aria-label="showTrailingSeparator">
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem selected href={href}>
          Breadcrumb item
        </BreadcrumbItem>
      </Breadcrumbs>
    </StorybookCase>
  </StorybookPage>
);
StoryVariations.storyName = 'Variations';

export const StoryLogicalProps = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Logical props- padding">
      <Breadcrumbs
        overrides={{paddingBlock: 'space050'}}
        aria-label="padding-overrides"
      >
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem selected href={href}>
          Breadcrumb item
        </BreadcrumbItem>
      </Breadcrumbs>
    </StorybookCase>
    <StorybookCase title="Logical props- margin">
      <Breadcrumbs
        overrides={{marginBlock: 'space050'}}
        aria-label="margin-overrides"
      >
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem selected href={href}>
          Breadcrumb item
        </BreadcrumbItem>
      </Breadcrumbs>
    </StorybookCase>
  </StorybookPage>
);
StoryLogicalProps.storyName = 'Logical props';
const textBlock = '/';
export const StoryOverrides = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Custom colour">
      <Breadcrumbs aria-label="custome colour">
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem
          overrides={{
            stylePreset: 'interfaceInformative010',
          }}
          href={href}
        >
          Breadcrumb item
        </BreadcrumbItem>
      </Breadcrumbs>
    </StorybookCase>
    <StorybookCase title="Custom style">
      <Breadcrumbs aria-label="custome style">
        <BreadcrumbItem
          href={href}
          overrides={{typographyPreset: 'editorialParagraph020'}}
        >
          Breadcrumb item
        </BreadcrumbItem>
        <BreadcrumbItem
          href={href}
          overrides={{typographyPreset: 'editorialParagraph020'}}
        >
          Breadcrumb item
        </BreadcrumbItem>
        <BreadcrumbItem
          selected
          href={href}
          overrides={{typographyPreset: 'editorialParagraph020'}}
        >
          Breadcrumb item
        </BreadcrumbItem>
      </Breadcrumbs>
    </StorybookCase>
    <StorybookCase title="Custom separators">
      <Breadcrumbs
        aria-label="separator with icon"
        overrides={{
          separator: () => (
            <IconOutlinedTrendingFlat
              overrides={{
                size: 'iconSize020',
                paddingInline: 'space020',
                stylePreset: 'breadcrumbSeparator',
              }}
            />
          ),
        }}
      >
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem selected href={href}>
          Breadcrumb item
        </BreadcrumbItem>
      </Breadcrumbs>
    </StorybookCase>
    <StorybookCase title="Custom separators with TextBlock">
      <Breadcrumbs
        aria-label="separator with textblock"
        overrides={{
          separator: () => (
            <TextBlock paddingInline="space020" stylePreset="inkSubtle">
              {textBlock}
            </TextBlock>
          ),
        }}
      >
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem href={href}>Breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem selected href={href}>
          Breadcrumb item
        </BreadcrumbItem>
      </Breadcrumbs>
    </StorybookCase>
  </StorybookPage>
);
StoryOverrides.storyName = 'Overrides';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    nkDocs: {
      title: 'Breadcrumbs',
      // url: 'https://newskit.co.uk/components/breadcrumbs',
      description: 'Breadcrumbs are used for secondary navigation.',
    },
  },
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          breadcrumbItemCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};

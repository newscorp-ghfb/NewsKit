import React from 'react';
import {Story as StoryType} from '@storybook/react';
import {Pagination0} from '../pagination0';
import {PaginationItem} from '../components/item/pagination-item';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {
  IconFilledAddCircle,
  IconOutlinedTrendingFlat,
  IconFilledHome,
} from '../../icons';
import {TextBlock} from '../../text-block';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {CreateThemeArgs, ThemeProvider} from '../../theme';

const Pagination = Pagination0;

// eslint-disable-next-line no-script-url
const href = 'javascript:alert("clicked")';

const blockGridCols = '1fr 1fr 1fr auto';

const paginationItemCustomThemeObject: CreateThemeArgs = {
  name: 'pagination-custom-theme',
  overrides: {
    stylePresets: {
      paginationDefault: {
        base: {
          color: '{{colors.interactiveLink010}}',
          backgroundColor: '{{colors.transparent}}',
        },
      },
      paginationInformative: {
        base: {
          color: '{{colors.interfaceInformative010}}',
        },
      },
      paginationSelected: {
        selected: {
          color: '{{colors.inkBase}}',
        },
      },
      paginationHover: {
        base: {
          color: '{{colors.interactiveLink020}}',
          textDecoration: 'underline',
        },
        hover: {
          color: '{{colors.interactiveLink020}}',
          textDecoration: 'underline',
        },
      },
      paginationActive: {
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
    <Pagination aria-label="default">
      <PaginationItem href={href}>1</PaginationItem>
      <PaginationItem href={href}>2</PaginationItem>
      <PaginationItem selected href={href}>
        3{' '}
      </PaginationItem>
    </Pagination>
  </StorybookPage>
);
StoryDefault.storyName = 'Default';

export const StorySize = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Small">
      <Pagination aria-label="small" size="small">
        <PaginationItem href={href}>1</PaginationItem>
        <PaginationItem href={href}>2</PaginationItem>
        <PaginationItem selected href={href}>
          3
        </PaginationItem>
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Medium">
      <Pagination aria-label="medium">
        <PaginationItem href={href}>1</PaginationItem>
        <PaginationItem href={href}>2</PaginationItem>
        <PaginationItem selected href={href}>
          3
        </PaginationItem>
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Large">
      <Pagination size="large" aria-label="large">
        <PaginationItem href={href}>1</PaginationItem>
        <PaginationItem href={href}>2</PaginationItem>
        <PaginationItem selected href={href}>
          3
        </PaginationItem>
      </Pagination>
    </StorybookCase>
  </StorybookPage>
);
StorySize.storyName = 'Size';

export const StoryStates = () => (
  <StorybookPage columns={blockGridCols} columnGap="8px">
    <StorybookCase title="Base">
      <Pagination
        totalItems={232}
        pageSize={10}
        currentPage={2}
        aria-label="base"
      >
        <PaginationItem
          overrides={{stylePreset: 'paginationDefault'}}
          href={href}
        >
          10
        </PaginationItem>
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Selected" aria-label="selected">
      <Pagination>
        <PaginationItem
          overrides={{stylePreset: 'paginationSelected'}}
          selected
          href={href}
        >
          10
        </PaginationItem>
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Hover" aria-label="hover">
      <Pagination
        totalItems={232}
        pageSize={10}
        currentPage={2}
        aria-label="hover"
      >
        <PaginationItem
          overrides={{stylePreset: 'paginationHover'}}
          href={href}
        >
          10
        </PaginationItem>
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Active">
      <Pagination
        totalItems={232}
        pageSize={10}
        currentPage={2}
        aria-label="active"
      >
        <PaginationItem
          href={href}
          overrides={{stylePreset: 'paginationActive'}}
        >
          10
        </PaginationItem>
      </Pagination>
    </StorybookCase>
  </StorybookPage>
);
StoryStates.storyName = 'States';

export const StoryVariations = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Leading icon">
      <Pagination aria-label="leading icon">
        <PaginationItem href={href}>1</PaginationItem>
        <PaginationItem href={href}>2</PaginationItem>
        <PaginationItem selected href={href}>
          <IconFilledAddCircle />3
        </PaginationItem>
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Trailing icon">
      <Pagination aria-label="trailing icon">
        <PaginationItem href={href}>1</PaginationItem>
        <PaginationItem href={href}>2</PaginationItem>
        <PaginationItem selected href={href}>
          3
          <IconFilledAddCircle />
        </PaginationItem>
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Both">
      <Pagination aria-label="both icon">
        <PaginationItem href={href}>1</PaginationItem>
        <PaginationItem href={href}>2</PaginationItem>
        <PaginationItem selected href={href}>
          <IconFilledAddCircle />
          3
          <IconFilledAddCircle />
        </PaginationItem>
      </Pagination>
    </StorybookCase>
    <StorybookCase title="'Home' icon for the first pagination item">
      <Pagination aria-label="home icon">
        <PaginationItem
          aria-label="just home icon"
          overrides={{stylePreset: 'paginationDefault'}}
        >
          <IconFilledHome
            overrides={{
              stylePreset: 'paginationDefault',
            }}
          />
        </PaginationItem>
        <PaginationItem href={href}>1</PaginationItem>
        <PaginationItem selected href={href}>
          2
        </PaginationItem>
      </Pagination>
    </StorybookCase>
    <StorybookCase title="show truncation">
      <Pagination
        totalItems={232}
        pageSize={10}
        currentPage={2}
        aria-label="showTruncation"
      >
        <PaginationItem href={href}>1</PaginationItem>
        <PaginationItem href={href}>2</PaginationItem>
        <PaginationItem selected href={href}>
          3
        </PaginationItem>
      </Pagination>
    </StorybookCase>
  </StorybookPage>
);
StoryVariations.storyName = 'Variations';

export const StoryLogicalProps = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Logical props- padding">
      <Pagination
        overrides={{paddingBlock: 'space050'}}
        aria-label="padding-overrides"
      >
        <PaginationItem href={href} overrides={{paddingInline: 'space020'}}>
          1
        </PaginationItem>
        <PaginationItem href={href} overrides={{paddingInline: 'space020'}}>
          2
        </PaginationItem>
        <PaginationItem
          selected
          href={href}
          overrides={{paddingInline: 'space020'}}
        >
          3
        </PaginationItem>
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Logical props- margin">
      <Pagination
        overrides={{marginBlock: 'space050'}}
        aria-label="margin-overrides"
      >
        <PaginationItem href={href} overrides={{marginInline: 'space020'}}>
          1
        </PaginationItem>
        <PaginationItem href={href} overrides={{marginInline: 'space020'}}>
          2
        </PaginationItem>
        <PaginationItem
          selected
          href={href}
          overrides={{marginInline: 'space020'}}
        >
          3
        </PaginationItem>
      </Pagination>
    </StorybookCase>
  </StorybookPage>
);
StoryLogicalProps.storyName = 'Logical props';
const textBlock = '/';
export const StoryOverrides = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Custom colour">
      <Pagination aria-label="custom colour">
        <PaginationItem href={href}>1</PaginationItem>
        <PaginationItem href={href}>2</PaginationItem>
        <PaginationItem
          selected
          overrides={{
            stylePreset: 'paginationInformative',
          }}
          href={href}
        >
          3
        </PaginationItem>
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Custom style">
      <Pagination
        aria-label="custom style"
        overrides={{
          boundary: {
            stylePreset: 'paginationInformative',
          },
        }}
      >
        <PaginationItem
          href={href}
          overrides={{typographyPreset: 'editorialParagraph020'}}
        >
          1
        </PaginationItem>
        <PaginationItem
          href={href}
          overrides={{typographyPreset: 'editorialParagraph020'}}
        >
          2
        </PaginationItem>
        <PaginationItem
          selected
          href={href}
          overrides={{typographyPreset: 'editorialParagraph020'}}
        >
          3
        </PaginationItem>
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Custom truncation">
      <Pagination
        aria-label="boundary with icon"
        overrides={{
          boundary: () => (
            <IconOutlinedTrendingFlat
              overrides={{
                size: 'iconSize020',
                paddingInline: 'space020',
                stylePreset: 'paginationBoundary',
              }}
            />
          ),
        }}
      >
        <PaginationItem href={href}>1</PaginationItem>
        <PaginationItem href={href}>2</PaginationItem>
        <PaginationItem selected href={href}>
          3
        </PaginationItem>
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Custom truncation with TextBlock">
      <Pagination
        aria-label="boundary with textblock"
        overrides={{
          boundary: () => (
            <TextBlock paddingInline="space020" stylePreset="inkSubtle">
              {textBlock}
            </TextBlock>
          ),
        }}
      >
        <PaginationItem href={href}>1</PaginationItem>
        <PaginationItem href={href}>2</PaginationItem>
        <PaginationItem selected href={href}>
          3
        </PaginationItem>
      </Pagination>
    </StorybookCase>
  </StorybookPage>
);
StoryOverrides.storyName = 'Overrides';

export default {
  title: 'Components/pagination0',
  component: Pagination0,
  parameters: {
    nkDocs: {
      title: 'Pagination',
      description: 'Pagination lets users navigate through multiple pages.',
    },
  },
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          paginationItemCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};

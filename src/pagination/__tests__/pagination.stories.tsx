import React from 'react';
import {Story as StoryType} from '@storybook/react';
import {Pagination} from '../pagination';
import {PaginationFirstItem} from '../components/first-item/first-item';
import {PaginationPrevItem} from '../components/prev-item/prev-item';
import {PaginationItems} from '../components/items/pagination-items';
import {PaginationNextItem} from '../components/next-item/next-item';
import {PaginationLastItem} from '../components/last-item/last-item';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {
  IconFilledAddCircle,
  IconOutlinedTrendingFlat,
  IconFilledHome,
} from '../../icons';
import {TextBlock} from '../../text-block';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {CreateThemeArgs, ThemeProvider} from '../../theme';
import {PaginationItem} from '../components/item/pagination-item';

const href = 'page';

const blockGridCols = '1fr 1fr 1fr 1fr auto';

// Designed to reproduce the appearance of style-preset.ts but without the need for user interaction
const paginationItemStaticThemeObject: CreateThemeArgs = {
  name: 'pagination-static-theme',
  overrides: {
    stylePresets: {
      paginationDefault: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          color: '{{colors.interactiveLink010}}',
        },
      },
      paginationInformative: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          color: '{{colors.interfaceInformative010}}',
        },
      },
      paginationSelected: {
        selected: {
          color: '{{colors.interactiveLink030}}',
          textDecoration: 'none',
          backgroundColor: '{{colors.interactivePrimary020}}',
          borderRadius: '{{borders.borderRadiusDefault}}',
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
      paginationDisabled: {
        base: {
          backgroundColor: "{{colors.transparent}}",
          color: '{{colors.inkNonEssential}}',
          iconColor: '{{colors.inkNonEssential}}',
        },
      },
    },
  },
};

const defaultProps = {
  totalItems: 80, //232,
  pageSize: 10,
  currentPage: 4,
  onPageChange: (page: number) => console.log(`Page changed to ${page}`), // FIXME SB log
};
// defaults to truncation: true, siblings: 3, boundaries: 1
const defaultItemsProps = { truncation: false, siblings: 0, boundaries: 0 };

export const StoryDefault = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="HREF-based">
      <Pagination
        {...defaultProps}
        buildHref={(page: number) => `page/${page}`}
        aria-label="href"
      >
        <PaginationFirstItem />
        <PaginationPrevItem />
        <PaginationItems {...defaultItemsProps} />
        <PaginationNextItem />
        <PaginationLastItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="onclick-based">
      <Pagination {...defaultProps} aria-label="on-click">
        <PaginationFirstItem />
        <PaginationPrevItem />
        <PaginationItems {...defaultItemsProps} />
        <PaginationNextItem />
        <PaginationLastItem />
      </Pagination>
    </StorybookCase>
  </StorybookPage>
);
StoryDefault.storyName = 'Default';

export const StorySize = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Small">
      <Pagination {...defaultProps} size="small" aria-label="small">
        <PaginationFirstItem />
        <PaginationPrevItem />
        <PaginationItems {...defaultItemsProps} />
        <PaginationNextItem />
        <PaginationLastItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Medium">
      <Pagination {...defaultProps} aria-label="medium">
        <PaginationFirstItem />
        <PaginationPrevItem />
        <PaginationItems {...defaultItemsProps} />
        <PaginationNextItem />
        <PaginationLastItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Large">
      <Pagination {...defaultProps} size="large" aria-label="large">
        <PaginationFirstItem />
        <PaginationPrevItem />
        <PaginationItems {...defaultItemsProps} overrides={{fontSize: 'fontSize050'}} />
        <PaginationNextItem />
        <PaginationLastItem />
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
    <StorybookCase title="Disabled">
      <Pagination
        totalItems={232}
        pageSize={10}
        currentPage={2}
        aria-label="disabled"
      >
        <PaginationItem
          href={href}
          overrides={{stylePreset: 'paginationDisabled'}}
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
    <StorybookCase title="Numbers only">
      <Pagination {...defaultProps} aria-label="numbers only">
        <PaginationItems {...defaultItemsProps} />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Next and previous only">
      <Pagination {...defaultProps} aria-label="next and previous only">
        <PaginationPrevItem />
        <PaginationNextItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Labels">
      <Pagination {...defaultProps} aria-label="labels">
        <PaginationPrevItem>Previous</PaginationPrevItem>
        <PaginationItems {...defaultItemsProps} />
        <PaginationNextItem>Next</PaginationNextItem>
      </Pagination>
    </StorybookCase>
  </StorybookPage>
);
StoryVariations.storyName = 'Variations';

export const StoryLogicalProps = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Custom button size">
      <Pagination {...defaultProps} aria-label="custom button size">
        <PaginationFirstItem />
        <PaginationPrevItem />
        <PaginationItems {...defaultItemsProps} overrides={{ width: '24px', height: '24px' }} />
        <PaginationNextItem />
        <PaginationLastItem />
      </Pagination>
    </StorybookCase>
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
        <PaginationItems
          {...defaultItemsProps}
          overrides={{
            stylePreset: 'paginationInformative',
          }}
        />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Custom style">
      <Pagination aria-label="custom style">
        <PaginationItems
          {...defaultItemsProps}
          overrides={{boundary: {
            stylePreset: 'paginationInformative',
          },
          typographyPreset: 'editorialParagraph020'}}
        />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Custom previous and next icons">
      <Pagination aria-label="custom previous and next icons">
        <PaginationPrevItem
          overrides={{
            navigationIcon: () => (
              <IconOutlinedTrendingFlat
                overrides={{
                  size: 'iconSize020',
                  paddingInline: 'space020',
                  stylePreset: 'paginationNavigationIcon',
                }}
              />
            )}}/>
        <PaginationItems {...defaultItemsProps} />
        <PaginationNextItem
          overrides={{
            navigationIcon: () => (
              <IconOutlinedTrendingFlat
                overrides={{
                  size: 'iconSize020',
                  paddingInline: 'space020',
                  stylePreset: 'paginationNavigationIcon',
                }}
              />
            )}}/>
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Custom truncation icon">
      <Pagination
        aria-label="truncation with icon">
        <PaginationItems
          {...defaultItemsProps}
          overrides={{
            boundary: () => (
              <IconOutlinedTrendingFlat
                overrides={{
                  size: 'iconSize020',
                  paddingInline: 'space020',
                  stylePreset: 'paginationBoundary',
                }}
              />
            )}}
        />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Custom truncation with TextBlock">
      <Pagination
        aria-label="truncation with textblock"
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
StoryOverrides.storyName = 'Overrides';

export default {
  title: 'Components/pagination',
  component: Pagination,
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
          paginationItemStaticThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};

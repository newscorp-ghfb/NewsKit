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
import stylePresets from '../style-presets';

const href = '/page';

const blockGridCols = '1fr 1fr 1fr 1fr auto';

// Designed to reproduce the appearance of style-preset.ts but without the need for user interaction
const paginationItemStaticThemeObject: CreateThemeArgs = {
  name: 'pagination-static-theme',
  overrides: {
    stylePresets: {
      paginationDefault: {
        base: stylePresets.paginationItem.base,
      },
      paginationSelected: {
        selected: {
          ...stylePresets.paginationItem.base,
          ...stylePresets.paginationItem.selected,
        },
      },
      paginationHover: {
        base: {
          ...stylePresets.paginationItem.base,
          ...stylePresets.paginationItem.hover,
        },
        hover: stylePresets.paginationItem.hover,
      },
      paginationActive: {
        base: {
          ...stylePresets.paginationItem.base,
          ...stylePresets.paginationItem.active,
        },
      },
      paginationDisabled: {
        base:
          // @ts-ignore
          stylePresets.paginationItem.disabled,
      },
      paginationInformative: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          color: '{{colors.interfaceInformative010}}',
        },
      },
    },
  },
};

const defaultProps = {
  totalItems: 80, // 232,
  pageSize: 10,
  currentPage: 4,
  onPageChange: (page: number) => console.log(`Page changed to ${page}`), // FIXME SB log
};
// defaults to truncation: true, siblings: 3, boundaries: 1
const defaultItemsProps = {truncation: false, siblings: 0, boundaries: 0};

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
        <PaginationItems {...defaultItemsProps} />
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
      <Pagination totalItems={232} pageSize={10} currentPage={2}>
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

export const StoryVariationsInNavigation = () => (
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
    <StorybookCase title="Next and previous labels">
      <Pagination {...defaultProps} aria-label="next and previous labels">
        <PaginationPrevItem overrides={{width: 'auto'}}>
          Previous
        </PaginationPrevItem>
        <PaginationItems {...defaultItemsProps} />
        <PaginationNextItem overrides={{width: 'auto'}}>
          Next
        </PaginationNextItem>
      </Pagination>
    </StorybookCase>
    <StorybookCase title="First and last labels">
      <Pagination {...defaultProps} aria-label="first and last labels">
        <PaginationFirstItem overrides={{width: 'auto'}}>
          First
        </PaginationFirstItem>
        <PaginationItems {...defaultItemsProps} />
        <PaginationLastItem overrides={{width: 'auto'}}>
          Last
        </PaginationLastItem>
      </Pagination>
    </StorybookCase>
  </StorybookPage>
);
StoryVariationsInNavigation.storyName = 'Variations in navigation';

export const StoryVariationsInTruncation = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="No truncation of a long list">
      <Pagination
        totalItems={232}
        pageSize={10}
        currentPage={9}
        aria-label="base"
      >
        <PaginationItems truncation={false} />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Siblings 3, boundaries 1 (default)">
      <Pagination
        totalItems={232}
        pageSize={10}
        currentPage={9}
        aria-label="base"
      >
        <PaginationItems />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Siblings 3, boundaries 0 (just using First and Last buttons instead of boundary butttons)">
      <Pagination
        totalItems={232}
        pageSize={10}
        currentPage={9}
        aria-label="base"
      >
        <PaginationFirstItem />
        <PaginationItems siblings={3} boundaries={0} />
        <PaginationLastItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Siblings 2, boundaries 2">
      <Pagination
        totalItems={232}
        pageSize={10}
        currentPage={9}
        aria-label="base"
      >
        <PaginationItems siblings={2} boundaries={2} />
      </Pagination>
    </StorybookCase>
  </StorybookPage>
);
StoryVariationsInTruncation.storyName = 'Variations in truncation';

export const StoryLogicalProps = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Custom button size">
      <Pagination {...defaultProps} aria-label="custom button size">
        <PaginationPrevItem />
        <PaginationItems
          {...defaultItemsProps}
          overrides={{minWidth: '27px', height: '27px'}}
        />
        <PaginationNextItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Logical props- padding">
      <Pagination {...defaultProps} aria-label="padding-overrides">
        <PaginationPrevItem />
        <PaginationItems
          {...defaultItemsProps}
          overrides={{paddingInline: 'space020'}}
        />
        <PaginationNextItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Logical props- margin">
      <Pagination {...defaultProps} aria-label="margin-overrides">
        <PaginationPrevItem />
        <PaginationItems
          {...defaultItemsProps}
          overrides={{marginInline: 'space020'}}
        />
        <PaginationNextItem />
      </Pagination>
    </StorybookCase>
  </StorybookPage>
);
StoryLogicalProps.storyName = 'Logical props';

const textBlock = '/';
export const StoryOverrides = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Custom colour">
      <Pagination {...defaultProps} aria-label="custom colour">
        <PaginationItems
          {...defaultItemsProps}
          overrides={{
            stylePreset: 'paginationInformative',
          }}
        />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Custom style">
      <Pagination {...defaultProps} aria-label="custom style">
        <PaginationItems
          {...defaultItemsProps}
          overrides={{
            icon: {
              stylePreset: 'paginationInformative',
            },
            typographyPreset: 'editorialParagraph020',
          }}
        />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Custom previous and next icons">
      <Pagination {...defaultProps} aria-label="custom previous and next icons">
        <PaginationPrevItem
          overrides={{
            icon: () => (
              <IconOutlinedTrendingFlat
                overrides={{
                  size: 'iconSize020',
                  paddingInline: 'space020',
                  stylePreset: 'paginationicon',
                }}
              />
            ),
          }}
        />
        <PaginationItems {...defaultItemsProps} />
        <PaginationNextItem
          overrides={{
            icon: () => (
              <IconOutlinedTrendingFlat
                overrides={{
                  size: 'iconSize020',
                  paddingInline: 'space020',
                  stylePreset: 'paginationicon',
                }}
              />
            ),
          }}
        />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Custom truncation icon">
      <Pagination {...defaultProps} aria-label="truncation with icon">
        <PaginationItems
          {...defaultItemsProps}
          overrides={{
            icon: () => (
              <IconOutlinedTrendingFlat
                overrides={{
                  size: 'iconSize020',
                  paddingInline: 'space020',
                  stylePreset: 'paginationTruncation',
                }}
              />
            ),
          }}
        />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Custom truncation with TextBlock">
      <Pagination {...defaultProps} aria-label="truncation with textblock">
        <PaginationItems
          {...defaultItemsProps}
          overrides={{
            icon: () => (
              <TextBlock paddingInline="space020" stylePreset="inkSubtle">
                {textBlock}
              </TextBlock>
            ),
          }}
        />
      </Pagination>
    </StorybookCase>

    <StorybookCase title="Leading icon">
      <Pagination {...defaultProps} aria-label="leading icon">
        <PaginationItem href={href}>1</PaginationItem>
        <PaginationItem href={href}>2</PaginationItem>
        <PaginationItem selected href={href}>
          <IconFilledAddCircle />3
        </PaginationItem>
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Trailing icon">
      <Pagination {...defaultProps} aria-label="trailing icon">
        <PaginationItem href={href}>1</PaginationItem>
        <PaginationItem href={href}>2</PaginationItem>
        <PaginationItem selected href={href}>
          3
          <IconFilledAddCircle />
        </PaginationItem>
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Both">
      <Pagination {...defaultProps} aria-label="both icon">
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
      <Pagination {...defaultProps} aria-label="home icon">
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

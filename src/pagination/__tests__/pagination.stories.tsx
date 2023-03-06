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
  IconFilledCircle,
  IconOutlinedArrowBack,
  IconOutlinedArrowForward,
  IconOutlinedTrendingFlat,
} from '../../icons';
import {TextBlock} from '../../text-block';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {CreateThemeArgs, ThemeProvider} from '../../theme';
import {StyledButton} from '../styled';

const paginationItemCustomThemeObject: CreateThemeArgs = {
  name: 'pagination-static-theme',
  overrides: {
    stylePresets: {
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
  totalItems: 80,
  pageSize: 10,
  defaultPage: 4,
  // eslint-disable-next-line
  onPageChange: (page: number) => console.log(`Page changed to ${page}`),
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
        defaultPage={9}
        aria-label="no truncation of a long list"
      >
        <PaginationItems truncation={false} />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Siblings 3, boundaries 1 (default)">
      <Pagination
        totalItems={232}
        pageSize={10}
        defaultPage={9}
        aria-label="base"
      >
        <PaginationItems />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Siblings 3, boundaries 0 (just using First and Last buttons instead of boundary butttons)">
      <Pagination
        totalItems={232}
        pageSize={10}
        defaultPage={9}
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
        defaultPage={9}
        aria-label="base"
      >
        <PaginationItems siblings={2} boundaries={2} />
      </Pagination>
    </StorybookCase>
  </StorybookPage>
);
StoryVariationsInTruncation.storyName = 'Variations in truncation';

export const StoryVariationsInInput = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Display only">
      <Pagination
        totalItems={232}
        pageSize={10}
        defaultPage={9}
        aria-label="display only"
      >
        <PaginationFirstItem />
        <PaginationPrevItem />
        <PaginationItems
          truncation
          siblings={0}
          boundaries={0}
          overrides={{
            itemButton: ({pageNumber, lastPage}) => (
              <TextBlock
                paddingInline="space020"
                typographyPreset="utilityButton020"
                stylePreset="inkSubtle"
              >
                Page {pageNumber} of {lastPage}
              </TextBlock>
            ),
          }}
        />
        <PaginationNextItem />
        <PaginationLastItem />
      </Pagination>
    </StorybookCase>
  </StorybookPage>
);
StoryVariationsInInput.storyName = 'Variations in input';

export const StoryLogicalProps = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Custom button size">
      <Pagination {...defaultProps} aria-label="custom button size">
        <PaginationPrevItem />
        <PaginationItems
          {...defaultItemsProps}
          overrides={{minWidth: '27px', minHeight: '27px'}}
        />
        <PaginationNextItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Logical props - padding">
      <Pagination {...defaultProps} aria-label="padding-overrides">
        <PaginationPrevItem />
        <PaginationItems
          {...defaultItemsProps}
          overrides={{paddingInline: 'space040'}}
        />
        <PaginationNextItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Logical props - margin">
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

export const StoryStyleOverrides = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Custom colour">
      <Pagination {...defaultProps} aria-label="custom colour">
        <PaginationPrevItem />
        <PaginationItems
          {...defaultItemsProps}
          overrides={{
            stylePreset: 'paginationInformative',
          }}
        />
        <PaginationNextItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Custom style">
      <Pagination {...defaultProps} aria-label="custom style">
        <PaginationPrevItem />
        <PaginationItems
          {...defaultItemsProps}
          overrides={{
            icon: {
              stylePreset: 'paginationInformative',
            },
            typographyPreset: 'editorialParagraph020',
          }}
        />
        <PaginationNextItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Custom previous and next icons">
      <Pagination {...defaultProps} aria-label="custom previous and next icons">
        <PaginationPrevItem
          overrides={{
            icon: () => (
              <IconOutlinedArrowBack
                overrides={{
                  size: 'iconSize020',
                  paddingInline: 'space020',
                  stylePreset: 'paginationItem',
                }}
              />
            ),
          }}
        />
        <PaginationItems {...defaultItemsProps} />
        <PaginationNextItem
          overrides={{
            icon: () => (
              <IconOutlinedArrowForward
                overrides={{
                  size: 'iconSize020',
                  paddingInline: 'space020',
                  stylePreset: 'paginationItem',
                }}
              />
            ),
          }}
        />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Custom truncation icon">
      <Pagination
        totalItems={232}
        pageSize={10}
        defaultPage={9}
        aria-label="truncation with icon"
      >
        <PaginationPrevItem />
        <PaginationItems
          overrides={{
            icon: () => (
              <IconOutlinedTrendingFlat
                overrides={{
                  size: 'iconSize020',
                  paddingInline: 'space020',
                  stylePreset: 'paginationItemTruncation',
                }}
              />
            ),
          }}
        />
        <PaginationNextItem />
      </Pagination>
    </StorybookCase>
  </StorybookPage>
);
StoryStyleOverrides.storyName = 'Style overrides';

export const StoryNumberOverrides = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Items as clickable icon buttons (using children)">
      <Pagination
        {...defaultProps}
        aria-label="items as clickable icon buttons (using children)"
      >
        <PaginationPrevItem />
        <PaginationItems truncation={false}>
          <IconFilledCircle />
        </PaginationItems>
        <PaginationNextItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Items as clickable icon buttons (using overrides.itemButton)">
      <Pagination
        {...defaultProps}
        aria-label="items as clickable icons (using overrides.itemButton)"
      >
        <PaginationPrevItem />
        <PaginationItems
          truncation={false}
          overrides={{
            itemButton: props => (
              <StyledButton {...props}>
                <IconFilledCircle />
              </StyledButton>
            ),
          }}
        />
        <PaginationNextItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Items as unclickable icons (using overrides.itemButton)">
      <Pagination
        {...defaultProps}
        aria-label="items as unclickable icons (using overrides.itemButton)"
      >
        <PaginationPrevItem />
        <PaginationItems
          truncation={false}
          overrides={{
            itemButton: () => (
              <IconFilledCircle
                overrides={{
                  size: 'iconSize020',
                  paddingInline: 'space020',
                  stylePreset: 'paginationItem',
                }}
              />
            ),
          }}
        />
        <PaginationNextItem />
      </Pagination>
    </StorybookCase>
  </StorybookPage>
);
StoryNumberOverrides.storyName = 'Number overrides';

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
          paginationItemCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};

import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {StructuredListItem, StructuredListCell, StructuredList} from '..';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {IconOutlinedArrowForwardIos, IconFilledAddCircle} from '../../icons';
import {
  CreateThemeArgs,
  getColorCssFromTheme,
  GridLayout,
  styled,
  TextBlock,
  ThemeProvider,
  withDefaultProps,
} from '../..';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

const structuredListCustomTheme: CreateThemeArgs = {
  name: 'structured-list-theme',
  overrides: {
    stylePresets: {
      structuredListTextItemNonInteractive: {
        base: {color: 'unset', iconColor: 'unset'},
      },
      structuredListTextItemInteractive: {
        base: {color: 'unset', iconColor: 'unset'},
        hover: {color: 'unset', iconColor: 'unset'},
      },
      structuredListItemCustom: {
        base: {
          color: '{{colors.inkBrand010}}',
          iconColor: '{{colors.inkBrand010}}',
          backgroundColor: '{{colors.interfaceInformative020}}',
        },
        hover: {
          color: '{{colors.inkInverse}}',
          iconColor: '{{colors.inkInverse}}',
          backgroundColor: '{{colors.interfaceInformative010}}',
        },
        active: {backgroundColor: '{{colors.interfaceInformative020}}'},
      },
      dividerCustomPreset: {
        base: {
          borderStyle: 'solid',
          borderColor: '{{colors.inkBrand010}}',
          borderWidth: '{{borders.borderWidth020}}',
        },
      },
    },
  },
};

const STRUCTURED_LIST_GRID_COLUMNS = '1fr';

const MarginOverridesWrapper = styled.div`
  border: 1px dashed;
  ${getColorCssFromTheme('borderColor', 'red060')}
`;

const arrowIcon = (
  <GridLayout justifyContent="end">
    <IconOutlinedArrowForwardIos
      overrides={{
        size: 'iconSize010',
        stylePreset: 'inkContrast',
      }}
    />
  </GridLayout>
);

const addCircleIcon = (
  <GridLayout justifyContent="end">
    <IconFilledAddCircle
      overrides={{size: 'iconSize020', stylePreset: 'inkContrast'}}
    />
  </GridLayout>
);

const HeadingTextBlock = withDefaultProps(TextBlock, {
  stylePreset: 'inkContrast',
  typographyPreset: 'utilityHeading010',
});
const BodyTextBlock = withDefaultProps(TextBlock, {
  stylePreset: 'inkSubtle',
  typographyPreset: 'utilityBody020',
});

export const StoryStructuredListDefault = () => (
  <StorybookPage columns={STRUCTURED_LIST_GRID_COLUMNS}>
    <StorybookCase>
      <StructuredList ariaLabel="list">
        {[1, 2, 3].map(item => (
          <StructuredListItem key={item} ariaLabel="list item">
            <StructuredListCell>
              <HeadingTextBlock>[Cell 1]</HeadingTextBlock>
            </StructuredListCell>
            <StructuredListCell>
              <BodyTextBlock>[Cell 2]</BodyTextBlock>
            </StructuredListCell>
            <StructuredListCell>{arrowIcon}</StructuredListCell>
          </StructuredListItem>
        ))}
      </StructuredList>
    </StorybookCase>
  </StorybookPage>
);
StoryStructuredListDefault.storyName = 'Default';

export const StoryStructuredListDivider = () => (
  <StorybookPage columns={STRUCTURED_LIST_GRID_COLUMNS}>
    <StorybookCase>
      <StructuredList divider ariaLabel="list">
        {[1, 2, 3].map(item => (
          <StructuredListItem key={item} ariaLabel="list item">
            <StructuredListCell>
              <HeadingTextBlock>[Cell 1]</HeadingTextBlock>
            </StructuredListCell>
            <StructuredListCell>
              <BodyTextBlock>[Cell 2]</BodyTextBlock>
            </StructuredListCell>
            <StructuredListCell>{arrowIcon}</StructuredListCell>
          </StructuredListItem>
        ))}
      </StructuredList>
    </StorybookCase>
  </StorybookPage>
);
StoryStructuredListDivider.storyName = 'Divider';

export const StoryStructuredListTwoCells = () => (
  <StorybookPage columns={STRUCTURED_LIST_GRID_COLUMNS}>
    <StorybookCase>
      <StructuredList divider ariaLabel="list">
        {[1, 2, 3].map(item => (
          <StructuredListItem key={item} ariaLabel="list item">
            <StructuredListCell>
              <HeadingTextBlock>[Cell 1]</HeadingTextBlock>
            </StructuredListCell>
            <StructuredListCell>
              <BodyTextBlock>[Cell 2]</BodyTextBlock>
            </StructuredListCell>
          </StructuredListItem>
        ))}
      </StructuredList>
    </StorybookCase>
  </StorybookPage>
);
StoryStructuredListTwoCells.storyName = '2 cells';

export const StoryStructuredListPullRight = () => (
  <StorybookPage columns={STRUCTURED_LIST_GRID_COLUMNS}>
    <StorybookCase>
      <StructuredList divider ariaLabel="list">
        {[1, 2, 3].map(item => (
          <StructuredListItem key={item} ariaLabel="list item">
            <StructuredListCell>
              <HeadingTextBlock>[Cell 1]</HeadingTextBlock>
            </StructuredListCell>
            <StructuredListCell pullRight>
              <BodyTextBlock>[Cell 2]</BodyTextBlock>
            </StructuredListCell>
          </StructuredListItem>
        ))}
      </StructuredList>
    </StorybookCase>
  </StorybookPage>
);
StoryStructuredListPullRight.storyName = 'Pull right';

export const StoryStructuredListOneCell = () => (
  <StorybookPage columns={STRUCTURED_LIST_GRID_COLUMNS}>
    <StorybookCase>
      <StructuredList divider ariaLabel="list">
        {[1, 2, 3].map(item => (
          <StructuredListItem key={item} ariaLabel="list item">
            <StructuredListCell>
              <HeadingTextBlock>[Cell 1]</HeadingTextBlock>
            </StructuredListCell>
          </StructuredListItem>
        ))}
      </StructuredList>
    </StorybookCase>
  </StorybookPage>
);
StoryStructuredListOneCell.storyName = '1 cell';

export const StoryStructuredListInteractive = () => (
  <StorybookPage columns={STRUCTURED_LIST_GRID_COLUMNS}>
    <StorybookCase title="Internal link">
      <StructuredList divider ariaLabel="list">
        <StructuredListItem href="/" target="_blank" ariaLabel="list item">
          <StructuredListCell>
            <HeadingTextBlock>[Cell 1]</HeadingTextBlock>
          </StructuredListCell>
          <StructuredListCell>
            <BodyTextBlock>[Cell 2]</BodyTextBlock>
          </StructuredListCell>
        </StructuredListItem>
      </StructuredList>
    </StorybookCase>
    <StorybookCase title="External link">
      <StructuredList divider ariaLabel="list">
        <StructuredListItem
          href="https://newskit.co.uk/"
          target="_blank"
          ariaLabel="list item"
        >
          <StructuredListCell>
            <HeadingTextBlock>[Cell 1]</HeadingTextBlock>
          </StructuredListCell>
          <StructuredListCell>
            <BodyTextBlock>[Cell 2]</BodyTextBlock>
          </StructuredListCell>
        </StructuredListItem>
      </StructuredList>
    </StorybookCase>
    <StorybookCase title="Disabled link">
      <StructuredList divider ariaLabel="list">
        <StructuredListItem href="/" disabled ariaLabel="list item">
          <StructuredListCell>
            <HeadingTextBlock>[Cell 1]</HeadingTextBlock>
          </StructuredListCell>
          <StructuredListCell>
            <BodyTextBlock>[Cell 2]</BodyTextBlock>
          </StructuredListCell>
        </StructuredListItem>
      </StructuredList>
    </StorybookCase>
  </StorybookPage>
);
StoryStructuredListInteractive.storyName = 'Interactive';

export const StoryStructuredListVariations = () => (
  <StorybookPage columns={STRUCTURED_LIST_GRID_COLUMNS}>
    <StorybookCase title="Internal link">
      <StructuredList divider ariaLabel="list">
        <StructuredListItem
          hideIcon
          href="/"
          target="_blank"
          ariaLabel="list item"
        >
          <StructuredListCell>
            <HeadingTextBlock>[Cell 1]</HeadingTextBlock>
          </StructuredListCell>
          <StructuredListCell>
            <BodyTextBlock>[Cell 2]</BodyTextBlock>
          </StructuredListCell>
        </StructuredListItem>
      </StructuredList>
    </StorybookCase>

    <StorybookCase title="Disabled link">
      <StructuredList divider ariaLabel="list">
        <StructuredListItem hideIcon href="/" disabled ariaLabel="list item">
          <StructuredListCell>
            <HeadingTextBlock>[Cell 1]</HeadingTextBlock>
          </StructuredListCell>
          <StructuredListCell>
            <BodyTextBlock>[Cell 2]</BodyTextBlock>
          </StructuredListCell>
        </StructuredListItem>
      </StructuredList>
    </StorybookCase>
  </StorybookPage>
);
StoryStructuredListVariations.storyName = 'Variations';

export const StoryStructuredListCombined = () => (
  <StorybookPage columns={STRUCTURED_LIST_GRID_COLUMNS}>
    <StorybookCase title="Internal link">
      <StructuredList divider ariaLabel="list">
        <StructuredListItem ariaLabel="list item" href="/">
          <StructuredListCell>
            <HeadingTextBlock>[Cell 1]</HeadingTextBlock>
          </StructuredListCell>
          <StructuredListCell>
            <BodyTextBlock>[Cell 2]</BodyTextBlock>
          </StructuredListCell>
        </StructuredListItem>
        <StructuredListItem>
          <StructuredListCell>
            <HeadingTextBlock>[Cell 1]</HeadingTextBlock>
          </StructuredListCell>
          <StructuredListCell>
            <BodyTextBlock>[Cell 2]</BodyTextBlock>
          </StructuredListCell>
        </StructuredListItem>
        <StructuredListItem>
          <StructuredListCell>
            <HeadingTextBlock>[Cell 1]</HeadingTextBlock>
          </StructuredListCell>
          <StructuredListCell>
            <BodyTextBlock>[Cell 2]</BodyTextBlock>
          </StructuredListCell>
        </StructuredListItem>
      </StructuredList>
    </StorybookCase>
  </StorybookPage>
);
StoryStructuredListCombined.storyName = 'Combined';

export const StoryStructuredListCustomIcon = () => (
  <StorybookPage columns={STRUCTURED_LIST_GRID_COLUMNS}>
    <StorybookCase>
      <StructuredList divider ariaLabel="list">
        <StructuredListItem href="/" target="_blank" ariaLabel="list item">
          <StructuredListCell>
            <HeadingTextBlock>[Cell 1]</HeadingTextBlock>
          </StructuredListCell>
          <StructuredListCell>
            <BodyTextBlock>[Cell 2]</BodyTextBlock>
          </StructuredListCell>
          <StructuredListCell>{arrowIcon}</StructuredListCell>
        </StructuredListItem>
        <StructuredListItem href="/" target="_blank" ariaLabel="list item">
          <StructuredListCell>
            <HeadingTextBlock>[Cell 1]</HeadingTextBlock>
          </StructuredListCell>
          <StructuredListCell>
            <BodyTextBlock>[Cell 2]</BodyTextBlock>
          </StructuredListCell>
          <StructuredListCell pullRight>{addCircleIcon}</StructuredListCell>
        </StructuredListItem>
        <StructuredListItem ariaLabel="list item">
          <StructuredListCell>
            <HeadingTextBlock>[Cell 1]</HeadingTextBlock>
          </StructuredListCell>
          <StructuredListCell>
            <BodyTextBlock>[Cell 2]</BodyTextBlock>
          </StructuredListCell>
        </StructuredListItem>
      </StructuredList>
    </StorybookCase>
  </StorybookPage>
);
StoryStructuredListCustomIcon.storyName = 'Custom icon';

export const StoryStructuredListAlignment = () => (
  <StorybookPage columns={STRUCTURED_LIST_GRID_COLUMNS}>
    <StorybookCase>
      <StructuredList ariaLabel="list" divider>
        <StructuredListItem href="/" linkIconAlign="center">
          <StructuredListCell align="end">
            <HeadingTextBlock>[Cell 1]</HeadingTextBlock>
          </StructuredListCell>
          <StructuredListCell>
            <BodyTextBlock>[Cell 2]</BodyTextBlock>
          </StructuredListCell>
        </StructuredListItem>
        <StructuredListItem href="/" linkIconAlign="center">
          <StructuredListCell align="center">
            <BodyTextBlock>[Cell 2]</BodyTextBlock>
          </StructuredListCell>
        </StructuredListItem>
        <StructuredListItem>
          <StructuredListCell align="end">
            <HeadingTextBlock>[Cell 1]</HeadingTextBlock>
          </StructuredListCell>
          <StructuredListCell>
            <BodyTextBlock>[Cell 2]</BodyTextBlock>
          </StructuredListCell>
          <StructuredListCell align="end">{arrowIcon}</StructuredListCell>
        </StructuredListItem>
      </StructuredList>
    </StorybookCase>
  </StorybookPage>
);
StoryStructuredListAlignment.storyName = 'Alignment';

export const StoryStructuredListLogicalProps = () => (
  <StorybookPage columns={STRUCTURED_LIST_GRID_COLUMNS}>
    <StorybookCase title="Margin overrides">
      <StructuredList
        ariaLabel="list"
        overrides={{
          marginInline: 'space070',
          marginBlock: 'space050',
          width: 'unset',
        }}
      >
        <MarginOverridesWrapper>
          {[1, 2, 3].map(item => (
            <StructuredListItem key={item} ariaLabel="list item">
              <StructuredListCell>
                <HeadingTextBlock>[Cell 1]</HeadingTextBlock>
              </StructuredListCell>
              <StructuredListCell>
                <BodyTextBlock>[Cell 2]</BodyTextBlock>
              </StructuredListCell>
              <StructuredListCell>{arrowIcon}</StructuredListCell>
            </StructuredListItem>
          ))}
        </MarginOverridesWrapper>
      </StructuredList>
    </StorybookCase>
    <StorybookCase title="Padding overrides">
      <StructuredList
        ariaLabel="list"
        overrides={{
          paddingInline: 'space070',
          paddingBlock: 'space050',
          width: 'unset',
        }}
      >
        <MarginOverridesWrapper>
          {[1, 2, 3].map(item => (
            <StructuredListItem key={item} ariaLabel="list item">
              <StructuredListCell>
                <HeadingTextBlock>[Cell 1]</HeadingTextBlock>
              </StructuredListCell>
              <StructuredListCell>
                <BodyTextBlock>[Cell 2]</BodyTextBlock>
              </StructuredListCell>
              <StructuredListCell>{arrowIcon}</StructuredListCell>
            </StructuredListItem>
          ))}
        </MarginOverridesWrapper>
      </StructuredList>
    </StorybookCase>
  </StorybookPage>
);
StoryStructuredListLogicalProps.storyName = 'Logical props';

export const StoryStructuredListStylingOverrides = () => (
  <StorybookPage columns={STRUCTURED_LIST_GRID_COLUMNS}>
    <StorybookCase title="Non-interactive">
      <StructuredList
        ariaLabel="list"
        divider
        overrides={{divider: {stylePreset: 'dividerCustomPreset'}}}
      >
        <StructuredListItem
          ariaLabel="list item"
          overrides={{
            stylePreset: 'structuredListItemCustom',
            spaceInset: 'spaceInset060',
            minHeight: 'sizing090',
          }}
        >
          <StructuredListCell>
            <HeadingTextBlock stylePreset="structuredListTextItemNonInteractive">
              [Cell 1]
            </HeadingTextBlock>
          </StructuredListCell>
          <StructuredListCell>
            <BodyTextBlock stylePreset="structuredListTextItemNonInteractive">
              [Cell 2]
            </BodyTextBlock>
          </StructuredListCell>
          <StructuredListCell>
            <BodyTextBlock stylePreset="structuredListTextItemNonInteractive">
              <GridLayout justifyContent="end">
                <IconFilledAddCircle
                  overrides={{size: 'iconSize020', stylePreset: 'inkBrand010'}}
                />
              </GridLayout>
            </BodyTextBlock>
          </StructuredListCell>
        </StructuredListItem>
        <StructuredListItem
          ariaLabel="list item"
          overrides={{
            stylePreset: 'structuredListItemCustom',
            spaceInset: 'spaceInset060',
            minHeight: 'sizing090',
          }}
        >
          <StructuredListCell>
            <HeadingTextBlock stylePreset="structuredListTextItemNonInteractive">
              [Cell 1]
            </HeadingTextBlock>
          </StructuredListCell>
          <StructuredListCell>
            <BodyTextBlock stylePreset="structuredListTextItemNonInteractive">
              [Cell 2]
            </BodyTextBlock>
          </StructuredListCell>
        </StructuredListItem>
      </StructuredList>
    </StorybookCase>
    <StorybookCase title="Interactive">
      <StructuredList
        ariaLabel="list"
        divider
        overrides={{divider: {stylePreset: 'dividerCustomPreset'}}}
      >
        <StructuredListItem
          href="/"
          ariaLabel="list item"
          overrides={{
            stylePreset: 'structuredListItemCustom',
            spaceInset: 'spaceInset060',
            minHeight: 'sizing090',
            icon: {size: 'iconSize020', stylePreset: 'inkBrand010'},
          }}
        >
          <StructuredListCell>
            <HeadingTextBlock stylePreset="structuredListTextItemInteractive">
              [Cell 1]
            </HeadingTextBlock>
          </StructuredListCell>
          <StructuredListCell>
            <BodyTextBlock stylePreset="structuredListTextItemInteractive">
              [Cell 2]
            </BodyTextBlock>
          </StructuredListCell>
        </StructuredListItem>
      </StructuredList>
    </StorybookCase>
  </StorybookPage>
);
StoryStructuredListStylingOverrides.storyName = 'Styling overrides';

export default {
  title: 'Components/Structured list',
  component: StructuredList,
  parameters: {
    nkDocs: {
      title: 'Structured list',
      url: 'https://www.newskit.co.uk/components/structured-list',
      description:
        'The structured list is a layout component that groups similar or related content.',
    },
  },
  decorators: [
    (
      Story: StoryType,
      context: {name: string; globals: {backgrounds: {value: string}}},
    ) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          structuredListCustomTheme,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};

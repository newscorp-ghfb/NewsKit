import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {OrderedList} from '../ordered-list';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {getColorCssFromTheme, styled} from '../../utils/style';

const sentence =
  'A paragraph is a short part of a text, consisting of at least one sentence and beginning on a new line. It usually deals with a single event and is indicated by a new line, indentation or numbering.';
const paragraph = `${sentence} ${sentence} ${sentence}`;
const LIST_DATA = [
  `First item`,
  `Second item`,
  `Third item`,
  `Fourth item`,
  `Fifth item`,
  `Sixth item`,
  paragraph,
];

const orderedListCustomThemeObject: CreateThemeArgs = {
  name: 'ordered-list-theme',
  overrides: {
    stylePresets: {
      customOrderedListItemCounter: {
        base: {color: '{{colors.inkBrand010}}'},
      },
    },
  },
};

const MarginOverridesWrapper = styled.div`
  border: 1px dashed;
  ${getColorCssFromTheme('borderColor', 'red060')}
`;

export const StoryOrderedListDefault = () => (
  <StorybookPage>
    <StorybookCase>
      <OrderedList>{LIST_DATA}</OrderedList>
    </StorybookCase>
  </StorybookPage>
);
StoryOrderedListDefault.storyName = 'Default';

export const StoryOrderedListLogicalProps = () => (
  <StorybookPage>
    <StorybookCase>
      <MarginOverridesWrapper>
        <OrderedList
          overrides={{
            paddingInline: 'space050',
            marginBlock: 'space050',
          }}
        >
          {LIST_DATA.map(item => `${item} with logical props`)}
        </OrderedList>
      </MarginOverridesWrapper>
    </StorybookCase>
  </StorybookPage>
);
StoryOrderedListLogicalProps.storyName = 'Logical props';

export const StoryOrderedListStylingOverrides = () => (
  <StorybookPage>
    <StorybookCase>
      <OrderedList
        overrides={{
          content: {
            typographyPreset: 'editorialParagraph020',
          },
          counter: {
            stylePreset: 'customOrderedListItemCounter',
            typographyPreset: 'editorialParagraph020',
          },
        }}
      >
        {LIST_DATA.map(item => `${item} with overrides`)}
      </OrderedList>
    </StorybookCase>
  </StorybookPage>
);
StoryOrderedListStylingOverrides.storyName = 'Styling overrides';

export default {
  title: 'Components/Ordered list',
  component: OrderedList,
  parameters: {
    nkDocs: {
      title: 'Ordered list',
      url: 'https://newskit.co.uk/components/ordered-list',
      description:
        'Ordered lists make blocks of text easier to read, structuring sequential information into manageable, numbered items.',
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
          orderedListCustomThemeObject,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};

import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {Byline} from '..';
import {Block} from '../../block';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {CreateThemeArgs, ThemeProvider} from '../../theme';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

const BYLINE_COLUMNS = '1fr';
const BYLINE_DATA = [
  {
    author: 'Alex Lowe',
    href: 'https://www.thetimes.co.uk/profile/alex-lowe',
    title: 'Deputy Rugby Correspondent',
  },
  {
    author: 'Tom Knowles',
    href: 'https://www.thetimes.co.uk/profile/tom-knowles',
    title: 'West Coast Technology Reporter',
    location: 'London',
  },
  {
    author: 'David Aaronovitch',
    href: 'https://www.thetimes.co.uk/profile/david-aaronovitch',
    title: 'Columnist',
  },
  {
    author: 'Catherine Philp',
    href: 'https://www.thetimes.co.uk/profile/catherine-philp',
    title: 'Diplomatic Correspondent',
    location: 'London',
  },
];

const myCustomTheme: CreateThemeArgs = {
  name: 'my-custom-byline-theme',
  overrides: {
    stylePresets: {
      bylineBorderWrapper: {
        base: {
          backgroundColor: 'transparent',
          borderWidth: '{{borders.borderWidth010}}',
          borderStyle: 'dashed',
          borderColor: '{{colors.red060}}',
        },
      },
      bylineStylingOverrides: {
        base: {
          color: '{{colors.inkBrand010}}',
        },
      },
    },
  },
};

export const StoryBylineDefault = () => (
  <StorybookPage columns={BYLINE_COLUMNS}>
    <StorybookCase>
      <Byline
        bylineData={[
          {
            author: 'Author',
            href: 'https://newskit.co.uk/components/byline',
            title: 'Political Editor, UK',
          },
        ]}
      />
    </StorybookCase>
  </StorybookPage>
);
StoryBylineDefault.storyName = 'Default';

export const StoryBylineVariants = () => (
  <StorybookPage columns={BYLINE_COLUMNS}>
    <StorybookCase title="Mix styles">
      <Byline bylineData={BYLINE_DATA} />
    </StorybookCase>
    <StorybookCase title="Read-only">
      <Byline
        bylineData={[
          {
            author: 'Richard Lloyd Parry',
          },
          {
            author: 'Callum Jones',
            title: 'Trade Correspondent',
          },
          {
            author: 'Callum Jones',
            location: 'London',
          },
        ]}
      />
    </StorybookCase>
    <StorybookCase title="Link">
      <Byline
        bylineData={[
          {author: 'Alex Lowe', href: '/'},
          {author: 'Richard Lloyd Parry', href: '/'},
        ]}
      />
    </StorybookCase>
    <StorybookCase title="External link">
      <Byline
        bylineData={[
          {
            author: 'Alex Lowe',
            href: 'https://www.thetimes.co.uk/profile/alex-lowe',
          },
          {
            author: 'Richard Lloyd Parry',
            href: 'https://www.thetimes.co.uk/profile/richard-lloyd-parry',
          },
        ]}
      />
    </StorybookCase>
  </StorybookPage>
);
StoryBylineVariants.storyName = 'Variants';

export const StoryBylineLogicalProps = () => (
  <StorybookPage columns={BYLINE_COLUMNS}>
    <StorybookCase>
      <Block stylePreset="bylineBorderWrapper" marginBlockEnd="space070">
        <Byline
          overrides={{paddingBlock: 'space070'}}
          bylineData={BYLINE_DATA}
        />
      </Block>
    </StorybookCase>
  </StorybookPage>
);
StoryBylineLogicalProps.storyName = 'Logical props';

export const StoryBylineStylingOverrides = () => (
  <StorybookPage columns={BYLINE_COLUMNS}>
    <StorybookCase>
      <Byline
        overrides={{
          stylePreset: 'bylineStylingOverrides',
          link: {stylePreset: 'bylineStylingOverrides'},
          divider: {stylePreset: 'bylineStylingOverrides'},
        }}
        bylineData={BYLINE_DATA}
      />
    </StorybookCase>
  </StorybookPage>
);
StoryBylineStylingOverrides.storyName = 'Styling overrides';

export default {
  title: 'Components/Byline',
  component: Byline,
  parameters: {
    nkDocs: {
      title: 'Byline',
      url: 'https://newskit.co.uk/components/byline',
      description:
        'The byline is a small line of text which lists the authors of an article, along with their titles if provided.',
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
          myCustomTheme,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};

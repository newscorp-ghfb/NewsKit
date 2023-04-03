import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {DateTime} from '..';
import {StorybookPage, StorybookCase} from '../../test/storybook-comps';
import {ThemeProvider} from '../../theme';

import {styled} from '../../utils';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

const StyledDiv = styled.div`
  border: 1px red dotted;
`;

const date = '2017-01-01T04:32:00.000Z'; // new Date().toISOString();

export const StoryDateTimeDefault = () => (
  <StorybookPage>
    <StorybookCase title="">
      <DateTime date={date} />
    </StorybookCase>
  </StorybookPage>
);
StoryDateTimeDefault.storyName = 'Default';

export const StoryDateTimeVariations = () => (
  <StorybookPage>
    <StorybookCase title="Prefix">
      <DateTime date={date} prefix="Updated:" />
    </StorybookCase>
    <StorybookCase title="Suffix">
      <DateTime date={date} suffix="The Times" />
    </StorybookCase>
    <StorybookCase title="Prefix and suffix">
      <DateTime date={date} prefix="Updated:" suffix="The Times" />
    </StorybookCase>
    <StorybookCase title="Custom dateFormat">
      <DateTime date={date} dateFormat="d MMM h:mm a" />
    </StorybookCase>
    <StorybookCase title="With children">
      <DateTime date={date}>2 years ago</DateTime>
    </StorybookCase>
  </StorybookPage>
);
StoryDateTimeVariations.storyName = 'Variations';

export const StoryDateTimeLogicalProps = () => (
  <StorybookPage>
    <StorybookCase title="Prefix and suffix">
      <StyledDiv>
        <DateTime
          date={date}
          prefix="Updated:"
          suffix="The Times"
          overrides={{paddingInline: 'space050'}}
        />
      </StyledDiv>
    </StorybookCase>
  </StorybookPage>
);
StoryDateTimeLogicalProps.storyName = 'Logical props';

export const StoryDateTimeOverrides = () => (
  <StorybookPage>
    <StorybookCase title="Prefix">
      <DateTime
        date={date}
        prefix="Updated:"
        overrides={{
          stylePreset: 'inkBrand010',
          typographyPreset: 'utilityMeta020',
          prefix: {
            typographyPreset: 'utilityButton030',
            stylePreset: 'inkBrand010',
          },
        }}
      />
    </StorybookCase>
    <StorybookCase title="Suffix">
      <DateTime
        date={date}
        suffix="The Times"
        overrides={{
          stylePreset: 'inkBrand010',
          typographyPreset: 'utilityMeta020',
          suffix: {
            typographyPreset: 'utilityButton030',
            stylePreset: 'inkBrand010',
          },
        }}
      />
    </StorybookCase>
    <StorybookCase title="Prefix and suffix">
      <DateTime
        date={date}
        prefix="Updated:"
        suffix="The Times"
        overrides={{
          stylePreset: 'inkBrand010',
          typographyPreset: 'utilityMeta020',
          prefix: {
            typographyPreset: 'utilityButton030',
            stylePreset: 'inkBrand010',
          },
          suffix: {
            typographyPreset: 'utilityButton030',
            stylePreset: 'inkBrand010',
          },
        }}
      />
    </StorybookCase>
  </StorybookPage>
);
StoryDateTimeOverrides.storyName = 'Styling overrides';

export default {
  title: 'Components/Date Time',
  component: DateTime,
  parameters: {
    nkDocs: {
      title: 'Date Time',
      url: 'https://newskit.co.uk/components/date-time',
      description:
        'The date time component is a styled, HTML5 time element for displaying date and time.',
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
          {},
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};

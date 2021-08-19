import * as React from 'react';
import {DateTime} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';

export default {
  title: 'NewsKit Light/date-time',
  component: () => 'None',
};

export const StoryDateTime = () => (
  <>
    <StorybookHeading>DateTime</StorybookHeading>
    <StorybookSubHeading>default</StorybookSubHeading>
    <DateTime date="2017-01-01T04:32:00.000Z" />
    <StorybookSubHeading>with prefix</StorybookSubHeading>
    <DateTime date="2017-01-01T04:32:00.000Z" prefix="Updated:" />
    <StorybookSubHeading>with suffix</StorybookSubHeading>
    <DateTime date="2017-01-01T04:32:00.000Z" suffix="The Times" />
    <StorybookSubHeading>with prefix and suffix</StorybookSubHeading>
    <DateTime
      date="2017-01-01T04:32:00.000Z"
      suffix="The Times"
      prefix="Updated:"
    />
    <hr />
    <StorybookHeading>DateTime with overrides</StorybookHeading>
    <StorybookSubHeading>on prefix</StorybookSubHeading>
    <DateTime
      date="2017-01-01T04:32:00.000Z"
      prefix="Updated:"
      overrides={{
        typographyPreset: 'utilityLabel010',
        stylePreset: 'inkBrand010',
        prefix: {
          typographyPreset: 'utilityLabel020',
          stylePreset: 'inkBrand010',
        },
      }}
    />
    <StorybookSubHeading>on suffix</StorybookSubHeading>
    <DateTime
      date="2017-01-01T04:32:00.000Z"
      suffix="The Times"
      overrides={{
        typographyPreset: 'utilityLabel010',
        stylePreset: 'inkBrand010',
        suffix: {
          typographyPreset: 'utilityLabel020',
          stylePreset: 'inkBrand010',
        },
      }}
    />
    <StorybookSubHeading>on prefix and suffix</StorybookSubHeading>
    <DateTime
      date="2017-01-01T04:32:00.000Z"
      suffix="The Times"
      prefix="Updated:"
      overrides={{
        typographyPreset: 'utilityLabel010',
        stylePreset: 'inkBrand010',
        prefix: {
          typographyPreset: 'utilityLabel020',
          stylePreset: 'inkBrand010',
        },
        suffix: {
          typographyPreset: 'utilityLabel020',
          stylePreset: 'inkBrand010',
        },
      }}
    />
  </>
);
StoryDateTime.storyName = 'date-time';

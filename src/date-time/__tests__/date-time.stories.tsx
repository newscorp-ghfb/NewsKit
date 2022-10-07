import * as React from 'react';
import {DateTime} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {styled} from '../../utils';

export default {
  title: 'Components/date-time',
  component: () => 'None',
};

const StyledDiv = styled.div`
  border: 1px red dotted;
`;

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
    <StorybookSubHeading>with logical props</StorybookSubHeading>
    <StyledDiv>
      <DateTime
        date="2017-01-01T04:32:00.000Z"
        suffix="The Times"
        prefix="Updated:"
        overrides={{
          marginInlineStart: 'space050',
        }}
      />
    </StyledDiv>
  </>
);
StoryDateTime.storyName = 'date-time';

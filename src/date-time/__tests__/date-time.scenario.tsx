import * as React from 'react';
import {DateTime} from '..';
import {StorybookHeading} from '../../test/storybook-comps';

export default {
  name: 'date-time',
  children: [
    {
      name: 'date-time-default',
      type: 'story',
      component: () => (
        <div>
          <StorybookHeading>DateTime default</StorybookHeading>
          <DateTime date="2017-01-01T04:32:00.000Z" />
        </div>
      ),
    },
    {
      name: 'date-time-prefix-suffix',
      type: 'story',
      component: () => (
        <div>
          <StorybookHeading>DateTime with prefix and suffix</StorybookHeading>
          <h2>DateTime with prefix</h2>
          <DateTime date="2017-01-01T04:32:00.000Z" prefix="Updated:" />
          <h2>DateTime with suffix</h2>
          <DateTime date="2017-01-01T04:32:00.000Z" suffix="The Times" />
          <h2>DateTime with prefix and suffix</h2>
          <DateTime
            date="2017-01-01T04:32:00.000Z"
            suffix="The Times"
            prefix="Updated:"
          />
        </div>
      ),
    },
    {
      name: 'date-time-prefix-suffix-overrides',
      type: 'story',
      component: () => (
        <div>
          <StorybookHeading>DateTime with overrides</StorybookHeading>
          <h2>DateTime with prefix</h2>
          <DateTime
            date="2017-01-01T04:32:00.000Z"
            prefix="Updated:"
            overrides={{
              typographyPreset: 'label010',
              stylePreset: 'inkBrand010',
              prefix: {
                typographyPreset: 'label020',
                stylePreset: 'inkBrand010',
              },
            }}
          />
          <h2>DateTime with suffix</h2>
          <DateTime
            date="2017-01-01T04:32:00.000Z"
            suffix="The Times"
            overrides={{
              typographyPreset: 'label010',
              stylePreset: 'inkBrand010',
              suffix: {
                typographyPreset: 'label020',
                stylePreset: 'inkBrand010',
              },
            }}
          />
          <h2>DateTime with prefix and suffix</h2>
          <DateTime
            date="2017-01-01T04:32:00.000Z"
            suffix="The Times"
            prefix="Updated:"
            overrides={{
              typographyPreset: 'label010',
              stylePreset: 'inkBrand010',
              prefix: {
                typographyPreset: 'label020',
                stylePreset: 'inkBrand010',
              },
              suffix: {
                typographyPreset: 'label020',
                stylePreset: 'inkBrand010',
              },
            }}
          />
        </div>
      ),
    },
  ],
};

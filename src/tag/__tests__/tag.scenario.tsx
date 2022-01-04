import * as React from 'react';

import {Tag, TagSize} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {BorderRadiusShape} from '../../themes';

export const name = 'tag';

export const component = () => (
  <React.Fragment>
    <StorybookHeading>Enabled Tag</StorybookHeading>
    <Tag href="http://example.com">Enabled</Tag>
    <StorybookHeading>Disabled Tag</StorybookHeading>
    <Tag disabled>Disabled</Tag>
    <StorybookHeading>Tag Sizes</StorybookHeading>
    <span>
      <Tag $size={TagSize.Small} href="http://example.com">
        Small
      </Tag>
    </span>
    <span>
      <Tag $size={TagSize.Medium} href="http://example.com">
        Medium
      </Tag>
    </span>
    <span>
      <Tag $size={TagSize.Large} href="http://example.com">
        Large
      </Tag>
    </span>
    <StorybookHeading>Shape</StorybookHeading>
    <Tag $shape={BorderRadiusShape.Squared} href="http://example.com">
      Squared
    </Tag>
    <Tag $shape={BorderRadiusShape.SemiRounded} href="http://example.com">
      SemiRounded
    </Tag>
    <Tag $shape={BorderRadiusShape.Rounded} href="http://example.com">
      Rounded
    </Tag>
  </React.Fragment>
);

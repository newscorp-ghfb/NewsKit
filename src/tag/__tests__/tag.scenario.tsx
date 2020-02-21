import * as React from 'react';

import {Tag, TagSize} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {styled} from '../../utils/style';

export const name = 'tag';
const Block = styled.div`
  margin: 10px;
`;

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
    <StorybookHeading>Style Presets</StorybookHeading>
    <Block>
      <Tag href="http://example.com">tagPrimary</Tag>
    </Block>
    <Block>
      <Tag href="http://example.com" $stylePreset="buttonSolidPrimary">
        buttonSolidPrimary
      </Tag>
    </Block>
  </React.Fragment>
);

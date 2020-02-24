import * as React from 'react';

import {Tag, TagSize} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {styled} from '../../utils/style';
import {Email} from '../../icons';
import {Stack} from '../../stack';

export const name = 'tag';
const Block = styled.div`
  margin: 10px;
`;

const Container = styled.div`
  margin: 24px;
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
    <h1>Tags with an icon</h1>
    <h2>Solid</h2>
    <Container>
      <Stack flow="horizontal-center" space="sizing020" wrap="wrap">
        <Tag $size={TagSize.Small}>
          <Email $size="iconSize010" />
          Text
        </Tag>
        <Tag $size={TagSize.Medium}>
          <Email $size="iconSize010" />
          Text
        </Tag>
        <Tag $size={TagSize.Large}>
          <Email $size="iconSize010" />
          Text
        </Tag>
      </Stack>
    </Container>

    <h2>Minimal (without padding)</h2>
    <Container>
      <Stack flow="horizontal-center" space="sizing020" wrap="wrap">
        <Tag $size={TagSize.Small} $stylePreset="TagMinimal">
          <Email $size="iconSize010" />
          Text
        </Tag>
        <Tag $size={TagSize.Medium} $stylePreset="TagMinimal">
          <Email $size="iconSize010" />
          Text
        </Tag>
        <Tag $size={TagSize.Large} $stylePreset="TagMinimal">
          <Email $size="iconSize010" />
          Text
        </Tag>
      </Stack>
    </Container>
  </React.Fragment>
);

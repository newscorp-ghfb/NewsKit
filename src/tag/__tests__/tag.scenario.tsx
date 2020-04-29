import * as React from 'react';
import {Tag, TagSize} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {styled} from '../../utils/style';
import {Email} from '../../icons';
import {Stack} from '../../stack';

export const name = 'tag';

const Container = styled.div`
  margin: 24px;
`;

export const component = () => (
  <React.Fragment>
    <StorybookHeading>Enabled/Disbaled Tag</StorybookHeading>
    <Container>
      <Stack flow="horizontal-center" space="sizing020" wrap="wrap">
        <Tag href="http://example.com">Enabled</Tag>
        <Tag href="http://example.com" disabled>
          Disabled
        </Tag>
      </Stack>
    </Container>

    <StorybookHeading>Tag Sizes</StorybookHeading>
    <Container>
      <Stack flow="horizontal-center" space="sizing020" wrap="wrap">
        <Tag size={TagSize.Small} href="http://example.com">
          Small
        </Tag>
        <Tag size={TagSize.Medium} href="http://example.com">
          Medium
        </Tag>
        <Tag size={TagSize.Large} href="http://example.com">
          Large
        </Tag>
      </Stack>
    </Container>

    <StorybookHeading>Style Presets</StorybookHeading>
    <Container>
      <Tag href="http://example.com">tagPrimary</Tag>
    </Container>

    <StorybookHeading>Tags with an icon</StorybookHeading>
    <Container>
      <Stack flow="horizontal-center" space="sizing020" wrap="wrap">
        <Tag size={TagSize.Small}>
          <Email size="iconSize010" />
          Text
        </Tag>
        <Tag size={TagSize.Medium}>
          <Email size="iconSize010" />
          Text
        </Tag>
        <Tag size={TagSize.Large}>
          <Email size="iconSize010" />
          Text
        </Tag>
      </Stack>
    </Container>
  </React.Fragment>
);

import * as React from 'react';
import {newskitLightTheme} from '../../themes';
import {Tag, TagSize} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {styled} from '../../utils/style';
import {Email} from '../../icons';
import {Stack} from '../../stack';
import {getMediaQueryFromTheme} from '../../utils/responsive-helpers';

export const name = 'tag';

const Container = styled.div`
  margin: 24px;
`;

const Block = styled.div`
  display: flex;
  align-items: center;
  &::before {
    content: attr(data-state);
    margin-right: 48px;
  }

  ${getMediaQueryFromTheme('sm')} {
    &::before {
      content: none;
    }
  }
`;

export const component = () => (
  <React.Fragment>
    <StorybookHeading>Enabled Tag</StorybookHeading>
    <Tag href="http://example.com">Enabled</Tag>
    <StorybookHeading>Tag Sizes</StorybookHeading>
    <Container>
      <Stack flow="horizontal-center" space="sizing020" wrap="wrap">
        <Block theme={newskitLightTheme}>
          <Tag $size={TagSize.Small} href="http://example.com">
            Small
          </Tag>
        </Block>
        <Block theme={newskitLightTheme}>
          <Tag $size={TagSize.Medium} href="http://example.com">
            Medium
          </Tag>
        </Block>
        <Block theme={newskitLightTheme}>
          <Tag $size={TagSize.Large} href="http://example.com">
            Large
          </Tag>
        </Block>
      </Stack>
    </Container>
    <StorybookHeading>Style Presets</StorybookHeading>
    <Block theme={newskitLightTheme}>
      <Tag href="http://example.com">tagPrimary</Tag>
    </Block>
    <h1>Tags with an icon</h1>
    <h2>Solid</h2>
    <Container>
      <Stack flow="horizontal-center" space="sizing020" wrap="wrap">
        <Block theme={newskitLightTheme}>
          <Tag $size={TagSize.Small}>
            <Email $size="iconSize010" />
            Text
          </Tag>
        </Block>
        <Block theme={newskitLightTheme}>
          <Tag $size={TagSize.Medium}>
            <Email $size="iconSize010" />
            Text
          </Tag>
        </Block>
        <Block theme={newskitLightTheme}>
          <Tag $size={TagSize.Large}>
            <Email $size="iconSize010" />
            Text
          </Tag>
        </Block>
      </Stack>
    </Container>
  </React.Fragment>
);

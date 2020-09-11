import * as React from 'react';
import {Tag, TagSize} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {styled} from '../../utils/style';
import {Email} from '../../icons';
import {Stack} from '../../stack';

const Container = styled.div`
  margin: 24px;
`;

export default {
  name: 'tag',
  children: [
    {
      name: 'tag',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Enabled/Disbaled Tag</StorybookHeading>
          <Container>
            <Stack
              flow="horizontal-center"
              spaceStack="sizing020"
              spaceInline="sizing020"
              wrap="wrap"
            >
              <Tag href="http://example.com">Enabled</Tag>
              <Tag href="http://example.com" disabled>
                Disabled
              </Tag>
            </Stack>
          </Container>
          <StorybookHeading>Tag Sizes</StorybookHeading>
          <Container>
            <Stack
              flow="horizontal-center"
              spaceStack="sizing020"
              spaceInline="sizing020"
              wrap="wrap"
            >
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
            <Stack
              flow="horizontal-center"
              spaceStack="sizing020"
              spaceInline="sizing020"
              wrap="wrap"
            >
              <Tag size={TagSize.Small}>
                <Email />
                Text
              </Tag>
              <Tag size={TagSize.Medium}>
                <Email />
                Text
              </Tag>
              <Tag size={TagSize.Large}>
                <Email />
                Text
              </Tag>
            </Stack>
          </Container>
        </React.Fragment>
      ),
    },
    {
      name: 'tag-icon-sizes',
      type: 'story',
      component: () => (
        <React.Fragment>
          <h2>
            Tags with leading and trailing icon and overridden default sizes
          </h2>
          <Container>
            <Stack
              flow="horizontal-center"
              spaceInline="sizing020"
              spaceStack="sizing020"
              wrap="wrap"
            >
              <Tag size={TagSize.Small}>
                <Email />
                Text
                <Email size="iconSize030" />
              </Tag>
              <Tag size={TagSize.Medium}>
                <Email />
                Text
                <Email size="iconSize040" />
              </Tag>
              <Tag size={TagSize.Large}>
                <Email />
                Text
                <Email size="iconSize050" />
              </Tag>
            </Stack>
          </Container>
          <h2>
            Tags with leading and trailing icon and overridden sizes with
            overrides and inline prop
          </h2>
          <Container>
            <Stack
              flow="horizontal-center"
              spaceInline="sizing020"
              spaceStack="sizing020"
              wrap="wrap"
            >
              <Tag size={TagSize.Small} overrides={{iconSize: 'iconSize020'}}>
                <Email />
                Text
                <Email size="iconSize030" />
              </Tag>
              <Tag size={TagSize.Medium} overrides={{iconSize: 'iconSize020'}}>
                <Email />
                Text
                <Email size="iconSize040" />
              </Tag>
              <Tag size={TagSize.Large} overrides={{iconSize: 'iconSize020'}}>
                <Email />
                Text
                <Email size="iconSize050" />
              </Tag>
            </Stack>
          </Container>
        </React.Fragment>
      ),
    },
  ],
};

import * as React from 'react';
import {Tag, TagSize} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {styled} from '../../utils/style';
import {IconFilledEmail} from '../../icons';
import {Stack} from '../../stack';
import {createTheme, ThemeProvider} from '../../theme';

const Container = styled.div`
  margin: 24px;
`;

const myCustomTheme = createTheme({
  name: 'my-custom-tag-theme',
  overrides: {
    stylePresets: {
      tagCustom: {
        base: {
          borderStyle: 'dashed',
          borderColor: '{{colors.blue060}}',
          backgroundColor: '{{colors.red020}}',
        },
      },
    },
  },
});

export default {
  name: 'tag',
  children: [
    {
      name: 'tag',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Tag</StorybookHeading>
          <StorybookSubHeading>Enabled/Disbaled</StorybookSubHeading>
          <Container>
            <Stack
              flow="horizontal-center"
              spaceStack="space020"
              spaceInline="space020"
              wrap="wrap"
            >
              <Tag href="http://example.com">Enabled</Tag>
              <Tag href="http://example.com" disabled>
                Disabled
              </Tag>
            </Stack>
          </Container>
          <StorybookSubHeading>Sizes</StorybookSubHeading>
          <Container>
            <Stack
              flow="horizontal-center"
              spaceStack="space020"
              spaceInline="space020"
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
          <StorybookSubHeading>
            with Style Presets overrides
          </StorybookSubHeading>
          <Container>
            <ThemeProvider theme={myCustomTheme}>
              <Tag
                href="http://example.com"
                overrides={{stylePreset: 'tagCustom'}}
              >
                Text
              </Tag>
            </ThemeProvider>
          </Container>
          <StorybookSubHeading>
            with Typography Presets overrides
          </StorybookSubHeading>
          <Container>
            <ThemeProvider theme={myCustomTheme}>
              <Tag
                href="http://example.com"
                overrides={{typographyPreset: 'meta020'}}
              >
                Text
              </Tag>
            </ThemeProvider>
          </Container>
          <StorybookSubHeading>with an icon</StorybookSubHeading>
          <Container>
            <Stack
              flow="horizontal-center"
              spaceStack="space020"
              spaceInline="space020"
              wrap="wrap"
            >
              <Tag size={TagSize.Small}>
                <IconFilledEmail />
                Text
              </Tag>
              <Tag size={TagSize.Medium}>
                <IconFilledEmail />
                Text
              </Tag>
              <Tag size={TagSize.Large}>
                <IconFilledEmail />
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
          <StorybookSubHeading>
            With icon and inline overridden size
          </StorybookSubHeading>
          <Container>
            <Stack
              flow="horizontal-center"
              spaceInline="space020"
              spaceStack="space020"
              wrap="wrap"
            >
              <Tag size={TagSize.Small}>
                <IconFilledEmail />
                Text
                <IconFilledEmail overrides={{size: 'iconSize030'}} />
              </Tag>
              <Tag size={TagSize.Medium}>
                <IconFilledEmail />
                Text
                <IconFilledEmail overrides={{size: 'iconSize040'}} />
              </Tag>
              <Tag size={TagSize.Large}>
                <IconFilledEmail />
                Text
                <IconFilledEmail overrides={{size: 'iconSize050'}} />
              </Tag>
            </Stack>
          </Container>
          <StorybookSubHeading>
            with icon and inline overridden size from overrides
          </StorybookSubHeading>
          <Container>
            <Stack
              flow="horizontal-center"
              spaceInline="space020"
              spaceStack="space020"
              wrap="wrap"
            >
              <Tag size={TagSize.Small} overrides={{iconSize: 'iconSize020'}}>
                <IconFilledEmail />
                Text
                <IconFilledEmail overrides={{size: 'iconSize030'}} />
              </Tag>
              <Tag size={TagSize.Medium} overrides={{iconSize: 'iconSize020'}}>
                <IconFilledEmail />
                Text
                <IconFilledEmail overrides={{size: 'iconSize040'}} />
              </Tag>
              <Tag size={TagSize.Large} overrides={{iconSize: 'iconSize020'}}>
                <IconFilledEmail />
                Text
                <IconFilledEmail overrides={{size: 'iconSize050'}} />
              </Tag>
            </Stack>
          </Container>
        </React.Fragment>
      ),
    },
  ],
};

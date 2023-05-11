import * as React from 'react';
import {createTheme, ThemeProvider} from '../../theme';
import {TitleBar} from '..';
import {Button} from '../../button';
import {LinkStandalone} from '../../link';
import {Divider} from '../../divider';
import {Stack} from '../../stack';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {IconFilledStarOutline} from '../../icons';
import {getColorCssFromTheme, styled} from '../../utils/style';
import {Story as StoryType} from '@storybook/react';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {TextBlock} from '../../text-block';

const link = () => <LinkStandalone href="/">Link</LinkStandalone>;
const button = () => <Button>Default button</Button>;

const STRING = (
  <TextBlock typographyPreset="editorialHeadline050">Title content</TextBlock>
);

export default {
  title: 'Components/Title-bar',
  component: () => 'None',
  disabledRules: ['heading-order'],
  decorators: [
    (
      Story: StoryType,
      context: {name: string; globals: {backgrounds: {value: string}}},
    ) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          {},
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const StoryTitleBarDefault = () => (
  <StorybookPage columns="1fr">
    <StorybookCase>
      <TitleBar>{STRING}</TitleBar>
    </StorybookCase>
  </StorybookPage>
);
StoryTitleBarDefault.storyName = 'Default';

export const StoryTitleBarLink = () => (
  <>
    <StorybookPage columns=".5fr">
      <StorybookCase title="Link">
        <TitleBar actionItem={link}>{STRING}</TitleBar>
      </StorybookCase>
      <StorybookCase title="Button">
        <TitleBar actionItem={button}>{STRING}</TitleBar>
      </StorybookCase>
      <StorybookCase title="Icon">
        <TitleBar>
          {STRING}
          <IconFilledStarOutline height="30px" />
        </TitleBar>
      </StorybookCase>
      <StorybookCase title="Action hidden in SM and MD">
        <TitleBar hideActionItemOn={{sm: true, md: true}} actionItem={button}>
          {STRING}
        </TitleBar>
      </StorybookCase>
    </StorybookPage>
  </>
);
StoryTitleBarLink.storyName = 'Variations';

export const StoryTitleBarAsH1toh6 = () => (
  <StorybookPage columns="1fr 1fr">
    <StorybookCase title="H1">
      <TitleBar
        headingAs="h1"
        overrides={{
          heading: {
            typographyPreset: 'editorialHeadline080',
          },
        }}
      >
        Title content
      </TitleBar>
    </StorybookCase>
    <StorybookCase title="H2">
      <TitleBar
        headingAs="h2"
        overrides={{
          heading: {
            typographyPreset: 'editorialHeadline070',
          },
        }}
      >
        Title content
      </TitleBar>
    </StorybookCase>
    <StorybookCase title="H3">
      <TitleBar
        headingAs="h3"
        overrides={{
          heading: {
            typographyPreset: 'editorialHeadline060',
          },
        }}
      >
        Title content
      </TitleBar>
    </StorybookCase>
    <StorybookCase title="H4">
      <TitleBar
        headingAs="h4"
        overrides={{
          heading: {
            typographyPreset: 'editorialHeadline050',
          },
        }}
      >
        Title content
      </TitleBar>
    </StorybookCase>
    <StorybookCase title="H5">
      <TitleBar
        headingAs="h5"
        overrides={{
          heading: {
            typographyPreset: 'editorialHeadline040',
          },
        }}
      >
        Title content
      </TitleBar>
    </StorybookCase>
    <StorybookCase title="H6">
      <TitleBar
        headingAs="h6"
        overrides={{
          heading: {
            typographyPreset: 'editorialHeadline030',
          },
        }}
      >
        Title content
      </TitleBar>
    </StorybookCase>
  </StorybookPage>
);
StoryTitleBarAsH1toh6.storyName = 'H1 to H6';

const MarginOverridesWrapper = styled.div`
  border: 1px dashed;
  ${getColorCssFromTheme('borderColor', 'red060')}
`;

export const StoryTitleBarLogicalProps = () => (
  <StorybookPage columns="1fr">
    <StorybookCase title="marginInline and marginBlock">
      <MarginOverridesWrapper>
        <TitleBar
          headingAs="h6"
          overrides={{
            marginBlock: 'space010',
            marginInline: 'space080',
          }}
        >
          {STRING}
        </TitleBar>
      </MarginOverridesWrapper>
    </StorybookCase>
    <StorybookCase title="paddingInline and paddingBlock">
      <MarginOverridesWrapper>
        <TitleBar
          headingAs="h6"
          overrides={{
            paddingBlock: 'space060',
            paddingInline: 'space080',
          }}
        >
          {STRING}
        </TitleBar>
      </MarginOverridesWrapper>
    </StorybookCase>
    <StorybookCase title="marginInline and marginBlock and paddingInline and paddingBlock">
      <MarginOverridesWrapper>
        <TitleBar
          headingAs="h6"
          overrides={{
            marginBlock: 'space060',
            marginInline: 'space080',
            paddingBlock: 'space060',
            paddingInline: 'space080',
          }}
        >
          {STRING}
        </TitleBar>
      </MarginOverridesWrapper>
    </StorybookCase>
  </StorybookPage>
);
StoryTitleBarLogicalProps.storyName = 'Logical Props';

export const StoryTitleBarStylingOverrides = () => (
  <StorybookPage columns="1fr">
    <StorybookCase>
      <TitleBar
        overrides={{
          heading: {
            stylePreset: 'inkBrand010',
          },
        }}
      >
        {STRING}
      </TitleBar>
    </StorybookCase>
  </StorybookPage>
);
StoryTitleBarStylingOverrides.storyName = 'Styling overrides';

export const StoryTitleBarOverrides = () => (
  <StorybookPage columns="1fr">
    <StorybookCase title="Typography preset override">
      <TitleBar
        overrides={{
          heading: {
            typographyPreset: 'utilityHeading050',
          },
        }}
      >
        Title Content
      </TitleBar>
    </StorybookCase>
  </StorybookPage>
);
StoryTitleBarOverrides.storyName = 'Styling overrides';

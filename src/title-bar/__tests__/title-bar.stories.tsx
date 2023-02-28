import * as React from 'react';
import {createTheme, ThemeProvider} from '../../theme';
import {TitleBar} from '..';
import {Button} from '../../button';
import {LinkStandalone} from '../../link';
import {Divider} from '../../divider';
import {Stack} from '../../stack';

import {IconFilledFigma} from '../../icons/filled/custom/icon-filled-figma';
import {styled} from '../../utils/style';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';

const myCustomTheme = createTheme({
  name: 'my-custom-title-bar-theme',
  overrides: {
    stylePresets: {
      titleBarCustom: {
        base: {
          color: '{{colors.blue060}}',
        },
      },
      linkInline: {
        base: {
          color: '{{colors.interactivePrimary030}}',
          iconColor: '{{colors.interactivePrimary030}}',
          textDecoration: 'underline',
        },
      },
    },
  },
});

const link = () => <LinkStandalone href="/">Link</LinkStandalone>;
const button = () => <Button>Default button</Button>;
const HeadlineContainer = styled.span`
  min-width: fit-content;
`;

export default {
  title: 'Components/title-bar',
  component: () => 'None',
  disabledRules: ['heading-order'],
};

export const StoryTitleBar = () => (
  <>
    <TitleBar>Title bar default state</TitleBar>
    <br />
    <br />
    <ThemeProvider theme={myCustomTheme}>
      <TitleBar
        overrides={{
          heading: {
            typographyPreset: {
              xs: 'editorialHeadline010',
              sm: 'editorialHeadline020',
              md: 'editorialHeadline030',
              lg: 'editorialHeadline040',
            },
            stylePreset: 'linkInline',
          },
        }}
      >
        Title bar with overwritten heading typographyPreset
      </TitleBar>
      <br />
      <br />
      <TitleBar
        headingAs="h6"
        overrides={{
          heading: {
            stylePreset: 'titleBarCustom',
          },
        }}
      >
        H6 with overwritten style preset
      </TitleBar>
    </ThemeProvider>
    <br />
    <br />
    <TitleBar actionItem={link}>Title bar with link</TitleBar>
    <br />
    <br />
    <TitleBar actionItem={button}>Title bar with button</TitleBar>
    <br />
    <TitleBar>
      Title bar with Icon <IconFilledFigma height="30px" />
    </TitleBar>
    <br />
    <TitleBar hideActionItemOn={{sm: true, md: true}} actionItem={button}>
      Title bar with action hidden in sm and md
    </TitleBar>
    <br />
    <TitleBar actionItem={button}>
      <Stack flow="horizontal-center">
        <HeadlineContainer>Title bar with divider and button</HeadlineContainer>
        <Divider />
      </Stack>
    </TitleBar>
    <br />
  </>
);
StoryTitleBar.storyName = 'title-bar';

export const StoryTitleBarAsH1toh6 = () => (
  <>
    <TitleBar headingAs="h1">Title bar as h1</TitleBar>
    <TitleBar headingAs="h2">Title bar as h2</TitleBar>
    <TitleBar headingAs="h3">Title bar as h3</TitleBar>
    <TitleBar headingAs="h4">Title bar as h4</TitleBar>
    <TitleBar headingAs="h5">Title bar as h5</TitleBar>
    <TitleBar headingAs="h6">Title bar as h6</TitleBar>
  </>
);
StoryTitleBarAsH1toh6.storyName = 'title-bar-as-h1toh6';

export const StoryTagLogicalProps = () => (
  <>
    <StorybookHeading>TitleBar with Logical Props overrides</StorybookHeading>

    <StorybookSubHeading>marginInline & marginBlock</StorybookSubHeading>
    <TitleBar
      headingAs="h6"
      overrides={{
        marginBlock: 'space060',
        marginInline: 'space080',
      }}
    >
      Title bar
    </TitleBar>

    <br />
    <StorybookSubHeading>paddingInline & paddingBlock</StorybookSubHeading>
    <TitleBar
      headingAs="h6"
      overrides={{
        paddingBlock: 'space060',
        paddingInline: 'space080',
      }}
    >
      Title bar
    </TitleBar>

    <br />
    <StorybookSubHeading>
      marginInline & marginBlock & paddingInline & paddingBlock
    </StorybookSubHeading>
    <TitleBar
      headingAs="h6"
      overrides={{
        marginBlock: 'space060',
        marginInline: 'space080',
        paddingBlock: 'space060',
        paddingInline: 'space080',
      }}
    >
      Title bar
    </TitleBar>

    <br />
  </>
);
StoryTagLogicalProps.storyName = 'title-bar-logical-props';

import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {LinkInline, LinkStandalone} from '..';
import {getColorCssFromTheme, styled} from '../../utils/style';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {IconFilledEmail} from '../../icons';
import {createTheme, ThemeProvider, UncompiledTheme} from '../../theme';
import {themeObject} from '../../test/theme-select-object';

const getCustomTheme = (theme: UncompiledTheme): UncompiledTheme =>
  createTheme({
    name: 'my-custom-link-theme',
    baseTheme: theme,
    overrides: {
      colors: {
        inkLinkBase: '{{colors.red080}}',
        inkLinkHover: '{{colors.green080}}',
        inkLinkVisited: '{{colors.red090}}',
      },
      stylePresets: {
        linkCustom: {
          base: {
            color: '{{colors.inkLinkBase}}',
          },
          visited: {
            color: '{{colors.inkLinkVisited}}',
          },
          hover: {
            color: '{{colors.inkLinkHover}}',
          },
        },
      },
    },
  });

const StyledDiv = styled.div`
  border: 1px red dotted;
`;

const Container = styled.div<{hasBackground?: boolean}>`
  max-width: 600px;
  margin: 0 auto;
  ${({hasBackground}) =>
    hasBackground && getColorCssFromTheme('background', 'inkBase')};
`;

const CustomPragraph = styled.p`
 margin 0;
`;

const LinkWithOverrides = ({children}: {children: React.ReactNode}) => (
  // <ThemeProvider theme={myCustomTheme}>
  <LinkInline
    href="http://localhost:6006"
    overrides={{
      typographyPreset: 'utilityButton020',
      stylePreset: 'linkCustom',
    }}
  >
    {children}
  </LinkInline>
  // </ThemeProvider>
);

const ExternalLinkWithOverrides = ({children}: {children: React.ReactNode}) => (
  // <ThemeProvider theme={myCustomTheme}>
  <LinkInline
    href="http://apple.com"
    overrides={{
      typographyPreset: 'utilityButton020',
      stylePreset: 'linkCustom',
    }}
  >
    {children}
  </LinkInline>
  // </ThemeProvider>
);

export default {
  title: 'NewsKit Light/link',
  component: () => 'None',
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={getCustomTheme(
          themeObject[context?.globals?.backgrounds?.value || '#ffffff'],
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const StoryLink = () => (
  <Container>
    {/* ------ Link inline -------- */}
    <StorybookHeading>Link inline</StorybookHeading>
    <LinkInline href="/">Inline link</LinkInline>
    <br />
    <br />
    <LinkInline
      href="/"
      overrides={{
        typographyPreset: 'utilityButton020',
        stylePreset: 'linkCustom',
      }}
    >
      Inline link with style and type overrides
    </LinkInline>
    <br />
    <br />
    <LinkInline href="/">
      <IconFilledEmail overrides={{size: 'iconSize010'}} />
      Inline link with leading and trailing icons
      <IconFilledEmail overrides={{size: 'iconSize010'}} />
    </LinkInline>
    <br />
    <br />
    <LinkInline
      href="/"
      overrides={{
        spaceInline: 'space030',
      }}
    >
      <IconFilledEmail overrides={{size: 'iconSize010'}} />
      Inline link with leading and trailing icons and custom space
      <IconFilledEmail overrides={{size: 'iconSize010'}} />
    </LinkInline>
    <br />
    <br />
    <LinkInline href="mailto:###" overrides={{stylePreset: 'linkEmail'}}>
      Inline mail link
    </LinkInline>
    <br />
    <br />
    <LinkInline href="tel:###">Inline telephone link</LinkInline>

    {/* ------ Link external -------- */}
    <StorybookHeading>Link external</StorybookHeading>
    <LinkInline
      href="http://newskit.staging-news.co.uk/"
      overrides={{stylePreset: 'linkInline'}}
    >
      External link with external icon
    </LinkInline>
    <br />
    <br />
    <LinkInline
      href="http://newskit.staging-news.co.uk/"
      overrides={{
        stylePreset: 'linkInline',
        externalIcon: {
          size: 'iconSize030',
        },
      }}
    >
      External link with custom size for external icon
    </LinkInline>
    <br />
    <br />
    <LinkInline
      href="http://newskit.staging-news.co.uk/"
      external={false}
      overrides={{stylePreset: 'linkInline'}}
    >
      External link without external icon
    </LinkInline>

    {/* ------ Link standalone -------- */}
    <StorybookHeading>Link standalone</StorybookHeading>
    <LinkStandalone href="/">Standalone link</LinkStandalone>
    <br />
    <br />
    <LinkStandalone href="https://google.com">
      Standalone link external
    </LinkStandalone>
    <br />
    <br />
    <LinkStandalone
      href="https://google.com"
      overrides={{
        typographyPreset: 'utilityButton020',
        stylePreset: 'linkCustom',
      }}
    >
      Link Standalone external with type and style Preset overrides
    </LinkStandalone>
  </Container>
);
StoryLink.storyName = 'link';

export const StoryLinkInverse = () => (
  <Container hasBackground>
    {/* ------ Link inline -------- */}
    <StorybookHeading stylePreset="inkInverse">Link inline</StorybookHeading>
    <LinkInline href="/" overrides={{stylePreset: 'linkInlineInverse'}}>
      Inline link
    </LinkInline>
    <br />
    <br />
    <LinkInline href="/" overrides={{stylePreset: 'linkInlineInverse'}}>
      <IconFilledEmail overrides={{size: 'iconSize010'}} />
      Inline link with leading and trailing icons
      <IconFilledEmail overrides={{size: 'iconSize010'}} />
    </LinkInline>
    <br />
    <br />
    <LinkInline
      href="/"
      overrides={{
        stylePreset: 'linkInlineInverse',
        spaceInline: 'space030',
      }}
    >
      <IconFilledEmail overrides={{size: 'iconSize010'}} />
      Inline link with leading and trailing icons and custom space
      <IconFilledEmail overrides={{size: 'iconSize010'}} />
    </LinkInline>
    <br />
    <br />
    <LinkInline
      href="mailto:###"
      overrides={{stylePreset: 'linkInlineInverse'}}
    >
      Inline mail link
    </LinkInline>

    {/* ------ Link external -------- */}
    <StorybookHeading stylePreset="inkInverse">Link external</StorybookHeading>
    <LinkInline
      href="http://newskit.staging-news.co.uk/"
      overrides={{stylePreset: 'linkInlineInverse'}}
    >
      External link with external icon
    </LinkInline>
    <br />
    <br />
    <LinkInline
      href="http://newskit.staging-news.co.uk/"
      overrides={{
        stylePreset: 'linkInlineInverse',
        externalIcon: {
          size: 'iconSize030',
        },
      }}
    >
      External link with custom size for external icon
    </LinkInline>
    <br />
    <br />
    <LinkInline
      href="http://newskit.staging-news.co.uk/"
      external={false}
      overrides={{stylePreset: 'linkInlineInverse'}}
    >
      External link without external icon
    </LinkInline>

    {/* ------ Link standalone -------- */}
    <StorybookHeading stylePreset="inkInverse">
      Link standalone
    </StorybookHeading>
    <LinkStandalone href="/" overrides={{stylePreset: 'linkStandaloneInverse'}}>
      Standalone link
    </LinkStandalone>
    <br />
    <br />
    <LinkStandalone
      href="https://google.com"
      overrides={{stylePreset: 'linkStandaloneInverse'}}
    >
      Standalone link external
    </LinkStandalone>
  </Container>
);
StoryLinkInverse.storyName = 'link-inverse';

export const StoryLinkWithinTextParagraph = () => (
  <Container>
    <StorybookHeading>Link in paragraph</StorybookHeading>
    <StorybookSubHeading>default</StorybookSubHeading>
    <CustomPragraph>
      Officials said that the{' '}
      <LinkInline
        href="http://localhost:6006"
        overrides={{
          typographyPreset: 'editorialParagraph020',
        }}
      >
        Apple-Google model
      </LinkInline>{' '}
      was unable to differentiate between a phone that was in someone’s hand
      three metres away from a phone that was in someone’s pocket
      <LinkInline
        href="http://localhost:6006"
        overrides={{
          typographyPreset: 'editorialParagraph020',
        }}
      >
        one metre away.
      </LinkInline>{' '}
      “That is a really important distinction if you’re going to use the app to
      determine whether or not you spend 14 days at home,” one{' '}
      <LinkInline
        href="http://localhost:6006"
        overrides={{
          typographyPreset: 'editorialParagraph020',
        }}
      >
        official
      </LinkInline>{' '}
      said.
    </CustomPragraph>

    <StorybookSubHeading>with overrides</StorybookSubHeading>
    <CustomPragraph>
      Officials said that the{' '}
      <LinkWithOverrides>Apple-Google model</LinkWithOverrides> was unable to
      differentiate between a phone that was in someone’s hand three metres away
      from a phone that was in someone’s pocket
      <LinkWithOverrides>one metre away.</LinkWithOverrides> “That is a really
      important distinction if you’re going to use the app to determine whether
      or not you spend 14 days at home,” one{' '}
      <LinkWithOverrides>official</LinkWithOverrides> said.
    </CustomPragraph>

    <StorybookSubHeading>external default</StorybookSubHeading>
    <CustomPragraph>
      Officials said that the{' '}
      <LinkInline
        href="http://apple.com"
        overrides={{
          typographyPreset: 'editorialParagraph020',
        }}
      >
        Apple-Google model
      </LinkInline>{' '}
      was unable to differentiate between a phone that was in{' '}
      <LinkInline
        href="http://apple.com"
        overrides={{
          typographyPreset: 'editorialParagraph020',
        }}
      >
        someone’s hand
      </LinkInline>{' '}
      three metres away from a phone that was in someone’s pocket{' '}
      <LinkInline
        href="http://apple.com"
        overrides={{
          typographyPreset: 'editorialParagraph020',
        }}
      >
        one metre
      </LinkInline>{' '}
      away.
    </CustomPragraph>

    <StorybookSubHeading>external with overrides</StorybookSubHeading>
    <CustomPragraph>
      Officials said that the{' '}
      <ExternalLinkWithOverrides>Apple-Google model</ExternalLinkWithOverrides>{' '}
      was unable to differentiate between a phone that was in{' '}
      <ExternalLinkWithOverrides>someone’s</ExternalLinkWithOverrides> hand
      three metres away from a phone that was in someone’s pocket one{' '}
      <ExternalLinkWithOverrides>metre</ExternalLinkWithOverrides> away.
    </CustomPragraph>
  </Container>
);
StoryLinkWithinTextParagraph.storyName = 'link-within-text-paragraph';
const myCustomLinkTheme = createTheme({
  name: 'my-custom-link-theme',
  overrides: {
    transitionPresets: {
      customIconChange: {
        base: {
          transitionProperty: 'fill',
          transitionDuration: '100ms',
          transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
        },
      },
      customFontColorChange: {
        base: {
          transitionProperty: 'color',
          transitionDuration: '100ms',
          transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
        },
      },
    },
    colors: {
      inkLinkBase: '{{colors.red080}}',
      inkLinkHover: '{{colors.green080}}',
      inkLinkActive: '{{colors.purpl020}}',
    },
    stylePresets: {
      linkCustom: {
        base: {
          color: '{{colors.interactivePrimary030}}',
          iconColor: '{{colors.interactivePrimary030}}',
        },
        active: {
          color: '{{colors.inkLinkActive}}',
          iconColor: '{{colors.inkLinkActive}}',
        },
        hover: {
          color: '{{colors.inkLinkHover}}',
          iconColor: '{{colors.inkLinkHover}}',
        },
      },
    },
  },
});
export const StoryLinkStandAloneTransition = () => (
  <Container>
    {/* ------ Link standalone -------- */}
    <StorybookHeading>Default Transition Presets</StorybookHeading>
    <LinkStandalone href="/">Standalone link</LinkStandalone>
    <br />
    <br />
    <LinkInline href="/">LinkInline link</LinkInline>
    <StorybookHeading>
      Default Transition Presets with external icon
    </StorybookHeading>
    <LinkStandalone href="https://google.com">Standalone link</LinkStandalone>{' '}
    <br />
    <br />
    <LinkInline href="https://google.com">LinkInline link</LinkInline>
    <StorybookHeading>
      Link with Transition Preset overrides no icon
    </StorybookHeading>
    <ThemeProvider theme={myCustomLinkTheme}>
      <LinkStandalone
        href="/"
        overrides={{
          stylePreset: 'linkCustom',
          transitionPreset: ['customFontColorChange', 'customIconChange'],
        }}
      >
        Standalone link
      </LinkStandalone>
      <br />
      <br />
      <LinkInline
        href="/"
        overrides={{
          stylePreset: 'linkCustom',
          transitionPreset: ['customFontColorChange', 'customIconChange'],
        }}
      >
        Linkinline link
      </LinkInline>
      <StorybookHeading>
        Link with Transition Preset overrides and external icon
      </StorybookHeading>
      <LinkStandalone
        href="https://google.com"
        overrides={{
          stylePreset: 'linkCustom',
          transitionPreset: ['customFontColorChange', 'customIconChange'],
        }}
      >
        Standalone link
      </LinkStandalone>
      <br />
      <br />
      <LinkInline
        href="https://google.com"
        overrides={{
          stylePreset: 'linkCustom',
          transitionPreset: ['customFontColorChange', 'customIconChange'],
        }}
      >
        Linkinline link
      </LinkInline>
      <StorybookHeading>
        Link with overrides using extend on transitionDuration
      </StorybookHeading>
      <LinkStandalone
        href="https://google.com"
        overrides={{
          stylePreset: 'linkCustom',
          transitionPreset: {
            extend: 'customFontColorChange',
            base: {
              transitionDuration: '{{motions.motionDuration050}}',
            },
          },
        }}
      >
        Standalone Link
      </LinkStandalone>
      <br />
      <br />
      <LinkInline
        href="https://google.com"
        overrides={{
          stylePreset: 'linkCustom',
          transitionPreset: {
            extend: 'customFontColorChange',
            base: {
              transitionDuration: '{{motions.motionDuration030}}',
            },
          },
        }}
      >
        Inline Link
      </LinkInline>
    </ThemeProvider>
  </Container>
);
StoryLinkStandAloneTransition.storyName = 'link-standalone-transition';
export const StoryLinkWithLogicalPropsOverrides = () => (
  <Container>
    <StorybookHeading>Standalone link with logical padding</StorybookHeading>
    <StyledDiv>
      <LinkStandalone href="/" overrides={{paddingBlock: 'space030'}}>
        Standalone link
      </LinkStandalone>
    </StyledDiv>
    <br />
    <br />
    <StorybookHeading>Standalone link with logical margin</StorybookHeading>
    <StyledDiv>
      <LinkStandalone href="/" overrides={{marginBlock: 'space030'}}>
        Standalone link
      </LinkStandalone>
    </StyledDiv>
    <br />
    <br />
    <StorybookHeading>Inline link with logical padding</StorybookHeading>
    <StyledDiv>
      <LinkInline href="/" overrides={{paddingBlock: 'space030'}}>
        Inline link
      </LinkInline>
    </StyledDiv>
    <br />
    <br />
    <StorybookHeading>Inline link with logical margin</StorybookHeading>
    <StyledDiv>
      <LinkInline href="/" overrides={{marginBlock: 'space030'}}>
        Inline link
      </LinkInline>
    </StyledDiv>
    <StorybookHeading>
      Inline link in a parapgraph with logical margin & padding
    </StorybookHeading>
    <CustomPragraph>
      Officials said that the{' '}
      <LinkInline
        href="http://localhost:6006"
        overrides={{
          paddingInline: 'space030',
        }}
      >
        Apple-Google model
      </LinkInline>{' '}
      was unable to differentiate between a phone that was in someone’s hand
      three metres away from a phone that was in someone’s pocket
    </CustomPragraph>
    <CustomPragraph>
      <LinkInline
        href="http://localhost:6006"
        overrides={{
          marginInline: 'space030',
        }}
      >
        one metre away.
      </LinkInline>{' '}
      “That is a really important distinction if you’re going to use the app to
      determine whether or not you spend 14 days at home,” one said.
    </CustomPragraph>
  </Container>
);
StoryLinkWithLogicalPropsOverrides.storyName =
  'link-with-logical-props-overrides';

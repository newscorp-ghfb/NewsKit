import * as React from 'react';
import {LinkInline, LinkStandalone} from '..';
import {getColorFromTheme, styled} from '../../utils/style';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {IconFilledEmail} from '../../icons';
import {createTheme, ThemeProvider} from '../../theme';

const myCustomTheme = createTheme({
  name: 'my-custom-link-theme',
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

const Container = styled.div<{hasBackground?: boolean}>`
  max-width: 600px;
  margin: 0 auto;
  ${({hasBackground, theme}) =>
    hasBackground && {
      background: getColorFromTheme('black')({theme}),
      color: getColorFromTheme('white')({theme}),
    }}
`;

const CustomPragraph = styled.p`
 margin 0;
`;

const LinkWithOverrides = ({children}: {children: React.ReactNode}) => (
  <ThemeProvider theme={myCustomTheme}>
    <LinkInline
      href="http://localhost:6006"
      overrides={{
        typographyPreset: 'utilityButton020',
        stylePreset: 'linkCustom',
      }}
    >
      {children}
    </LinkInline>
  </ThemeProvider>
);

const ExternalLinkWithOverrides = ({children}: {children: React.ReactNode}) => (
  <ThemeProvider theme={myCustomTheme}>
    <LinkInline
      href="http://apple.com"
      overrides={{
        typographyPreset: 'utilityButton020',
        stylePreset: 'linkCustom',
      }}
    >
      {children}
    </LinkInline>
  </ThemeProvider>
);

export default {
  title: 'NewsKit Light/link',
  component: () => 'None',
};

export const StoryLink = () => (
  <Container>
    {/* ------ Link inline -------- */}
    <StorybookHeading>Link inline</StorybookHeading>
    <LinkInline href="/">Inline link</LinkInline>
    <br />
    <br />
    <ThemeProvider theme={myCustomTheme}>
      <LinkInline
        href="/"
        overrides={{
          typographyPreset: 'utilityButton020',
          stylePreset: 'linkCustom',
        }}
      >
        Inline link with style and type overrides
      </LinkInline>
    </ThemeProvider>
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
    <ThemeProvider theme={myCustomTheme}>
      <LinkStandalone
        href="https://google.com"
        overrides={{
          typographyPreset: 'utilityButton020',
          stylePreset: 'linkCustom',
        }}
      >
        Link Standalone external with type and style Preset overrides
      </LinkStandalone>
    </ThemeProvider>
  </Container>
);
StoryLink.storyName = 'link';

export const StoryLinkInverse = () => (
  <Container hasBackground>
    {/* ------ Link inline -------- */}
    <StorybookHeading>Link inline</StorybookHeading>
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
    <StorybookHeading>Link external</StorybookHeading>
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
    <StorybookHeading>Link standalone</StorybookHeading>
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

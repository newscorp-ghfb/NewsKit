import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {LinkInline, LinkStandalone} from '..';
import {getColorCssFromTheme, styled} from '../../utils/style';
import {
  StorybookHeading,
  StorybookSubHeading,
  StorybookParah,
} from '../../test/storybook-comps';
import {IconFilledEmail} from '../../icons';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {TextBlock} from '../../text-block';

const linkCustomThemeObject: CreateThemeArgs = {
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
      inkLinkVisited: '{{colors.red090}}',
      inkLinkActive: '{{colors.purpl020}}',
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
      linkCustomTwo: {
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
      customOutlineColor: {
        base: {
          color: '{{colors.interactivePrimary030}}',
          iconColor: '{{colors.interactivePrimary030}}',
          textDecoration: 'none',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: '{{outlines.outlineStyleDefault}}',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
          outlineOffset: '{{outlines.outlineOffsetDefault}}',
        },
      },
      customOutlineStyle: {
        base: {
          color: '{{colors.interactivePrimary030}}',
          iconColor: '{{colors.interactivePrimary030}}',
          textDecoration: 'none',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
          outlineOffset: '{{outlines.outlineOffsetDefault}}',
        },
      },
      customOutlineWidth: {
        base: {
          color: '{{colors.interactivePrimary030}}',
          iconColor: '{{colors.interactivePrimary030}}',
          textDecoration: 'none',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '5px',
          outlineOffset: '{{outlines.outlineOffsetDefault}}',
        },
      },
      customOutlineOffset: {
        base: {
          color: '{{colors.interactivePrimary030}}',
          iconColor: '{{colors.interactivePrimary030}}',
          textDecoration: 'none',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '5px',
          outlineOffset: '5px',
        },
      },
    },
  },
};

const StyledDiv = styled.div`
  border: 1px red dotted;
`;

const Container = styled.div<{hasBackground?: boolean}>`
  max-width: 600px;
  margin: 0 auto;
  ${({hasBackground}) =>
    hasBackground && getColorCssFromTheme('background', 'inkBase')};
`;

const CustomPragraph = styled(StorybookParah)`
 margin 0;
`;

const LinkWithOverrides = ({children}: {children: React.ReactNode}) => (
  <LinkInline
    href="http://localhost:6006"
    overrides={{
      typographyPreset: 'utilityButton020',
      stylePreset: 'linkCustom',
    }}
  >
    {children}
  </LinkInline>
);

const ExternalLinkWithOverrides = ({children}: {children: React.ReactNode}) => (
  <LinkInline
    href="http://apple.com"
    overrides={{
      typographyPreset: 'utilityButton020',
      stylePreset: 'linkCustom',
    }}
  >
    {children}
  </LinkInline>
);

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
    <LinkInline href="mailto:###">Inline mail link</LinkInline>
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

    <StorybookHeading>Link with `textOnly`</StorybookHeading>
    <TextBlock>
      This is a long description with this and this and this and this and this
      and{' '}
      <LinkInline textOnly href="/">
        long textOnly inline link inside{' '}
      </LinkInline>{' '}
      and this and that.
    </TextBlock>
    <br />
    <TextBlock>
      This is a great article about this and this and this and that and this and{' '}
      <LinkInline textOnly href="http://newskit.staging-news.co.uk/">
        external textOnly link with external icon
      </LinkInline>{' '}
      this and this and this and that.
    </TextBlock>
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
    <LinkStandalone
      href="/"
      overrides={{
        stylePreset: 'linkCustomTwo',
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
        stylePreset: 'linkCustomTwo',
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
        stylePreset: 'linkCustomTwo',
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
        stylePreset: 'linkCustomTwo',
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
        stylePreset: 'linkCustomTwo',
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
        stylePreset: 'linkCustomTwo',
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

export const StoryLinkOutlineOverride = () => (
  <Container>
    <StorybookHeading>Outline overrides</StorybookHeading>
    <LinkInline
      href="/"
      overrides={{
        stylePreset: 'customOutlineColor',
      }}
    >
      Custom Color
    </LinkInline>
    <br />
    <br />
    <LinkInline
      href="/"
      overrides={{
        stylePreset: 'customOutlineStyle',
      }}
    >
      Custom Style
    </LinkInline>
    <br />
    <br />
    <LinkInline
      href="/"
      overrides={{
        stylePreset: 'customOutlineWidth',
      }}
    >
      Custom Width
    </LinkInline>
    <br />
    <br />
    <LinkInline
      href="/"
      overrides={{
        stylePreset: 'customOutlineOffset',
      }}
    >
      Custom Offset
    </LinkInline>
    <br />
    <br />
  </Container>
);
StoryLinkOutlineOverride.storyName = 'link with outline override';

export default {
  title: 'Components/LinkInline\\LinkStandalone',
  component: () => 'None',
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          linkCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};

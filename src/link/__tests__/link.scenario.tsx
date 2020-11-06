import * as React from 'react';
import {Link, LinkStandalone} from '..';
import {styled} from '../../utils/style';
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
      inkLinkBase: '{{colors.red060}}',
      inkLinkVisited: '{{colors.red080}}',
    },
    stylePresets: {
      linkCustom: {
        base: {
          color: '{{colors.inkLinkBase}}',
        },
        visited: {
          color: '{{colors.inkLinkVisited}}',
        },
      },
    },
  },
});

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const CustomPragraph = styled.p`
 margin 0;
`;

const LinkWithOverrides = ({children}: {children: React.ReactNode}) => (
  <ThemeProvider theme={myCustomTheme}>
    <Link
      href="http://localhost:6006"
      overrides={{
        typographyPreset: 'utilityLabel020',
        stylePreset: 'linkCustom',
      }}
    >
      {children}
    </Link>
  </ThemeProvider>
);

const ExternalLinkWithOverrides = ({children}: {children: React.ReactNode}) => (
  <ThemeProvider theme={myCustomTheme}>
    <Link
      href="http://apple.com"
      overrides={{
        typographyPreset: 'utilityLabel020',
        stylePreset: 'linkCustom',
      }}
    >
      {children}
    </Link>
  </ThemeProvider>
);

export default {
  name: 'link',
  children: [
    {
      name: 'link',
      type: 'story',
      component: () => (
        <Container>
          <StorybookHeading>Link component</StorybookHeading>
          <Link href="/">Inline Link without overrides</Link>
          <br />
          <br />
          <Link href="/" eventContext={{event: 'other event data'}}>
            Inline Link with extra event data
          </Link>
          <br />
          <br />
          <ThemeProvider theme={myCustomTheme}>
            <Link
              href="/"
              overrides={{
                typographyPreset: 'utilityLabel020',
                stylePreset: 'linkCustom',
              }}
            >
              Inline Link with style and type overrides
            </Link>
          </ThemeProvider>
          <br />
          <br />
          <Link href="http://newskit.staging-news.co.uk/">
            Inline external Link with external Icon
          </Link>
          <br />
          <br />
          <Link
            href="http://newskit.staging-news.co.uk/"
            overrides={{
              externalIcon: {
                size: 'iconSize030',
              },
            }}
          >
            Inline external Link with custom size for external Icon
          </Link>
          <br />
          <br />
          <Link href="http://newskit.staging-news.co.uk/" external={false}>
            Inline external Link without external Icon
          </Link>
          <br />
          <br />
          <Link href="/">
            <IconFilledEmail overrides={{size: 'iconSize010'}} />
            Inline Link with leading and trailing icons
            <IconFilledEmail overrides={{size: 'iconSize010'}} />
          </Link>
          <br />
          <br />
          <Link
            href="/"
            overrides={{
              spaceInline: 'space030',
            }}
          >
            <IconFilledEmail overrides={{size: 'iconSize010'}} />
            Inline Link with leading and trailing icons and custom space
            <IconFilledEmail overrides={{size: 'iconSize010'}} />
          </Link>
          <br />
          <br />
          <Link href="mailto:###">Inline mail link</Link>
          <br />
          <br />
          <Link href="tel:###">Inline telephone link</Link>
        </Container>
      ),
    },
    {
      name: 'link-standalone',
      type: 'story',
      component: () => (
        <Container>
          <StorybookHeading>LinkStandalone component</StorybookHeading>
          <LinkStandalone href="/">Link Standalone internal</LinkStandalone>
          <br />
          <br />
          <LinkStandalone href="https://google.com">
            Link Standalone external
          </LinkStandalone>
          <br />
          <br />

          <ThemeProvider theme={myCustomTheme}>
            <LinkStandalone
              href="https://google.com"
              overrides={{
                typographyPreset: 'utilityLabel020',
                stylePreset: 'linkCustom',
              }}
            >
              Link Standalone external with type and style Preset overrides
            </LinkStandalone>
          </ThemeProvider>
        </Container>
      ),
    },
    {
      name: 'link-within-text-paragraph',
      type: 'story',
      component: () => (
        <Container>
          <StorybookHeading>Link in paragraph</StorybookHeading>
          <StorybookSubHeading>default</StorybookSubHeading>
          <CustomPragraph>
            Officials said that the{' '}
            <Link href="http://localhost:6006">Apple-Google model</Link> was
            unable to differentiate between a phone that was in someone’s hand
            three metres away from a phone that was in someone’s pocket
            <Link href="http://localhost:6006">one metre away.</Link> “That is a
            really important distinction if you’re going to use the app to
            determine whether or not you spend 14 days at home,” one{' '}
            <Link href="http://localhost:6006">official</Link> said.
          </CustomPragraph>

          <StorybookSubHeading>with overrides</StorybookSubHeading>
          <CustomPragraph>
            Officials said that the{' '}
            <LinkWithOverrides>Apple-Google model</LinkWithOverrides> was unable
            to differentiate between a phone that was in someone’s hand three
            metres away from a phone that was in someone’s pocket
            <LinkWithOverrides>one metre away.</LinkWithOverrides> “That is a
            really important distinction if you’re going to use the app to
            determine whether or not you spend 14 days at home,” one{' '}
            <LinkWithOverrides>official</LinkWithOverrides> said.
          </CustomPragraph>

          <StorybookSubHeading>external default</StorybookSubHeading>
          <CustomPragraph>
            Officials said that the{' '}
            <Link href="http://apple.com">Apple-Google model</Link> was unable
            to differentiate between a phone that was in{' '}
            <Link href="http://apple.com">someone’s hand</Link> three metres
            away from a phone that was in someone’s pocket{' '}
            <Link href="http://apple.com">one metre</Link> away.
          </CustomPragraph>

          <StorybookSubHeading>external with overrides</StorybookSubHeading>
          <CustomPragraph>
            Officials said that the{' '}
            <ExternalLinkWithOverrides>
              Apple-Google model
            </ExternalLinkWithOverrides>{' '}
            was unable to differentiate between a phone that was in{' '}
            <ExternalLinkWithOverrides>someone’s</ExternalLinkWithOverrides>{' '}
            hand three metres away from a phone that was in someone’s pocket one{' '}
            <ExternalLinkWithOverrides>metre</ExternalLinkWithOverrides> away.
          </CustomPragraph>
        </Container>
      ),
    },
  ],
};

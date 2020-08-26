import * as React from 'react';
import {Link, LinkStandalone} from '..';
import {styled} from '../../utils/style';
import {StorybookHeading} from '../../test/storybook-comps';
import {Email} from '../../icons/email';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Paragaraph = styled.p`
 margin 0;
`;

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
          <Link
            href="/"
            overrides={{
              typePreset: 'label020',
              stylePreset: 'headlineKicker',
            }}
          >
            Inline Link with style and type overrides
          </Link>
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
            <Email size="iconSize010" />
            Inline Link with leading and trailing icons
            <Email size="iconSize010" />
          </Link>
          <br />
          <br />
          <Link
            href="/"
            overrides={{
              space: 'sizing030',
            }}
          >
            <Email size="iconSize010" />
            Inline Link with leading and trailing icons and custom space
            <Email size="iconSize010" />
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
          <LinkStandalone
            href="https://google.com"
            overrides={{
              typePreset: 'label020',
              stylePreset: 'headlineKicker',
            }}
          >
            Link Standalone external with type and style Preset overrides
          </LinkStandalone>
        </Container>
      ),
    },
    {
      name: 'link-within-text-paragraph',
      type: 'story',
      component: () => (
        <Container>
          <Paragaraph>
            Officials said that the{' '}
            <Link href="http://localhost:6006">Apple-Google model</Link> was
            unable to differentiate between a phone that was in someone’s hand
            three metres away from a phone that was in someone’s pocket one
            metre away. “That is a really important distinction if you’re going
            to use the app to determine whether or not you spend 14 days at
            home,” one official said.
          </Paragaraph>
          <br />
          <br />
          <Paragaraph>
            Officials said that the{' '}
            <Link
              href="http://localhost:6006"
              overrides={{
                typePreset: 'label020',
                stylePreset: 'headlineKicker',
              }}
            >
              Apple-Google model
            </Link>{' '}
            was unable to differentiate between a phone that was in someone’s
            hand three metres away from a phone that was in someone’s pocket one
            metre away. “That is a really important distinction if you’re going
            to use the app to determine whether or not you spend 14 days at
            home,” one official said.
          </Paragaraph>
          <br />
          <br />
          <Paragaraph>
            Officials said that the{' '}
            <Link href="http://apple.com">Apple-Google model</Link> was unable
            to differentiate between a phone that was in someone’s hand three
            metres away from a phone that was in someone’s pocket one metre
            away.
          </Paragaraph>
          <br />
          <br />
          <Paragaraph>
            Officials said that the{' '}
            <Link
              href="http://apple.com"
              overrides={{
                typePreset: 'label020',
                stylePreset: 'headlineKicker',
              }}
            >
              Apple-Google model
            </Link>{' '}
            was unable to differentiate between a phone that was in someone’s
            hand three metres away from a phone that was in someone’s pocket one
            metre away.
          </Paragaraph>
        </Container>
      ),
    },
  ],
};

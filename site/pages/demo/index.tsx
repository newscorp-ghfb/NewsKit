import {Block, H1, H2, P, LinkStandalone, Divider, GridLayout} from 'newskit';
import NextLink from 'next/link';
import Template from '../../components/demo/template';
import {pageTitle as page1Title} from './page1';
import {pageTitle as page2Title} from './page2';
import {pageTitle as page3Title} from './page3';
import {pageTitle as page4Title} from './page4';
import {pageTitle as page5Title} from './page5';
import {pageTitle as page6Title} from './page6';
import {pageTitle as page7Title} from './page7';
import {pageTitle as page8Title} from './page8';
import {pageTitle as page9Title} from './page9';

const pages = [
  page1Title,
  page2Title,
  page3Title,
  page4Title,
  page5Title,
  page6Title,
  page7Title,
  page8Title,
  page9Title,
];

import packageJson from '../../../package.json';

export default function DemoIndex() {
  return (
    <Template>
      <H1 overrides={{marginBlockEnd: 'space060'}}>NewsKit Demo</H1>
      <H2 overrides={{marginBlockEnd: 'space050'}}>v{packageJson.version}</H2>
      <Divider />
      <GridLayout rowGap="space020" overrides={{marginBlock: 'space040'}}>
        {pages.map((pageTitle, index) => (
          <NextLink
            key={pageTitle}
            legacyBehavior
            href={`/demo/page${index + 1}`}
            passHref
          >
            <LinkStandalone href={`/demo/page${index + 1}`}>
              {pageTitle}
            </LinkStandalone>
          </NextLink>
        ))}
      </GridLayout>
      <Divider />
      <Block as="footer" marginBlockStart="space040">
        <P>
          <LinkStandalone href="https://newskit.co.uk/">
            newskit.co.uk
          </LinkStandalone>
          {` | `}
          <LinkStandalone href="https://github.com/newscorp-ghfb/newskit">
            NewsKit on GitHub
          </LinkStandalone>
          {` | `}
          <LinkStandalone href="https://github.com/newscorp-ghfb/newskit/site/demo">
            This Demo on GitHub
          </LinkStandalone>
        </P>
      </Block>
    </Template>
  );
}

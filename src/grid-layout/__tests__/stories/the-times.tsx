import * as React from 'react';
import {GridLayout} from '../..';
import {Divider, H3, P, Image} from '../../..';
import {Hidden} from '../../../grid/visibility';
import {StorybookHeading} from '../../../test/storybook-comps';

const Article1 = () => (
  <div>
    <h2>A1: New Kim missile ‘poses nuclear threat to Seoul</h2>
    <P>
      North Korea launched what is believed to be a short range, nuclear-capable
      ballistic missile that could threaten Seoul and the region’s American
      bases. The test firing, the 12th this year, was launched on the eve of
      annual joint US and South Korean military exercises. Pyongyang has
      denounced the
    </P>
  </div>
);
const Article2 = () => (
  <div>
    <h2>A2: Covid crackdown threatens global supply of iPhones</h2>

    <P>
      Strict anti-Covid rules have been imposed at factories that make half the
      world’s iPhones, threatening a global tech crunch as China tackles its
      worst outbreak of the pandemic. A Beijing government notice issued
      yesterday forced the economic zone in the central east metropolis of
      Zhengzhou, home to a Foxconn factory employing up to 120,000
    </P>
  </div>
);

const Article4 = () => (
  <GridLayout
    overrides={{minHeight: '100%'}}
    rows="auto 1fr"
    rowGap="space040"
    columnGap="space040"
    columns={{xs: '1fr 200px', md: '1fr'}}
  >
    <H3>A4: Modi criticised for silence on religious violence</H3>
    <Image src="/placeholder-3x2.png" alt="" />
  </GridLayout>
);
const Article3 = () => (
  <GridLayout
    overrides={{minHeight: '100%'}}
    rows="1fr auto"
    rowGap="space040"
    columnGap="space040"
    columns={{xs: '200px 1fr', lg: '1fr'}}
  >
    <Image src="/placeholder-3x2.png" alt="" />
    <div>
      <H3>A3: Token amount on offer for Twitter chief’s first message</H3>
      <Hidden xs sm md>
        <P>
          An entrepreneur who paid $2.9 million for a “unique” version of the
          Twitter founder Jack Dorsey’s first message on the platform faces
          making a huge loss after his efforts to resell it attracted a top bid
          of $30,000. Sina Estavi bought the non-fungible token, or NFT — a
          digital certificate proving his ownership...
        </P>
      </Hidden>
    </div>
  </GridLayout>
);

export const TheTimes = () => {
  const xs = `
      article1
      div1
      article2
      div2
      article3
      div3
      article4
  `;

  const md = `
    "article1   div2 article4"
    "div1       div2 div3"
    "article2   div2 article3"
  `;

  const lg = `
    "article1   div2  article3 div3  article4"
    "div1       div2  article3 div3  article4"
    "article2   div2  article3 div3  article4"
  `;

  return (
    <>
      <StorybookHeading>The Times layout example</StorybookHeading>
      <GridLayout
        columns={{
          xs: '1fr',
          md: '1fr auto 1fr',
          lg: '1fr auto 200px auto 1fr',
        }}
        columnGap="space040"
        rowGap="space040"
        areas={{xs, md, lg}}
      >
        {Areas => (
          <>
            <Areas.Article1>
              <Article1 />
            </Areas.Article1>

            <Areas.Div1>
              <Divider vertical={{xs: false}} />
            </Areas.Div1>

            <Areas.Article2>
              <Article2 />
            </Areas.Article2>

            <Areas.Div2>
              <Divider vertical={{xs: false, md: true}} />
            </Areas.Div2>

            <Areas.Article3>
              <Article3 />
            </Areas.Article3>

            <Areas.Div3>
              <Divider vertical={{xs: false, lg: true}} />
            </Areas.Div3>

            <Areas.Article4>
              <Article4 />
            </Areas.Article4>
          </>
        )}
      </GridLayout>
    </>
  );
};

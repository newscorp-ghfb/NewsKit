import * as React from 'react';
import {Card} from '..';
import {Grid, Cell, Visible} from '../../grid';
import {Stack} from '../../stack';
import {Headline} from '../../headline';
import {TextBlock} from '../../text-block';
import {Block} from '../../block';
import {styled} from '../../utils/style';
import {getMediaQueryFromTheme} from '../../utils/responsive-helpers';
import {AlignSelfValues, StackChild} from '../../stack-child';
import {Divider} from '../../divider';
import {TitleBar} from '../../title-bar';
import {Button} from '../../button';
import {Image} from '../../image';

export default {
  title: 'NewsKit Light/the-sun',
  component: () => 'None',
};

const cardTeaserLeadInset = 'space010';

const cardTeaserHeadline = {
  xs: 'space040',
  sm: 'space040',
  md: 'space045',
  lg: 'space050',
};

// Typography Presets
const cardTypographyPresets: {[index: string]: string} = {
  cardTeaserHeadlineLarge: 'editorialHeadline050',
  cardTeaserHeadlineMedium: 'editorialHeadline030',
  cardTeaserHeadlineSmall: 'editorialHeadline010',

  cardTeaserLeadLarge: 'editorialParagraph030',
  cardTeaserLeadMedium: 'editorialParagraph020',
  cardTeaserLeadSmall: 'editorialParagraph010',

  cardLabelLarge: 'utilityLabel020',
  cardLabelMedium: 'utilityLabel010',
  cardLabelSmall: 'utilityLabel010',

  cardTagLarge: 'utilityLabel020',
  cardTagMedium: 'utilityLabel010',
  cardTagSmall: 'utilityLabel010',
};

const LargeItemBody = styled.div`
  min-height: 92px;
  background: #ccc;
`;

const LargeItem = () => (
  <>
    <Card
      layout="vertical"
      media={{
        src: '/placeholder-3x2.png',
        alt: 'Card Media',
      }}
    >
      <LargeItemBody>
        <Block spaceStack={cardTeaserHeadline}>
          <Headline kickerText="SHORT">
            title of the card describing the main content
          </Headline>
        </Block>
        <Block spaceStack={cardTeaserLeadInset}>
          <TextBlock
            stylePreset="cardTeaserLead"
            typographyPreset={cardTypographyPresets.cardTeaserLeadSmall}
          >
            A short paragraph description of the article, outlining the main
            story and focus.
          </TextBlock>
        </Block>
      </LargeItemBody>
    </Card>
  </>
);
const SmallItem = () => (
  <>
    <Card
      layout="horizontal"
      media={{
        src: '/placeholder-3x2.png',
        alt: 'Card Media',
      }}
      overrides={{
        horizontalRatio: '1:1',
      }}
    >
      <Headline
        kickerText="SHORT"
        overrides={{
          typographyPreset: 'editorialHeadline010',
        }}
      >
        title of the card describing the main content
      </Headline>
    </Card>
  </>
);

const CSSGrid = styled.div`
  display: grid;
  height: 100%;
  gap: 10px;

  ${getMediaQueryFromTheme('md', 'lg')} {
    grid-template-columns: 1fr 1fr;
    gap: 20px 10px;
  }
  ${getMediaQueryFromTheme('lg')} {
    justify-content: stretch;
    align-content: space-between;
    gap: 10px;
  }
`;

const FixWidth = styled.div`
  margin: 0 auto;
  max-width: 420px;

  ${getMediaQueryFromTheme('md', 'lg')} {
    max-width: 620px;
  }

  ${getMediaQueryFromTheme('lg')} {
    max-width: 932px;
  }
`;

export const StoryTheSun = () => (
  <FixWidth>
    <Grid>
      <Cell xs="full-width" lg={8}>
        <LargeItem />
      </Cell>
      <Cell xs="full-width" lg={4}>
        <CSSGrid>
          <SmallItem />
          <Visible sm lg>
            <Divider />
          </Visible>

          <SmallItem />

          <Visible sm lg>
            <Divider />
          </Visible>

          <SmallItem />

          <Visible sm lg>
            <Divider />
          </Visible>

          <SmallItem />
        </CSSGrid>
      </Cell>
    </Grid>
  </FixWidth>
);

const news = [
  {
    title:
      "Zayn Malik appears on plus size dating app in bid to find 'fuller woman'",
    teaser:
      'HEART-throb Zayn Malik has signed up to a plus-size dating website that promises to match users with “big beautiful women”. It comes after the former One Direction singer split with slim supermodel Gigi Hadid.',
    image:
      'https://www.thesun.co.uk/wp-content/uploads/2022/01/aj-zayn-love-comp.jpg?strip=all&w=620&h=413&crop=1',
    href:
      'https://www.thesun.co.uk/tvandshowbiz/17292904/zayn-malik-plus-size-dating/',
  },
  {
    title:
      'Boris Johnson must apologise to the nation and stop cowering from his duty',
    teaser: '',
    image:
      'https://www.thesun.co.uk/wp-content/uploads/2022/01/3c71f19f-6a26-4f44-a910-fa1521614c03.jpg?strip=all&w=150&h=100&crop=1',
    href: 'https://www.thesun.co.uk/news/17294525/boris-johnson-party-apology/',
  },
  {
    title:
      'Get £40 in free bets for the Africa Cup of Nations with Paddy Power',
    teaser: '',
    image:
      'https://www.thesun.co.uk/wp-content/uploads/2022/01/DD-BETTING-PADDY-POWER-odds-JAN-07.jpg?strip=all&w=150&h=100&crop=1',
    href:
      'https://www.thesun.co.uk/sport/betting-tips/17249522/afcon-2022-free-bets-paddy-power/',
  },
  {
    title:
      "Lily plans Sadie's birthday party - but ends up flirting with her brother ",
    teaser: '',
    image:
      'https://www.thesun.co.uk/wp-content/uploads/2022/01/image-2-6.png?strip=all&w=150&h=100&crop=1',
    href:
      'https://www.thesun.co.uk/dear-deidre/17264661/sadie-suspicious-lily-plans-with-mark/',
  },
  {
    title:
      'My wife said go elsewhere for sex - but now one of my three lovers is pregnant',
    teaser: '',
    image:
      'https://www.thesun.co.uk/wp-content/uploads/2022/01/DEIDRE-LEAD-Man-of-53-who-is-married-but-wife-has-given-up-on-sex-so-he-signed-up-to-a-sugar-daddy-dating-site.jpg?strip=all&w=150&h=100&crop=1',
    href:
      'https://www.thesun.co.uk/dear-deidre/17287490/one-three-lovers-pregnant/',
  },
];

const imageGallery = [
  {src: 'http://placekitten.com/g/200/200'},
  {src: 'http://placekitten.com/g/200/200'},
  {src: 'http://placekitten.com/g/200/200'},
  {src: 'http://placekitten.com/g/200/200'},
];

const CardLarge = ({title = '', teaser = '', image = '', href = ''}) => (
  <>
    <Card
      layout="vertical"
      href={href}
      media={{
        src: image,
        alt: 'Card Media',
      }}
    >
      <LargeItemBody>
        <Block spaceStack={cardTeaserHeadline}>
          <Headline kickerText="SHORT">{title}</Headline>
        </Block>
        <Block spaceStack={cardTeaserLeadInset}>
          <TextBlock
            stylePreset="cardTeaserLead"
            typographyPreset={cardTypographyPresets.cardTeaserLeadSmall}
          >
            {teaser}
          </TextBlock>
        </Block>
      </LargeItemBody>
    </Card>
  </>
);
const CardSmall = ({title = '', image = '', href = ''}) => (
  <>
    <Card
      layout="horizontal"
      href={href}
      media={{
        src: image,
        alt: 'Card Media',
      }}
      overrides={{
        horizontalRatio: '1:1',
      }}
    >
      <Headline
        kickerText="SHORT"
        overrides={{
          typographyPreset: 'editorialHeadline010',
        }}
      >
        {title}
      </Headline>
    </Card>
  </>
);

const SectionHeaderTitleStack = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  width: 800px;
  align-items: end;
`;

const SectionHeader = ({title, href}) => {
  const button = () => <Button href={href}>read more</Button>;

  return (
    <TitleBar actionItem={button}>
      <SectionHeaderTitleStack>
        <span>{title}</span>
        <Divider />
      </SectionHeaderTitleStack>
    </TitleBar>
  );
};

const SectionFooter = ({href}) => (
  <Visible xs sm>
    <Stack flow="vertical-center" spaceInline="space030">
      <StackChild alignSelf={AlignSelfValues.Stretch}>
        <Divider />
      </StackChild>

      <Button href={href}>More</Button>

      <StackChild alignSelf={AlignSelfValues.Stretch}>
        <Divider />
      </StackChild>
    </Stack>
  </Visible>
);

const Section = ({children, href, title}) => (
  <section>
    <SectionHeader title={title} href={href} />
    {children}
    <SectionFooter href={href} />
  </section>
);

// 1 large, 4 small in a grid
const BlockLayout1L4S = ({placeholders = []}) => {
  const [large, small1, small2, small3, small4] = placeholders;
  return (
    <Grid>
      <Cell xs="full-width" lg={8}>
        {large}
      </Cell>
      <Cell xs="full-width" lg={4}>
        <CSSGrid>
          {small1}

          <Visible sm lg>
            <Divider />
          </Visible>

          {small2}

          <Visible sm lg>
            <Divider />
          </Visible>

          {small3}

          <Visible sm lg>
            <Divider />
          </Visible>

          {small4}
        </CSSGrid>
      </Cell>
    </Grid>
  );
};

// 4 horizontal
const BlockLayout4H = ({placeholders = []}) => {
  const [p1, p2, p3, p4] = placeholders;
  return (
    <Grid>
      <Cell xs="full-width" md={6} lg={3}>
        {p1}
      </Cell>
      <Cell xs="full-width" md={6} lg={3}>
        {p2}
      </Cell>
      <Cell xs="full-width" md={6} lg={3}>
        {p3}
      </Cell>
      <Cell xs="full-width" md={6} lg={3}>
        {p4}
      </Cell>
    </Grid>
  );
};

const BlockLayoutTeaserVariant1 = ({data = []}) => {
  const items = [CardLarge, CardSmall, CardSmall, CardSmall, CardSmall];

  const itemsWithData = items.map((Component, index) => (
    <Component {...data[index]} />
  ));

  return <BlockLayout1L4S placeholders={itemsWithData} />;
};

const BlockLayoutTeaserVariant2 = ({data = []}) => {
  const items = [CardSmall, CardSmall, CardSmall, CardSmall];

  const itemsWithData = items.map((Component, index) => (
    <Component {...data[index]} />
  ));

  return <BlockLayout4H placeholders={itemsWithData} />;
};

const BlockLayoutTeaserVariant3 = ({data = []}) => {
  const items = [CardLarge, CardLarge, CardLarge, CardLarge];

  const itemsWithData = items.map((Component, index) => (
    <Component {...data[index]} />
  ));

  return <BlockLayout4H placeholders={itemsWithData} />;
};

const BlockLayoutTeaserVariant4 = ({data = []}) => {
  const items = [Image, Image, Image, Image];

  const itemsWithData = items.map((Component, index) => (
    <Component {...data[index]} />
  ));

  return <BlockLayout4H placeholders={itemsWithData} />;
};

const BlockLayoutTeaser = ({data, name}) => {
  // eslint-disable-next-line default-case
  switch (name) {
    case 'variant-1':
      return <BlockLayoutTeaserVariant1 data={data} />;

    case 'variant-2':
      return <BlockLayoutTeaserVariant2 data={data} />;

    case 'variant-3':
      return <BlockLayoutTeaserVariant3 data={data} />;

    case 'variant-4':
      return <BlockLayoutTeaserVariant4 data={data} />;
  }

  return <p>no correct variant</p>;
};

const BlockLayoutSpace = () => (
  <>
    <Block spaceStack="space050" />
    <Divider />
    <Block spaceStack="space050" />
  </>
);

export const StoryTheSun3 = () => (
  <Section title="Sport" href="/?sport">
    <BlockLayoutTeaser name="variant-1" data={news} />

    <BlockLayoutSpace />

    <BlockLayoutTeaser name="variant-2" data={news} />

    <BlockLayoutSpace />

    <BlockLayoutTeaser name="variant-3" data={news} />

    <BlockLayoutSpace />

    <BlockLayoutTeaser name="variant-4" data={imageGallery} />
  </Section>
);

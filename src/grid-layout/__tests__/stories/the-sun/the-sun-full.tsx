import * as React from 'react';
import {TitleBar} from '../../../../title-bar';
import {Button} from '../../../../button';
import {StackChild} from '../../../../stack-child';
import {Stack} from '../../../../stack';
import {Block} from '../../../../block';
import {Divider} from '../../../../divider';
import {GridLayout} from '../../../grid-layout';
import {Visible} from '../../../../grid';
import {TextBlock} from '../../../../text-block';
import {Card} from '../../../../card';
import {Headline} from '../../../../headline';
import {Image} from '../../../../image';
import {
  BlockLayout1L4S,
  BlockLayout3H,
  BlockLayout4H,
  LargeItemBody,
} from '../common';
import {StorybookHeading} from '../../../../test/storybook-comps';

const SectionHeader = ({title, href}: {title: string; href: string}) => {
  const button = () => <Button href={href}>Read more</Button>;

  return (
    <TitleBar actionItem={href ? button : undefined}>
      <GridLayout columnGap="space030" columns="auto 1fr" alignItems="center">
        <span>{title}</span>
        <Divider />
      </GridLayout>
    </TitleBar>
  );
};

const SectionFooter = ({href}: {href: string}) =>
  href ? (
    <Visible xs>
      <Stack flow="vertical-center" spaceInline="space030">
        <StackChild alignSelf="stretch">
          <Divider />
        </StackChild>

        <Button href={href}>Read more</Button>

        <StackChild alignSelf="stretch">
          <Divider />
        </StackChild>
      </Stack>
    </Visible>
  ) : null;

const Section = ({
  children,
  href,
  title,
}: {
  title: string;
  href: string;
  children: React.ReactNode;
}) => (
  <section>
    <SectionHeader title={title} href={href} />
    <div>{children}</div>
    <SectionFooter href={href} />
  </section>
);

const BlockLayoutSpace = () => (
  <>
    <Block spaceStack="space050" />
    <Divider />
    <Block spaceStack="space050" />
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
        kickerText="KICKER"
        overrides={{
          typographyPreset: 'editorialHeadline010',
        }}
      >
        {title}
      </Headline>
    </Card>
  </>
);

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
        <Block spaceStack="space040">
          <Headline kickerText="KICKER">{title}</Headline>
        </Block>
        <Block spaceStack="space010">
          <TextBlock
            stylePreset="cardTeaserLead"
            typographyPreset="editorialParagraph010"
          >
            {teaser}
          </TextBlock>
        </Block>
      </LargeItemBody>
    </Card>
  </>
);

const BlockLayoutTeaserVariant1 = ({data = []}: {data: NewsType[]}) => {
  const items = [CardLarge, CardSmall, CardSmall, CardSmall, CardSmall];

  const itemsWithData = items.map((Component, index) => (
    <Component {...data[index]} />
  ));

  return <BlockLayout1L4S placeholders={itemsWithData} />;
};

const BlockLayoutTeaserVariant2 = ({data = []}: {data: NewsType[]}) => {
  const items = [CardSmall, CardSmall, CardSmall, CardSmall];

  const itemsWithData = items.map((Component, index) => (
    <Component {...data[index]} />
  ));

  return <BlockLayout4H placeholders={itemsWithData} />;
};

const BlockLayoutTeaserVariant3 = ({data = []}: {data: NewsType[]}) => {
  const items = [CardLarge, CardLarge, CardLarge, CardLarge];

  const itemsWithData = items.map((Component, index) => (
    <Component {...data[index]} />
  ));

  return <BlockLayout4H placeholders={itemsWithData} />;
};

const BlockLayoutTeaserVariant4 = ({data = []}: {data: ImageType[]}) => {
  const items = [Image, Image, Image, Image];

  const itemsWithData = items.map((Component, index) => (
    <Component {...data[index]} />
  ));

  return <BlockLayout4H placeholders={itemsWithData} />;
};

const BlockLayoutTeaserVariant5 = ({data = []}: {data: NewsType[]}) => {
  const items = [CardSmall, CardSmall, CardSmall];

  const itemsWithData = items.map((Component, index) => (
    <Component {...data[index]} />
  ));

  return <BlockLayout3H placeholders={itemsWithData} />;
};

type NewsType = {
  title: string;
  teaser: string;
  image: string;
  href: string;
};

// eslint-disable-next-line no-script-url
const href = 'javascript:;';

const news: NewsType[] = [
  {
    title: 'title of the card describing the main content',
    teaser: 'This is a teaser.',
    image: '/placeholder-3x2.png',
    href,
  },
  {
    title: 'title of the card describing the main content',
    teaser: '',
    image: '/placeholder-3x2.png',
    href,
  },
  {
    title: 'title of the card describing the main content',
    teaser: '',
    image: '/placeholder-3x2.png',
    href,
  },
  {
    title: 'title of the card describing the main content',
    teaser: '',
    image: '/placeholder-3x2.png',
    href,
  },
  {
    title: 'title of the card describing the main content',
    teaser: '',
    image: '/placeholder-3x2.png',
    href,
  },
];

type ImageType = {
  src: string;
};

const imageGallery: ImageType[] = [
  {src: '/placeholder-3x2.png'},
  {src: '/placeholder-3x2.png'},
  {src: '/placeholder-3x2.png'},
  {src: '/placeholder-3x2.png'},
];

const BlockLayoutTeaser = ({
  data,
  variant,
}: {
  data: NewsType[] | ImageType[];
  variant: string;
}) => {
  // eslint-disable-next-line default-case
  switch (variant) {
    case 'variant-1':
      return <BlockLayoutTeaserVariant1 data={data as NewsType[]} />;

    case 'variant-2':
      return <BlockLayoutTeaserVariant2 data={data as NewsType[]} />;

    case 'variant-3':
      return <BlockLayoutTeaserVariant3 data={data as NewsType[]} />;

    case 'variant-4':
      return <BlockLayoutTeaserVariant4 data={data as ImageType[]} />;

    case 'variant-5':
      return <BlockLayoutTeaserVariant5 data={data as NewsType[]} />;
  }

  return <p>no correct variant</p>;
};

export const TheSunFull = () => (
  <>
    <StorybookHeading>The Sun full</StorybookHeading>
    <Section title="Heading here" href="/?sport">
      <BlockLayoutTeaser variant="variant-1" data={news} />

      <BlockLayoutSpace />

      <BlockLayoutTeaser variant="variant-2" data={news} />
    </Section>

    <Section title="Sport" href="/?sport">
      <BlockLayoutTeaser variant="variant-3" data={news} />

      <BlockLayoutSpace />

      <BlockLayoutTeaser variant="variant-5" data={news} />
    </Section>

    <Section title="Gallery" href="/?sport">
      <BlockLayoutTeaser variant="variant-4" data={imageGallery} />
    </Section>
  </>
);

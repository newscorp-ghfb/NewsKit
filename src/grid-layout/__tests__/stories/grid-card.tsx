import * as React from 'react';
import {Headline} from '../../../headline';
import {TextBlock} from '../../../text-block';
import {Block} from '../../../block';
import {styled} from '../../../utils/style';
import {Button} from '../../../button';
import {Image} from '../../../image';
import {Flag, getMediaQueryFromTheme, Paragraph, Tag} from '../../..';
import {IconFilledEmail} from '../../../icons';
import {GridLayout, GridLayoutItem} from '../../grid-layout';
import {GridLayoutItemProps, GridLayoutProps} from '../../types';
import {getDisplayName} from '../../../utils/component';
import {getStylePreset} from '../../../utils/style';

const StyledAdvancedCard = styled(GridLayout)`
  border: 1px solid gray;
`;

const StyledLink = styled.a`
  grid-area: 1 / 1 / 2 / 3;
  z-index: 3;
  ${getMediaQueryFromTheme('md')} {
    grid-area: 1 / 1 / 3 / 3;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const GridCard = ({title = '', teaser = '', image = '', href = ''}) => {
  const xsLayout = `
    "thumb content"
    "tags  share"  
  `;
  const mdLayout = `
    "thumb    thumb"
    "content  content"
    "tags     share"
  `;

  return (
    <StyledAdvancedCard
      areas={{xs: xsLayout, md: mdLayout}}
      columns={{xs: '1fr 1fr'}}
      overrides={{maxWidth: '600px'}}
    >
      {Areas => (
        <>
          <Areas.Thumb>
            <Image src={image} />
          </Areas.Thumb>
          <Areas.Thumb alignSelf="end" style={{zIndex: 2, paddingLeft: '12px'}}>
            <Flag>Flag</Flag>
          </Areas.Thumb>
          <Areas.Content spaceInset="spaceInset030">
            <Block spaceStack="space030">
              <Headline
                kickerText="KICKER"
                overrides={{
                  typographyPreset: {
                    xs: 'editorialHeadline030',
                    md: 'editorialHeadline050',
                  },
                }}
              >
                {title}
              </Headline>
            </Block>

            <TextBlock
              stylePreset="cardTeaserLead"
              typographyPreset={{
                xs: 'editorialParagraph010',
                md: 'editorialParagraph020',
              }}
            >
              {teaser}
            </TextBlock>
          </Areas.Content>
          <Areas.Tags>
            <Button
              href="#"
              size="small"
              overrides={{
                stylePreset: `buttonMinimalPrimary`,
              }}
            >
              Button
              <IconFilledEmail />
            </Button>
          </Areas.Tags>
          <Areas.Share justifySelf="end">
            <Button
              size="small"
              href="#"
              overrides={{
                stylePreset: `buttonMinimalPositive`,
              }}
            >
              <IconFilledEmail />
              Share
            </Button>
          </Areas.Share>
          {href ? <StyledLink href={href} /> : null}
        </>
      )}
    </StyledAdvancedCard>
  );
};

export const GridTeaser = ({
  title = '',
  teaser = '',
  image = '',
  href = '',
}) => {
  const xsLayout = `
    "thumb"
    "tags"  
  `;

  return (
    <StyledAdvancedCard areas={{xs: xsLayout}} overrides={{maxWidth: '600px'}}>
      {Areas => (
        <>
          <Areas.Thumb>
            <Image src={image} />
          </Areas.Thumb>
          <Areas.Thumb
            spaceInset="spaceInset030"
            alignSelf="end"
            style={{
              zIndex: 2,
              background: `linear-gradient(0deg, black 75%, transparent)`,
              color: '#fff',
            }}
          >
            <Block spaceStack="space030">
              <Headline
                kickerText="KICKER"
                overrides={{
                  typographyPreset: {
                    xs: 'editorialHeadline030',
                    md: 'editorialHeadline050',
                  },
                }}
              >
                <span style={{color: '#fff'}}>{title}</span>
              </Headline>
            </Block>

            <TextBlock
              stylePreset="cardTeaserLead"
              typographyPreset={{
                xs: 'editorialParagraph010',
                md: 'editorialParagraph020',
              }}
            >
              {teaser}
            </TextBlock>
          </Areas.Thumb>
          <Areas.Tags style={{background: 'black'}}>
            <Button
              href="#"
              size="small"
              overrides={{
                stylePreset: `buttonMinimalPrimary`,
              }}
            >
              Button
              <IconFilledEmail />
            </Button>
          </Areas.Tags>
          {href ? <StyledLink href={href} /> : null}
        </>
      )}
    </StyledAdvancedCard>
  );
};

const StyledCard = styled(GridLayout)`
  position: relative;
  ${props => {
    const a = getStylePreset('', '')(props);
    console.log(props, a);
    return a;
  }}
`;

const hasTouchLink = (children: any, href: string): boolean => {
  return React.Children.toArray(children).some(child => {
    const componentName = getDisplayName(child);
    console.log(componentName, child);

    if (componentName === 'CardTouchArea' && child.props.href === href) {
      return true;
    }

    if (typeof child.type === 'function' && child.props.children) {
      return hasTouchLink(child.props.children, href);
    }

    return false;
  });
};

const Card = ({
  children,
  href,
  ...props
}: GridLayoutProps & {href?: string}) => {
  //const hasTouchLinkInChildren = href && hasTouchLink(children, href);

  return (
    // @ts-ignore
    <StyledCard {...props}>
      {children}

      {/* {href && (
        // Cover link is not tabbable or read by screen-reader
        <CardCoverLink
          href={href}
          tabIndex={hasTouchLinkInChildren ? -1 : undefined}
          aria-hidden={hasTouchLinkInChildren ? 'true' : undefined}
        />
      )} */}
    </StyledCard>
  );
};

const CardMedia = ({src}) => (
  <img src={src} alt="" style={{maxWidth: '100%'}} />
);

const CardContent = (props: GridLayoutProps) => <GridLayout {...props} />;

// Card Actions has larger z-index than Cover link so goes over it
const StyledCardActions = styled(GridLayout)`
  z-index: 2;
  position: relative;
`;

const CardActions = (props: GridLayoutProps) => (
  <StyledCardActions {...props} />
);

const StyledCardTouchArea = styled(GridLayout)`
  ${props =>
    props.full &&
    `&:before {
    content: '';
    z-index: 1;
    position: absolute;
    inset: 0;
  }`}
`;

const CardTouchArea = (
  props: GridLayoutProps & {href: string; full: boolean},
) => (
  // @ts-ignore
  <StyledCardTouchArea as="a" {...props} />
);

// Cover link uses absolute position to position itself over all elements
const StyledCardCoverLink = styled(GridLayoutItem)`
  z-index: 1;
  position: absolute;
  inset: 0;
`;

const CardCoverLink = (props: GridLayoutItemProps & {href: string}) => (
  // @ts-ignore
  <StyledCardCoverLink as="a" {...props} />
);

const cardHref = '/card-link';

export const CardComposableExample = () => (
  <Card
    overrides={{maxWidth: '320px', stylePreset: 'cardComposable'}}
    rowGap="space040"
    // href={cardHref}
  >
    <CardMedia src="/placeholder-3x2.png" />

    <CardContent rowGap="space040">
      <CardTouchArea href={cardHref} full>
        <Headline kickerText="KICKER">Title of the card</Headline>
      </CardTouchArea>
      <Paragraph>Some kind of intro</Paragraph>
    </CardContent>

    {/* contains actions like links or buttons, they are placed above CardCoverLink when present */}
    <CardActions
      columnGap="space030"
      autoColumns="min-content"
      autoFlow="column"
    >
      <Tag href="/news">News</Tag>
      <Tag href="/music">Music</Tag>
      <Tag href="/festivals">Festivals</Tag>
    </CardActions>
  </Card>
);

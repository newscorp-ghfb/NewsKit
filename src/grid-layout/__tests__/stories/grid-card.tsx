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
`;

const Card = (props: GridLayoutProps) => <StyledCard {...props} />;

const CardMedia = ({src}) => (
  <img src={src} alt="" style={{maxWidth: '100%'}} />
);

const CardContent = (props: GridLayoutItemProps) => (
  <GridLayoutItem {...props} />
);

const CardActions = (props: GridLayoutItemProps) => (
  <GridLayoutItem {...props} />
);

const StyledGridActionArea = styled(GridLayoutItem)`
  ${({full}) =>
    full &&
    `
    &:before {
    content: '';
    position: absolute;
    inset: 0;
  }
  
  `}
`;

const CardActionArea = ({
  href,
  full = false,
  row,
  column,
  ...props
}: GridLayoutItemProps & {href?: string; full?: boolean}) => (
  <StyledGridActionArea as="a" href={href} full={full} {...props} />
);

export const CardComposableExample = () => (
  <>
    <Card overrides={{maxWidth: '320px'}}>
      <CardMedia src="/placeholder-3x2.png" />
      <CardContent>
        <CardActionArea href="/news">
          <Headline kickerText="KICKER">Title of the card</Headline>
        </CardActionArea>
        <Paragraph>Some kind of intro</Paragraph>
      </CardContent>
      <CardActions>
        <Tag href="/">News</Tag>
        <Tag href="/">Music</Tag>
        <Tag href="/">Festivals</Tag>
      </CardActions>
    </Card>
  </>
);

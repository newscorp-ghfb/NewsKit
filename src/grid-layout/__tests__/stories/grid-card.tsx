import * as React from 'react';
import {Headline} from '../../../headline';
import {TextBlock} from '../../../text-block';
import {Block} from '../../../block';
import {styled} from '../../../utils/style';
import {Button} from '../../../button';
import {Image} from '../../../image';
import {Flag, getMediaQueryFromTheme} from '../../..';
import {IconFilledEmail} from '../../../icons';
import {GridLayout} from '../../grid-layout';

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

// const hasTouchLink = (children: any, href: string): boolean =>
//   React.Children.toArray(children).some(child => {
//     const componentName = getDisplayName(child);

//     if (componentName === 'CardTouchArea' && child.props.href === href) {
//       return true;
//     }

//     if (typeof child.type === 'function' && child.props.children) {
//       return hasTouchLink(child.props.children, href);
//     }

//     return false;
//   });

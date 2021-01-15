import React from 'react';
import {Cell, Grid, TextBlock, Block, Card, styled} from 'newskit';
import {MediaListProps} from './types';

const StyledCard = styled(Card)`
  height: 100%;
`;

export const MediaList: React.FC<MediaListProps> = ({
  spaceStack,
  xsCard = 6,
  smCard,
  mdCard,
  lgCard,
  xlCard,
  cards,
  cellWrapperProps,
}) => (
  <Cell xs={12} md={10} lg={8} mdOffset={1} {...cellWrapperProps}>
    <Block spaceStack={spaceStack}>
      <Grid xsMargin="space000" xsRowGutter="space080">
        {cards.map(({media, title: cardTitle, description, subtitle, href}) => (
          <Cell xs={xsCard} sm={smCard} md={mdCard} lg={lgCard} xl={xlCard}>
            <StyledCard
              media={media}
              overrides={{
                mediaContainer: {
                  stylePreset: media && href && 'cardContainerMediaInteractive',
                },
                teaserContainer: {
                  spaceInset: !media
                    ? {
                        xs: 'spaceInset040',
                        sm: 'spaceInset040',
                        lg: 'spaceInset050',
                        xl: 'spaceInset050',
                      }
                    : undefined,
                },
              }}
              href={href}
            >
              <Block spaceStack="space040">
                <TextBlock
                  typographyPreset={
                    media ? 'editorialHeadline020' : 'utilityLabel020'
                  }
                >
                  {cardTitle}
                </TextBlock>
              </Block>
              {subtitle && (
                <Block spaceStack="space040">
                  <TextBlock
                    typographyPreset={
                      media ? 'editorialHeadline020' : 'editorialHeadline030'
                    }
                  >
                    {subtitle}
                  </TextBlock>
                </Block>
              )}
              <TextBlock
                typographyPreset={
                  media ? 'editorialParagraph020' : 'utilityBody020'
                }
              >
                {description}
              </TextBlock>
            </StyledCard>
          </Cell>
        ))}
      </Grid>
    </Block>
  </Cell>
);

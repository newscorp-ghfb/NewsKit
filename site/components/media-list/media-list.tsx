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
}) => (
  <Cell xs={12} md={10} lg={8} mdOffset={1}>
    <Block spaceStack={spaceStack}>
      <Grid xsMargin="space000" xsRowGutter="space080">
        {cards.map(
          ({media, title: cardTitle, description, subtitle, href, styles}) => (
            <Cell xs={xsCard} sm={smCard} md={mdCard} lg={lgCard} xl={xlCard}>
              <StyledCard
                media={media}
                overrides={styles && styles.card && {...styles.card}}
                href={href}
              >
                <Block spaceStack="space040">
                  <TextBlock
                    stylePreset={
                      styles && styles.title && styles.title.stylePreset
                        ? styles.title.stylePreset
                        : 'inkContrast'
                    }
                    typographyPreset={
                      styles && styles.title && styles.title.typographyPreset
                        ? styles.title.typographyPreset
                        : 'editorialHeadline020'
                    }
                  >
                    {cardTitle}
                  </TextBlock>
                </Block>
                {subtitle && (
                  <Block spaceStack="space040">
                    <TextBlock
                      stylePreset={
                        styles && styles.subtitle && styles.subtitle.stylePreset
                      }
                      typographyPreset={
                        styles &&
                        styles.subtitle &&
                        styles.subtitle.typographyPreset
                      }
                    >
                      {subtitle}
                    </TextBlock>
                  </Block>
                )}
                <TextBlock
                  stylePreset={
                    styles &&
                    styles.description &&
                    styles.description.stylePreset
                      ? styles.description.stylePreset
                      : 'inkPreset'
                  }
                  typographyPreset={
                    styles &&
                    styles.description &&
                    styles.description.typographyPreset
                      ? styles.description.typographyPreset
                      : 'editorialParagraph020'
                  }
                >
                  {description}
                </TextBlock>
              </StyledCard>
            </Cell>
          ),
        )}
      </Grid>
    </Block>
  </Cell>
);

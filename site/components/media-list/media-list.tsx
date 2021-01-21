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
  gridProps,
}) => (
  <Cell xs={12} md={10} lg={8} mdOffset={1}>
    <Block spaceStack={spaceStack}>
      <Grid xsRowGutter="space080" xsMargin="space000" {...gridProps}>
        {cards.map(({media, label, description, title, href, styles}) => (
          <Cell xs={xsCard} sm={smCard} md={mdCard} lg={lgCard} xl={xlCard}>
            <StyledCard
              media={media}
              overrides={styles && styles.card && {...styles.card}}
              href={href}
            >
              <Block spaceStack="space045">
                <TextBlock
                  stylePreset={
                    styles && styles.label && styles.label.stylePreset
                      ? styles.label.stylePreset
                      : 'inkContrast'
                  }
                  typographyPreset={
                    styles && styles.label && styles.label.typographyPreset
                      ? styles.label.typographyPreset
                      : 'editorialHeadline020'
                  }
                >
                  {label}
                </TextBlock>
              </Block>
              {title && (
                <Block spaceStack="space045">
                  <TextBlock
                    stylePreset={
                      styles && styles.title && styles.title.stylePreset
                    }
                    typographyPreset={
                      styles && styles.title && styles.title.typographyPreset
                    }
                  >
                    {title}
                  </TextBlock>
                </Block>
              )}
              <TextBlock
                stylePreset={
                  styles && styles.description && styles.description.stylePreset
                    ? styles.description.stylePreset
                    : 'inkContrast'
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
        ))}
      </Grid>
    </Block>
  </Cell>
);

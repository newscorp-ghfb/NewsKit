import React from 'react';
import {Cell, Grid, TextBlock, Block, Card, styled} from 'newskit';
import {MediaListProps} from './types';

const StyledCard = styled(Card)`
  height: 100%;
`;

export const MediaList: React.FC<MediaListProps> = ({
  spaceStack,
  layout,
  xsCard = 6,
  smCard,
  mdCard,
  lgCard,
  xlCard,
  cards,
  gridProps,
  parentCellProps,
}) => (
  <Cell xs={12} md={10} lg={8} mdOffset={1} {...parentCellProps}>
    <Block spaceStack={spaceStack}>
      <Grid xsRowGutter="space080" xsMargin="space000" {...gridProps}>
        {cards.map(({media, label, description, title, href, styles}) => (
          <Cell xs={xsCard} sm={smCard} md={mdCard} lg={lgCard} xl={xlCard}>
            <StyledCard
              layout={layout}
              media={media}
              overrides={styles && styles.card && {...styles.card}}
              href={href}
            >
              <Block spaceStack="space045">
                <TextBlock
                  // eslint-disable-next-line no-undef, prettier/prettier
                  stylePreset={styles?.label?.stylePreset || 'inkContrast'}
                  // eslint-disable-next-line no-undef
                  typographyPreset={styles?.label?.typographyPreset || 'editorialHeadline020'}
                >
                  {label}
                </TextBlock>
              </Block>
              {title && (
                <Block spaceStack="space045">
                  <TextBlock
                  // eslint-disable-next-line no-undef
                    stylePreset={styles?.title?.stylePreset || 'inkContrast'}
                    // eslint-disable-next-line no-undef
                    typographyPreset={styles?.title?.typographyPreset}
                  >
                    {title}
                  </TextBlock>
                </Block>
              )}
              <TextBlock
              // eslint-disable-next-line no-undef
                stylePreset={styles?.description?.stylePreset || 'inkBase'}
                // eslint-disable-next-line no-undef
                typographyPreset={styles?.description?.typographyPreset || 'editorialParagraph020'}
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

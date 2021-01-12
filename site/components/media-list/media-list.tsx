import React from 'react';
import {Cell, Grid, Card, TextBlock, Block} from 'newskit';
import {MediaListProps} from './types';

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
        {cards.map(({media, title: cardTitle, description, subtitle, href}) => (
          <Cell xs={xsCard} sm={smCard} md={mdCard} lg={lgCard} xl={xlCard}>
            <Card
              media={media}
              overrides={{
                stylePreset: 'testCard',
                mediaContainer: {
                  stylePreset: href && 'cardContainerMediaInteractive',
                },
              }}
              href={href}
            >
              <Block spaceStack="space040">
                <TextBlock
                  stylePreset="inkContrast"
                  typographyPreset="editorialHeadline020"
                >
                  {cardTitle}
                </TextBlock>
              </Block>
              {subtitle && (
                <Block spaceStack="space040">
                  <TextBlock
                    stylePreset="inkContrast"
                    typographyPreset="editorialHeadline020"
                  >
                    {subtitle}
                  </TextBlock>
                </Block>
              )}
              <TextBlock
                stylePreset="inkPreset"
                typographyPreset="editorialParagraph020"
              >
                {description}
              </TextBlock>
            </Card>
          </Cell>
        ))}
      </Grid>
    </Block>
  </Cell>
);

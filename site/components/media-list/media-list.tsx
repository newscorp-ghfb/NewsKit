import React from 'react';
import {
  Cell,
  Grid,
  TextBlock,
  Block,
  styled,
  Visible,
  BreakpointKeys,
} from 'newskit';
import {BaseCard} from '../base-card';
import {MediaListProps} from './types';
import {spanListConfig} from './span-list-config'

const StyledCard = styled(BaseCard)`
  height: 100%;
`;

export const MediaList: React.FC<MediaListProps> = ({
  spaceStack,
  cardsLayout,
  layout = '3-span',
  cards,
  gridProps,
  parentCellProps,
  horizontalRatio,
}) => {
  const renderCards = (cardListOrientation?: 'vertical' | 'horizontal') => {
    const cardListToRender = [];

    const cardListColumns = {
      heroCard: {xs: 12},
      notHeroCardGroup: spanListConfig[layout],
    };

    cardListToRender.push(
      cards.map(({media, description, title, href}, index) => {
        let cellColumnList;
        if (layout.includes('hero') && index === 0) {
          cellColumnList = cardListColumns.heroCard;
        } else {
          cellColumnList = cardListColumns.notHeroCardGroup;
        }

        return (
          <Cell {...cellColumnList}>
            <StyledCard
              layout={cardListOrientation}
              media={media}
              title={title}
              href={href}
              overrides={{horizontalRatio}}
            >
              <TextBlock
                typographyPreset="editorialParagraph020"
                stylePreset="inkBase"
              >
                {description}
              </TextBlock>
            </StyledCard>
          </Cell>
        );
      }),
    );

    return cardListToRender;
  };

  const renderBreakpointCards = () => {
    if (!cardsLayout || typeof cardsLayout === 'string') {
      return renderCards(cardsLayout);
    }
    const keys = Object.keys(cardsLayout) as BreakpointKeys[];

    const verticalBreakpoints = keys.reduce((acc, key) => {
      // by looking for non-horizontal rather than vertical, it means we default to vertical cards if not specified.
      acc[key] = cardsLayout[key] !== 'horizontal';
      return acc;
    }, {} as Record<string, boolean>);

    const horizontalBreakpoints = keys.reduce((acc, key) => {
      acc[key] = cardsLayout[key] === 'horizontal';
      return acc;
    }, {} as Record<string, boolean>);

    return (
      <>
        <Visible {...verticalBreakpoints}>{renderCards('vertical')}</Visible>

        <Visible {...horizontalBreakpoints}>
          {renderCards('horizontal')}
        </Visible>
      </>
    );
  };

  return (
    <Cell xs={12} md={10} lg={8} mdOffset={1} {...parentCellProps}>
      <Block spaceStack={spaceStack}>
        <Grid xsRowGutter="space080" xsMargin="space000" {...gridProps}>
          {renderBreakpointCards()}
        </Grid>
      </Block>
    </Cell>
  );
};

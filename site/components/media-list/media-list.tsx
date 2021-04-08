import React from 'react';
import {Cell, Grid, Block, Visible, BreakpointKeys, styled} from 'newskit';
import {UsageCard} from '../usage-card';
import {BaseCard} from '../base-card';
import {MediaListProps} from './types';
import {spanListConfig} from './span-list-config'

const CardTypes = {
  usage: UsageCard,
  base: BaseCard,
};

export const MediaList: React.FC<MediaListProps> = ({
  spaceStack,
  cardsLayout,
  layout = '3-span',
  cards,
  cardType = 'base',
  gridProps,
  parentCellProps,
  horizontalRatio,
}) => {
  const renderCards = (cardListOrientation?: 'vertical' | 'horizontal') => {
    const cardListToRender = [];
    const CardComponent = CardTypes[cardType];
    const StyledCardComponent = styled(CardComponent)`
      height: 100%;
    `;

    const cardListColumns = {
      heroCard: {xs: 12},
      notHeroCardGroup: spanListConfig[layout],
    };

    cardListToRender.push(
      cards.map((cardProps, index) => {
        let cellColumnList;
        if (layout.includes('hero') && index === 0) {
          cellColumnList = cardListColumns.heroCard;
        } else {
          cellColumnList = cardListColumns.notHeroCardGroup;
        }

        return (
          <Cell {...cellColumnList}>
            <StyledCardComponent
              layout={cardListOrientation}
              overrides={{horizontalRatio}}
              {...cardProps}
            />
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

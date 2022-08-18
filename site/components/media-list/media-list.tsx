import React from 'react';
import {StyledComponent} from '@emotion/styled';
import {Cell, Grid, Block, Visible, BreakpointKeys, styled} from 'newskit';
import LinkNext from 'next/link';
import {UsageCard, UsageCardProps} from '../usage-card';
import {BaseCard, BaseCardProps} from '../base-card';
import {MediaListProps} from './types';
import {spanListConfig} from './span-list-config';
import {FeatureCard, FeatureCardProps} from '../feature-card';
import {useReactKeys} from '../../../src/utils/hooks';

const CardTypes = {
  usage: UsageCard,
  base: BaseCard,
  feature: FeatureCard,
};

export const MediaList: React.FC<MediaListProps> = ({
  spaceStack,
  cardsLayout,
  layout = '3-span',
  cards,
  cardType = 'base',
  gridProps,
  horizontalRatio,
}) => {
  const renderCards = (cardListOrientation?: 'vertical' | 'horizontal') => {
    const cardListToRender = [];
    const CardComponent = CardTypes[cardType];
    const StyledCardComponent = styled(
      CardComponent as StyledComponent<
        BaseCardProps | UsageCardProps | FeatureCardProps | MediaListProps
      >,
    )`
      height: 100%;
    `;

    const cardListColumns = {
      heroCard: {xs: 12},
      notHeroCardGroup: spanListConfig[layout],
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const reactKeys = useReactKeys(cards.length);

    if (cards.length === 0) return null;

    cardListToRender.push(
      cards.map((cardProps, index) => {
        let cellColumnList;
        if (layout.includes('hero') && index === 0) {
          cellColumnList = cardListColumns.heroCard;
        } else {
          cellColumnList = cardListColumns.notHeroCardGroup;
        }

        const styledCardComponentWithProps = (
          <StyledCardComponent
            key={`${reactKeys[index]}card`}
            layout={cardListOrientation}
            overrides={{horizontalRatio} as {}}
            {...cardProps}
          />
        );

        return (
          <Cell {...cellColumnList} key={reactKeys[index]}>
            {cardProps.href && (
              <LinkNext
                href={cardProps.href}
                passHref
                key={`${reactKeys[index]}link`}
              >
                {styledCardComponentWithProps}
              </LinkNext>
            )}
            {!cardProps.href && styledCardComponentWithProps}
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
        <Visible key="vertical" {...verticalBreakpoints}>
          {renderCards('vertical')}
        </Visible>

        <Visible key="horizontal" {...horizontalBreakpoints}>
          {renderCards('horizontal')}
        </Visible>
      </>
    );
  };

  return (
    <Block spaceStack={spaceStack}>
      <Grid xsRowGutter="space080" xsMargin="space000" {...gridProps}>
        {renderBreakpointCards()}
      </Grid>
    </Block>
  );
};

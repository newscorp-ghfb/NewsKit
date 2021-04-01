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
}) => {
  const renderCards = (layout?: 'vertical' | 'horizontal') =>
    cards.map(({media, description, title, href, styles}) => (
      <Cell xs={xsCard} sm={smCard} md={mdCard} lg={lgCard} xl={xlCard}>
        <StyledCard layout={layout} media={media} title={title} href={href}>
          <TextBlock
            typographyPreset={
              styles?.description?.typographyPreset || 'editorialParagraph020'
            }
            stylePreset={styles?.description?.stylePreset || 'inkBase'}
          >
            <TextBlock
              typographyPreset={
                // eslint-disable-next-line prettier/prettier, no-undef
                styles?.description?.typographyPreset || 'editorialParagraph020'
              }
              // eslint-disable-next-line no-undef
              stylePreset={styles?.description?.stylePreset || 'inkBase'}
            >
              {description}
            </TextBlock>
          </StyledCard>
        </Cell>
        )
      }))
    
    return cardListToRender
  }

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

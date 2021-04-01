import {TextAlignProperty} from 'csstype';
import {
  styled,
  getStylePreset,
  getWeight,
  getSpacingInlineVertical,
  getSpacingInlineHorizontal,
} from '../utils/style';
import {
  TabsProps,
  TabsDistribution,
  DistributionWrapperProps,
  TabsBarProps,
  TabInternalProps,
  TabsIndicatorPosition,
  TabAlign,
} from './types';
import {Stack} from '../stack';
import {TextBlock, TextBlockProps} from '../text-block';
import {Button, ButtonProps} from '../button';

const getFlexFromTabsDistribution = (
  distribution: TabsDistribution,
  siblings: number,
) => {
  switch (distribution) {
    case TabsDistribution.Grow:
      return '1 0 auto';
    case TabsDistribution.Equal:
      return `0 0 ${100 / siblings}%`;
    case TabsDistribution.Start:
    default:
      return '0 0 auto';
  }
};

const alignmentPosition = (
  indicatorPosition?: TabsIndicatorPosition,
  vertical?: boolean,
) => {
  if (indicatorPosition === TabsIndicatorPosition.None) {
    return `display: none`;
  }

  if (indicatorPosition === TabsIndicatorPosition.Start) {
    return `
      top: 0px;
      left: 0px;
    `;
  }

  return vertical
    ? `
        top: 0px;
        right: 0px;
      `
    : `
      bottom: 0px;
      left: 0px;
    `;
};

export const StyledTabGroup = styled.div<
  Pick<TabsProps, 'vertical' | 'distribution' | 'overrides'>
>`
  display: flex;
  flex-flow: ${({vertical}) => (vertical ? 'row' : 'column')};
`;

export const StyledTabsBar = styled.div<TabsBarProps>`
  /* By default, the height, it is being set to 100% by the Stack */
  /* it works with distribution Grow and Equal */

  display: flex;
  ${({vertical}) =>
    (vertical ? getSpacingInlineHorizontal : getSpacingInlineVertical)(
      'tabs',
      '',
    )}
`;

export const StyledInnerTabGroup = styled(Stack)<Pick<TabsProps, 'overrides'>>`
  width: 100%;
  border-width: 0;
  position: relative;
  display: flex;
`;

export const StyledDistributionWrapper = styled.div<DistributionWrapperProps>`
  display: flex;
  align-items: center;
  width: ${({vertical}) => (vertical ? '100%' : '')};
  flex: ${({distribution, numberOfSiblings}) =>
    getFlexFromTabsDistribution(
      distribution as TabsDistribution,
      numberOfSiblings,
    )};
`;

export const StyledTabsBarIndicator = styled.div<
  Pick<TabsProps, 'vertical' | 'overrides' | 'indicatorPosition'>
>`
  ${getStylePreset(
    'tabs.selectionIndicator.indicator',
    'selectionIndicator.indicator',
  )};
  position: absolute;
  ${({indicatorPosition, vertical}) =>
    alignmentPosition(indicatorPosition, vertical)};
`;

export const StyledTabsBarTrack = styled.div<
  Pick<TabsProps, 'vertical' | 'overrides' | 'indicatorPosition'>
>`
  ${getStylePreset('tabs.selectionIndicator.track', 'selectionIndicator.track')}
  display: block;
  position: absolute;
  width: ${({vertical}) =>
    vertical
      ? getWeight('tabs.selectionIndicator.track', 'selectionIndicator.track')
      : '100%'};
  height: ${({vertical}) =>
    vertical
      ? '100%'
      : getWeight('tabs.selectionIndicator.track', 'selectionIndicator.track')};
  ${({indicatorPosition, vertical}) =>
    alignmentPosition(indicatorPosition, vertical)};
`;

const tabFlexAlign = {
  start: 'flex-start',
  end: 'flex-end',
};

const tabTextAlign = {
  start: 'left',
  end: 'right',
};

export const TabButton = styled(Button)<
  Omit<ButtonProps, 'loading'> & TabInternalProps
>`
  ${({selected}) =>
    selected && getStylePreset('tab', '', {isSelected: selected})}

  ${({align}) =>
    align && align !== TabAlign.Center
      ? {
          justifyContent: tabFlexAlign[align],
          textAlign: tabTextAlign[align] as TextAlignProperty,
        }
      : ''}
`;

export const TabPanelBlock = styled(TextBlock)<
  TextBlockProps & {selected: boolean}
>`
  width: 100%;
`;

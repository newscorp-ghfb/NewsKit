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
  Pick<TabsProps, 'vertical' | 'overrides'>
>`
  ${getStylePreset(
    'tabs.selectionIndicator.indicator',
    'selectionIndicator.indicator',
  )};
  position: absolute;
  top: ${({vertical}) => vertical && '0px'};
  right: ${({vertical}) => vertical && '0px'};
  bottom: ${({vertical}) => !vertical && '0px'};
  left: ${({vertical}) => !vertical && '0px'};
`;

export const StyledTabsBarTrack = styled.div<
  Pick<TabsProps, 'vertical' | 'overrides'>
>`
  ${getStylePreset('tabs.selectionIndicator.track', 'selectionIndicator.track')}
  display: block;
  position: absolute;
  top: ${({vertical}) => vertical && '0px'};
  right: ${({vertical}) => vertical && '0px'};
  bottom: ${({vertical}) => !vertical && '0px'};
  left: ${({vertical}) => !vertical && '0px'};
  width: ${({vertical}) =>
    vertical
      ? getWeight('tabs.selectionIndicator.track', 'selectionIndicator.track')
      : '100%'};
  height: ${({vertical}) =>
    vertical
      ? '100%'
      : getWeight('tabs.selectionIndicator.track', 'selectionIndicator.track')};
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

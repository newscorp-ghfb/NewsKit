import {TextAlignProperty} from 'csstype';
import {
  styled,
  getSpacingInset,
  getStylePreset,
  getHeight,
  getWeight,
  getSpacingInlineVertical,
  getSpacingInlineHorizontal,
} from '../utils/style';
import {
  TabsProps,
  TabsDistribution,
  DistributionWrapperProps,
  TabBarProps,
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
    case TabsDistribution.FittedFlex:
      return '1 0 auto';
    case TabsDistribution.FittedEqual:
      return `0 0 ${100 / siblings}%`;
    case TabsDistribution.LeftStacked:
    default:
      return '0 0 auto';
  }
};

export const StyledTabGroup = styled.div<
  Pick<TabsProps, 'vertical' | 'distribution' | 'overrides'>
>`
  ${getStylePreset('tabs', '')}
  ${getSpacingInset('', '')}
  display: flex;
  flex-flow: ${({vertical}) => (vertical ? 'row' : 'column')};
`;

export const StyledTabBar = styled.div<TabBarProps>`
  /* By default, the height, it is being set to 100% by the Stack */
  /* it works with FittedFlex and FittedEqual */

  height: ${getHeight(undefined, 'tabBar')};
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

export const StyledTabBarIndicator = styled.div<
  Pick<TabsProps, 'vertical' | 'overrides'>
>`
  ${getStylePreset('tabs.tabBarIndicator', 'tabBarIndicator')};
  position: absolute;
  top: ${({vertical}) => vertical && '0px'};
  right: ${({vertical}) => vertical && '0px'};
  bottom: ${({vertical}) => !vertical && '0px'};
  left: ${({vertical}) => !vertical && '0px'};
`;

export const StyledTabBarTrack = styled.div<
  Pick<TabsProps, 'vertical' | 'overrides'>
>`
  ${getStylePreset('tabs.tabBarTrack', 'tabBarTrack')}
  display: block;
  position: absolute;
  top: ${({vertical}) => vertical && '0px'};
  right: ${({vertical}) => vertical && '0px'};
  bottom: ${({vertical}) => !vertical && '0px'};
  left: ${({vertical}) => !vertical && '0px'};
  width: ${({vertical}) =>
    vertical ? getWeight('tabs.tabBarTrack', 'tabBarTrack') : '100%'};
  height: ${({vertical}) =>
    vertical ? '100%' : getWeight('tabs.tabBarTrack', 'tabBarTrack')};
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

export const TabPaneBlock = styled(TextBlock)<
  TextBlockProps & {selected: boolean}
>`
  width: 100%;
`;

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
  TabGroupProps,
  TabsDistribution,
  DistributionWrapperProps,
  tabBarProps,
} from './types';
import {Stack} from '../stack';
import {TextBlock} from '../text-block';

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
  Pick<TabGroupProps, 'vertical' | 'distribution' | 'overrides'>
>`
  ${getStylePreset('tabGroup', '')}
  ${getSpacingInset('', '')}
  display: flex;
  flex-flow: ${({vertical}) => (vertical ? 'row' : 'column')};
`;

export const StyledtabBar = styled.div<tabBarProps>`
  /* By default, the height, it is being set to 100% by the Stack */
  /* it works with FittedFlex and FittedEqual */
  height: ${getHeight(undefined, 'tabBar')};
  display: flex;
  ${({vertical}) =>
    (vertical ? getSpacingInlineHorizontal : getSpacingInlineVertical)(
      'tabGroup',
      '',
    )}
`;

export const StyledInnerTabGroup = styled(Stack)<
  Pick<TabGroupProps, 'overrides'>
>`
  flex: 1;
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
  Pick<TabGroupProps, 'vertical' | 'overrides'>
>`
  ${getStylePreset('tabGroup.tabBarIndicator', 'tabBarIndicator')};
  position: absolute;
  top: ${({vertical}) => vertical && '0px'};
  right: ${({vertical}) => vertical && '0px'};
  bottom: ${({vertical}) => !vertical && '0px'};
  left: ${({vertical}) => !vertical && '0px'};
`;

export const StyledTabBarTrack = styled.div<
  Pick<TabGroupProps, 'vertical' | 'overrides'>
>`
  ${getStylePreset('tabGroup.tabBarTrack', 'tabBarTrack')}
  display: block;
  position: absolute;
  top: ${({vertical}) => vertical && '0px'};
  right: ${({vertical}) => vertical && '0px'};
  bottom: ${({vertical}) => !vertical && '0px'};
  left: ${({vertical}) => !vertical && '0px'};
  width: ${({vertical}) =>
    vertical ? getWeight('tabGroup.tabBarTrack', 'tabBarTrack') : '100%'};
  height: ${({vertical}) =>
    vertical ? '100%' : getWeight('tabGroup.tabBarTrack', 'tabBarTrack')};
`;

export const TabPaneBlock = styled(TextBlock)`
  width: 100%;
`;

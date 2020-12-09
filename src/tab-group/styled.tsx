import {
  styled,
  getSpacingInset,
  getStylePreset,
  getWeight,
} from '../utils/style';
import {TabGroupProps} from './types';
import {Stack} from '../stack';

export const StyledInnerTabGroup = styled(Stack)<
  Pick<TabGroupProps, 'overrides'>
>`
  ${getStylePreset('tabGroup', '')}
  ${getSpacingInset('', '')}
  border-width: 0;
  position: relative;
`;

export const StyledOuterTabGroup = styled(Stack)<
  Pick<TabGroupProps, 'overrides'>
>`
  ${getStylePreset('tabGroup', '')}
  ${getSpacingInset('', '')}
  border-width: 0;
  display: flex;
  height: 100%;
  flex-wrap: wrap;
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
  z-index: 1;
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

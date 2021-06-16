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
  vertical: boolean,
) => {
  switch (distribution) {
    case TabsDistribution.Grow:
      return 'flex: 1 0 auto';
    case TabsDistribution.Equal:
      return `${vertical ? 'height' : 'width'}: 100%`;
    case TabsDistribution.Start:
    default:
      return 'flex: 0 0 auto';
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
  // IE11 fix: this has to be max-height but IE11 wants height
  ${({vertical}) => vertical && 'height: 100%;'}
`;

export const StyledTabsBar = styled.div<TabsBarProps>`
  /* By default, the height, it is being set to 100% by the Stack */
  /* it works with distribution Grow and Equal */
  position: relative;
  z-index: 0;
  ${({vertical}) => vertical && 'max-height: 100%;'}
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
  align-items: stretch;
  width: ${({vertical}) => (vertical ? '100%' : '')};
  overflow: hidden;
  ${({distribution, vertical}) =>
    getFlexFromTabsDistribution(distribution as TabsDistribution, vertical)};

  // adds 100% width to ScrollSnapAlignment component
  > * {
    width: 100%;
    display: flex;
  }
`;

export const StyledTabsBarIndicator = styled.div<
  Pick<TabsProps, 'vertical' | 'overrides' | 'indicatorPosition'>
>`
  ${getStylePreset(
    'tabs.selectionIndicator.indicator',
    'selectionIndicator.indicator',
  )};
  position: absolute;
  z-index: 2;
  ${({indicatorPosition, vertical}) =>
    alignmentPosition(indicatorPosition, vertical)};
`;

export const StyledTabsBarTrack = styled.div<
  Pick<TabsProps, 'vertical' | 'overrides' | 'indicatorPosition'>
>`
  ${getStylePreset('tabs.selectionIndicator.track', 'selectionIndicator.track')}
  display: block;
  position: absolute;
  z-index: 1;
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

export const StyledTabButton = styled(Button)<
  Omit<ButtonProps, 'loading'> & TabInternalProps
>`
  ${({selected}) =>
    selected && getStylePreset('tab', '', {isSelected: selected})}

  ${({align}) =>
    align &&
    align !== TabAlign.Center && {
      justifyContent: tabFlexAlign[align],
      textAlign: tabTextAlign[align] as TextAlignProperty,
    }}
`;

export const StyledTabPanelBlock = styled(TextBlock)<
  TextBlockProps & {selected: boolean}
>`
  width: 100%;
`;

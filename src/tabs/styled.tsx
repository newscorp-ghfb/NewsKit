/* eslint-disable import/no-extraneous-dependencies */
import {TextAlignProperty} from 'csstype';
import {
  styled,
  getStylePreset,
  getResponsiveSpace,
  getResponsiveBorder,
} from '../utils/style';
import {
  TabsProps,
  TabsDistribution,
  DistributionWrapperProps,
  TabsBarProps,
  TabInternalProps,
  TabsIndicatorPositionType,
  TabsDistributionType,
} from './types';
import {Stack} from '../stack';
import {TextBlock, TextBlockProps} from '../text-block';
import {Button, ButtonProps} from '../button';
import {logicalProps} from '../utils/logical-properties';

const getFlexFromTabsDistribution = (
  distribution: TabsDistributionType,
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
  indicatorPosition?: TabsIndicatorPositionType,
  vertical?: boolean,
) => {
  if (indicatorPosition === 'none') {
    return `display: none`;
  }

  if (indicatorPosition === 'start') {
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
  ${logicalProps()}
`;

export const StyledTabsBar = styled.div<TabsBarProps>`
  /* By default, the height, it is being set to 100% by the Stack */
  /* it works with distribution Grow and Equal */
  position: relative;
  z-index: 0;
  ${({vertical}) => vertical && 'max-height: 100%;'}

  ${({vertical}) =>
    getResponsiveSpace(
      vertical ? 'marginRight' : 'marginBottom',
      'tabs',
      '',
      'spaceInline',
    )};
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
  ${({distribution, vertical}) =>
    getFlexFromTabsDistribution(distribution, vertical)};

  ${({vertical, last}) =>
    getResponsiveSpace(
      spaceValue => {
        const value = last ? 0 : spaceValue;
        return {[vertical ? 'marginBottom' : 'marginRight']: value};
      },
      'tabs.tab',
      'tab',
      'spaceInline',
    )}

  // adds 100% width to ScrollSnapAlignment component
  > *:not(style) {
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

  ${({vertical}) =>
    getResponsiveBorder(
      borderSize =>
        vertical
          ? {width: borderSize, height: '100%'}
          : {width: '100%', height: borderSize},
      'tabs.selectionIndicator.track',
      'selectionIndicator.track',
      'weight',
    )}

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
    align !== 'center' && {
      justifyContent: tabFlexAlign[align],
      textAlign: tabTextAlign[align] as TextAlignProperty,
    }}
`;

export const StyledTabPanelBlock = styled(TextBlock)<
  TextBlockProps & {selected: boolean; isFocused: boolean}
>`
  width: 100%;
  ${({isFocused}) => getStylePreset('tabPanel', '', {isFocused})}
`;

export const StyledDividerWrapper = styled.div<
  Pick<TabsProps, 'overrides' | 'vertical'>
>`
  display: inline-flex;
  align-self: stretch;
  ${({vertical}) =>
    getResponsiveSpace(
      vertical ? 'marginRight' : 'marginBottom',
      'tabs.tab',
      'tab',
      'spaceInline',
    )}
`;

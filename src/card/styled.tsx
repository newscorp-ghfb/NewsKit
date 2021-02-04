import {CardProps, HasHref} from './types';
import {
  styled,
  getSpacingInset,
  getMinHeight,
  getSpacingInlineVertical,
  getStylePreset,
  getSpacingInlineHorizontal,
  getDefaultedValue,
  getSpacingFromTheme,
} from '../utils/style';

import {Stack} from '../stack';
import {HeadlineOverrides} from '../headline/types';
import {filterInteractiveStates, isHorizontal, isReverse} from './utils';

export const StyledCardContainer = styled.div<
  Pick<CardProps, 'overrides' | 'layout' | 'className'> & HasHref
>`
  box-sizing: border-box;
  ${({hasHref, ...props}) => filterInteractiveStates('', hasHref)(props)}
  position: relative;
  display: flex;
  flex-direction: ${({layout}) =>
    isHorizontal(layout) ? `row${isReverse(layout) && '-reverse'}` : 'column'};
`;

export const StyledCardContainerMedia = styled.div<
  Pick<CardProps, 'mediaInteractive' | 'layout' | 'overrides'> & HasHref
>`
  box-sizing: border-box;
  display: block;
  position: relative;

  /* Needed for IE flex item image resizing bug: https://github.com/philipwalton/flexbugs#flexbug-5 */
  /* Solution explained here: https://stackoverflow.com/a/43027202 */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    min-height: 1px;
  }
 

  ${({layout}) => {
    if (isHorizontal(layout) && isReverse(layout))
      return getDefaultedValue(
        getSpacingFromTheme,
        'spaceInline',
        'marginLeft',
      )('card.mediaContainer', 'mediaContainer');

    return (isHorizontal(layout)
      ? getSpacingInlineHorizontal
      : getSpacingInlineVertical)('card.mediaContainer', 'mediaContainer');
  }}

  ${({mediaInteractive}) => (mediaInteractive ? 'z-index: 2;' : null)}
  ${({hasHref, ...props}) =>
    filterInteractiveStates('mediaContainer', hasHref)(props)}
`;

export const StyledCardContainerTeaserAndActions = styled.div<
  Pick<CardProps, 'layout' | 'overrides'>
>`
  box-sizing: border-box;

  ${({layout}) =>
    isHorizontal(layout) &&
    `display: flex;
      flex-direction: column;
      /* Needed for IE FLEX CHILDREN TEXT NOT WRAPPING bug: https://medium.com/codeart-mk/internet-explorer-hacks-796200e5741c */
      @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
        min-width: 1px;
      }`}
`;

export const StyledCardContainerTeaser = styled.div<
  Pick<CardProps, 'layout' | 'overrides'> & HasHref
>`
  box-sizing: border-box;
  ${({layout}) => isHorizontal(layout) && 'flex: 1;'}
  ${({hasHref, ...props}) =>
    filterInteractiveStates('teaserContainer', hasHref)(props)}
  ${getSpacingInset('card.teaserContainer', 'teaserContainer')}

  a:not(.nk-card-link) {
    z-index: 2;
    position: relative;
  }
`;

export const StyledCardLink = styled.a<HeadlineOverrides>`
  text-decoration: none;
  border: none;

  ${getStylePreset('', 'kicker', {
    nestedCssSelector: '.nk-headline-kicker',
  })}

  ${getStylePreset('', 'heading', {
    nestedCssSelector: '.nk-headline-heading',
  })}

  
  :before {
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    position: absolute;
    z-index: 1;
  }
`;

export const StyledCardContainerActions = styled(Stack)<
  Pick<CardProps, 'overrides'> & HasHref
>`
  height: auto;
  box-sizing: border-box;
  ${getSpacingInset('card.actionsContainer', 'actionsContainer')}
  ${({hasHref, ...props}) =>
    filterInteractiveStates('actionsContainer', hasHref)(props)}
  min-height: ${getMinHeight('card.actionsContainer', 'actionsContainer')};

  position: relative;
  z-index: 2;

  /* Needed for IE min-height with flex bug: https://github.com/philipwalton/flexbugs/issues/231 */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    height: 0px;
  }
`;

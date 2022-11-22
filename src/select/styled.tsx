import {logicalPaddingProps, logicalProps} from '../utils/logical-properties';
import {Theme} from '../theme';

import {
  css,
  styled,
  getTypographyPreset,
  getStylePreset,
  getResponsiveSpace,
  getResponsiveSize,
  getSpacingCssFromTheme,
} from '../utils/style';
import {
  ButtonSelectSize,
  SelectButtonOverrides,
  SelectPanelOverrides,
} from './types';

const generateCursor = (disabled?: boolean, $loading?: boolean) => {
  if ($loading) {
    return 'wait';
  }
  if (disabled) {
    return 'not-allowed';
  }

  return 'pointer';
};

export const StyledButtonIcons = styled('div', {
  shouldForwardProp: prop =>
    !['disabled', '$spaceInline', '$loading'].includes(prop as string),
})(
  ({
    disabled,
    $spaceInline,
    $loading,
    ...props
  }: {
    disabled?: boolean;
    $spaceInline: string;
    $loading?: boolean;
  } & {theme: Theme}) => css`
    display: flex;

    ${getSpacingCssFromTheme('columnGap', $spaceInline)(props)};
    cursor: ${generateCursor(disabled, $loading)};
  `,
);

export const StyledSelectButton = styled.button<{
  $size: ButtonSelectSize;
  $loading?: boolean;
  overrides?: SelectButtonOverrides;
}>`
  all: unset;
  flex-grow: 1;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  cursor: ${({disabled, $loading}) => {
    if ($loading) {
      return 'wait';
    }
    if (disabled) {
      return 'not-allowed';
    }

    return 'pointer';
  }};

  // LOGICAL_PROPS_TO_DO: remove the below func when logical props are used in defaults
  ${({$size}) =>
    getResponsiveSpace(`padding`, `select.${$size}.button`, '', 'spaceInset')}

  ${({$size}) =>
    getResponsiveSize(`minWidth`, `select.${$size}.button`, '', 'minWidth')}

  ${({$size}) => logicalPaddingProps(`select.${$size}.button`)};
`;

export const StyledButtonContents = styled.div<{
  $size: ButtonSelectSize;
  disabled?: boolean;
  $color: string;
}>`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${({$color, disabled}) => `color: ${disabled ? 'inherit' : $color};`}
  ${({$size}) => getTypographyPreset(`select.${$size}.button`, '')}
`;

export const StyledIconBox = styled.div`
  display: flex;
`;

export const StyledDropdownIconButton = styled.button`
  all: unset;
`;

export const StyledSelectPanel = styled.div<{
  $size: ButtonSelectSize;
  $width?: number;
  $top?: number;
  $left?: number;
  $isOpen: boolean;
  overrides?: SelectPanelOverrides;
}>`
  position: absolute;
  height: auto;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  outline: none;
  z-index: 1;

  // LOGICAL_PROPS_TO_DO: remove the below func when logical props are used in defaults
  ${({$size}) =>
    getResponsiveSpace(`marginTop`, `select.${$size}.panel`, '', 'spaceStack')}

  // LOGICAL_PROPS_TO_DO: remove the below func when logical props are used in defaults
  ${({$size}) =>
    getResponsiveSpace(
      space => ({paddingTop: space, paddingBottom: space}),
      `select.${$size}.panel`,
      '',
      'spaceInset',
    )}

  ${({$size}) => logicalProps(`select.${$size}.panel`)};

  ${({$width}) => `width: ${$width}px;`}
  top: 0;
  left: 0;

  ${({$isOpen}) => `display: ${$isOpen ? 'block' : 'none'};`}

  ${({$size}) => getStylePreset(`select.${$size}.panel`, '')};

  ${({$size}) =>
    getResponsiveSize('maxHeight', `select.${$size}.panel`, '', 'maxHeight')};
`;

export const StyledModalPanel = styled.div`
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 100%;
`;

export const StyledOption = styled.div<{
  $size?: ButtonSelectSize;
  $focused?: boolean;
  $selected?: boolean;
  $spaceInline?: string;
}>`
  display: flex;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  * {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  // LOGICAL_PROPS_TO_DO: this gap is not currently applied because the parent is not display:grid
  ${({$spaceInline}) =>
    $spaceInline ? getSpacingCssFromTheme('columnGap', $spaceInline) : null};

  ${({$size, $focused, $selected}) =>
    getStylePreset(`selectOption.${$size}`, '', {
      isFocused: $focused,
      isSelected: $selected,
    })};

  ${({$size}) => getTypographyPreset(`selectOption.${$size}`, '')}

  // LOGICAL_PROPS_TO_DO: remove the below func when logical props are used in defaults
  ${({$size}) =>
    getResponsiveSpace(`padding`, `selectOption.${$size}`, '', 'spaceInset')}

  ${logicalProps()};

  ${({$size}) =>
    getResponsiveSize('minHeight', `selectOption.${$size}`, '', 'minHeight')}
`;

export const StyledOptionIcon = styled.div<{
  $size: ButtonSelectSize;
  $focused?: boolean;
  $selected?: boolean;
}>`
  display: flex;
  flex-shrink: 0;

  ${({$size, $focused, $selected}) =>
    getStylePreset(`selectOption.${$size}.icon`, '', {
      isFocused: $focused,
      isSelected: $selected,
    })};
`;

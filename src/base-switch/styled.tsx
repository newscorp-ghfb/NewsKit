import {
  getResponsiveSize,
  getResponsiveSpace,
  getStylePreset,
  getTransitionPreset,
  getTypographyPreset,
  styled,
} from '../utils';
import {
  logicalMarginProps,
  logicalProps,
  logicalPaddingProps,
} from '../utils/logical-properties';
import {BaseSwitchProps} from './types';

const STACKING_CONTEXT = {
  feedback: '1',
  input: '2',
};

export const StyledSwitchAndLabelWrapper = styled.label<
  Pick<BaseSwitchProps, 'state' | 'size' | 'overrides' | 'path'>
>`
  display: flex;
  align-items: center;

  ${({state}) => ({cursor: state === 'disabled' ? 'not-allowed' : 'pointer'})};

  ${({size, path}) =>
    getResponsiveSpace('marginBottom', `${path}.${size}`, '', 'spaceStack')}

  ${({size, path}) => logicalProps(`${path}.${size}`)}
`;

// todo: is this container element necessary?
export const StyledSwitchContainer = styled.div<
  Pick<
    BaseSwitchProps,
    'size' | 'overrides' | 'state' | 'labelPosition' | 'path'
  >
>`
  position: relative;
  display: inline-block;
  align-self: start;
  flex-shrink: 0;

  * {
    box-sizing: border-box;
  }

  ${({size, path}) =>
    getResponsiveSize(
      rectSize => ({width: rectSize, height: rectSize}),
      `${path}.${size}.input`,
      'input',
      'size',
    )}

  ${({size, path}) =>
    getResponsiveSize(
      'blockSize',
      `${path}.${size}.input`,
      'input',
      'blockSize',
    )}
  
  ${({size, path}) =>
    getResponsiveSize(
      'inlineSize',
      `${path}.${size}.input`,
      'input',
      'inlineSize',
    )}

  ${({size, labelPosition, path}) =>
    getResponsiveSpace(
      labelPosition === 'end' ? 'marginRight' : 'marginLeft',
      `${path}.${size}.input`,
      'input',
      'spaceInline',
    )}
  ${({size, path}) => logicalMarginProps(`${path}.${size}.input`, 'input')}
`;

const insetCSS = `
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
`;

export const StyledSwitch = styled.div<
  Pick<BaseSwitchProps, 'checked' | 'size' | 'state' | 'overrides' | 'path'> & {
    isFocused: boolean;
    isHovered: boolean;
    feedbackIsVisible: boolean;
    isFocusedVisible: boolean;
  }
>`
  ${insetCSS}
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({size, checked, state, isFocused, isHovered, isFocusedVisible, path}) =>
    getStylePreset(`${path}.${size}.input`, 'input', {
      isChecked: checked,
      isDisabled: state === 'disabled',
      isInvalid: state === 'invalid',
      isValid: state === 'valid',
      isFocused,
      isHovered,
      isFocusedVisible,
    })};

  ${({feedbackIsVisible}) =>
    feedbackIsVisible && `z-index: ${STACKING_CONTEXT.input}`};

  ${({size, path}) => getTransitionPreset(`${path}.${size}.input`, 'input')};
  ${({size, path}) => logicalPaddingProps(`${path}.${size}.input`, 'input')}
`;

export const StyledSwitchFeedback = styled.div<
  Pick<BaseSwitchProps, 'size' | 'overrides' | 'state' | 'path' | 'checked'> & {
    isHovered: boolean;
    isActive: boolean;
    centreOnThumb?: boolean;
    thumbOffset: string;
  }
>`
  position: absolute;
  top: 50%;

  ${({centreOnThumb, size, checked, path, thumbOffset, ...rest}) => {
    if (!centreOnThumb) {
      return {left: '50%'};
    }
    return getResponsiveSize(
      thumbSize => ({
        left: checked
          ? `calc(100% - (${thumbSize} / 2) - ${thumbOffset || `0px`})`
          : `calc((${thumbSize} / 2) + ${thumbOffset || `0px`})`,
      }),
      `${path}.${size}.thumb`,
      'thumb',
      'size',
    )(rest);
  }}

  ${({isHovered}) => isHovered && `z-index: ${STACKING_CONTEXT.feedback}`};

  ${({size, isHovered, isActive, state, path}) =>
    getStylePreset(`${path}.${size}.feedback`, 'feedback', {
      isHovered,
      isActive,
      isDisabled: state === 'disabled',
      isInvalid: state === 'invalid',
      isValid: state === 'valid',
      // when is not HOVER we need to remove the hover so it does not apply as class:hover
      omitStates: isHovered ? [] : ['hover'],
    })}
  ${({size, path, isHovered}) =>
    getResponsiveSize(
      rectSize => ({
        width: isHovered ? rectSize : '1px',
        height: isHovered ? rectSize : '1px',
        transform: `translate3d(calc(${rectSize} / -2), calc(${rectSize} / -2), 0)`,
      }),
      `${path}.${size}.feedback`,
      'feedback',
      'size',
    )};
  ${({size, path}) =>
    getTransitionPreset(`${path}.${size}.feedback`, 'feedback')};
`;

export const StyledInput = styled.input<
  Omit<BaseSwitchProps, 'defaultSwitchSelectorComponent'>
>`
  ${insetCSS}
  margin: 0;
  opacity: 0;
  cursor: inherit;
`;

export const StyledLabel = styled.span<
  Pick<BaseSwitchProps, 'size' | 'overrides' | 'state' | 'path'>
>`
  ${({size, state, path}) =>
    getStylePreset(`${path}.${size}.label`, 'label', {
      isDisabled: state === 'disabled',
      isInvalid: state === 'invalid',
      isValid: state === 'valid',
    })}
  ${({size, path}) =>
    getTypographyPreset(`${path}.${size}.label`, 'label', {
      withCrop: true,
    })}
`;

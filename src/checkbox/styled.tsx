import {
  getResponsiveSize,
  getResponsiveSpace,
  getStylePreset,
  getTypographyPreset,
  styled,
} from '../utils';
import {CheckboxProps} from './types';

const STACKING_CONTEXT = {
  feedback: '1',
  input: '2',
};

export const StyledContainer = styled.label<Pick<CheckboxProps, 'state'>>`
  display: flex;
  align-items: center;
  ${({state}) => ({cursor: state === 'disabled' ? 'not-allowed' : 'pointer'})};
`;

export const StyledCheckboxContainer = styled.div<
  Pick<CheckboxProps, 'size' | 'overrides' | 'state' | 'labelPosition'>
>`
  position: relative;
  display: inline-block;
  align-self: start;
  flex-shrink: 0;

  * {
    box-sizing: border-box;
  }

  ${({size}) =>
    getResponsiveSize(
      rectSize => ({width: rectSize, height: rectSize}),
      `checkbox.${size}.input`,
      'input',
      'size',
    )}

  ${({size, labelPosition}) =>
    getResponsiveSpace(
      labelPosition === 'end' ? 'marginRight' : 'marginLeft',
      `checkbox.${size}.input`,
      'input',
      'spaceInline',
    )}
`;

const insetCSS = `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const StyledCheckbox = styled.div<
  Pick<CheckboxProps, 'checked' | 'size' | 'state' | 'overrides'> & {
    isFocused: boolean;
    isHover: boolean;
    feedbackIsVisible: boolean;
  }
>`
  ${insetCSS}
  display: flex;
  justify-content: center;
  align-items: center;
  ${({size, checked, state, isFocused, isHover}) =>
    getStylePreset(`checkbox.${size}.input`, 'input', {
      isChecked: checked,
      isDisabled: state === 'disabled',
      isInvalid: state === 'invalid',
      isValid: state === 'valid',
      isFocused,
      isHover,
    })};
  ${({feedbackIsVisible}) =>
    feedbackIsVisible && `z-index: ${STACKING_CONTEXT.input}`}
`;

export const StyledFeedback = styled.div<
  Pick<CheckboxProps, 'size' | 'overrides' | 'state'> & {
    isFocused: boolean;
    isHover: boolean;
  }
>`
  position: absolute;
  top: 50%;
  left: 50%;
  ${({isHover, isFocused}) =>
    (isHover || isFocused) && `z-index: ${STACKING_CONTEXT.feedback}`};

  ${({size, isHover, isFocused}) =>
    getStylePreset(`checkbox.${size}.feedback`, 'feedback', {
      isHover,
      isFocused,
      // when is not HOVER we need to remove the hover so it does not apply as class:hover
      omitStates: isHover ? [] : ['hover'],
    })}
  ${({size}) =>
    getResponsiveSize(
      rectSize => ({
        width: rectSize,
        height: rectSize,
        transform: `translate3d(calc(${rectSize} / -2), calc(${rectSize} / -2), 0)`,
      }),
      `checkbox.${size}.feedback`,
      'feedback',
      'size',
    )};
`;

export const StyledInput = styled.input<CheckboxProps>`
  ${insetCSS}
  margin: 0;
  opacity: 0;
  cursor: inherit;
`;

export const StyledLabel = styled.span<
  Pick<CheckboxProps, 'size' | 'overrides' | 'state'>
>`
  ${({size, state}) =>
    getStylePreset(`checkbox.${size}.label`, 'label', {
      isDisabled: state === 'disabled',
      isInvalid: state === 'invalid',
      isValid: state === 'valid',
    })}
  ${({size}) => getTypographyPreset(`checkbox.${size}.label`, 'label')}
`;

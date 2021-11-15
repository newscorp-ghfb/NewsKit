import {
  getResponsiveSize,
  getResponsiveSpace,
  getStylePreset,
  styled,
} from '../utils';
import {CheckboxProps} from './types';

export const StyledContainer = styled.div<
  Pick<CheckboxProps, 'size' | 'overrides' | 'state'>
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

  ${({size}) =>
    getResponsiveSpace(
      'marginRight',
      `checkbox.${size}.input`,
      'input',
      'spaceInline',
    )}

  ${({state}) => ({cursor: state === 'disabled' ? 'not-allowed' : 'pointer'})};

  &:hover .nk-checkbox-ripple {
    ${({state}) => state !== 'disabled' && `opacity: 1`}
  }
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
  }
>`
  ${insetCSS}
  display: flex;
  justify-content: center;
  align-items: center;
  ${({size, checked, state, isFocused}) =>
    getStylePreset(`checkbox.${size}.input`, 'input', {
      isChecked: checked,
      isDisabled: state === 'disabled',
      isInvalid: state === 'invalid',
      isValid: state === 'valid',
      isFocused,
    })};
`;

export const StyledRipple = styled.div<
  Pick<CheckboxProps, 'size' | 'overrides'>
>`
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0;

  ${({size}) => getStylePreset(`checkbox.${size}.ripple`, 'ripple', {})}

  ${({size}) =>
    getResponsiveSize(
      rectSize => ({
        width: rectSize,
        height: rectSize,
        transform: `translate3d(calc(${rectSize} / -2), calc(${rectSize} / -2), 0)`,
      }),
      `checkbox.${size}.ripple`,
      'ripple',
      'size',
    )}
`;

export const StyledInput = styled.input<CheckboxProps>`
  ${insetCSS}
  margin: 0;
  opacity: 0;
  ${({state}) => ({
    cursor: state === 'disabled' ? 'not-allowed' : 'pointer',
  })};
`;

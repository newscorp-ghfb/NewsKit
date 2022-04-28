import {
  getResponsiveSize,
  getResponsiveSpace,
  getStylePreset,
  getTransitionPreset,
  getTypographyPreset,
  styled,
} from '../utils';
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
`;

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

  ${({size, labelPosition, path}) =>
    getResponsiveSpace(
      labelPosition === 'end' ? 'marginRight' : 'marginLeft',
      `${path}.${size}.input`,
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

export const StyledSwitch = styled.div<
  Pick<BaseSwitchProps, 'checked' | 'size' | 'state' | 'overrides' | 'path'> & {
    isFocused: boolean;
    isHovered: boolean;
    feedbackIsVisible: boolean;
    isFocusedVisible: boolean;
  }
>`
  ${insetCSS}
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
      isFocusedVisible, // Build of Evgeni's PPDSC-2054 so outline comes from styled preset
    })};

  ${({feedbackIsVisible}) =>
    feedbackIsVisible && `z-index: ${STACKING_CONTEXT.input}`};

  ${({size, path}) => getTransitionPreset(`${path}.${size}.input`, 'input')};
`;

export const StyledSwitchFeedback = styled.div<
  Pick<BaseSwitchProps, 'size' | 'overrides' | 'state' | 'path'> & {
    isHovered: boolean;
    isActive: boolean;
  }
>`
  position: absolute;
  top: 50%;
  left: 50%;
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
  ${({size, path}) =>
    getResponsiveSize(
      rectSize => ({
        width: rectSize,
        height: rectSize,
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
  ${({size, path}) => getTypographyPreset(`${path}.${size}.label`, 'label')}
`;

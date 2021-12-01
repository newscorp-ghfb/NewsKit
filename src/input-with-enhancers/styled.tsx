import {EnhancerOverrides, CommonInputProps} from '../form/types';
import {EnhancerProps} from './types';
import {
  getResponsiveSize,
  getResponsiveSpace,
  getStylePreset,
  getResponsiveSpacingStackHorizontal,
  styled,
} from '../utils/style';
import {TextFieldSize} from '../text-field/types';

export const StyledEnhancer = styled.div<EnhancerProps>`
  align-self: center;

  display: flex;
  align-items: center;
  ${({componentDefaultsPath, position}) =>
    getResponsiveSpace(
      position === 'startEnhancer' ? 'marginLeft' : 'marginRight',
      `${componentDefaultsPath}.spaceInline`,
      '',
      'spaceInline',
    )}
`;

export const StyledInputContainer = styled.div<
  Omit<CommonInputProps, 'size'> & {
    size?: TextFieldSize; // remove this override when https://nidigitalsolutions.jira.com/browse/PPDSC-1872 is implemented
    componentDefaultsPath: string;
    focused?: boolean;
    overrides?: EnhancerOverrides;
  }
>`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  ${({componentDefaultsPath}) =>
    getResponsiveSize('width', componentDefaultsPath, '', 'width')}
  ${({componentDefaultsPath}) =>
    getResponsiveSize('height', componentDefaultsPath, '', 'height')}
  ${({componentDefaultsPath}) =>
    getResponsiveSize('maxWidth', componentDefaultsPath, '', 'maxWidth')}
  ${({componentDefaultsPath}) =>
    getResponsiveSize('maxHeight', componentDefaultsPath, '', 'maxHeight')}
  ${({componentDefaultsPath}) =>
    getResponsiveSpacingStackHorizontal(componentDefaultsPath)}

  ${({componentDefaultsPath, focused, state}) =>
    getStylePreset(componentDefaultsPath, '', {
      isFocused: focused,
      isInvalid: state === 'invalid',
      isDisabled: state === 'disabled',
      isValid: state === 'valid',
    })}

  ${({componentDefaultsPath}) =>
    getResponsiveSize('minHeight', componentDefaultsPath, '', 'minHeight')}
`;

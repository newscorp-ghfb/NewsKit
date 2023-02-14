import {EnhancerOverrides} from '../form/types';
import {EnhancerProps, WithEnhancersProps} from './types';
import {
  getResponsiveSize,
  getResponsiveSpace,
  getStylePreset,
  getResponsiveSpacingStackHorizontal,
  styled,
} from '../utils/style';
import {TextFieldSize} from '../text-field/types';

const getMarginDirection = ({
  marginPosition,
  position,
}: Pick<EnhancerProps, 'marginPosition' | 'position'>) => {
  if (marginPosition === 'inside') {
    return position === 'startEnhancer' ? 'marginRight' : 'marginLeft';
  }

  return position === 'startEnhancer' ? 'marginLeft' : 'marginRight';
};

export const StyledEnhancer = styled.div<EnhancerProps>`
  align-self: center;

  display: flex;
  align-items: center;
  ${({componentDefaultsPath, position, marginPosition}) =>
    getResponsiveSpace(
      getMarginDirection({position, marginPosition}),
      `${componentDefaultsPath}.spaceInline`,
      '',
      'spaceInline',
    )};

  ${({alignSelf}) => alignSelf && {alignSelf}}
`;

export const StyledInputContainer = styled.div<
  Omit<WithEnhancersProps, 'size'> & {
    size?: TextFieldSize; // remove this override when https://nidigitalsolutions.jira.com/browse/PPDSC-1872 is implemented
    componentDefaultsPath: string;
    focused?: boolean;
    overrides?: EnhancerOverrides;
  }
>`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;

  ${({componentDefaultsPath}) =>
    getResponsiveSize('width', componentDefaultsPath, '', 'width')}
  ${({componentDefaultsPath}) =>
    getResponsiveSize('height', componentDefaultsPath, '', 'height')}
  ${({componentDefaultsPath}) =>
    getResponsiveSize('maxWidth', componentDefaultsPath, '', 'maxWidth')}
  ${({componentDefaultsPath}) =>
    getResponsiveSize('maxHeight', componentDefaultsPath, '', 'maxHeight')}
  ${({componentDefaultsPath}) =>
    getResponsiveSize('minHeight', componentDefaultsPath, '', 'minHeight')}

   // LOGICAL_PROPS_TO_DO: remove the below func when logical props are used in defaults
  ${({componentDefaultsPath}) =>
    getResponsiveSpacingStackHorizontal(componentDefaultsPath)}

  ${({componentDefaultsPath, focused, state}) =>
    getStylePreset(componentDefaultsPath, '', {
      isFocused: focused,
      isInvalid: state === 'invalid',
      isDisabled: state === 'disabled',
      isValid: state === 'valid',
    })};
`;

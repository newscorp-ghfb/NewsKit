import {EnhancerOverrides} from '../form/types';
import {EnhancerProps, WithEnhancersProps} from './types';
import {
  getResponsiveSize,
  getResponsiveSpace,
  getStylePreset,
  getResponsiveSpacingStackHorizontal,
  styled,
  css,
} from '../utils/style';
import {TextFieldSize} from '../text-field/types';
import {logicalProps} from '../utils/logical-properties';

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
    resize?: string;
  }
>`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;

  ${({resize}) =>
    resize &&
    css`
      resize: ${resize};
      position: relative;
      overflow: hidden;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 16px;
        height: 16px;
        // TODO: proper color
        background: linear-gradient(
          135deg,
          rgba(0, 0, 0, 0) 0,
          rgba(0, 0, 0, 0) 50%,
          rgba(0, 0, 0, 0.1) 50%
        );
      }
    `}

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
    })}

  ${({componentDefaultsPath}) => logicalProps(componentDefaultsPath)};
`;

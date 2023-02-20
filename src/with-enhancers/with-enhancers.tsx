import React from 'react';
import {WithEnhancersProps, EnhancerProps} from './types';
import {StyledInputContainer, StyledEnhancer} from './styled';

const Enhancer = ({
  valid,
  invalid,
  position,
  overrides,
  children,
  ...props
}: EnhancerProps) => (
  <StyledEnhancer
    valid={valid}
    invalid={invalid}
    position={position}
    overrides={overrides}
    {...props}
  >
    {children}
  </StyledEnhancer>
);

export const WithEnhancers = React.forwardRef<
  HTMLDivElement,
  WithEnhancersProps
>(
  (
    {
      overrides,
      componentDefaultsPath,
      state,
      startEnhancer,
      endEnhancer,
      isFocused,
      children,
      marginPosition = 'outside',
      alignSelf,
    },
    ref,
  ) => (
    <StyledInputContainer
      ref={ref}
      componentDefaultsPath={componentDefaultsPath}
      overrides={overrides}
      state={state}
      focused={isFocused}
    >
      {startEnhancer && (
        <Enhancer
          position="startEnhancer"
          componentDefaultsPath={`${componentDefaultsPath}.startEnhancer`}
          /* istanbul ignore next */
          overrides={overrides?.startEnhancer}
          alignSelf={alignSelf}
          marginPosition={marginPosition}
        >
          {startEnhancer}
        </Enhancer>
      )}
      {children}
      {endEnhancer && (
        <Enhancer
          componentDefaultsPath={`${componentDefaultsPath}.endEnhancer`}
          position="endEnhancer"
          /* istanbul ignore next */
          overrides={overrides?.endEnhancer}
          alignSelf={alignSelf}
          marginPosition={marginPosition}
        >
          {endEnhancer}
        </Enhancer>
      )}
    </StyledInputContainer>
  ),
);

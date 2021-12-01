import React from 'react';
import {InputWithEnhancersProps, EnhancerProps} from './types';
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

export const InputWithEnhancers = React.forwardRef<
  HTMLDivElement,
  InputWithEnhancersProps
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
          overrides={overrides?.startEnhancer}
        >
          {startEnhancer}
        </Enhancer>
      )}
      {children}
      {endEnhancer && (
        <Enhancer
          componentDefaultsPath={`${componentDefaultsPath}.endEnhancer`}
          position="endEnhancer"
          overrides={overrides?.endEnhancer}
        >
          {endEnhancer}
        </Enhancer>
      )}
    </StyledInputContainer>
  ),
);

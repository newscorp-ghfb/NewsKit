import React from 'react';
import {TextFieldSize} from '../text-field';
import {StyledAssistiveText} from './styled';
import {WithEnhancers} from '../with-enhancers/with-enhancers';
import {AssistiveTextProps} from './types';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';

export const ThemelessAssistiveText = ({
  overrides,
  size = 'medium' as TextFieldSize,
  state,
  children,
  startEnhancer,
  endEnhancer,
  ...props
}: AssistiveTextProps) => (
  <WithEnhancers
    componentDefaultsPath={`assistiveText.${size}`}
    overrides={overrides}
    state={state}
    startEnhancer={startEnhancer}
    endEnhancer={endEnhancer}
    marginPosition="inside"
    alignSelf="start"
  >
    {children && (
      <StyledAssistiveText
        aria-disabled={state === 'disabled' ? true : undefined}
        size={size}
        overrides={overrides}
        state={state}
        role={state === 'invalid' ? 'alert' : undefined}
        aria-live={state === 'invalid' ? 'polite' : undefined}
        {...props}
      >
        {children}
      </StyledAssistiveText>
    )}
  </WithEnhancers>
);

export const AssistiveText = withOwnTheme(ThemelessAssistiveText)({
  defaults,
  stylePresets,
});

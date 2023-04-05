import React from 'react';
import {StyledAssistiveText} from './styled';
import {WithEnhancers} from '../with-enhancers/with-enhancers';
import {AssistiveTextProps} from './types';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';
import {
  omitLogicalMarginPropsFromOverrides,
  omitLogicalPaddingPropsFromOverrides,
} from '../utils/logical-properties';

const ThemelessAssistiveText = React.forwardRef<
  HTMLParagraphElement,
  AssistiveTextProps
>(
  (
    {
      overrides,
      size = 'medium',
      state,
      children,
      startEnhancer,
      endEnhancer,
      ...props
    },
    ref,
  ) => {
    const enhancersOverrides = omitLogicalPaddingPropsFromOverrides(overrides);
    const textBlockOverrides = omitLogicalMarginPropsFromOverrides(overrides);

    return (
      <WithEnhancers
        componentDefaultsPath={`assistiveText.${size}`}
        overrides={enhancersOverrides}
        state={state}
        startEnhancer={startEnhancer}
        endEnhancer={endEnhancer}
        marginPosition="inside"
        alignSelf="start"
      >
        {children && (
          <StyledAssistiveText
            ref={ref}
            aria-disabled={state === 'disabled' ? true : undefined}
            size={size}
            state={state}
            role={state === 'invalid' ? 'alert' : undefined}
            aria-live={state === 'invalid' ? 'polite' : undefined}
            overrides={textBlockOverrides}
            {...props}
          >
            {children}
          </StyledAssistiveText>
        )}
      </WithEnhancers>
    );
  },
);

export const AssistiveText = withOwnTheme(ThemelessAssistiveText)({
  defaults,
  stylePresets,
});

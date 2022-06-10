import * as React from 'react';
import {
  FloatingContext,
  useClick,
  useInteractions as floatingUiUseInteractions,
} from '@floating-ui/react-dom-interactions';
import {PopoverProps} from './types';
import {withOwnTheme} from '../utils/with-own-theme';
import defaults from './defaults';
import stylePresets from './style-presets';
import {BaseFloatingElement} from '../base-floating-element/base-floating-element';
import {BuildAriaAttributesFn} from '../base-floating-element';

const useInteractions = (context: FloatingContext<HTMLElement>) =>
  floatingUiUseInteractions([useClick(context)]);

const buildContextAriaAttributes: BuildAriaAttributesFn = ({
  floating: {id},
}) => ({
  'aria-haspopup': 'dialog',
  'aria-controls': id,
});

const buildFloatingElementAriaAttributes: BuildAriaAttributesFn = ({
  floating: {open},
}) => ({
  'aria-expanded': open,
});

const ThemelessPopover: React.FC<PopoverProps> = ({
  children,
  content,
  ...props
}) => {
  if (!content) {
    return children;
  }

  return (
    <BaseFloatingElement
      path="popover"
      content={content}
      buildContextAriaAttributes={buildContextAriaAttributes}
      buildFloatingElementAriaAttributes={buildFloatingElementAriaAttributes}
      useInteractions={useInteractions}
      role="dialog"
      {...props}
    >
      {children}
    </BaseFloatingElement>
  );
};

export const Popover = withOwnTheme(ThemelessPopover)({
  defaults,
  stylePresets,
});

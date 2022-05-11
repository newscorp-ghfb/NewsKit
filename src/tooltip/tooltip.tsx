import * as React from 'react';
import {TooltipProps} from './types';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';
import {StyledTooltip} from './styled';
import {useTooltio} from './use-tooltip';

const ThemelessTooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({children, title, trigger, open, placement, overrides, ...props}, ref) => {
    if (!title) {
      return <>{children}</>;
    }

    return (
      <>
        {React.cloneElement(children, childrenProps)}
        <StyledTooltip trigger={trigger} {...props}>
          {title}
        </StyledTooltip>
      </>
    );
  },
);

export const Tooltip = withOwnTheme(ThemelessTooltip)({
  defaults,
  stylePresets,
});

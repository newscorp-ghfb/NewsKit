import React from 'react';
import {styled, getStylePreset, handleResponsiveProp, MQ} from '../utils/style';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';
import {logicalProps, LogicalProps} from '../utils/logical-properties';

export interface DividerOverrides {
  stylePreset?: MQ<string>;
}
export interface DividerProps {
  vertical?: MQ<boolean>;
  overrides?: DividerOverrides & LogicalProps;
}

const StyledDivider = styled.hr<DividerProps>`
  ${getStylePreset('divider.stylePreset', 'stylePreset')};
  border-width: 0px;
  margin: 0;
  ${handleResponsiveProp({vertical: false}, ({vertical}, props) => {
    const {borderWidth} = getStylePreset('divider')(props);
    return vertical
      ? {
          borderLeftWidth: borderWidth,
          display: 'inline-block',
          height: '100%',
        }
      : {
          borderTopWidth: borderWidth,
          width: '100%',
        };
  })}
  ${logicalProps('divider')}
`;

const ThemelessDivider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({...props}, ref) => (
    <StyledDivider ref={ref} data-testid="divider" aria-hidden {...props} />
  ),
);

export const Divider = withOwnTheme(ThemelessDivider)({defaults, stylePresets});

import React from 'react';
import {styled, getStylePreset, handleResponsiveProp, MQ} from '../utils/style';

export interface DividerOverrides {
  stylePreset?: MQ<string>;
}
export interface DividerProps {
  vertical?: MQ<boolean>;
  overrides?: DividerOverrides;
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
`;

export const Divider: React.FC<DividerProps> = props => (
  <StyledDivider data-testid="divider" aria-hidden {...props} />
);

import React from 'react';
import {styled, getStylePreset, MQ} from '../utils/style';

import {StylePresetKeys} from '../theme';

interface DividerProps {
  vertical?: boolean;
  overrides?: {
    stylePreset?: MQ<StylePresetKeys>;
  };
}

const StyledDivider = styled.hr<DividerProps>`
  ${getStylePreset('divider.stylePreset', 'stylePreset')};
  border-width: 0px;
  margin: 0;
`;

const StyledVerticalDivider = styled(StyledDivider)`
  border-left-width: ${({...props}) =>
    getStylePreset('divider')(props).borderWidth};
  display: inline-block;
  height: 100%;
`;

const StyledHorizontalDivider = styled(StyledDivider)`
  border-top-width: ${({...props}) =>
    getStylePreset('divider')(props).borderWidth};
  width: 100%;
`;

export const Divider: React.FC<DividerProps> = ({vertical, ...props}) =>
  vertical ? (
    <StyledVerticalDivider data-testid="divider" aria-hidden {...props} />
  ) : (
    <StyledHorizontalDivider data-testid="divider" aria-hidden {...props} />
  );

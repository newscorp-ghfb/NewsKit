import React from 'react';
import {styled} from '../utils/style';
import {getStylePreset} from '../utils/style-preset';
import {StylePresetKeys} from '../themes/mappers/style-preset';

interface DividerProps {
  vertical?: boolean;
  overrides?: {
    stylePreset: StylePresetKeys;
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
    <StyledVerticalDivider data-testid="divider" {...props} />
  ) : (
    <StyledHorizontalDivider data-testid="divider" {...props} />
  );

import {
  styled,
  getStylePresetFromTheme,
  getTypographyPresetFromTheme,
  getSizingFromTheme,
  getSpacingFromTheme,
} from 'newskit';
import {TableCellProps} from './types';

export const StyledTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
`;

export const StyledHeader = styled.th<TableCellProps>`
  ${getStylePresetFromTheme('tableHeader')};
  ${getTypographyPresetFromTheme('utilityLabel010')};
  margin-bottom: ${getSpacingFromTheme('space040')};
  height: ${getSizingFromTheme('sizing070')};
  text-align: left;
  vertical-align: top;
  min-width: ${getSpacingFromTheme('space090', 'minWidth')};
  width: ${getSpacingFromTheme('', 'maxWidth')};
  white-space: nowrap;
`;

export const StyledTableRow = styled.tr<{last?: boolean}>`
  ${getStylePresetFromTheme('tableRow')}
  ${getTypographyPresetFromTheme('utilityBody020')}
  ${({last}) => last && {borderWidth: 0}}
`;

export const StyledDataCell = styled.td<TableCellProps>`
  padding: ${getSpacingFromTheme('space040')} ${getSpacingFromTheme('space040')}
    ${getSpacingFromTheme('space040')} ${getSpacingFromTheme('space000')};
  min-width: ${getSpacingFromTheme('', 'minWidth')};
  max-width: ${getSpacingFromTheme('', 'maxWidth')};
  text-align: ${({textAlign}) => textAlign || 'left'};
  white-space: ${({noWrap}) => noWrap && 'nowrap'};
  vertical-align: top;
  overflow: ${({maxWidth}) => maxWidth && 'hidden'};
  & div {
    overflow: ${({maxWidth}) => maxWidth && 'hidden'};
  }
`;

export const StyledContainer = styled.div`
  overflow-x: auto;
`;

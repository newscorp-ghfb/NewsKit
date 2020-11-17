import {
  styled,
  getStylePresetFromTheme,
  getTypographyPresetFromTheme,
  getSizingFromTheme,
  getSpacingFromTheme,
} from 'newskit';

export const StyledContainer = styled.div`
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
`;

export const StyledHeader = styled.th`
  ${getStylePresetFromTheme('tableHeader')}
  ${getTypographyPresetFromTheme('utilityLabel020')}
  margin-bottom: ${getSpacingFromTheme('space020')};
  height: ${getSizingFromTheme('sizing080')};
  text-align: left;
  vertical-align: middle;
`;

export const StyledTableRow = styled.tr`
  ${getStylePresetFromTheme('tableRow')}
  ${getTypographyPresetFromTheme('utilityBody020')}
`;

export const StyledDataCell = styled.td`
  padding: ${getSpacingFromTheme('space020')} ${getSpacingFromTheme('space020')}
    ${getSpacingFromTheme('space020')} ${getSpacingFromTheme('space000')};
  min-width: ${getSpacingFromTheme('space090')};
`;

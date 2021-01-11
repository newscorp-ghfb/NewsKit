import {
  styled,
  getSizingFromTheme,
  getTypographyPresetFromTheme,
  getColorFromTheme,
} from 'newskit';

export const KnobContainer = styled.div`
  margin-bottom: ${getSizingFromTheme('sizing020')};
  margin-right: ${getSizingFromTheme('sizing020')};
  width: 100%;
`;

export const StyledTitle = styled.span`
  display: block;
  margin: ${getSizingFromTheme('sizing040')} 0px;
  ${getTypographyPresetFromTheme('utilityLabel030')};
  color: ${getColorFromTheme('inkBase')};
`;

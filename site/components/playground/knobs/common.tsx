import {
  styled,
  getSizingFromTheme,
  getTypographyPresetFromTheme,
  getColorFromTheme,
} from 'newskit';

export const KnobContainer = styled.div`
  margin-bottom: ${getSizingFromTheme('sizing040')};
  margin-right: ${getSizingFromTheme('sizing020')};
  width: 100%;
`;

export const StyledTitle = styled.span`
  display: block;
  margin: ${getSizingFromTheme('sizing030')} 0px;
  ${getTypographyPresetFromTheme('utilityLabel020')};
  color: ${getColorFromTheme('inkBase')};
`;

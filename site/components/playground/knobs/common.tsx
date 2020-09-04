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
  ${getTypographyPresetFromTheme('label030')};
  color: ${getColorFromTheme('inkBase')};
`;

export const getHash = () =>
  (Math.random() * 10 ** 10).toString(16).split('.')[0];

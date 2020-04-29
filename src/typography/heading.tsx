import {
  getTypePresetFromTheme,
  getColorFromTheme,
  styled,
  getSizingFromTheme,
  getFontSizingFromTheme,
} from '../utils/style';

export interface HeadingProps {
  as?: React.ElementType;
  bold?: boolean;
}

export const Heading1 = styled.h1<HeadingProps>`
  ${getTypePresetFromTheme('heading070')};
  color: ${getColorFromTheme('inkContrast')};
  margin: 0 0 ${getSizingFromTheme('sizing050')} 0;
  font-weight: ${({theme, bold}) => (bold ? theme.fonts.fontWeight040 : null)};
`;
Heading1.displayName = 'Heading1';
export const H1 = Heading1;

export const Heading2 = styled.h2<HeadingProps>`
  ${getTypePresetFromTheme('heading050')};
  color: ${getColorFromTheme('inkContrast')};
  margin: 0 0 ${getSizingFromTheme('sizing040')} 0;
  font-weight: ${({theme, bold}) => (bold ? theme.fonts.fontWeight040 : null)};
`;
Heading2.displayName = 'Heading2';
export const H2 = Heading2;

export const Heading3 = styled.h3<HeadingProps>`
  ${getTypePresetFromTheme('heading030')};
  color: ${getColorFromTheme('inkContrast')};
  margin: 0 0 ${getSizingFromTheme('sizing030')} 0;
  font-weight: ${({theme, bold}) => (bold ? theme.fonts.fontWeight040 : null)};
`;
Heading3.displayName = 'Heading3';
export const H3 = Heading3;

export const Heading4 = styled.h4<HeadingProps>`
  ${getTypePresetFromTheme('heading020')};
  color: ${getColorFromTheme('inkContrast')};
  margin: 0 0 ${getSizingFromTheme('sizing020')} 0;
  font-weight: ${({theme, bold}) => (bold ? theme.fonts.fontWeight040 : null)};
`;
Heading4.displayName = 'Heading4';
export const H4 = Heading4;

export const Heading5 = styled.h5<HeadingProps>`
  ${getTypePresetFromTheme('heading010')};
  ${getFontSizingFromTheme('font500', 'fontLineHeight020')};
  color: ${getColorFromTheme('inkContrast')};
  margin: 0 0 ${getSizingFromTheme('sizing020')} 0;
  font-weight: ${({theme, bold}) => (bold ? theme.fonts.fontWeight040 : null)};
`;
Heading5.displayName = 'Heading5';
export const H5 = Heading5;

export const Heading6 = styled.h6<HeadingProps>`
  ${getTypePresetFromTheme('label010')};
  color: ${getColorFromTheme('inkContrast')};
  margin: 0 0 ${getSizingFromTheme('sizing020')} 0;
  font-weight: ${({theme, bold}) => (bold ? theme.fonts.fontWeight040 : null)};
`;
Heading6.displayName = 'Heading6';
export const H6 = Heading6;

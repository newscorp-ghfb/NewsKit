import {
  styled,
  newskitLightTheme,
  compileTheme,
  getFontsFromTheme,
} from 'newskit';
import React from 'react';

export interface FontAttributesProps {
  fontSizeToken?: string;
  fontWeightToken?: string;
  fontLineHeight?: string;
  fontLetterSpacing?: string;
}

const compiledNewskitLightTheme = compileTheme(newskitLightTheme);

const StyledFontSection = styled.div<{
  fontSizeToken: string;
  fontWeightToken: string;
  fontLineHeight: string;
  fontLetterSpacing: string;
}>`
  display: flex;
  font-size: ${({fontSizeToken}) =>
    getFontsFromTheme(fontSizeToken)({theme: compiledNewskitLightTheme})};
  font-weight: ${({fontWeightToken}) =>
    getFontsFromTheme(fontWeightToken)({theme: compiledNewskitLightTheme})};
  line-height: ${({fontLineHeight}) =>
    getFontsFromTheme(fontLineHeight)({theme: compiledNewskitLightTheme})};
  letter-spacing: ${({fontLetterSpacing}) =>
    getFontsFromTheme(fontLetterSpacing)({theme: compiledNewskitLightTheme})};
`;

export const FontAttributes: React.FC<FontAttributesProps> = ({
  fontSizeToken = '',
  fontWeightToken = '',
  fontLineHeight = '',
  fontLetterSpacing = '',
}) => (
  <StyledFontSection
    fontSizeToken={fontSizeToken}
    fontWeightToken={fontWeightToken}
    fontLineHeight={fontLineHeight}
    fontLetterSpacing={fontLetterSpacing}
  >
    {(fontSizeToken || fontWeightToken || fontLetterSpacing) && (
      <>The quick brown fox</>
    )}
    {fontLineHeight && (
      <>
        The quick brown fox jumps over the lazy dog
        <br /> The quick brown fox jumps over the lazy dog{' '}
      </>
    )}
  </StyledFontSection>
);

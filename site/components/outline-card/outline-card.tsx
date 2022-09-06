import React from 'react';
import {
  getBorderCssFromTheme,
  getOutlineCssFromTheme,
  getColorCssFromTheme,
  getSizingCssFromTheme,
  styled,
  newskitLightTheme,
  compileTheme,
} from 'newskit';

export interface OutlineCardProps {
  outlineStyleToken?: string;
  outlineWidthToken?: string;
  outlineOffsetToken?: string;
  safariOutlineStyleToken?: string;
  safariOutlineOffsetToken?: string;
}

const compiledNewskitLightTheme = compileTheme(newskitLightTheme);

const StyledOutlineCard = styled.div<{
  outlineStyleToken: string;
  outlineWidthToken: string;
  outlineOffsetToken: string;
  safariOutlineStyleToken?: string;
  safariOutlineOffsetToken?: string;
}>`
  display: flex;
  ${getSizingCssFromTheme('width', 'sizing100')};
  ${getSizingCssFromTheme('height', 'sizing100')};
  ${getSizingCssFromTheme('marginLeft', 'sizing010')};
  border: solid;
  ${getColorCssFromTheme('borderColor', 'interface060')};
  ${getColorCssFromTheme('background', 'interface020')};

  ${getBorderCssFromTheme(
    'borderRadius',
    'borderRadiusRounded020',
  )({theme: compiledNewskitLightTheme})};

  ${getOutlineCssFromTheme(
    'outlineColor',
    'outlineColorDefault',
  )({theme: compiledNewskitLightTheme})};

  ${({outlineStyleToken}) =>
    getOutlineCssFromTheme(
      'outlineStyle',
      outlineStyleToken,
    )({theme: compiledNewskitLightTheme})};

  ${({outlineWidthToken}) =>
    getOutlineCssFromTheme(
      'outlineWidth',
      outlineWidthToken,
    )({theme: compiledNewskitLightTheme})};

  ${({outlineOffsetToken}) =>
    getOutlineCssFromTheme(
      'outlineOffset',
      outlineOffsetToken,
    )({theme: compiledNewskitLightTheme})};

  ${({safariOutlineStyleToken}) =>
    safariOutlineStyleToken &&
    getOutlineCssFromTheme(
      'outlineStyle',
      safariOutlineStyleToken,
    )({theme: compiledNewskitLightTheme})};

  ${({safariOutlineOffsetToken}) =>
    safariOutlineOffsetToken &&
    getOutlineCssFromTheme(
      'outlineOffset',
      safariOutlineOffsetToken,
    )({theme: compiledNewskitLightTheme})};
`;

export const OutlineCard: React.FC<OutlineCardProps> = ({
  outlineStyleToken = 'outlineStyleDefault',
  outlineWidthToken = 'outlineWidthDefault',
  outlineOffsetToken = 'outlineOffsetDefault',
  safariOutlineOffsetToken,
  safariOutlineStyleToken,
}) => (
  <StyledOutlineCard
    outlineStyleToken={outlineStyleToken}
    outlineWidthToken={outlineWidthToken}
    outlineOffsetToken={outlineOffsetToken}
    safariOutlineStyleToken={safariOutlineStyleToken}
    safariOutlineOffsetToken={safariOutlineOffsetToken}
  />
);

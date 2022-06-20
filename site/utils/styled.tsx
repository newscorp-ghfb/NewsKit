import {styled, getColorCssFromTheme} from 'newskit';

export const StyledPatternsHeading = styled.span`
  ${getColorCssFromTheme('color', 'inkBrand010')};
`;

export const StyledPatternsDoHeading = styled.span`
  ${getColorCssFromTheme('color', 'inkPositive')};
`;

export const StyledPatternsDontHeading = styled.span`
  ${getColorCssFromTheme('color', 'inkNegative')};
`;

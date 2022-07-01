import {styled, getColorCssFromTheme} from 'newskit';

export const StyledHeading = styled.span`
  ${getColorCssFromTheme('color', 'inkBrand010')};
`;

export const StyledDoHeading = styled.span`
  ${getColorCssFromTheme('color', 'inkPositive')};
`;

export const StyledDontHeading = styled.span`
  ${getColorCssFromTheme('color', 'inkNegative')};
`;

export const StyledEmailText = styled.span`
  ${getColorCssFromTheme('color', 'blue040')};
`;

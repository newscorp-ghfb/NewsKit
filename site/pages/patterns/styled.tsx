import {styled, getColorFromTheme} from 'newskit';

export const StyledHeading = styled.span`
  color: ${getColorFromTheme('inkBrand010')};
`;

export const StyledDoHeading = styled.span`
  color: ${getColorFromTheme('inkPositive')};
`;

export const StyledDontHeading = styled.span`
  color: ${getColorFromTheme('inkNegative')};
`;

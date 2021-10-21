import {styled, getSpacingCssFromTheme} from 'newskit';

export const StyledSection = styled.section`
  ${getSpacingCssFromTheme(
    value => ({
      marginTop: `-${value}`,
      paddingTop: value,
    }),
    'space050',
  )};
`;

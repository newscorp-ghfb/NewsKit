import {Flag, getSpacingCssFromTheme, styled} from 'newskit';

export const StyledFlag = styled(Flag)`
  ${getSpacingCssFromTheme(
    value => ({
      marginTop: `-${value}`,
    }),
    'space010',
  )};
`;

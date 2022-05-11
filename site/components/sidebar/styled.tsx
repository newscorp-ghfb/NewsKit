import {getSpacingCssFromTheme, styled} from 'newskit';

export const DesktopNavigationDivider = styled.div`
  width: 100vw;
  position: relative;

  ${getSpacingCssFromTheme('marginTop', 'space045')};
  ${getSpacingCssFromTheme('marginBottom', 'space060')};
`;

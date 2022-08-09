import {Button, getMediaQueryFromTheme, GridLayoutItem, styled} from 'newskit*';

export const HeroGridContainer = styled(GridLayoutItem)<{
  themeMode: string;
}>`
  margin-top: -12px;
  background-size: cover;
  background-repeat: no-repeat;

  ${getMediaQueryFromTheme('md')} {
    background-image: ${({themeMode}) =>
      themeMode === 'light'
        ? 'url(static/landing/landing-background.svg)'
        : 'url(static/landing/landing-background-dark.svg)'};
  }
`;

export const SmallScreenButton = styled(Button)`
  ${getMediaQueryFromTheme('md')} {
    display: none;
  }
`;
export const LargeScreenButton = styled(Button)`
  display: none;
  ${getMediaQueryFromTheme('md')} {
    display: block;
  }
`;

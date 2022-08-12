import {getMediaQueryFromTheme, styled, Block} from 'newskit*';

export const HeroContainer = styled(Block)`
  background-size: cover;
  background-repeat: no-repeat;

  ${getMediaQueryFromTheme('md')} {
    ${({theme}) => {
      const heroGradientBackground = theme.colors.interfaceSkeleton010;
      const heroGradientColor = theme.colors.interfaceBrand030;
      return `background-image: radial-gradient(
        circle at -120% 160%,
        ${heroGradientColor} 0%,
        ${heroGradientBackground}00 70%
      ),
      radial-gradient(
        circle at 180% -70%,
        ${heroGradientColor} 0%,
        ${heroGradientBackground} 60%
      );`;
    }};
  }
`;

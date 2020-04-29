import {getAnimationFromTheme, styled, getColorFromTheme} from 'newskit';

const Paragraph = styled.p`
  @keyframes rotating {
    from {
      color: ${getColorFromTheme('inkNegative')};
    }
    to {
      color: ${getColorFromTheme('inkPositive')};
    }
  }

  text-align: center;
  animation-duration: ${getAnimationFromTheme('animationDuration040', animation)};
`;

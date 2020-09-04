import {getMotionFromTheme, styled, getColorFromTheme} from 'newskit';

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
  animation-duration: ${getMotionFromTheme('motionDuration040', motion)};
`;

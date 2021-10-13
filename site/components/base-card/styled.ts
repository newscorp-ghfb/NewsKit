import {styled, getMotionFromTheme, Card} from 'newskit';

export const StyledCard = styled(Card)`
  transition-property: box-shadow;
  transition-duration: ${getMotionFromTheme('motionDuration030')};
  transition-timing-function: ${getMotionFromTheme('motionTimingEaseOut')};
`;

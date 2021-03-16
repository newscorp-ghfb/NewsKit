import {styled, CardInset, getMotionFromTheme, Card} from 'newskit';

export const StyledCardInteractive = styled(CardInset)`
  transition-property: box-shadow;
  transition-duration: ${getMotionFromTheme('motionDuration030')};
  transition-timing-function: ${getMotionFromTheme('motionEaseOut')};
`;
export const StyledBaseCardNonInteractive = styled(Card)`
  transition-property: box-shadow;
  transition-duration: ${getMotionFromTheme('motionDuration030')};
  transition-timing-function: ${getMotionFromTheme('motionEaseOut')};
`;

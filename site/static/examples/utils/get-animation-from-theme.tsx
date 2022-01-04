import {getAnimationFromTheme, styled} from 'newskit';

const Paragraph = styled.p`
  text-align: center;
  animation-duration: ${getAnimationFromTheme('timing400', $animation)};
`;

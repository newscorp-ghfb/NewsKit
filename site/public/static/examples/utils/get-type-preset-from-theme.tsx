import {getTypePresetFromTheme, styled} from 'newskit';

const Paragraph = styled.p`
  text-align: center;
  ${getTypePresetFromTheme('body030', 'font')}
`;

import {getTypographyPresetFromTheme, styled} from 'newskit';

const Paragraph = styled.p`
  text-align: center;
  ${getTypographyPresetFromTheme('body030', 'font')}
`;

import {getTypographyPresetFromTheme, styled} from 'newskit';

const Paragraph = styled.p`
  text-align: center;
  ${getTypographyPresetFromTheme('editorialParagraph030', 'typographyPreset')}
`;

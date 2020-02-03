import {
  getStylePresetFromTheme,
  styled,
} from 'newskit';

interface ParagraphProps {
  $stylePreset: string;
}

const Paragraph = styled.p<ParagraphProps>`
  ${getStylePresetFromTheme('interactive010', '$stylePreset')}
`;

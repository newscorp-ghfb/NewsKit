import {getStylePresetFromTheme, GetStylePresetFromThemeOptions, StylePresetsKeys, styled} from 'newskit';

interface Paragraph extends GetStylePresetFromThemeOptions {
  stylePreset: StylePresetsKeys;
}

const Paragraph = ({stylePreset = "interactive010", ...props}: Paragraph) => {
  const P = styled.p<GetStylePresetFromThemeOptions>`
    ${getStylePresetFromTheme(stylePreset, props)}
  `;

  return <P {...props} />;
};

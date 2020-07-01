import {Sizing} from '../newskit-light/spacing';

export const createSpacingPresets = (s: Sizing) => {
  const presets: Record<string, string> = {};

  presets.space000 = s.sizing000;
  presets.space010 = s.sizing010;
  presets.space020 = s.sizing020;
  presets.space030 = s.sizing030;
  presets.space040 = s.sizing040;
  presets.space045 = s.sizing045;
  presets.space050 = s.sizing050;
  presets.space060 = s.sizing060;
  presets.space070 = s.sizing070;
  presets.space080 = s.sizing080;
  presets.space090 = s.sizing090;
  presets.space100 = s.sizing100;
  presets.space110 = s.sizing110;
  presets.space120 = s.sizing120;

  return presets;
};

export type SpacingPresetKeys = keyof SpacingPreset;
export type SpacingPreset = ReturnType<typeof createSpacingPresets>;

export const createPaddingPresets = (s: Sizing) => {
  const presets: Record<string, string> = {};

  // Inset

  presets.spaceInset000 = s.sizing000;
  presets.spaceInset010 = s.sizing010;
  presets.spaceInset020 = s.sizing020;
  presets.spaceInset030 = s.sizing030;
  presets.spaceInset040 = s.sizing040;
  presets.spaceInset050 = s.sizing050;
  presets.spaceInset060 = s.sizing060;
  presets.spaceInset070 = s.sizing080;

  // Squish Inset

  presets.spaceInset000Squish = s.sizing000;
  presets.spaceInset010Squish = `${s.sizing010} ${s.sizing020}`;
  presets.spaceInset020Squish = `${s.sizing020} ${s.sizing030}`;
  presets.spaceInset030Squish = `${s.sizing030} ${s.sizing040}`;
  presets.spaceInset040Squish = `${s.sizing040} ${s.sizing050}`;
  presets.spaceInset050Squish = `${s.sizing050} ${s.sizing060}`;
  presets.spaceInset060Squish = `${s.sizing060} ${s.sizing080}`;

  // Stretch Inset =
  presets.spaceInset000Stretch = s.sizing000;
  presets.spaceInset010Stretch = `${s.sizing020} ${s.sizing010}`;
  presets.spaceInset020Stretch = `${s.sizing030} ${s.sizing020}`;
  presets.spaceInset030Stretch = `${s.sizing040} ${s.sizing030}`;
  presets.spaceInset040Stretch = `${s.sizing050} ${s.sizing040}`;
  presets.spaceInset050Stretch = `${s.sizing060} ${s.sizing050}`;
  presets.spaceInset060Stretch = `${s.sizing080} ${s.sizing060}`;

  return presets;
};

export type PaddingPresetKeys = keyof PaddingPreset;
export type PaddingPreset = ReturnType<typeof createPaddingPresets>;

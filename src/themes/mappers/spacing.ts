import {Sizing} from '../newskit-light/spacing';

const getStackOf = (s: string) => `0 0 ${s} 0`;
const getInlineOf = (s: string) => `0 ${s} 0 0`;

export const createMarginPresets = (s: Sizing) => {
  const presets: Record<string, string> = {};

  // Stacking

  presets.spaceStack000 = s.sizing000;
  presets.spaceStack010 = getStackOf(s.sizing010);
  presets.spaceStack020 = getStackOf(s.sizing020);
  presets.spaceStack030 = getStackOf(s.sizing030);
  presets.spaceStack040 = getStackOf(s.sizing040);
  presets.spaceStack050 = getStackOf(s.sizing050);
  presets.spaceStack060 = getStackOf(s.sizing060);
  presets.spaceStack070 = getStackOf(s.sizing070);
  presets.spaceStack080 = getStackOf(s.sizing080);
  presets.spaceStack090 = getStackOf(s.sizing090);
  presets.spaceStack100 = getStackOf(s.sizing100);
  presets.spaceStack110 = getStackOf(s.sizing110);
  presets.spaceStack120 = getStackOf(s.sizing120);

  // Inline

  presets.spaceInline000 = s.sizing000;
  presets.spaceInline010 = getInlineOf(s.sizing010);
  presets.spaceInline020 = getInlineOf(s.sizing020);
  presets.spaceInline030 = getInlineOf(s.sizing030);
  presets.spaceInline040 = getInlineOf(s.sizing040);
  presets.spaceInline050 = getInlineOf(s.sizing050);
  presets.spaceInline060 = getInlineOf(s.sizing060);
  presets.spaceInline070 = getInlineOf(s.sizing080);

  return presets;
};

export type MarginPresetKeys = keyof MarginPreset;
export type MarginPreset = ReturnType<typeof createMarginPresets>;

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

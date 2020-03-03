import {Sizing} from '../newskit-light/spacing';

const getStackOf = (s: string) => `0 0 ${s} 0`;
const getInlineOf = (s: string) => `0 ${s} 0 0`;

export const createMarginPresets = (s: Sizing) => ({
  // Stacking

  spaceStack000: s.sizing000,
  spaceStack010: getStackOf(s.sizing010),
  spaceStack020: getStackOf(s.sizing020),
  spaceStack030: getStackOf(s.sizing030),
  spaceStack040: getStackOf(s.sizing040),
  spaceStack050: getStackOf(s.sizing050),
  spaceStack060: getStackOf(s.sizing060),
  spaceStack070: getStackOf(s.sizing070),
  spaceStack080: getStackOf(s.sizing080),
  spaceStack090: getStackOf(s.sizing090),
  spaceStack100: getStackOf(s.sizing100),
  spaceStack110: getStackOf(s.sizing110),
  spaceStack120: getStackOf(s.sizing120),

  // Inline

  spaceInline000: s.sizing000,
  spaceInline010: getInlineOf(s.sizing010),
  spaceInline020: getInlineOf(s.sizing020),
  spaceInline030: getInlineOf(s.sizing030),
  spaceInline040: getInlineOf(s.sizing040),
  spaceInline050: getInlineOf(s.sizing050),
  spaceInline060: getInlineOf(s.sizing060),
  spaceInline070: getInlineOf(s.sizing080),
});

export type MarginPresetKeys = keyof MarginPreset;
export type MarginPreset = ReturnType<typeof createMarginPresets>;

export const createPaddingPresets = (s: Sizing) => ({
  // Inset

  spaceInset000: s.sizing000,
  spaceInset010: s.sizing010,
  spaceInset020: s.sizing020,
  spaceInset030: s.sizing030,
  spaceInset040: s.sizing040,
  spaceInset050: s.sizing050,
  spaceInset060: s.sizing060,
  spaceInset070: s.sizing080,

  // Squish Inset

  spaceInset000Squish: s.sizing000,
  spaceInset010Squish: `${s.sizing010} ${s.sizing020}`,
  spaceInset020Squish: `${s.sizing020} ${s.sizing030}`,
  spaceInset030Squish: `${s.sizing030} ${s.sizing040}`,
  spaceInset040Squish: `${s.sizing040} ${s.sizing050}`,
  spaceInset050Squish: `${s.sizing050} ${s.sizing060}`,
  spaceInset060Squish: `${s.sizing060} ${s.sizing080}`,

  // Stretch Inset

  spaceInset000Stretch: s.sizing000,
  spaceInset010Stretch: `${s.sizing020} ${s.sizing010}`,
  spaceInset020Stretch: `${s.sizing030} ${s.sizing020}`,
  spaceInset030Stretch: `${s.sizing040} ${s.sizing030}`,
  spaceInset040Stretch: `${s.sizing050} ${s.sizing040}`,
  spaceInset050Stretch: `${s.sizing060} ${s.sizing050}`,
  spaceInset060Stretch: `${s.sizing080} ${s.sizing060}`,
});

export type PaddingPresetKeys = keyof PaddingPreset;
export type PaddingPreset = ReturnType<typeof createPaddingPresets>;

import {Sizing} from '../newskit-light/spacing';

const getStackOf = (s: string) => `0 0 ${s} 0`;
const getInlineOf = (s: string) => `0 ${s} 0 0`;

export const createSpacingPresets = (s: Sizing) => ({
  ...s,

  // Inset

  spaceInset000: s.spacingSize000,
  spaceInset010: s.spacingSize010,
  spaceInset020: s.spacingSize020,
  spaceInset030: s.spacingSize030,
  spaceInset040: s.spacingSize040,
  spaceInset050: s.spacingSize050,
  spaceInset060: s.spacingSize060,
  spaceInset070: s.spacingSize080,

  // Squish Inset

  spaceInset000Squish: s.spacingSize000,
  spaceInset010Squish: `${s.spacingSize010} ${s.spacingSize020}`,
  spaceInset020Squish: `${s.spacingSize020} ${s.spacingSize030}`,
  spaceInset030Squish: `${s.spacingSize040} ${s.spacingSize050}`,
  spaceInset040Squish: `${s.spacingSize050} ${s.spacingSize060}`,
  spaceInset050Squish: `${s.spacingSize060} ${s.spacingSize080}`,

  // Stretch Inset

  spaceInset000Stretch: s.spacingSize000,
  spaceInset010Stretch: `${s.spacingSize020} ${s.spacingSize010}`,
  spaceInset020Stretch: `${s.spacingSize030} ${s.spacingSize020}`,
  spaceInset030Stretch: `${s.spacingSize050} ${s.spacingSize040}`,
  spaceInset040Stretch: `${s.spacingSize060} ${s.spacingSize050}`,
  spaceInset050Stretch: `${s.spacingSize080} ${s.spacingSize060}`,

  // Stacking

  spaceStack000: s.spacingSize000,
  spaceStack010: getStackOf(s.spacingSize010),
  spaceStack020: getStackOf(s.spacingSize020),
  spaceStack030: getStackOf(s.spacingSize030),
  spaceStack040: getStackOf(s.spacingSize040),
  spaceStack050: getStackOf(s.spacingSize050),
  spaceStack060: getStackOf(s.spacingSize060),
  spaceStack070: getStackOf(s.spacingSize070),
  spaceStack080: getStackOf(s.spacingSize080),
  spaceStack090: getStackOf(s.spacingSize090),
  spaceStack100: getStackOf(s.spacingSize100),
  spaceStack110: getStackOf(s.spacingSize110),
  spaceStack120: getStackOf(s.spacingSize120),

  // Inline

  spaceInline000: s.spacingSize000,
  spaceInline010: getInlineOf(s.spacingSize010),
  spaceInline020: getInlineOf(s.spacingSize020),
  spaceInline030: getInlineOf(s.spacingSize030),
  spaceInline040: getInlineOf(s.spacingSize040),
  spaceInline050: getInlineOf(s.spacingSize050),
  spaceInline060: getInlineOf(s.spacingSize060),
  spaceInline070: getInlineOf(s.spacingSize080),
});

export type SpacingPresetKeys = keyof SpacingPreset;
export type SpacingPreset = ReturnType<typeof createSpacingPresets>;

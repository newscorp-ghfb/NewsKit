// Component Defaults:
byline: {
  stylePreset: 'inkSubtle',
  typographyPreset: 'utilityMeta020',
  spaceStack: 'space020',
  link: {
    stylePreset: 'bylineLink',
    typographyPreset: 'utilityMeta020',
  },
  divider: {
    stylePreset: 'bylineDivider',
    spaceInline: 'space020',
  },
},

// Overrides
<Byline
  overrides={{
    stylePreset: 'bylineCustom',
    typographyPreset: 'bylineCustom',
    spaceStack: 'space030',
    link: {
      stylePreset: 'bylineLinkCustom',
      typographyPreset: 'bylineLinkCustom',
    },
    divider: {
      stylePreset: 'bylineDividerCustom',
      spaceInline: 'space030',
    },
  }}
/>

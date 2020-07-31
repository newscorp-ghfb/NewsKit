// Default presets:
byline: {
  stylePreset: 'byline',
  typePreset: 'meta020',
  space: 'sizing020',
  link: {
    stylePreset: 'bylineLink',
    typePreset: 'meta020',
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
    typePreset: 'bylineCustom',
    space: 'sizing030',
    link: {
      stylePreset: 'bylineLinkCustom',
      typePreset: 'bylineLinkCustom',
    },
    divider: {
      stylePreset: 'bylineDividerCustom',
      spaceInline: 'space030',
    },
  }}
/>
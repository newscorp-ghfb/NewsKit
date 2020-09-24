// Default presets:
button: {
  medium: {
    typographyPreset: 'button020',
    stylePreset: 'buttonDefault',
    spaceInset: 'spaceInset030Squish',
    minWidth: 'sizing100',
    minHeight: 'sizing080',
    iconSize: 'iconSize020',
    space: 'sizing020',
  },
},

// Overrides:
<Button
  size="medium"
  overrides={{
    typographyPreset: 'button020',
    stylePreset: 'buttonOutlinedPrimary',
  }}
>
  Content
</Button>

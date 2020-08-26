// Default presets:
button: {
  medium: {
    typePreset: 'button020',
    stylePreset: 'buttonDefault',
    paddingPreset: 'spaceInset030Squish',
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
    typePreset: 'button020',
    stylePreset: 'buttonOutlinedPrimary',
  }}
>
  Content
</Button>

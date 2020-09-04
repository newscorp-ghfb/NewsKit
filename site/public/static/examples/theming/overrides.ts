const borders = {
  borderWidth010: '1px',
  borderWidth020: '2px',
  borderWidth030: '3px',
  tagBorderWidth: '1px',
};

// Overrides existing typographyPresets(collection of font foundations). 
// Full set of presets not required: match fonts values of existing typography presets.
const typographyPresets = {
  font100: {
    fontFamily: string,
    fontWeight: FontWeight,
    fontSize: string,
    lineHeight: number,
    letterSpacing: string | number,
  },
};

const overrides = {
  colors, // same as colors above
  sizing, // same as sizing above
  borders,
  fonts, // same as fonts above
  typographyPresets: TypographyPresets,
};

themeOverrider(override);

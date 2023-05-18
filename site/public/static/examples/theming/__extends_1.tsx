export const stylePresets = {
  buttonSolidPrimary: Button.stylePresets.buttonSolidPrimary;
  buttonLightDarkToggle: {
    __extends: "{{stylePresets.buttonSolidPrimary}}",
    hover: { color: "{{colors.red010}}" }
  }
};
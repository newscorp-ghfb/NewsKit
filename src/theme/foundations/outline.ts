/*
 * Created outline foundation tokens to be used in style presets.
 * Have a default outline and outline offset that can be used across components
 */
export const outline = {
  outlineStyleAuto: 'auto',
  outlineStyleSolid: 'solid',

  outlineSizing000: '0',
  outlineSizing010: '1px',
  outlineSizing020: '2px',
  outlineSizing030: '3px',

  outlineDefault:
    '{{colors.outlinePrimary010}} {{outline.outlineStyleAuto}} {{borders.borderWidth020}}',
  outlineOffsetDefault: '{{outline.outlineSizing030}}',
};

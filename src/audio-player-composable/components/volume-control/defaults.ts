const defaults = {
  spaceBetween: 'space030',
  slider: {
    track: {
      stylePreset: 'audioPlayerVolumeControlTrack',
      size: 'sizing010',
      length: '130px',
    },
    indicator: {
      stylePreset: 'audioPlayerVolumeControlIndicator',
    },
    thumb: {
      stylePreset: 'audioPlayerVolumeControlThumb',
      size: 'sizing040',
    },
    feedback: {
      size: 'sizing060',
    },
  },
  button: {
    stylePreset: 'iconButtonMinimalPrimary',
  },
};

export default {
  audioPlayerVolumeControl: {
    horizontal: {
      stylePreset: 'audioPlayerVolumeControlHorizontalContainer',
      ...defaults,
    },
    horizontalExpanded: {
      stylePreset: 'audioPlayerVolumeControlHorizontalContainer',
      ...defaults,
    },
    horizontalCollapsed: {
      stylePreset: 'audioPlayerVolumeControlHorizontalContainer',
      ...defaults,
    },
    vertical: {
      stylePreset: 'audioPlayerVolumeControlVerticalContainer',
      ...defaults,
    },
  },
};

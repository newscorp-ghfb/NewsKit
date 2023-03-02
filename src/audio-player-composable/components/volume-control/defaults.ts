export default {
  audioPlayerVolumeControl: {
    transitionPreset: 'widthChange',
    spaceBetween: 'space010',
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
    popover: {
      offset: 'space030',
      stylePreset: 'audioPlayerVolumeControlPopover',
      content: {
        paddingBlock: 'space030',
        paddingInline: 'space030',
      },
    },
  },
};

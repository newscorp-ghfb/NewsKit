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
      distance: 'space030',
      stylePreset: 'audioPlayerVolumeControlPopover',
      content: {
        paddingBlockStart: 'space030',
        paddingBlockEnd: 'space030',
        paddingInlineStart: 'space030',
        paddingInlineEnd: 'space030',
      },
    },
  },
};

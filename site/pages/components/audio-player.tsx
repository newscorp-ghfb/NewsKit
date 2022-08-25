import React from 'react';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';

const AudioPlayerComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Audio Player',
      description:
        'The audio player component allows a user to play and control the playback of live and recorded audio content.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Media',
      name: 'Audio Player',
      hero: {
        illustration: 'components/audio-player-illustration',
      },
      introduction:
        'The audio player component allows a user to play and control the playback of live and recorded audio content.',
    }}
    componentDefaultsKey="Audio Player"
    meta={{
      status: MetaStatus.Beta,
      introduced: 'v5.3.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/tree/main/src/audio-player-composable',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=324%3A3',
    }}
    anatomy={{
      components: [
        {
          title: 'Audio player composable',
          summary:
            'The audio player composable is responsible for maintaining the audio player state, and receiving interactions from subcomponents, and contains the non-visual audio element. It is the wrapper for the subcomponents listed below:',
          media: getIllustrationComponent(
            'components/audio-player/anatomy/anatomy-01',
          ),
          rows: [
            {
              name: 'Play pause button',
              description: 'Toggle button for playing or pausing audio',
              component: ['Icon Button'],
              optional: undefined,
            },
            {
              name: 'Time display',
              description:
                'Displays time information related to the current track. This can be configured to show both current playback time, and duration',
              component: 'Text Block',
              optional: undefined,
            },
            {
              name: 'Seek bar',
              description:
                'Displays duration and buffering. Indicates audio track duration and buffering, and controls the track position',
              component: 'Slider',
              optional: undefined,
            },
            {
              name: 'Skip next button',
              description: 'Skips to the next track',
              component: 'Icon Button',
              optional: undefined,
            },
            {
              name: 'Skip previous button',
              description: 'Skips to the previous track',
              component: 'Icon Button',
              optional: undefined,
            },
            {
              name: 'Forward button',
              description:
                'Skips the audio track forward a specified number of seconds',
              component: 'Icon Button',
              optional: undefined,
            },
            {
              name: 'Replay button',
              description:
                'Skips the audio track backwards a specified number of seconds',
              component: 'Icon Button',
              optional: undefined,
            },
            {
              name: 'Volume control',
              description: 'Raises, lowers or mutes audio',
              component: ['Icon Button', 'Slider', 'Popover'],
              optional: undefined,
            },
            {
              name: 'Playback speed control',
              description: 'Changes the speed of the audio track',
              component: ['Icon Button', 'Popover', 'Modal'],
              optional: undefined,
            },
          ],
        },
        {
          title: 'Volume control',
          summary:
            'The volume control contains one required element and one optional element.',
          media: getIllustrationComponent(
            'components/audio-player/anatomy/anatomy-02',
          ),
          rows: [
            {
              name: 'Mute button',
              description:
                'Icon button that expands the volume control on hover/focus. On click/tap mutes the audio track volume (toggle).',
              component: 'Icon Button',
              optional: undefined,
            },
            {
              name: 'Volume slider',
              description:
                'Volume slider that allows for the volume of the audio track to increase and decrease by interacting with the slider thumb, or via keyboard commands.',
              component: ['Slider', 'Popover'],
              optional: true,
            },
          ],
        },
        {
          title: 'Playback speed control',
          summary:
            'The Playback speed control contains two required elements and no optional elements.',
          media: getIllustrationComponent(
            'components/audio-player/anatomy/anatomy-03',
          ),
          rows: [
            {
              name: 'Playback speed control icon button',
              description: 'Icon button that launches the options',
              component: 'Icon Button',
              optional: undefined,
            },
            {
              name: 'Selection list',
              description:
                'Selection options that can appear in a Modal (with overlay), or a Popover',
              component: ['Popover', 'Modal'],
              optional: undefined,
            },
          ],
        },
      ],
      rows: [],
    }}
  />
);

export default AudioPlayerComponent;

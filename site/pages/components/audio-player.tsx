import React from 'react';
import {InlineMessage, toNewsKitIcon} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {Link} from '../../components/link';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

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
    options={{
      introduction:
        'The audio player has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Live',
          description: (
            <>
              The live functionality is used for streaming live audio content
              <br />
              <br />
              Live streaming audio can be indicated by providing a{' '}
              <Link href="/components/flag/">flag</Link> component with text and
              icon to communicate this to users.
            </>
          ),
          media: getIllustrationComponent(
            'components/audio-player/options/live',
          ),
        },
        {
          title: 'Recorded',
          description: (
            <>
              The recorded functionality is used for streaming recorded audio
              content. Extended controls allow the user to play, pause, forward,
              replay, and skip to the next, or the previous track. A seek bar is
              provided to indicate buffering, duration, and track position.
              Track position can be further controlled with the{' '}
              <Link href="/components/slider/">slider</Link> thumb.
            </>
          ),
          media: getIllustrationComponent(
            'components/audio-player/options/recorded',
          ),
        },
        {
          title: 'Autoplay',
          description: (
            <>
              The audio player can be set to play automatically when audio
              content is loaded.
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Autoplay"
                title="Note"
                overrides={{
                  marginBlockStart: 'space050',
                }}
              >
                This will not work on mobile browsers due to users&apos; data
                allowance, and it can&apos;t happen on page load – the user has
                to interact with the page the audio player appears on for it to
                work. Navigating inside a single-page application will work as
                expected, as there is no page refresh.
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent(
            'components/audio-player/options/autoplay',
          ),
        },
        {
          title: 'Time display',
          description:
            'Can be used to display the current time elapsed, duration of the audio track, or both.',
          media: getIllustrationComponent(
            'components/audio-player/options/time-display',
          ),
        },
        {
          title: 'Forward & replay',
          description: (
            <>
              Icon buttons for forwarding or replaying the audio track for a
              determined number of seconds (default 10 seconds).
              <br />
              <br />
              Custom values can be provided for the number of seconds in the
              scale, as well as custom icons.
            </>
          ),
          media: getIllustrationComponent(
            'components/audio-player/options/forward-replay',
          ),
        },
        {
          title: 'Playback speed control',
          description: (
            <>
              Audio speed can be selected on click/tap, changing the pace of the
              audio track, with the default/normal value set at 1x.
              <br />
              <br />
              The playback speed control launched in a{' '}
              <Link href="/components/modal/">modal</Link> is intended for use
              on mobile, and a <Link href="/components/popover/">popover</Link>{' '}
              is intended for use on desktop.
            </>
          ),
          media: getIllustrationComponent(
            'components/audio-player/options/playback-speed-control',
          ),
        },
        {
          title: 'Volume Control',
          description: (
            <>
              The volume control has the option of either being displayed in an
              expanded or collapsed mode.
              <br />
              <br />
              The volume slider can be expanded on hover or focus of the mute
              button in either horizontal or vertical orientations.
            </>
          ),
          media: getIllustrationComponent(
            'components/audio-player/options/volume-control',
          ),
        },
        {
          title: 'Mute button',
          description:
            'The volume control has the option to hide the volume slider for use on mobile devices, with only the mute button visible.',
          media: getIllustrationComponent(
            'components/audio-player/options/mute-button',
          ),
        },
      ],
    }}
    behaviors={{
      introduction:
        'The following guidance describes how the Audio Player behaves.',
      cards: [
        {
          title: 'Buffering',
          description:
            'The seek bar indicates audio track duration and buffering, and controls the track position. Also known as an audio ‘scrubber’.',
          media: getIllustrationComponent(
            'components/audio-player/behaviours/buffering',
          ),
        },
      ],
    }}
  />
);

export default AudioPlayerComponent;

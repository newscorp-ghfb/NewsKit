import React from 'react';
import {Block, InlineMessage, toNewsKitIcon, UnorderedList} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {Link} from '../../components/link';
import {Table} from '../../components/table';
import {UsageKind} from '../../components/usage-card';
import {InlineCode} from '../../components/markdown-elements';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ContentText} from '../../components/text-section/content-text';
import {IconFilledCircle} from '../../components/icons';
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
    layoutExamples={{
      components: [
        {
          title: 'Full player',
          summary: (
            <>
              The following example shows the full audio player layout option
              that can be assembled using the various available subcomponents.{' '}
              <Link
                href="https://storybook.newskit.co.uk/?path=/story/newskit-light-audio-player-composable--audio-player"
                target="_blank"
              >
                View examples in Storybook.
              </Link>
            </>
          ),
          media: getIllustrationComponent(
            'components/audio-player/layout-examples/full-player',
          ),
        },
        {
          title: 'Inline player',
          summary: (
            <>
              Use an inline audio player for simple inline playback e.g. within
              an article.{' '}
              <Link
                href="https://storybook.newskit.co.uk/?path=/story/newskit-light-audio-player-composable--audio-player"
                target="_blank"
              >
                View examples in Storybook.
              </Link>
            </>
          ),
          media: getIllustrationComponent(
            'components/audio-player/layout-examples/inline-player',
          ),
        },
        {
          title: 'Player in card',
          summary: (
            <>
              The audio player can be used with other components to create more
              complex modules, such as a{' '}
              <Link href="/components/card/">card</Link>, to give context to the
              track or show being played.{' '}
              <Link
                href="https://storybook.newskit.co.uk/?path=/story/newskit-light-audio-player-composable--audio-player"
                target="_blank"
              >
                View examples in Storybook.
              </Link>
            </>
          ),
          media: getIllustrationComponent(
            'components/audio-player/layout-examples/player-in-card',
          ),
        },
      ],
      notice:
        'Code examples can be viewed in Storybook via the ‘Story’ tab in the addons panel.',
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
        {
          title: 'Skip previous',
          description: (
            <>
              The skip previous icon button is used to skip to the beginning of
              the track and if pressed within the first five seconds of a track
              will skip to the previously played track (if available).
              <br />
              <br />
              If no previous track is available, the icon button will be
              disabled for the first 5 seconds of playback.
            </>
          ),
          media: getIllustrationComponent(
            'components/audio-player/behaviours/skip-previous',
          ),
        },
        {
          title: 'Skip next',
          description: (
            <>
              The skip next icon button is used to skip to the next track (if
              available).
              <br />
              <br />
              If there is no next track available, the icon button will be
              disabled.
            </>
          ),
          media: getIllustrationComponent(
            'components/audio-player/behaviours/buffering',
          ),
        },
        {
          title: 'Play pause - live',
          description:
            'When audio is playing the play pause icon button will display a stop icon, and a play icon when no audio is playing. Play will resume from the current point in the live stream.',
          media: getIllustrationComponent(
            'components/audio-player/behaviours/play-pause-live',
          ),
        },
        {
          title: 'Play pause - recorded',
          description:
            'When audio is playing the play pause icon button will display a pause icon, and a play icon when no audio is playing. Paused content will resume from the track position.',
          media: getIllustrationComponent(
            'components/audio-player/behaviours/play-pause-recorded',
          ),
        },
        {
          title: 'Mute button',
          description: (
            <>
              The mute icon button mutes/unmutes the audio track on click/tap,
              or via the <InlineCode>M</InlineCode> keyboard shortcut.
            </>
          ),
          media: getIllustrationComponent(
            'components/audio-player/behaviours/mute-button',
          ),
        },
      ],
    }}
    usage={{
      introduction:
        'The following guidance describes how and when to appropriately use the audio player component.',
      cards: [
        {
          description: (
            <>
              Use a <Link href="/components/flag/">flag</Link> to show users
              that audio is being live streamed.
            </>
          ),
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/audio-player/usage/do-01',
          ),
        },
        {
          description: (
            <>
              For optimal user experience across breakpoints, it is recommended
              to display the playback speed control options in a{' '}
              <Link href="/components/popover/">popover</Link> for desktop, and
              in a <Link href="/components/modal/">modal</Link> for mobile.
            </>
          ),
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/audio-player/usage/do-02',
          ),
        },
        {
          description:
            'Use the expandable volume control when space in an audio player is limited.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/audio-player/usage/do-03',
          ),
        },
        {
          description:
            'Avoid displaying the volume control on mobile devices as users can use their native device controls to increase or decrease the volume of the audio track.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/audio-player/usage/dont-01',
          ),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          The audio player has the following accessibility considerations:
          <UnorderedList
            markerAlign="start"
            listItemMarker={IconFilledCircle}
            overrides={{
              content: {
                typographyPreset: 'editorialParagraph030',
              },
              marginBlockStart: 'space050',
              marginBlockEnd: 'space090',
            }}
          >
            <>
              For recorded audio content, it is best practice to provide audio
              transcription in order to cater to accessibility needs. This is
              generally provided in{' '}
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API"
                target="_blank"
              >
                WebVTT format.
              </Link>
            </>
          </UnorderedList>
          <ContentText title="Focus order" />
          <InlineMessage
            icon={infoIcon}
            role="region"
            aria-label="Focus order"
            overrides={{
              marginBlockStart: 'space010',
              marginBlockEnd: 'space090',
            }}
          >
            Focus order depends on how the audio player subcomponents are
            assembled and ordered in the DOM.
          </InlineMessage>
          <ContentText title="Volume control" />
          <Block spaceStack="space090">
            <Table
              columns={['Order', 'Element', 'Role']}
              rows={[
                {
                  order: 1,
                  element: 'Mute volume icon button',
                  role:
                    'Focusses to the mute volume icon button. If not already expanded, expands the volume slider.',
                },
                {
                  order: 2,
                  element: 'Volume slider',
                  role: 'Focusses to the volume control container.',
                },
              ]}
            />
          </Block>
          <ContentText title="Playback speed control" />
          <Table
            columns={['Order', 'Element', 'Role']}
            rows={[
              {
                order: 1,
                element: 'Playback speed control icon button',
                role: 'Focusses to the playback speed control icon button.',
              },
              {
                order: 2,
                element: 'Selection list options',
                role:
                  'Focusses to the options in the selection list, when visible.',
              },
            ]}
          />
        </>
      ),
      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['Tab'],
            description: 'Move to next item',
          },
          {
            command: ['Shift', 'Tab'],
            description: 'Move to previous item',
          },
          {
            command: ['Shift', 'p'],
            description: 'Previous track',
          },
          {
            command: ['Shift', 'n'],
            description: 'Next track',
          },
          {
            command: ['0 or Home Key'],
            description: 'Jump to start of the audio track',
          },
          {
            command: ['End Key'],
            description:
              'Jump to the end of the audio track, or go to the next track',
          },
          {
            command: ['Arrow Down'],
            description:
              'Decrease volume of the audio track, or move to previous item',
          },
          {
            command: ['Arrow Down or Arrow Left'],
            description: 'Replay (when seek bar is in focus)',
          },
          {
            command: ['Arrow Up'],
            description:
              'Increase volume of the audio track, or move to next item',
          },
          {
            command: ['Arrow Up or Arrow Right'],
            description: 'Forward (when seek bar is in focus)',
          },
          {
            command: ['Space or Enter'],
            description: 'Activate buttons (when in focus)',
          },
          {
            command: ['k or spacebar'],
            description: 'Toggle play/pause',
          },
          {
            command: ['m'],
            description: 'Toggle mute',
          },
        ],
      },
      aria: {
        title: 'WAI-ARIA',
        tableRows: [
          {
            element: 'audioElement',
            attribute: 'string',
            value: '',
            description: (
              <>
                Defines the Aria-label of the Audio Player
                <br />
                <br />
                It is recommended that this is enabled for screen readers to be
                able to explain the audio player purpose
                <br />
                <br />
                If left undefined it is set to &quot;audio-player&quot;
                <br />
                <br />
                ariaLandmark should be unique, so the same value should not
                appear on the same page more than once
              </>
            ),
            userSupplied: undefined,
          },
          {
            element: 'audioElement',
            attribute: 'role',
            value: 'region',
            description: 'Defines the Aria-role of the Audio Player',
            userSupplied: undefined,
          },
          {
            element: 'audioPlayer.PlayPauseButton',
            attribute: 'aria-pressed',
            value: `“true” | “false”`,
            description:
              'Icon Button changes while playing or pausing, set to “true” while mouse is down',
            userSupplied: undefined,
          },
          {
            element: 'seekBar',
            attribute: 'role',
            value: 'slider',
            description: 'Defines the Aria-role of the seekBar',
            userSupplied: undefined,
          },
          {
            element: 'seekBar',
            attribute: 'aria-valueMax',
            value: (
              <>
                This is set to the audio track <br />
                duration in seconds
              </>
            ),
            description: (
              <>
                Defines the max value of the seekBar
                <br />
                <br />
                The step of the track slider is 1 second, the max value is the
                track duration in seconds. The volume slider has a step of 0.1
                and a max of 1
              </>
            ),
            userSupplied: undefined,
          },
          {
            element: 'seekBar',
            attribute: 'aria-valueMin',
            value: '0',
            description: 'Defines the min value of the seekBar',
            userSupplied: undefined,
          },
          {
            element: 'seekBar',
            attribute: 'aria-valueNow',
            value: (
              <>
                This is set to the current <br />
                track position in seconds
              </>
            ),
            description: 'Defines the current value of the seekBar',
            userSupplied: undefined,
          },
          {
            element: 'seekBar',
            attribute: 'aria-valueText',
            value: (
              <>
                This should be a text <br />
                explanation of the current <br />
                track position. Ideally in the <br />
                example format to the right.
              </>
            ),
            description: (
              <>
                Defines the value text of the seekBar
                <br />
                <br />
                Example: “0 Minutes 25 Seconds of 24 Minutes 15 Seconds”
              </>
            ),
            userSupplied: undefined,
          },
          {
            element: 'seekBar',
            attribute: 'aria-orientation',
            value: 'horizontal',
            description: 'Defines the orientation of the seekBar',
            userSupplied: undefined,
          },

          {
            element: 'skipNextButton',
            attribute: 'aria-label',
            value: 'next',
            description: 'Defines the Aria-label of the skip next button',
            userSupplied: undefined,
          },
          {
            element: 'skipPreviousButton',
            attribute: 'aria-label',
            value: 'previous',
            description: 'Defines the Aria-label of the skip previous button',
            userSupplied: undefined,
          },
          {
            element: 'forwardButton',
            attribute: 'aria-label',
            value: 'seconds',
            description: (
              <>
                Defines the Aria-label of the forward button
                <br />
                <br />
                Forward a number of seconds (10 seconds is the default)
              </>
            ),
            userSupplied: undefined,
          },
          {
            element: 'replayButton',
            attribute: 'aria-label',
            value: 'seconds',
            description: (
              <>
                Defines the Aria-label of the replay button
                <br />
                <br />
                Replay a number of seconds (10 seconds is the default)
              </>
            ),
            userSupplied: undefined,
          },
          {
            element: 'volumeControl.muteVolumeIconButton',
            attribute: 'role',
            value: 'button',
            description: 'Defines the Aria-role of the mute volume button',
            userSupplied: undefined,
          },
          {
            element: 'volumeControl.muteVolumeIconButton',
            attribute: 'aria-label',
            value: 'mute volume button',
            description: 'Defines the Aria-label of the mute volume button',
            userSupplied: undefined,
          },
          {
            element: 'volumeControl.slider',
            attribute: 'role',
            value: 'slider',
            description: 'Defines the Aria-role of the volume slider',
            userSupplied: undefined,
          },
          {
            element: 'volumeControl.slider',
            attribute: 'aria-label',
            value: 'volume slider',
            description: 'Defines the Aria-label of the volume slider',
            userSupplied: undefined,
          },
          {
            element: 'volumeControl.slider',
            attribute: 'aria-valueMax',
            value: '10',
            description: 'Defines the max value of the volume slider',
            userSupplied: undefined,
          },
          {
            element: 'volumeControl.slider',
            attribute: 'aria-valueMin',
            value: '0',
            description: 'Defines the min value of the volume slider',
            userSupplied: undefined,
          },
          {
            element: 'volumeControl.slider',
            attribute: 'aria-valueNow',
            value: (
              <>
                This should be set to the <br />
                current value, which should <br />
                be a value between 0 and 10.
              </>
            ),
            description: 'Defines the current value of the volume slider',
            userSupplied: undefined,
          },
          {
            element: 'volumeControl.slider',
            attribute: 'aria-valueText',
            value: (
              <>
                A text explanation of the <br />
                current volume level.
              </>
            ),
            description: (
              <>
                Defines the value text of the volume slider
                <br />
                Example:
                <br />
                0= “Volume Muted”
                <br />
                1= “Volume Level 1 of 10”
                <br />
                2= “Volume Level 2 of 10”
                <br />
                3= “Volume Level 3 of 10”
                <br />
                4= “Volume Level 4 of 10”
                <br />
                5= “Volume Level 5 of 10”
                <br />
                6= “Volume Level 6 of 10”
                <br />
                7= “Volume Level 7 of 10”
                <br />
                8= “Volume Level 8 of 10”
                <br />
                9= “Volume Level 9 of 10”
                <br />
                10= “Volume Level Max”
              </>
            ),
            userSupplied: undefined,
          },
          {
            element: 'volumeControl.slider',
            attribute: 'aria-orientation',
            value: 'horizontal | vertical',
            description: 'Defines the orientation of the Volume Control',
            userSupplied: undefined,
          },
          {
            element: 'volumeControl.slider',
            attribute: 'aria-label',
            value: 'mute',
            description:
              'Defines the Aria-label of the volume slider when unmuted',
            userSupplied: undefined,
          },
          {
            element: 'volumeControl.slider',
            attribute: 'aria-label',
            value: 'unmute',
            description:
              'Defines the Aria-label of the volume slider when muted',
            userSupplied: undefined,
          },
          {
            element: 'playbackSpeedControl',
            attribute: 'aria-label',
            value: 'playback speed',
            description:
              'Defines the Aria-label of the playback speed control icon button',
            userSupplied: undefined,
          },
          {
            element: 'playbackSpeedControl',
            attribute: 'aria-value',
            value: (
              <>
                0.5x, 0.8x, 1x, 1.2x, 1.5x, <br />
                2x
              </>
            ),
            description: 'Defines the Aria-value of the playback speed control',
            userSupplied: undefined,
          },
          {
            element: 'selectionList',
            attribute: 'role',
            value: 'menu',
            description: 'Defines the Aria-role of the selection list',
            userSupplied: undefined,
          },
          {
            element: 'selectionList',
            attribute: 'aria-label',
            value: 'playback speed',
            description: 'Defines the Aria-label of the selection list',
            userSupplied: true,
          },
          {
            element: 'selectionListOption',
            attribute: 'role',
            value: '',
            description: 'Defines the Aria-role of the selection list option',
            userSupplied: undefined,
          },
          {
            element: 'selectionList',
            attribute: 'aria-checked',
            value: 'true',
            description: 'When an option in the selection list is selected',
            userSupplied: undefined,
          },
        ],
      },
    }}
  />
);

export default AudioPlayerComponent;

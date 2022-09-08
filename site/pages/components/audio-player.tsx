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
              optional: true,
            },
            {
              name: 'Seek bar',
              description:
                'Displays duration and buffering. Indicates audio track duration and buffering, and controls the track position',
              component: 'Slider',
              optional: true,
            },
            {
              name: 'Skip next button',
              description: 'Skips to the next track',
              component: 'Icon Button',
              optional: true,
            },
            {
              name: 'Skip previous button',
              description: 'Skips to the previous track',
              component: 'Icon Button',
              optional: true,
            },
            {
              name: 'Forward button',
              description:
                'Skips the audio track forward a specified number of seconds',
              component: 'Icon Button',
              optional: true,
            },
            {
              name: 'Replay button',
              description:
                'Skips the audio track backwards a specified number of seconds',
              component: 'Icon Button',
              optional: true,
            },
            {
              name: 'Volume control',
              description: 'Raises, lowers or mutes audio',
              component: ['Icon Button', 'Slider', 'Popover'],
              optional: true,
            },
            {
              name: 'Playback speed control',
              description: 'Changes the speed of the audio track',
              component: ['Icon Button', 'Popover', 'Modal'],
              optional: true,
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
      notice: (
        <>
          Code examples can be viewed in{' '}
          <Link
            href="https://storybook.newskit.co.uk/?path=/story/newskit-light-audio-player-composable--audio-player"
            target="_blank"
          >
            Storybook
          </Link>{' '}
          via the ‘Story’ tab in the addons panel.
        </>
      ),
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
            'components/audio-player/behaviours/skip-next',
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
    componentAPI={{
      components: [
        {
          title: 'Audio player composable',
          summary:
            'The audio player composable has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'src',
              type: 'string',
              description: 'URL of the audio source to be played',
              required: true,
            },
            {
              name: 'isLive',
              type: 'boolean',
              description:
                'If true, will display the controls for the live player, and the duration text block is replaced with a live indicator flag.',
            },
            {
              name: 'autoPlay',
              type: 'boolean',
              default: 'false',
              description: (
                <>
                  The autoPlay feature is supported in most{' '}
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/autoplay"
                    target="_blank"
                  >
                    desktop browsers.
                  </Link>{' '}
                  It will not work on mobile browsers however to prevent users
                  from using up their mobile data allowance.
                  <br />
                  <br />
                  autoPlay on page load is not supported, the user has to
                  interact with the site for it to work. Eg. navigating inside
                  an SPA seems to satisfy the browser as there was no page
                  refresh.
                </>
              ),
            },
            {
              name: 'initialVolume',
              type: 'number',
              default: '0.7',
              description:
                'The volume value, a number between 0 (audio muted) and 1 (max volume). This value must be updated when onChange is called.',
              required: true,
            },
            {
              name: 'ariaLandmark',
              type: 'string',
              default: 'audio-player',
              description: (
                <>
                  The aria-label attribute for the audio player.
                  <br />
                  <br />
                  It is recommended that this is enabled for screen readers to
                  be able to explain the audio player purpose.
                  <br />
                  <br />
                  If left undefined it is set to &quot;audio-player&quot;.
                  <br />
                  <br />
                  ariaLandmark should be unique, so the same value should not
                  appear on the same page more than once.
                </>
              ),
            },
          ],
          propsFooter: (
            <>
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Audio player requires"
                overrides={{
                  marginBlockStart: 'space070',
                }}
              >
                The audio player requires a source stream to be passed in as
                using the <InlineCode>src</InlineCode> prop. This will then be
                loaded into the internal{' '}
                <InlineCode>&#60;audio&#62;</InlineCode> element for playback.
              </InlineMessage>
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Audio element"
                overrides={{
                  marginBlockStart: 'space070',
                }}
              >
                The audio element is non-visual, and as such doesn’t come with
                predefined elements and attributes that can be overridden to
                define their appearance.
              </InlineMessage>
            </>
          ),
        },
        {
          title: 'Play Pause Button',
          summary:
            'The play pause button has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'onClick',
              type: 'function',
              default: 'void',
              description:
                'Defines the action that occurs on click of the play pause icon button',
            },
            {
              name: 'loading',
              type: 'boolean',
              default: 'true',
              description:
                'If true, will cause the play pause icon button to appear in a loading state, with a progress indicator icon displayed in the play pause icon button. This will display until playback starts, or resumes.',
            },
          ],
          overridesRows: [
            {
              attribute: 'audioPlayer.PlayPauseButton.stylePreset',
              type: 'MQ<string>',
              default: 'iconButtonSolidPrimary',
              description:
                'Overrides the stylePreset of the play pause icon button',
            },
          ],
          propsFooter: (
            <InlineMessage
              icon={infoIcon}
              role="region"
              aria-label="Play pause button"
              overrides={{
                marginBlockStart: 'space070',
              }}
            >
              Please refer to the{' '}
              <Link href="/components/button/">Icon Button</Link> component for
              details of the props and other overrides.
            </InlineMessage>
          ),
        },
        {
          title: 'Time display',
          summary:
            'The time display has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'format',
              type: 'function',
              description:
                'Function that takes duration and current timestamp and return a formatted string so that user can format the time display in different manner',
            },
          ],
          overridesRows: [
            {
              attribute: 'audioPlayerTimeDisplay.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityButton030',
              description: 'Overrides the typographyPreset of the time display',
            },
            {
              attribute: 'audioPlayerTimeDisplay.stylePreset',
              type: 'MQ<string>',
              default: 'timeDisplay',
              description: 'Overrides the stylePreset of the time display',
            },
          ],
        },
        {
          title: 'Seek bar',
          summary:
            'The seek bar has the following overrides that can be used to define an appropriate experience for different use cases.',
          overridesRows: [
            {
              attribute: 'audioPlayerSeekBar.slider',
              type: 'sliderSliderOverrideProps',
              description: (
                <>
                  Overrides the styles of the seek bar slider. The slider
                  overrides structure can be found in the{' '}
                  <Link href="/components/slider/">
                    Slider component documentation page.
                  </Link>
                  <br />
                  <br />
                  If the Audio Player is in live mode, the seek bar slider is
                  not shown and this override is ignored.
                </>
              ),
            },
            {
              attribute: 'audioPlayerSeekBar.slider.track.stylePreset',
              type: 'MQ<string>',
              default: 'seekBarTrack',
              description:
                'Overrides the stylePreset of the buffering section of the seek bar. If player is in live mode, the seek bar slider is not shown and this override is ignored.',
            },

            {
              attribute: 'audioPlayerSeekBar.slider.track.size',
              type: 'MQ<string>',
              default: 'sizing020',
              description: 'Overrides the size of the seek bar slider. ',
            },
            {
              attribute: 'audioPlayerSeekBar.slider.indicator.stylePreset',
              type: 'MQ<string>',
              default: 'seekBarIndicator',
              description: 'Overrides the stylePreset of the seek bar slider. ',
            },
            {
              attribute: 'audioPlayerSeekBar.slider.thumb.stylePreset',
              type: 'MQ<string>',
              default: 'seekBarThumb',
              description:
                'Overrides the stylePreset of the seek bar slider thumb. ',
            },
            {
              attribute: 'audioPlayerSeekBar.slider.thumb.size',
              type: 'MQ<string>',
              default: 'sizing040',
              description: 'Overrides the size of the seek bar slider thumb. ',
            },
            {
              attribute: 'audioPlayerSeekBar.slider.feedback.size',
              type: 'MQ<string>',
              default: 'sizing060',
              description: 'Overrides the size of the feedback element.',
            },
            {
              attribute: 'audioPlayerSeekBar.buffering.stylePreset',
              type: 'MQ<string>',
              default: 'seekBarBuffering',
              description:
                'Overrides the styles of the buffering of the seek bar. ',
            },
          ],
          overridesFooter: (
            <InlineMessage
              icon={infoIcon}
              role="region"
              aria-label="Slider"
              overrides={{
                marginBlockStart: 'space070',
              }}
            >
              Please refer to the <Link href="/components/slider/">Slider</Link>{' '}
              component for details of overrides.
            </InlineMessage>
          ),
        },
        {
          title: 'Skip next button',
          summary:
            'The skip next button has the following overrides that can be used to define an appropriate experience for different use cases.',
          overridesRows: [
            {
              attribute: 'audioPlayerSkipNextButton.stylePreset',
              type: 'MQ<string>',
              default: 'iconButtonMinimalPrimary',
              description: 'Overrides the stylePreset of the skip next button',
            },
          ],
          overridesFooter: (
            <InlineMessage
              icon={infoIcon}
              role="region"
              aria-label="Icon button"
              overrides={{
                marginBlockStart: 'space070',
              }}
            >
              Please refer to the{' '}
              <Link href="/components/button/">icon button</Link> component for
              details of the props and other overrides.
            </InlineMessage>
          ),
        },
        {
          title: 'Skip previous button',
          summary:
            'The skip previous button has the following overrides that can be used to define an appropriate experience for different use cases.',
          overridesRows: [
            {
              attribute: 'audioPlayerSkipPreviousButton.stylePreset',
              type: 'MQ<string>',
              default: 'iconButtonMinimalPrimary',
              description:
                'Overrides the stylePreset of the skip previous button',
            },
          ],
          overridesFooter: (
            <InlineMessage
              icon={infoIcon}
              role="region"
              aria-label="Skip previous button"
              overrides={{
                marginBlockStart: 'space070',
              }}
            >
              Please refer to the{' '}
              <Link href="/components/button/">icon button</Link> component for
              details of the props and other overrides.
            </InlineMessage>
          ),
        },
        {
          title: 'Forward Button',
          summary:
            'The forward button has the following overrides that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'seconds',
              type: 'number',
              default: '10',
              description:
                'Forwards the audio track a determined number of seconds',
            },
          ],
          overridesRows: [
            {
              attribute: 'audioPlayerForwardButton.stylePreset',
              type: 'MQ<string>',
              default: 'iconButtonMinimalPrimary',
              description: 'Overrides the stylePreset of the forward button',
            },
          ],
          overridesFooter: (
            <InlineMessage
              icon={infoIcon}
              role="region"
              aria-label="Forward Button"
              overrides={{
                marginBlockStart: 'space070',
              }}
            >
              Please refer to the{' '}
              <Link href="/components/button/">icon button</Link> component for
              details of the props and other overrides.
            </InlineMessage>
          ),
        },
        {
          title: 'Replay button',
          summary:
            'The replay button has the following overrides that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'seconds',
              type: 'number',
              default: '10',
              description:
                'Replays the audio track a determined number of seconds',
            },
          ],
          overridesRows: [
            {
              attribute: 'audioPlayerReplayButton.stylePreset',
              type: 'MQ<string>',
              default: 'iconButtonMinimalPrimary',
              description: 'Overrides the stylePreset of the replay button',
            },
          ],
          overridesFooter: (
            <InlineMessage
              icon={infoIcon}
              role="region"
              aria-label="Replay button"
              overrides={{
                marginBlockStart: 'space070',
              }}
            >
              Please refer to the{' '}
              <Link href="/components/button/">icon button</Link> component for
              details of props and overrides.
            </InlineMessage>
          ),
        },
        {
          title: 'Volume control',
          summary:
            'The volume control has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'volume',
              type: 'number',
              description:
                'The volume value, a number between 0 and 1. This value must be updated when onChange is called.',
              required: true,
            },
            {
              name: 'muteButtonSize',
              type: 'ButtonSize',
              default: 'medium',
              description: 'Sets the size of the mute button',
            },
            {
              name: 'muteKeyboardShortcut',
              type: 'keyboardShortcuts?: {muteButton: string | string[]}',
              default: 'm',
              description:
                'Sets the keyboard shortcut for mute/unmute audio (toggle).',
              required: true,
            },
            {
              name: 'layout',
              type: [
                'collapsed',
                'vertical',
                'horizontal',
                'horizontal-expanded',
              ],
              default: 'horizontal-expanded',
              description: 'Set the layout option of the volume control.',
            },
          ],
          overridesRows: [
            {
              attribute: 'audioPlayerVolumeControl',
              type: '',
              description:
                'If provided, this overrides the volume control defaults.',
            },
            {
              attribute: 'audioPlayerVolumeControl.size',
              type: 'string',
              default: '100%',
              description:
                'If provided, this overrides the size of volume control.',
            },
            {
              attribute: 'audioPlayerVolumeControl.spaceBetween',
              type: 'MQ<string>',
              default: 'space030',
              description:
                'If provided, this overrides the space applied between the mute volume icon button, and the volume slider.',
            },
            {
              attribute: 'audioPlayerVolumeControl.button.stylePreset',
              type: 'MQ<string>',
              default: 'iconButtonMinimalPrimary',
              description: (
                <>
                  If provided, this overrides the appearance of the mute volume
                  icon button.
                  <br />
                  <br />
                  <Link href="/components/button/">
                    For icon button overrides, please refer to the Icon Button
                    component.
                  </Link>
                </>
              ),
            },
            {
              attribute: 'audioPlayerVolumeControl.button.iconSize',
              type: 'string',
              default: 'iconSize020',
              description:
                'If provided, this overrides the icon size for the mute volume icon button.',
            },
            {
              attribute: 'audioPlayerVolumeControl.button.iconDefault',
              type: 'MQ<string>',
              default: 'iconFilledVolumeUp',
              description: 'If provided, this overrides the mute volume icon.',
            },
            {
              attribute: 'audioPlayerVolumeControl.button.iconMuted',
              type: 'MQ<string>',
              default: 'iconFilledVolumeOff',
              description:
                'If provided, this overrides the mute volume icon, when audio is muted.',
            },
            {
              attribute: 'audioPlayerVolumeControl.slider.track.stylePreset',
              type: 'MQ<string>',
              default: 'audioPlayerVolumeControlTrack',
              description: (
                <>
                  If provided, this overrides the appearance of the volume
                  slider track.
                  <br />
                  <br />
                  <Link href="/components/slider/">
                    For slider overrides, please refer to the Slider component.
                  </Link>
                </>
              ),
            },
            {
              attribute: 'audioPlayerVolumeControl.slider.track.size',
              type: 'string',
              default: 'sizing010',
              description:
                'If provided, this overrides the size of the volume slider track.',
            },
            {
              attribute: 'audioPlayerVolumeControl.slider.track.length',
              type: 'string',
              default: '130px',
              description:
                'If provided, this overrides the length of the volume slider track.',
            },
            {
              attribute:
                'audioPlayerVolumeControl.slider.indicator.stylePreset',
              type: 'MQ<string>',
              default: 'audioPlayerVolumeControlIndicator',
              description:
                'If provided, this overrides the appearance of the volume slider indicator.',
            },
            {
              attribute: 'audioPlayerVolumeControl.slider.thumb.stylePreset',
              type: 'MQ<string>',
              default: 'audioPlayerVolumeControlThumb',
              description:
                'If provided, this overrides the appearance of the volume slider thumb.',
            },
            {
              attribute: 'audioPlayerVolumeControl.slider.thumb.track.size',
              type: 'string',
              default: 'sizing040',
              description:
                'If provided, this overrides the size of the volume slider thumb.',
            },
            {
              attribute:
                'audioPlayerVolumeControl.slider.thumbLabel.stylePreset',
              type: 'MQ<string>',
              default: 'audioPlayerVolumeControlThumbLabel',
              description:
                'If provided, this overrides the appearance of the volume slider thumb label.',
            },
            {
              attribute:
                'audioPlayerVolumeControl.slider.thumbLabel.typographyPreset',
              type: 'MQ<string>',
              default: 'audioPlayerVolumeControlThumb',
              description:
                'If provided, this overrides the typographyPreset of the volume slider thumb label.',
            },
            {
              attribute: 'audioPlayerVolumeControl.slider.thumbLabel.space',
              type: 'MQ<string>',
              default: '',
              description:
                'If provided, this overrides the space of the volume slider thumb label.',
            },
            {
              attribute: 'audioPlayerVolumeControl.slider.labels.stylePreset',
              type: 'MQ<string>',
              default: 'audioPlayerVolumeControlLabels',
              description:
                'If provided, this overrides the appearance of the volume slider labels.',
            },
            {
              attribute:
                'audioPlayerVolumeControl.slider.labels.typographyPreset',
              type: 'MQ<string>',
              default: '',
              description:
                'If provided, this overrides the typographyPreset of the volume slider labels.',
            },

            {
              attribute: 'audioPlayerVolumeControl.slider.labels.space',
              type: 'MQ<string>',
              default: '',
              description:
                'If provided, this overrides the space of the volume slider labels.',
            },
            {
              attribute: 'audioPlayerVolumeControl.transitionPreset',
              type: 'MQ<string>',
              default: 'widthChange',
              description:
                'If provided, this overrides the transitionPreset applied to the slider element of the volume control in a horizontal orientation.',
            },
            {
              attribute: 'audioPlayerVolumeControl.popover.stylePreset',
              type: 'MQ<string>',
              default: 'audioPlayerVolumeControlPopover',
              description:
                'If provided, this overrides the appearance of the Popover.',
            },
            {
              attribute:
                'audioPlayerVolumeControl.popover.content.paddingBlock',
              type: 'MQ<string>',
              default: 'space030',
              description: '',
            },
            {
              attribute:
                'audioPlayerVolumeControl.popover.content.paddingInline',
              type: 'MQ<string>',
              default: 'space030',
              description: '',
            },
          ],
          overridesFooter: (
            <InlineMessage
              icon={infoIcon}
              role="region"
              aria-label="Volume control"
              overrides={{
                marginBlockStart: 'space070',
              }}
            >
              Please refer to the{' '}
              <Link href="/components/popover/">Popover</Link> component for
              details of props and overrides.
            </InlineMessage>
          ),
        },
        {
          title: 'Playback Speed Control',
          summary:
            'The playback speed control has the following overrides that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'useModal',
              type: 'MQ<boolean>',
              default: 'false',
              description: (
                <>
                  Select options appear in a{' '}
                  <Link href="/components/modal/">Modal</Link> (with overlay).
                </>
              ),
            },
          ],
          overridesRows: [
            {
              attribute: 'audioPlayerPlaybackSpeedControl.iconButton.size',
              type: 'MQ<string>',
              default: 'small',
              description:
                'If provided, this overrides the size of the PlaybackSpeedControl icon button.',
            },
            {
              attribute:
                'audioPlayerPlaybackSpeedControl.iconButton.stylePreset',
              type: 'MQ<string>',
              default: 'iconButtonMinimalPrimary',
              description:
                'If provided, this overrides the stylePreset of the PlaybackSpeedControl icon button.',
            },
            {
              attribute: 'audioPlayerPlaybackSpeedControl.iconButton.icon',
              type: 'MQ<string>',
              default: 'iconFilledSlowMotionVideo',
              description:
                'If provided, this overrides the icon in the PlaybackSpeedControl icon button.',
            },
            {
              attribute: 'audioPlayerPlaybackSpeedControl.iconButton.iconSize',
              type: 'MQ<string>',
              default: 'iconSize020',
              description:
                'If provided, this overrides the iconSize in the PlaybackSpeedControl icon button.',
            },
            {
              attribute: 'SelectionListOption.minHeight',
              type: 'MQ<string>',
              default: 'sizing080',
              description:
                'If provided, this overrides the minHeight of the SelectionListOption.',
            },
            {
              attribute: 'SelectionListOption.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityBody020',
              description:
                'If provided, this overrides the typographyPreset of the SelectionListOption.',
            },
            {
              attribute: 'SelectionListOption.stylePreset',
              type: 'MQ<string>',
              default: 'selectOptionItem',
              description:
                'If provided, this overrides the stylePreset of the SelectionListOption.',
            },
            {
              attribute: 'SelectionListOption.spaceInline',
              type: 'MQ<string>',
              default: 'space020',
              description:
                'If provided, this overrides the space between the icon and text in the SelectionListOption.',
            },
            {
              attribute: 'SelectionListOption.paddingBlock',
              type: 'MQ<string>',
              default: 'space020',
              description:
                'If provided, this overrides the paddingBlock of the SelectionListOption.',
            },

            {
              attribute: 'SelectionListOption.paddingInline',
              type: 'MQ<string>',
              default: 'space020',
              description:
                'If provided, this overrides the paddingInline of the SelectionListOption.',
            },
            {
              attribute: 'SelectionListOption.icon.stylePreset',
              type: 'MQ<string>',
              default: 'selectOptionItemIcon',
              description:
                'If provided, this overrides the icon stylePreset in the SelectionListOption.',
            },
            {
              attribute: 'SelectionListOption.icon.iconSize',
              type: 'MQ<string>',
              default: 'iconSize020',
              description:
                'If provided, this overrides the iconSize in the SelectionListOption.',
            },
          ],
          propsFooter: (
            <InlineMessage
              icon={infoIcon}
              role="region"
              aria-label="Playback Speed Control"
              overrides={{
                marginBlockStart: 'space070',
              }}
            >
              This component should extend the overrides of the{' '}
              <Link href="/components/popover/">Popover</Link>,{' '}
              <Link href="/components/modal/">Modal</Link> components.
            </InlineMessage>
          ),
        },
      ],
    }}
    related={{
      related: ['Button', 'Slider', 'Modal', 'Popover'],
    }}
  />
);

export default AudioPlayerComponent;

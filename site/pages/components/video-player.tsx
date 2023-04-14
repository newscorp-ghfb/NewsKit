import React from 'react';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {InlineMessage, toNewsKitIcon, Block} from 'newskit';
import {renderIfReactComponent} from 'newskit/utils/component';
import {LayoutProps} from '../../components/layout';
import {MetaStatus} from '../../components/meta';
import {ComponentPageCell} from '../../components/layout-cells';
import {InlineCode} from '../../components/markdown-elements';
import {ContentText} from '../../components/text-section';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {
  AccessibilitySection,
  AnatomySection,
  CommonSection,
  ComponentAPISection,
  RelatedComponentsSection,
} from '../../templates/template-sections';
import {Link} from '../../components/link';
import {ComponentPageBasicTemplate} from '../../templates/component-page-template/component-page-basic-template';
import {commonLogicalProps} from '../../components/component-api/common-logical-props';
import {OverridesRowsProps} from '../../components/component-api';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const VideoPlayerComponent = (layoutProps: LayoutProps) => (
  <ComponentPageBasicTemplate
    headTags={{
      title: 'Video Player',
      description:
        'The video player component allows a user to play and control video content.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Media',
      name: 'Video Player',
      hero: {
        illustration: 'components/video-player/hero',
      },
      introduction:
        'The video player component allows a user to play and control video content.',
    }}
    componentDefaultsKey="Video player"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v5.0.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/tree/main/src/video-player',
      storybookId: 'components-video-player--story-video-player-default',
    }}
  >
    <ComponentPageCell>
      <Block marginBlockEnd="space100">
        <InlineMessage
          icon={infoIcon}
          role="region"
          aria-label="component notice"
        >
          The NewsKit video player component wraps the underlying{' '}
          <Link
            href="https://player.support.brightcove.com/getting-started/index.html"
            target="_blank"
          >
            Brightcove player
          </Link>{' '}
          that can be themed, by using{' '}
          <Link href="/theme/foundation/design-tokens/">
            NewsKit design tokens
          </Link>
          .
        </InlineMessage>
      </Block>
    </ComponentPageCell>
    <AnatomySection
      introduction={
        <>
          In order to allow NewsKit consumers to display video content, the
          component is built on top of{' '}
          <Link
            href="https://player.support.brightcove.com/getting-started/index.html"
            target="_blank"
          >
            Brightcove’s video player.
          </Link>
          <br />
          <br />
          The subcomponents listed below can be enabled in the{' '}
          <Link
            target="_blank"
            href="https://player.support.brightcove.com/general/player-configuration-guide.html"
          >
            Brightcove config file
          </Link>{' '}
          passed to the video player component:
        </>
      }
      media={getIllustrationComponent('components/video-player/anatomy')}
      rows={[
        {
          name: 'Play button',
          description: 'Toggle button for playing or pausing the video',
          optional: true,
        },
        {
          name: 'Seek bar',
          description: (
            <>
              Displays duration and buffering, and indicates and controls track
              position. It includes: <InlineCode>playProgressBar</InlineCode>,{' '}
              <InlineCode>seekHandle</InlineCode>,{' '}
              <InlineCode>currentDuration</InlineCode>, and{' '}
              <InlineCode>seekPosition</InlineCode>.
            </>
          ),
          optional: true,
        },
        {
          name: 'Control bar',
          description: (
            <>
              Displays video player actions in a bar pinned to the bottom of the
              video. It includes: <InlineCode>timeDisplay</InlineCode>, and{' '}
              <InlineCode>volumeControl</InlineCode>.
            </>
          ),
          optional: true,
        },
        {
          name: 'Dock text',
          description: (
            <>
              Displays video details on hover when video is paused. It includes:{' '}
              <InlineCode>title</InlineCode>, and{' '}
              <InlineCode>description</InlineCode>.
            </>
          ),
          optional: true,
        },
        {
          name: 'Mini card overlay',
          description: (
            <>
              Displays the upcoming video details in a mini card overlay. It
              includes: <InlineCode>countdown</InlineCode>,{' '}
              <InlineCode>name</InlineCode>, and{' '}
              <InlineCode>closeButton</InlineCode>.
            </>
          ),
          optional: true,
        },
      ]}
    />
    <CommonSection
      title="Layout examples"
      id="layoutexamples"
      introduction={
        <>
          <ContentText title="Default player">
            The following example shows the default video player layout option
            that can be assembled using the various available subcomponents of
            the Brightcove player.{' '}
            <Link
              href="https://storybook.newskit.co.uk/?path=/docs/components-video-player--story-video-player-default"
              target="_blank"
            >
              View the example in Storybook
            </Link>
            .
          </ContentText>
        </>
      }
    >
      <ComponentPageCell>
        <Block spaceStack="space100">
          {renderIfReactComponent(
            getIllustrationComponent('components/video-player/default-player'),
          )}
        </Block>
      </ComponentPageCell>
      <ComponentPageCell>
        <Block spaceStack="space050">
          <ContentText title="Player in card">
            The video player can be used with other components to create more
            complex modules, such as a{' '}
            <Link href="/components/card/" target="_blank">
              card
            </Link>{' '}
            to give context to the video being played.{' '}
            <Link
              href="https://storybook.newskit.co.uk/?path=/docs/components-video-player--story-video-player-default"
              target="_blank"
            >
              View the examples in Storybook
            </Link>
            .
          </ContentText>
          <Block spaceStack="space050">
            {renderIfReactComponent(
              getIllustrationComponent(
                'components/video-player/player-in-card',
              ),
            )}
          </Block>
        </Block>
        <Block marginBlockEnd="space040" marginBlockStart="space080">
          <InlineMessage
            icon={infoIcon}
            role="region"
            aria-label="player card notice"
          >
            Code examples can be viewed in Storybook via the ‘Story’ tab in the
            addons panel.
          </InlineMessage>
        </Block>
        <Block marginBlockEnd="space040">
          <InlineMessage icon={infoIcon} role="region" aria-label="player info">
            For full details of all available Brightcove player subcomponents,
            and their respective options and behaviours, refer to the{' '}
            <Link
              href="https://player.support.brightcove.com/index.html"
              target="_blank"
            >
              Brightcove documentation
            </Link>
            , and the{' '}
            <Link href="https://github.com/brightcove/playerx" target="_blank">
              playerx GitHub repo
            </Link>
            .
          </InlineMessage>
        </Block>
        <Block>
          <InlineMessage
            icon={infoIcon}
            role="region"
            aria-label="player newskit info"
          >
            NewsKit allows users to customise the styling of the subcomponents
            of the Brightcove player, using{' '}
            <Link href="/theme/foundation/design-tokens/">
              {' '}
              NewsKit design tokens
            </Link>
            <br />
            <br />
            Refer to the{' '}
            <Link
              href="https://player.support.brightcove.com/getting-started/step-step-player-customization.html"
              target="_blank"
            >
              Step-by-Step: Player Customization guide from Brightcove
            </Link>{' '}
            for details.
          </InlineMessage>
        </Block>
      </ComponentPageCell>
    </CommonSection>
    <AccessibilitySection
      introduction={
        <>
          The video player component meets the standards set out in the{' '}
          <Link href="https://www.w3.org/TR/WCAG21/" target="_blank">
            WCAG 2.1 AA
          </Link>{' '}
          accessibility guidelines.
          <br />
          <br />
          Refer to the{' '}
          <Link
            href="https://player.support.brightcove.com/general/brightcove-player-accessibility.html"
            target="_blank"
          >
            Brightcove Player accessibility features
          </Link>{' '}
          for more information.
        </>
      }
    />
    <ComponentAPISection
      components={[
        {
          title: 'Video Player',
          summary: (
            <>
              The video player requires a <InlineCode>config</InlineCode> prop
              that can be used to define an appropriate experience for different
              use cases. This will then be passed to the underlying{' '}
              <Link
                href="https://player.support.brightcove.com/getting-started/step-step-player-customization.html"
                target="_blank"
              >
                Brightcove player
              </Link>{' '}
              .
            </>
          ),
          propsRows: [
            {
              name: 'config',
              type: 'object',
              description: (
                <>
                  Once you have a Brightcove video created, you can pass the
                  above attributes of your Brightcove video to the config. See{' '}
                  <Link
                    href="https://player.support.brightcove.com/getting-started/step-step-brightcove-player.html"
                    target="_blank"
                  >
                    Step-by-Step: Brightcove Player
                  </Link>{' '}
                  for more info
                </>
              ),
            },
          ],
          overridesRows: [
            {
              attribute: 'playButton.stylePreset',
              type: 'MQ<string>',
              default: 'videoPlayerPlayButton',
              description: 'Overrides the stylePreset of the play button',
            },
            {
              attribute: 'seekBar.stylePreset',
              type: 'MQ<string>',
              default: 'videoPlayerSeekBarContainer',
              description: 'Overrides the stylePreset of the seekBar',
            },
            {
              attribute: 'seekBar.loadingProgressBar.stylePreset',
              type: 'MQ<string>',
              default: 'videoPlayerLoadProgressBar',
              description:
                'Overrides the stylePreset of the loadingProgressBar',
            },
            {
              attribute: 'seekbar.playProgressBar.stylePreset',
              type: 'MQ<string>',
              default: 'videoPlayerPlayProgressBar',
              description: 'Overrides the stylePreset of the playProgressBar',
            },
            {
              attribute: 'seekbar.seekHandle.stylePreset',
              type: 'MQ<string>',
              default: 'videoPlayerSeekHandle',
              description: 'Overrides the stylePreset of the seekHandle',
            },
            {
              attribute: 'seekbar.seekHandle.width',
              type: 'MQ<string>',
              default: 'borderWidth020',
              description: 'Overrides the width of the seekHandle',
            },
            {
              attribute: 'seekbar.currentDuration.stylePreset',
              type: 'MQ<string>',
              default: 'videoPlayerCurrentDuration',
              description: 'Overrides the stylePreset of the currentDuration',
            },
            {
              attribute: 'seekbar.currentDuration.spaceInset',
              type: 'MQ<string>',
              default: 'spaceInset020',
              description: 'Overrides the spaceInset of the currentDuration',
            },
            {
              attribute: 'seekbar.currentDuration.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityMeta010',
              description:
                'Overrides the typographyPreset of the currentDuration',
            },
            {
              attribute: 'seekbar.seekPosition.stylePreset',
              type: 'MQ<string>',
              default: 'videoPlayerSeekPosition',
              description: 'Overrides the stylePreset of the seekPosition',
            },
            {
              attribute: 'seekbar.seekPosition.spaceInset',
              type: 'MQ<string>',
              default: 'spaceInset020',
              description: 'Overrides the spaceInset of the seekPosition',
            },
            {
              attribute: 'controlBar.stylePreset',
              type: 'MQ<string>',
              default: 'videoPlayerControlBar',
              description: 'Overrides the stylePreset of the controlBar',
            },
            {
              attribute: 'controlBar.typographyPreset',
              type: 'MQ<string>',
              default: ['xs= utilityMeta010', 'md= utilityMeta020'],
              description: 'Overrides the typographyPreset of the controlBar',
            },
            {
              attribute: 'controlBar.maxHeight',
              type: 'MQ<string>',
              default: ['xs= sizing070', 'md= sizing080'],
              description: 'Overrides the maxHeight of the controlBar',
            },
            {
              attribute: 'controlBar.timeDisplay.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityMeta010',
              description: 'Overrides the typographyPreset of the timeDisplay',
            },
            {
              attribute: 'controlBar.timeDisplay.stylePreset',
              type: 'MQ<string>',
              default: 'inkInverse',
              description: 'Overrides the stylePreset of the timeDisplay',
            },
            {
              attribute: 'controlBar.timeDisplay.currentTime.spaceInline',
              type: 'MQ<string>',
              default: 'space010',
              description: 'Overrides the spaceInline of the currentTime',
            },
            {
              attribute: 'controlBar.timeDisplay.divider.spaceInline',
              type: 'MQ<string>',
              default: 'space010',
              description: 'Overrides the spaceInline of the divider',
            },
            {
              attribute: 'controlBar.volumeControl.volumeBar.stylePreset',
              type: 'MQ<string>',
              default: 'videoPlayerVolumeBar',
              description: 'Overrides the stylePreset of the volumeBar',
            },
            {
              attribute: 'controlBar.volumeControl.volumeLevel.stylePreset',
              type: 'MQ<string>',
              default: 'videoPlayerVolumeLevel',
              description: 'Overrides the stylePreset of the volumeLevel',
            },
            {
              attribute: 'controlBar.iconToggle.stylePreset',
              type: 'MQ<string>',
              default: 'inkInverse',
              description: 'Overrides the stylePreset of the iconToggle',
            },
            {
              attribute: 'dockText.stylePreset',
              type: 'MQ<string>',
              default: 'videoPlayerDockText',
              description: 'Overrides the stylePreset of the dockText',
            },
            {
              attribute: 'dockText.spaceInset',
              type: 'MQ<string>',
              default: ["xs: 'spaceInset040'", "md: 'spaceInset050'"],
              description: 'Overrides the spaceInset of the dockText',
            },
            {
              attribute: 'dockText.title.stylePreset',
              type: 'MQ<string>',
              default: 'videoPlayerDockTextTitle',
              description: 'Overrides the stylePreset of the dockText title',
            },
            {
              attribute: 'dockText.title.typographyPreset',
              type: 'MQ<string>',
              default: ["xs: 'utilityHeading010'", "md:'utilityHeading040'"],
              description:
                'Overrides the typographyPreset of the dockText title',
            },
            {
              attribute: 'dockText.title.spaceStack',
              type: 'MQ<string>',
              default: ["xs: 'space020'", "md: 'space030'"],
              description: 'Overrides the spaceStack of the dockText title',
            },
            {
              attribute: 'dockText.description.stylePreset',
              type: 'MQ<string>',
              default: 'inkInverse',
              description:
                'Overrides the stylePreset of the dockText description',
            },
            {
              attribute: 'dockText.description.typographyPreset',
              type: 'MQ<string>',
              default: ["xs: 'utilityBody010'", "md: 'utilityBody030'"],
              description:
                'Overrides the typographyPreset of the dockText description',
            },
            {
              attribute: 'miniCardOverlay.stylePreset',
              type: 'MQ<string>',
              default: 'videoPlayerMiniCardOverlay',
              description: 'Overrides the stylePreset of the miniCardOverlay',
            },
            {
              attribute: 'miniCardOverlay.spaceInset',
              type: 'MQ<string>',
              default: 'spaceInsetSquish020',
              description: 'Overrides the spaceInset of the miniCardOverlay',
            },
            {
              attribute: 'miniCardOverlay.countdown.stylePreset',
              type: 'MQ<string>',
              default: 'inkInverse',
              description:
                'Overrides the stylePreset of the miniCardOverlay countdown',
            },
            {
              attribute: 'miniCardOverlay.countdown.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityMeta010',
              description:
                'Overrides the typographyPreset of the miniCardOverlay countdown',
            },
            {
              attribute: 'miniCardOverlay.countdown.spaceStack',
              type: 'MQ<string>',
              default: 'space010',
              description:
                'Overrides the spaceStack of the miniCardOverlay countdown',
            },
            {
              attribute: 'miniCardOverlay.name.stylePreset',
              type: 'MQ<string>',
              default: 'inkInverse',
              description:
                'Overrides the stylePreset of the miniCardOverlay name',
            },
            {
              attribute: 'miniCardOverlay.name.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityMeta010',
              description:
                'Overrides the typographyPreset of the miniCardOverlay name',
            },
            {
              attribute: 'miniCardOverlay.closeButton.spaceInset',
              type: 'MQ<string>',
              default: 'spaceInset010',
              description:
                'Overrides the spaceInset of the miniCardOverlay closeButton',
            },
            ...(commonLogicalProps() as OverridesRowsProps[]),
          ],
        },
      ]}
    />
    <RelatedComponentsSection related={['Audio Player']} />
  </ComponentPageBasicTemplate>
);

export default VideoPlayerComponent;

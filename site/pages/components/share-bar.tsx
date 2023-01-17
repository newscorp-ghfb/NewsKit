import React from 'react';
import {IconButton, styled, ShareBar} from 'newskit';

import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {UsageKind} from '../../components/usage-card';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {OverridesRowsProps} from '../../components/component-api';
import {commonLogicalProps} from '../../components/component-api/common-logical-props';
import {IconFilledFacebook} from '../../components/icons/icon-filled-facebook';
import {IconFilledInstagram} from '../../components/icons/icon-filled-instagram';
import {IconFilledTwitter} from '../../components/icons/icon-filled-twitter';

const PlaygroundContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
`;

const ShareBarComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Share Bar',
      description:
        'The Share Bar component allows users to share hyperlinks of content across their various social media and communication channels. It is usually embedded within article pages in order to increase the reach of a story.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Actions & Inputs',
      name: 'Share Bar',
      hero: {
        illustration: 'components/share-bar/share-bar-illustration',
      },
      introduction:
        'The Share Bar component allows users to share hyperlinks of content across their various social media and communication channels. It is usually embedded within article pages in order to increase the reach of a story. The Share Bar component is now deprecated and will be removed in the next major release.',
    }}
    componentDefaultsKey="shareBar"
    meta={{
      status: MetaStatus.Deprecated,
      introduced: 'v0.20.1',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit',
      figmaUrl: 'https://github.com/newscorp-ghfb/newskit',
      storybookId: 'deprecated-share-bar--story-horizontal',
    }}
    interactiveDemo={{
      introduction:
        'This demo allows you to preview the Share Bar component, its variations, and configuration options.',
      playground: {
        componentName: 'ShareBar',
        component: state => (
          <PlaygroundContainer>
            <ShareBar {...state}>
              <IconButton
                size="large"
                overrides={{stylePreset: 'iconButtonMinimalSecondary'}}
                aria-label="Share on Twitter"
              >
                <IconFilledInstagram />
              </IconButton>
              <IconButton
                size="large"
                overrides={{stylePreset: 'iconButtonMinimalSecondary'}}
                aria-label="Share on Twitter"
              >
                <IconFilledTwitter />
              </IconButton>
              <IconButton
                size="large"
                overrides={{stylePreset: 'iconButtonMinimalSecondary'}}
                aria-label="Share on Facebook"
              >
                <IconFilledFacebook />
              </IconButton>
            </ShareBar>
          </PlaygroundContainer>
        ),
        knobs: [
          {
            name: 'Label',
            propName: 'label',
            value: 'Label',
          },
          {
            name: 'Vertical',
            propName: 'vertical',
            value: false,
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ] as any,
      },
    }}
    anatomy={{
      introduction:
        'Share Bars contain two required element(s) and one optional element.',
      rows: [
        {
          name: 'Label',
          description:
            'Informs users what information belongs in a given Share Bar',
          component: ['Text Block'],
          optional: true,
        },
        {
          name: 'Action Item',
          description:
            'Actions components can be passed into the list which, when clicked, take the user to the relevant social channel.',
          component: ['Button', 'Icon Button', 'Link'],
          optional: undefined,
        },
        {
          name: 'Share Bar Container',
          description: 'Contains the elements of the Share Bar.',
          component: 'Block',
          optional: undefined,
        },
      ],
      media: getIllustrationComponent(
        'components/share-bar/share-anatomy-illustration',
      ),
    }}
    options={{
      introduction: '',
      cards: [
        {
          title: 'Orientation',
          description:
            'The Share Bar can be displayed horizontally or vertically.',
          media: getIllustrationComponent(
            'components/share-bar/share-options-orientation-illustration',
          ),
        },
        {
          title: 'Label',
          description:
            'The label on the Share Bar can be hidden. Hiding the label can reduce visual noise for users, but may give less context to the Share Bar.',
          media: getIllustrationComponent(
            'components/share-bar/share-options-label-illustration',
          ),
        },
      ],
    }}
    // TODO: Check with the documentation once these features are implemented
    // behaviors={{
    //   introduction:
    //     'The following guidance describes how the Share Bar behave.',
    //   cards: [
    //     {
    //       title: 'Overflow',
    //       description: (
    //         <>
    //           If the number of items in the list exceeds the viewable area of
    //           the screen, the items should overflow and the{' '}
    //           <Link target="_blank" href="/components/scroll">
    //             scroll component
    //           </Link>{' '}
    //           should be applied.
    //         </>
    //       ),
    //       media: getIllustrationComponent(
    //         'components/share-bar/share-options-overflow-illustration',
    //       ),
    //     },
    //     {
    //       title: 'Mobile Device',
    //       description:
    //         'When displaying the Share Bar on mobile the default uses a single ‘share’ button and opens the native share options. This comes from variant experimentation on the share bar component.',
    //       media: getIllustrationComponent(
    //         'components/share-bar/share-options-mobile-illustration',
    //       ),
    //     },
    //   ],
    // }}
    usage={{
      introduction: 'Here’s how and when to use the share bar component:',
      cards: [
        {
          title: 'Don’t use a share bar for more than five items',
          description:
            'The maximum number of items in a share bar should be kept to a minimum. It is not recommended to have more than 5 items.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/share-bar/share-options-overflow-illustration',
          ),
        },
        {
          title: "Don't add actions that are not relevant",
          description:
            'Do not add actions that are not relevant to social sharing in a share bar (saving, commenting etc).',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/share-bar/share-dont-1-illustration',
          ),
        },
      ],
    }}
    accessibility={{
      introduction: '',
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'Action item 1',
            role:
              'Takes you to first action in the share bar (left if horizontal, top if vertical orientation).',
          },
          {
            order: 2,
            element: 'Action item 2',
            role: 'Takes you to second action in the share bar .',
          },
        ],
      },

      aria: {
        title: 'WAI-ARIA',
        tableRows: [
          {
            element: 'container',
            attribute: 'role',
            value: 'region',
            description: '',
          },
        ],
      },
      infoNoticeAria: [
        'If you have more than one Share Bar on your page - all Share Bar components (or their containers) should have a role set to the region and also a unique aria-label.Keyboard Interactions.',
        'When using an Icon Button in the Share Bar ensure an aria-label e.g. “share to FaceBook” is set on the Icon Button.',
      ],
    }}
    seo={{
      title: 'SEO considerations',
      introduction: 'Ensure icons have Alt Text applied.',
    }}
    componentAPI={{
      introduction: `Below are the properties for the Share Bar component:`,
      components: [
        {
          title: 'Share Bar',
          summary:
            'Share bar has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'label',
              type: 'string',
              required: undefined,
              description:
                'If provided with text, adds a label and populates it with the string.',
            },
            {
              name: 'vertical',
              type: 'boolean',
              default: 'false',
              description:
                'If true, changes the orientation to vertical. Note that the "spaceInline" will still apply between the vertically orientated label and icons. ',
            },
          ],
          overridesRows: [
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              default: 'inkBase',
              description:
                'If provided, this overrides the style preset applied to the passed label.',
            },
            {
              attribute: 'label.stylePreset',
              type: 'MQ<string>',
              default: 'inkBase',
              description:
                'If provided, this overrides the style preset applied to the passed label.',
            },
            {
              attribute: 'label.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityLabel020',
              description:
                'If provided, this overrides the typography preset applied to the passed label.',
            },
            {
              attribute: 'label.spaceInset',
              type: 'MQ<string>',
              default: 'space040',
              description:
                'If provided, this overrides the horizontal space between the items and label.',
            },
            {
              attribute: 'label.spaceInline',
              type: 'MQ<string>',
              default: 'space040',
              description:
                'If provided, this overrides the horizontal space between the items and label. ',
            },
            {
              attribute: 'items.spaceInline',
              type: 'MQ<string>',
              default: 'space020',
              description: 'If provided, this sets the space between the items',
            },
            ...(commonLogicalProps() as OverridesRowsProps[]),
          ],
        },
      ],
    }}
    related={{
      related: ['Button'],
    }}
  />
);

export default ShareBarComponent;

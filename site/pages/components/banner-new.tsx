import React from 'react';
import {Link, TextBlock} from 'newskit';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../components/component-page-template';

export default (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Component',
      name: 'Banner',
      hero: {src: '/static/button-hero.svg', alt: 'banner-demo-image'},
      introduction: (
        <React.Fragment>
          <TextBlock>
            A Banner shows essential information and provides actions for users
            to perform a task (or close the banner).
          </TextBlock>
          <TextBlock>
            They are prominent, to partially interrupt the user experience,
            without blocking it. They always have an action (CTA and/or close).
            They can be used as a starting point, for particular flows. They
            disappear on user interaction (either dismissing or completing a
            task) or when the information is no longer relevant. Only one banner
            should be shown at a time.
          </TextBlock>
        </React.Fragment>
      ),
    }}
    componentDefaultsKey="banner"
    meta={{
      status: MetaStatus.Beta,
      introduced: 'v3.0',
      codeUrl: 'https://github.com/newscorp-ghfb/ncu-newskit',
      figmaUrl:
        'https://www.figma.com/file/092T4hOKQyOahoTDEN5ihb/%F0%9F%93%90-Base-Web-Gallery?node-id=1402%3A7431',
    }}
    componentAPI={{
      introduction: `Banner have a number of props to facilitate a variety of uses:`,
      components: [
        {
          title: 'Banner',
          propsRows: [
            {
              name: 'children',
              type: "Exclude<React.ReactNode, 'undefined'>",
              required: true,
              description: `Sets the content of the Banner.`,
            },
            {
              name: 'icon',
              type: 'React.ReactElement<NewsKitIconProps>',
              required: false,
              description: `Icon used to indicate the status or intent of the Banner.`,
            },
          ],
          overridesRows: [
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              description: `If provided, this overrides the stylePreset applied to the Banner's most
                outer container. Can be used to override the colour of the icon and the message as well.`,
            },
            {
              attribute: 'minHeight',
              type: 'MQ<string>',
              description: `If provided, this overrides the minHeight applied to the Banner's most
                outer container.`,
            },
            {
              attribute: 'spaceInset',
              type: 'MQ<string>',
              description: `If provided, this overrides the spaceInset applied to the Banner's most
                outer container`,
            },
            {
              attribute: 'innerContainer',
              type: 'object',
              description: `Sets overrides to the container that holds the content and the action buttons.`,
            },
            {
              attribute: 'innerContainer.maxWidth',
              type: 'MQ<string>',
              description: `This override can be used to prevent the banner content and actions to
                go out of the grid (content) bounds. It should usually be the same value
                as the maxWidth for the grid at each beakpoint or the maxWidth that the main
                content spans in a page.`,
            },
            {
              attribute: 'innerContainer.icon',
              type: 'object',
              description: `Sets overrides to the container that holds the icon.`,
            },
            {
              attribute: 'innerContainer.icon.spaceInline',
              type: 'MQ<string>',
              description: `Overrides the space between the icon and the content`,
            },
            {
              attribute: 'content',
              type: 'object',
              description: `Sets overrides to the content container.`,
            },
            {
              attribute: 'content.typographyPreset',
              type: 'MQ<string>',
              description: `Overrides the typography preset applied to the Banner content.`,
            },
            {
              attribute: 'content.spaceInline',
              type: 'MQ<string>',
              description: `Overrides the spacing applied to the right hand side
                (bottom for vertical orientation) of the content container.`,
            },
          ],
        },
      ],
    }}
    accessibility={{
      introduction: `The Banner is a component that is not always present on the screen.
      It can be visible during page load or it can appear on runtime - to announce important information,
      warning, error or something else that requires user attention and action. In order to make this possible
      the Banner uses live regions.`,
      focusOrder: {
        title: 'Focus order',
        description: 'Some random text here',
        tableRows: [
          {
            order: 1,
            element: 'N/A',
            role: 'N/A',
          },
          {
            order: 2,
            element: 'N/a',
          },
        ],
      },
      interaction: {
        title: 'Keyboard Interactions',
        description: 'Some random text',
        tableRows: [
          {
            command: ['ctrl', 'N/A'],
            description: 'N/A',
          },
        ],
      },
      aria: {
        title: 'WAI-ARIA',
        description: 'Some random text',
        tableRows: [
          {
            element: 'Banner',
            attribute: 'aria-role',
            value: 'region',
            description: `The region landmark role is used to identify an area in the document that counted as significant.
              It is used to provide a generic landmark for people to be able to navigate
              to easily when none of the other landmark roles are appropriate.`,
          },
          {
            element: 'Banner',
            attribute: 'aria-label',
            value: 'Banner',
            description: `Defines the Aria-label of the Banner.`,
          },
          {
            element: 'Banner',
            attribute: 'aria-live',
            value: '"polite" (default) \n or "assertive" or "off"',
            description: (
              <>
                Description for aria live and link
                <Link
                  target="_blank"
                  href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions#live_regions"
                >
                  Mozilla docs
                </Link>
              </>
            ),
          },
        ],
      },
    }}
  />
);

import React from 'react';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';

const TooltipComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Tooltip',
      description:
        'A Tooltip is a feedback component that displays a short, informational message when a user hovers over or focuses on a UI element. ',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Feedback & Status',
      name: 'Tooltip',
      hero: {
        illustration: 'components/tooltip/hero',
      },
      introduction:
        'A Tooltip is a feedback component that displays a short, informational message when a user hovers over or focuses on a UI element. ',
    }}
    componentDefaultsKey="Tooltip"
    meta={{
      status: MetaStatus.Beta,
      introduced: 'v5.7.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit/tree/main/src/tooltip',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=1%3A393',
    }}
    anatomy={{
      introduction:
        'The Tooltip contains two required elements and one optional element.',
      rows: [
        {
          name: 'Panel',
          description: 'Contains the Panel Content',
          component: ['Div'],
          optional: undefined,
        },
        {
          name: 'Content',
          description: 'An area to display any text content',
          component: ['Children'],
          optional: undefined,
        },
        {
          name: 'Pointer',
          description:
            'Used to indicate the direction of context that the Tooltip is attributed to',
          component: ['Div'],
          optional: undefined,
        },
      ],
      media: getIllustrationComponent('components/tooltip/anatomy'),
    }}
  />
);

export default TooltipComponent;

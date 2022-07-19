import React from 'react';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';

const PopoverComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Popover',
      description:
        'A Popover (also known as a Popper) is a layout component that displays non-critical information when a user clicks or taps on a UI element. ',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Layout',
      name: 'Popover',
      hero: {
        illustration: 'components/popover/hero',
      },
      introduction:
        'A Popover (also known as a Popper) is a layout component that displays non-critical information when a user clicks or taps on a UI element. ',
    }}
    componentDefaultsKey="Popover"
    meta={{
      status: MetaStatus.Beta,
      introduced: 'v5.6.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit/tree/main/src/popover',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=7296%3A137983',
    }}
  />
);
export default PopoverComponent;

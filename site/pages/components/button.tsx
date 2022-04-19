import React from 'react';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';

const ButtonComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Button',
      description:
        'Buttons allow users to make choices, take actions, and help guide around an interface with a single tap.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Actions & Inputs',
      name: 'Button',
      hero: {
        illustration: 'components/button/hero',
      },
      introduction: `Buttons allow users to make choices, take actions, and help guide around an interface with a single tap.`,
    }}
    componentDefaultsKey="textField"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.2.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/tree/develop/src/button',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=1817%3A8822',
    }}
    anatomy={{
      introduction:
        'The Button contains two required elements and one optional element.',
      rows: [
        {
          name: 'Container',
          description: 'The Button container, HTML Button element',
          optional: undefined,
        },
        {
          name: 'Icon',
          description:
            'Icon that can be positioned either before (leading) or after (trailing) the Label',
          component: 'Icon',
          optional: true,
        },
        {
          name: 'Label',
          description: (
            <>
              The Label is the text attributed to the Button that provides
              context
              <br />
              <br />
              Note - only if the children type supplied is a string or number it
              will be rendered inside a Text Block
            </>
          ),
          component: 'Text Block',
          optional: undefined,
        },
      ],
      media: getIllustrationComponent('components/button/anatomy-button'),
    }}
  />
);

export default ButtonComponent;

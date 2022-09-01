import React from 'react';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';

const FlagComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Flag',
      description:
        'A flag is a non-interactive visual indicator used to communicate status.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Feedback & Status',
      name: 'Flag',
      hero: {
        illustration: 'components/flag-illustration',
      },
      introduction:
        'A flag is a non-interactive visual indicator used to communicate status.',
    }}
    componentDefaultsKey="flag"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.8.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/ncu-newskit/blob/develop/src/flag/flag.tsx',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=1952%3A2650',
    }}
    anatomy={{
      introduction:
        'The flag contains one required element and two optional elements.',
      rows: [
        {
          name: 'Container',
          description: 'The flag container',
        },
        {
          name: 'Icon',
          description:
            'Icon that can be positioned either before (leading) or after (trailing) the label.',
          component: 'Icon',
          optional: true,
        },
        {
          name: 'Label',
          description: (
            <>
              The label is the text attributed to the flag that provides
              context.
              <br />
              <br />
              Note - only if the children type supplied is a string or number it
              will be rendered inside a text block.
            </>
          ),
          component: 'Text Block',
        },
      ],
      media: getIllustrationComponent('components/flag/anatomy'),
    }}
  />
);

export default FlagComponent;

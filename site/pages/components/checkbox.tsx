import React from 'react';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageBasicTemplate} from '../../templates/component-page-template/component-page-basic-template';

const CheckboxComponent = (layoutProps: LayoutProps) => (
  <ComponentPageBasicTemplate
    headTags={{
      title: 'Checkbox',
      description:
        'Checkboxes are selection controls that allow users to select one or multiple items from a group of options. They typically appear in forms.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Actions & Inputs',
      name: 'Checkbox',
      hero: {
        illustration: 'components/checkbox/hero',
      },
      introduction:
        'Checkboxes are selection controls that allow users to select one or multiple items from a group of options. They typically appear in forms.',
    }}
    componentDefaultsKey="checkbox"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v4.2.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/ncu-newskit/releases/tag/v4.2.0',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components',
    }}
  />
);

export default CheckboxComponent;

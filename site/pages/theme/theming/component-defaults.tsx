import React from 'react';
import {Select, SelectOption} from 'newskit';
import {LayoutProps} from '../../../components/layout';
import {FoundationPageTemplate} from '../../../templates/foundation-page-template';

const ComponentDefaults = (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Component defaults',
      description:
        'A preselected option that is applied to a component to define its appearance or behaviour.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Creating and using themes',
      name: 'Component defaults',
      hero: {
        illustration: 'components/hero-component-defaults-illustration',
      },
      introduction: `A preselected option that is applied to a component to define its appearance or behaviour.`,
    }}
  >
    <div style={{position: 'relative'}}>
      <Select
        overrides={{
          panel: {
            zIndex: 'no-layer',
          },
        }}
      >
        <SelectOption value="1">1</SelectOption>
        <SelectOption value="1">2</SelectOption>
        <SelectOption value="1">3</SelectOption>
      </Select>
    </div>
  </FoundationPageTemplate>
);

export default ComponentDefaults;

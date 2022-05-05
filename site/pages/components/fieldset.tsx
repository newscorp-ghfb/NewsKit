import React from 'react';
import {Block, InlineMessage, IconFilledInfo} from 'newskit';
import {ContentText} from '../../components/text-section/content-text';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {ComponentPageTemplate} from '../../templates/component-page-template';

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const FieldsetComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Fieldset',
      description:
        'The Fieldset is used to provide contextual information around a group of form controls in a web form.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Actions & Inputs',
      name: 'Fieldset',
      hero: {
        illustration: 'components/fieldset/hero',
      },
      introduction: `The Fieldset is used to provide contextual information around a group of form controls in a web form.`,
    }}
    componentDefaultsKey="fieldset"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v5.0.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/tree/main/src/fieldset',
    }}
    anatomy={{
      introduction:
        'The Fieldset contains two required elements and one optional element.',
      media: getIllustrationComponent('components/fieldset/anatomy'),
      rows: [
        {
          name: 'Container',
          description: 'The Fieldset container',
          component: ['HTML Fieldset'],
          optional: undefined,
        },
        {
          name: 'Legend',
          description: 'Provides a caption for the Fieldset',
          component: 'HTML Legend',
          optional: undefined,
        },
        {
          name: 'Children',
          description: 'Provides a caption for the Fieldset',
          component: 'Text Block',
          optional: true,
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          The Fieldset has the following accessibility considerations:
          <Block spaceStack="space100" />
          <ContentText title="Legend" titleAs="span">
            The legend is a caption that provides a higher-level description of
            the form controls in a group, which is important, particularly for
            users with screen readers. Provide details for the function or
            purpose of the form controls within a Fieldset using the legend.
          </ContentText>
          <Block spaceStack="space100" />
          <InlineMessage icon={infoIcon} role="region" aria-label="Fieldset">
            The legend will be repeated to users with screen readers for each
            form control within a Fieldset.
          </InlineMessage>
        </>
      ),
    }}
  />
);

export default FieldsetComponent;

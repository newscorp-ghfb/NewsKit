import React from 'react';

import Layout from '../../components/layout';
import {PageTemplate} from '../page-template';
import {
  AccessibilitySection,
  AnatomySection,
  BehaviorsSection,
  CodeExamplesSection,
  ComplianceSection,
  ComponentAPISection,
  InteractiveDemoSection,
  OptionsSection,
  RelatedComponentsSection,
  SEOSection,
  StatesSection,
  UsageSection,
  OnwardJourneySectionProps,
} from '../template-sections';
import {ComponentPageTemplateProps} from './types';

const defaultFeatureCard: OnwardJourneySectionProps = {
  title: 'Need Help?',
  description: 'Cant find what you are looking for?',
  buttonLabel: 'Get In Touch',
  stylePrefix: 'needHelpCard',
  layout: 'horizontal',
  href: '/about/contact-us/',
};

export const ComponentPageTemplate: React.FC<ComponentPageTemplateProps> = ({
  layoutProps,
  interactiveDemo,
  anatomy,
  options,
  states,
  behaviors,
  codeExamples,
  usage,
  accessibility,
  seo,
  componentAPI,
  compliance,
  related,
  featureCard,
  headTags,
  ...rest
}: ComponentPageTemplateProps) => (
  <Layout {...layoutProps} newPage>
    <PageTemplate
      {...rest}
      headTags={{
        imageUrl: 'social/components.png',
        alt: 'components',
        title: headTags.title,
        description: headTags.description,
      }}
      featureCard={
        {
          ...defaultFeatureCard,
          ...featureCard,
        } as OnwardJourneySectionProps
      }
    >
      {interactiveDemo && <InteractiveDemoSection {...interactiveDemo} />}
      {anatomy && <AnatomySection {...anatomy} />}
      {options && <OptionsSection {...options} />}
      {states && <StatesSection {...states} />}
      {behaviors && <BehaviorsSection {...behaviors} />}
      {codeExamples && <CodeExamplesSection {...codeExamples} />}
      {usage && <UsageSection {...usage} />}
      {accessibility && <AccessibilitySection {...accessibility} />}
      {seo && <SEOSection {...seo} />}
      {componentAPI && <ComponentAPISection {...componentAPI} />}
      {compliance && <ComplianceSection {...compliance} />}
      {related && <RelatedComponentsSection {...related} />}
    </PageTemplate>
  </Layout>
);

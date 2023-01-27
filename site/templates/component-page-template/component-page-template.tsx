import React from 'react';

import Layout from '../../components/layout';
import {PageTemplate} from '../page-template';
import {
  AccessibilitySection,
  AnatomySection,
  LayoutExamplesSection,
  BehaviorsSection,
  CodeExamplesSection,
  ComplianceSection,
  ComponentAPISection,
  InteractiveDemoSection,
  OptionsSection,
  TutorialsSection,
  RelatedComponentsSection,
  SEOSection,
  StatesSection,
  UsageSection,
  OnwardJourneySectionProps,
  CommonSection,
} from '../template-sections';
import {ComponentPageTemplateProps} from './types';
import {GenericComponent} from '../../components/playground/types';

const defaultFeatureCard: OnwardJourneySectionProps = {
  title: 'Need Help?',
  description: 'Cant find what you are looking for?',
  buttonLabel: 'Get In Touch',
  stylePrefix: 'needHelpCard',
  layout: 'horizontal',
  href: '/about/contact-us/',
};

const deriveStorybookId = (componentName: string): string => {
  const kebab = componentName.replaceAll(' ', '-').toLowerCase();
  return `components-${kebab}--story-${kebab}-default`;
};

export const ComponentPageTemplate = <T extends GenericComponent>({
  layoutProps,
  interactiveDemo,
  anatomy,
  layoutExamples,
  options,
  states,
  behaviors,
  codeExamples,
  usage,
  tutorials,
  accessibility,
  seo,
  componentAPI,
  compliance,
  related,
  featureCard,
  headTags,
  commonSection,
  meta: {storybookId, ...restMeta},
  ...rest
}: ComponentPageTemplateProps<T>) => (
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
      meta={{
        ...restMeta,
        storybookId: storybookId || deriveStorybookId(headTags.title),
      }}
    >
      {interactiveDemo && <InteractiveDemoSection {...interactiveDemo} />}
      {anatomy && <AnatomySection {...anatomy} />}
      {layoutExamples && <LayoutExamplesSection {...layoutExamples} />}
      {options && <OptionsSection {...options} />}
      {states && <StatesSection {...states} />}
      {behaviors && <BehaviorsSection {...behaviors} />}
      {codeExamples && <CodeExamplesSection {...codeExamples} />}
      {usage && <UsageSection {...usage} />}
      {tutorials && <TutorialsSection {...tutorials} />}
      {commonSection && <CommonSection {...commonSection} />}
      {accessibility && <AccessibilitySection {...accessibility} />}
      {seo && <SEOSection {...seo} />}
      {componentAPI && <ComponentAPISection {...componentAPI} />}
      {compliance && <ComplianceSection {...compliance} />}
      {related && <RelatedComponentsSection {...related} />}
    </PageTemplate>
  </Layout>
);

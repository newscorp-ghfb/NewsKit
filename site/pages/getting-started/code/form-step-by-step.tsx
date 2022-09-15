import React from 'react';
import {UnorderedList} from 'newskit';
import {Link} from '../../../components/link';
import {ContentText} from '../../../components/text-section/content-text';
import {LayoutProps} from '../../../components/layout';
import {GuidePageTemplate} from '../../../templates/guide-page-template/guide-page-template';
import {ComponentPageCell} from '../../../components/layout-cells';
import {
  ContentSection,
  ContentPrimary,
} from '../../../components/content-structure';

const FormStepByStep = (layoutProps: LayoutProps) => (
  <GuidePageTemplate
    headTags={{
      title: 'Form step-by-step',
      description:
        'Step-by-step guide for engineers to build a form using the form subcomponents.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Guides',
      name: 'Form step-by-step',
      hero: {
        illustration: 'guides/form-guide/hero',
      },
      introduction: `Step-by-step guide for engineers to build a form using the form subcomponents.`,
    }}
    featureCard={{
      title: 'Need help?',
      description: 'Can’t find what you’re looking for?',
      href: 'about/contact-us/',
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="key benefits">
        <ContentPrimary headline="Key benefits:" showSeparator>
          <UnorderedList
            markerAlign="center"
            overrides={{
              spaceStack: 'space040',
              content: {
                typographyPreset: 'editorialParagraph030',
              },
              marker: {
                spaceInline: 'space020',
              },
              marginBlockEnd: 'space070',
            }}
          >
            <>Dynamic</>
            <>Subcomponents give more freedom on styling the form etc</>
            <>Ability to put together different form inputs easily</>
          </UnorderedList>
          <ContentText lastItem>
            The <Link href="/components/form/">form</Link> is a non-visual
            component. It is made up of several subcomponents, which together
            display the visuals of the form alongside validation and rules.
            These rules let the user know what input is required from them.
          </ContentText>
        </ContentPrimary>
      </ContentSection>
    </ComponentPageCell>
  </GuidePageTemplate>
);

export default FormStepByStep;

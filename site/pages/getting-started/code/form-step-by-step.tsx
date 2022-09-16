import React from 'react';
import {Block, UnorderedList} from 'newskit';
import {Link} from '../../../components/link';
import {Code} from '../../../components/code';
import {InlineCode} from '../../../components/markdown-elements';
import {ContentText} from '../../../components/text-section/content-text';
import {LayoutProps} from '../../../components/layout';
import {Illustration} from '../../../components/illustrations/illustration-loader';
import {GuidePageTemplate} from '../../../templates/guide-page-template/guide-page-template';
import {ComponentPageCell} from '../../../components/layout-cells';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
  ContentColSpan,
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

      <ContentSection sectionName="basic form layout">
        <ContentPrimary
          id="basic-form-layout"
          toc="Basic form layout"
          headline="Basic form layout"
          description="Let’s start off with a basic form layout."
          hideBottomSpacing
        >
          <Block spaceStack="space080">
            <Illustration path="guides/form-guide/steps/step-01" />
          </Block>
        </ContentPrimary>
        <ContentSecondary description="With the example above, the component structure is:">
          <Code>
            {`<Form onSubmit={onSubmit}>
      <FormInput
          name="email-valid"
          rules={{
          required: 'Required field',
          pattern: {
              value: /^(([^<>()\\[\\]\\.,;:\\s@\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$/i,
              message: 'Please provide a valid email address',
          },
          }}
      >
          <FormInputLabel>Email address</FormInputLabel>
          <FormInputTextField />
          <FormInputAssistiveText>Eg. yourname@gmail.com</FormInputAssistiveText>
      </FormInput>
      <Button type="submit">Submit</Button>
  </Form>`}
          </Code>
        </ContentSecondary>
        <ContentSecondary
          description={
            <>
              Validation comes from the <InlineCode>&#60;Form&#62;</InlineCode>.
              All subcomponents need to be wrapped inside the{' '}
              <InlineCode>&#60;Form/&#60;</InlineCode> in order for it to be
              validated.
              <br />
              <br />
              <InlineCode>&#60;FormInput&#62;</InlineCode> is where you set your
              rules for the input and the pattern. The above example requires an
              email. All subcomponents need to be wrapped inside{' '}
              <InlineCode>&#60;FormInput/&#60;</InlineCode> in order for the
              rules to work, and for the validation to be passed down to the
              other components such as the{' '}
              <InlineCode>&#60;FormInputTextField/&#60;</InlineCode> and the
              <InlineCode>&#60;FormInputAssistiveText/&#62;</InlineCode>.
            </>
          }
          childrenColSpan={ContentColSpan.TEXT}
        />
        <ContentSecondary>
          <Illustration path="guides/form-guide/steps/step-02" />
        </ContentSecondary>
      </ContentSection>
    </ComponentPageCell>
  </GuidePageTemplate>
);

export default FormStepByStep;

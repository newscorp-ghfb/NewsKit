import React from 'react';
import {getSizingCssFromTheme, styled, UnorderedList} from 'newskit';
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

const Container = styled.div`
  ${getSizingCssFromTheme('marginBottom', 'sizing080')}
`;

const StepIllustration = ({path}: {path: string}) => (
  <Illustration path={path} viewBox="0 0 1345 759" />
);

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
  >
    <ComponentPageCell>
      <ContentSection sectionName="key benefits">
        <ContentPrimary
          headline="Key benefits:"
          childrenColSpan={ContentColSpan.TEXT}
          showSeparator
        >
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
          <Container>
            <StepIllustration path="guides/form-guide/steps/step-01" />
          </Container>
        </ContentPrimary>
        <ContentSecondary
          description="With the example above, the component structure is:"
          hideBottomSpacing
        >
          <Container>
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
          </Container>
        </ContentSecondary>
        <ContentSecondary
          description={
            <>
              Validation comes from the <InlineCode>&#60;Form&#62;</InlineCode>.
              All subcomponents need to be wrapped inside the{' '}
              <InlineCode>&#60;Form /&#62;</InlineCode> in order for it to be
              validated.
              <br />
              <br />
              <InlineCode>&#60;FormInput&#62;</InlineCode> is where you set your
              rules for the input and the pattern. The above example requires an
              email. All subcomponents need to be wrapped inside{' '}
              <InlineCode>&#60;FormInput /&#62;</InlineCode> in order for the
              rules to work, and for the validation to be passed down to the
              other components such as the{' '}
              <InlineCode>&#60;FormInputTextField /&#62;</InlineCode> and the{' '}
              <InlineCode>&#60;FormInputAssistiveText /&#62;</InlineCode>.
            </>
          }
          childrenColSpan={ContentColSpan.TEXT}
          hideBottomSpacing
        >
          <Container>
            <StepIllustration path="guides/form-guide/steps/step-02" />
          </Container>
        </ContentSecondary>
        <ContentSecondary
          description={
            <>
              You can also add a message, e.g.
              <br />
              <InlineCode>
                message: &apos;Please provide a valid email&apos;
              </InlineCode>
              , which pops up if the user provides an incorrect input.
              <br />
              <br />
              <InlineCode>&#60;FormInputLabel /&#62;</InlineCode> is an optional
              component that can be placed wherever needed. In the instance
              above we place it above the input field. You can also style the
              label to inherit the same state colour as the{' '}
              <Link href="/components/text-field/">text field</Link> and
              assistive text.
              <br />
              <br />
              <InlineCode>&#60;FormInputTextField /&#62;</InlineCode> is where
              the user inputs text. It also comes with start and end icons
              called <InlineCode>startEnhancer</InlineCode> and{' '}
              <InlineCode>endEnhancer</InlineCode>, which are both optional.
              <br />
              <br />
              <InlineCode>&#60;FormInputAssistiveText /&#62;</InlineCode> is an
              optional component. If placed inside{' '}
              <InlineCode>&#60;FormInput /&#62;</InlineCode>, the validation
              will be passed down to it so it changes colour accordingly. If you
              provided a message in{' '}
              <InlineCode>&#60;FormInput /&#62;</InlineCode> it will be
              displayed here for the user (as seen in the image above).
            </>
          }
          childrenColSpan={ContentColSpan.TEXT}
        />
        <ContentSecondary
          headline="Props"
          description={
            <>
              <InlineCode>&#60;FormInput /&#62;</InlineCode> and its
              subcomponents all come with size props{' '}
              <InlineCode>small | medium | large</InlineCode>.
              <br />
              <br />A user can also force states on all such as{' '}
              <InlineCode>valid | invalid | disabled</InlineCode>.
            </>
          }
          childrenColSpan={ContentColSpan.TEXT}
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="other formInput components">
        <ContentPrimary
          id="other-formInput-components"
          toc="Other FormInput components"
          headline="Other FormInput components"
          description={
            <>
              Above, we showed you{' '}
              <InlineCode>&#60;FormInput /&#62;</InlineCode> with a{' '}
              <InlineCode>&#60;FormInputTextField /&#62;</InlineCode>.
              <br />
              <br />
              We also have <InlineCode>
                &#60;FormInputSelect/&#62;
              </InlineCode>,{' '}
              <InlineCode>&#60;FormInputCheckbox /&#62;</InlineCode>, and{' '}
              <InlineCode>&#60;FormInputRadioButton /&#62;</InlineCode>.
              <br />
              <br />
              Below is an example of{' '}
              <InlineCode>&#60;FormInputSelect /&#62;</InlineCode> being wrapped
              inside <InlineCode>&#60;FormInput /&#62;</InlineCode>.
            </>
          }
        />
        <ContentSecondary
          headline="FormInputSelect component"
          description={
            <>
              This has the same structure as the basic Form example with an
              input field.
              <br />
              <br />
              Again, <InlineCode>&#60;FormInput /&#62;</InlineCode> has
              components wrapped inside it, and you can set rules. The same
              optional <InlineCode>&#60;FormInputLabel /&#62;</InlineCode>, and{' '}
              <InlineCode>&#60;FormInputAssistiveText /&#62;</InlineCode> can be
              added in as well.
              <br />
              <br />
              Here, we are using{' '}
              <InlineCode>&#60;FormInputSelect /&#62;</InlineCode>, which comes
              with an optional <InlineCode>startEnhancer</InlineCode> and{' '}
              <InlineCode>endEnhancer</InlineCode>.
              <br />
              <br />
              Inside <InlineCode>&#60;FormInputSelect /&#62;</InlineCode> you
              can add in <InlineCode>&#60;SelectOption /&#62;</InlineCode>,
              which comes from the{' '}
              <Link href="/components/select/">select</Link> component.
            </>
          }
        >
          <Container>
            <StepIllustration path="guides/form-guide/steps/step-03" />
          </Container>
          <Code>
            {`<Form onSubmit={onSubmit}>
    <FormInput name="subscription-package">
        <FormInputLabel>Subscription package</FormInputLabel>
        <FormInputSelect>
          <SelectOption value="digital-only">Digital only</SelectOption>
          <SelectOption value="print-only">Print only</SelectOption>
          <SelectOption value="print-and-digital">Print + Digital</SelectOption>
        </FormInputSelect>
    </FormInput>
    <Button type="submit">Submit</Button>
</Form>`}
          </Code>
        </ContentSecondary>
        <ContentSecondary
          headline="FormInputCheckbox component"
          description={
            <>
              This has the same structure as the basic form example with an
              input field.
              <br />
              <br />
              Again, <InlineCode>&#60;FormInput /&#62;</InlineCode> has
              components wrapped inside it, and you can set rules. The same
              optional <InlineCode>&#60;FormInputLabel /&#62;</InlineCode> and{' '}
              <InlineCode>&#60;FormInputAssistiveText /&#62;</InlineCode> can be
              added in as well.
              <br />
              <br />
              But now, we are using{' '}
              <InlineCode>&#60;FormInputCheckbox /&#62;</InlineCode>, which
              comes with prop label. This is for the text that is placed next to
              the <Link href="/components/checkbox/">checkbox</Link> component.
            </>
          }
        >
          <Container>
            <StepIllustration path="guides/form-guide/steps/step-04" />
          </Container>
          <Container>
            <Code>
              {`<Form onSubmit={onSubmit}>
    <Fieldset legend="Terms and conditions">
        <FormInput
            name="terms"
            rules={{
                required: 'Please accept the terms',
            }}
        >
            <FormInputCheckbox label="I accept the terms" value="tc" />
            <FormInputAssistiveText validationIcon />
        </FormInput>
    </Fieldset>
    <Button type="submit">Submit</Button>
</Form>`}
            </Code>
          </Container>
          <StepIllustration path="guides/form-guide/steps/step-05" />
        </ContentSecondary>
        <ContentSecondary
          headline="FormInputRadioButton component"
          description={
            <>
              This has the same structure as the basic form example with an
              input field.
              <br />
              <br />
              Again, <InlineCode>&#60;FormInput /&#62;</InlineCode> has
              components wrapped inside it, and you can set rules. The same
              optional <InlineCode>&#60;FormInputLabel /&#62;</InlineCode> and{' '}
              <InlineCode>&#60;FormInputAssistiveText /&#62;</InlineCode> can be
              added in as well.
              <br />
              <br />
              But now, we are using{' '}
              <InlineCode>&#60;FormRadioButtutton /&#62;</InlineCode>. This
              component should be wrapped inside a{' '}
              <InlineCode>&#60;Fieldset&#62;</InlineCode>. We use the{' '}
              <Link href="/components/fieldset/">fieldset</Link> component to
              group related form inputs.
              <br />
              <br />
              We are also using <InlineCode>&#60;RadioGroup /&#62;</InlineCode>.
              A <Link href="/components/radio-button/">radio group</Link> is
              defined by giving each of the radio buttons in the group the same
              name. Once a radio group is established, selecting any radio
              button in that group automatically deselects any
              currently-selected radio button in the same group.
            </>
          }
          showSeparator
        >
          <Container>
            <StepIllustration path="guides/form-guide/steps/step-06" />
          </Container>
          <Container>
            <Code>
              {`<Form onSubmit={onSubmit}>
    <Fieldset legend="Pick one interest">
      <RadioGroup>
        {['Reading', 'Hiking', 'Cooking'].map(value => (
          <FormInput key={value} name="interest" rules={{required: 'Please select an option'}}>
            <FormInputRadioButton
              label={value}
              value={value}
              overrides={{spaceStack: 'space030'}}
            />
          </FormInput>
        ))}
      </RadioGroup>
      <FormInput name="interest" rules={{required: 'Please select an option'}}>
        <FormInputAssistiveText validationIcon />
      </FormInput>
    </Fieldset>
    <Button type="submit">Submit</Button>
 </Form>`}
            </Code>
          </Container>
          <StepIllustration path="guides/form-guide/steps/step-07" />
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="combined form">
        <ContentPrimary
          id="combined-form"
          toc="Combined form"
          headline="Combined form"
          description={
            <>
              Below is an example of the{' '}
              <Link href="/components/form/">form</Link> with different inputs
              within a <Link href="/components/fieldset/">fieldset</Link> which
              is used when grouping together related form components.
              <br />
              <br />
              This form is made up of{' '}
              <InlineCode>&#60;FormInputTextField /&#62;</InlineCode>,{' '}
              <InlineCode>&#60;FormInputRadioButton /&#62;</InlineCode>, and{' '}
              <InlineCode>&#60;FormInputCheckbox /&#62;</InlineCode>.
            </>
          }
          hideBottomSpacing
        >
          <Container>
            <StepIllustration path="guides/form-guide/steps/step-08" />
          </Container>
          <Container>
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


    <Fieldset legend="Pick one interest">
      <RadioGroup>
        {['Reading', 'Hiking', 'Cooking'].map(value => (
          <FormInput
            key={value}
            name="interest"
            rules={{required: 'Please select an option'}}
          >
            <FormInputRadioButton
              label={value}
              value={value}
            />
          </FormInput>
        ))}
      </RadioGroup>
      <FormInput name="interest" rules={{required: 'Please select an option'}}>
        <FormInputAssistiveText validationIcon />
      </FormInput>
    </Fieldset>


    <Fieldset legend="Terms and conditions">
      <FormInput
        name="terms"
        rules={{
          required: 'Please accept the terms',
        }}
      >
        <FormInputCheckbox label="I accept the terms" value="tc" />
        <FormInputAssistiveText validationIcon />
      </FormInput>
    </Fieldset>

    <Button type="submit">Submit</Button>
  </Form>`}
            </Code>
          </Container>
        </ContentPrimary>
        <ContentSecondary
          description={
            <>
              As you can see, each of the components mentioned is wrapped inside
              its own <InlineCode>&#60;FormInput /&#62;</InlineCode>, so we can
              set the rules for each.
              <br />
              <br />
              Below you can see that the user won’t be able to submit unless the
              input field has the correct data.
            </>
          }
          hideBottomSpacing
        >
          <Container>
            <StepIllustration path="guides/form-guide/steps/step-09" />
          </Container>
        </ContentSecondary>
        <ContentSecondary
          description="Now that everything has been entered correctly you can see that every component is valid and the user can proceed."
          showSeparator
        >
          <StepIllustration path="guides/form-guide/steps/step-10" />
        </ContentSecondary>
      </ContentSection>
    </ComponentPageCell>
  </GuidePageTemplate>
);

export default FormStepByStep;

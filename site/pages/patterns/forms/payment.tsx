import React from 'react';
import {UnorderedList} from 'newskit';
import {Link} from '../../../components/link';
import {LayoutProps} from '../../../components/layout';
import {ComponentPageCell} from '../../../components/layout-cells';
import {PatternPageTemplate} from '../../../templates/pattern-page-template/pattern-page-template';
import {
  ContentSection,
  ContentPrimary,
} from '../../../components/content-structure';
import {StyledHeading} from '../../../utils/styled';

const unorderedListOverrides = {
  spaceStack: 'space040',
  content: {
    typographyPreset: 'editorialParagraph020',
  },
};

const Payment = (layoutProps: LayoutProps) => (
  <PatternPageTemplate
    headTags={{
      title: 'Payment/Billing',
      description: `Use the payment field when the business needs to take payment for a service.`,
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Forms',
      name: 'Payment/Billing',
      hero: {
        illustration: 'patterns/forms/payment/hero',
      },
      introduction: `Use the payment field when the business needs to take payment for a service.`,
      showSeparator: true,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="Third parties">
        <ContentPrimary
          id="third-parties"
          toc="Third parties"
          headline="Third parties"
          description="Third parties are generally used for payment, this means that they handle the validation of user payment details as well as the security of the payment being made. Common providers are listed below:"
          showSeparator
        >
          <UnorderedList markerAlign="start" overrides={unorderedListOverrides}>
            <>
              Details on{' '}
              <Link
                href="https://knowledgecenter.zuora.com/Billing"
                target="_blank"
              >
                Zuora
              </Link>
            </>
            <>
              Details on{' '}
              <Link
                href="https://stripe.com/en-gb/payments/checkout"
                target="_blank"
              >
                Stripe
              </Link>
            </>
          </UnorderedList>
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="help improve this page">
        <ContentPrimary
          id="help-improve-this-page"
          toc="Help improve this page"
          headline={<StyledHeading>Help improve this page</StyledHeading>}
          description={
            <>
              To help make sure this page is as useful as it can be, relevant
              and kept up to date with industry best practices, please get in
              touch to share your research findings, and contribute to this
              page.
              <br />
              <br />
              <Link
                href="https://github.com/newscorp-ghfb/newskit/issues/new/choose"
                target="_blank"
              >
                Propose a change or contribution by suggesting a feature
                request.
              </Link>
            </>
          }
          showSeparator
        />
      </ContentSection>
    </ComponentPageCell>
  </PatternPageTemplate>
);

export default Payment;

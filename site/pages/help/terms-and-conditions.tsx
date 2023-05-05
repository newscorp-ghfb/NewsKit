import React from 'react';
import {UnorderedList, P, Block} from 'newskit';
import Layout, {LayoutProps} from '../../components/layout';
import {PageIntroduction} from '../../components/page-introduction';
import {ComponentPageCell} from '../../components/layout-cells';
import {Link} from '../../components/link';
import {HeadNextSeo} from '../../components/head-next-seo';
import {
  ContentSection,
  ContentSecondary,
  ContentColSpan,
} from '../../components/content-structure';

const contentOverrides = {
  typographyPreset: {
    xs: 'editorialParagraph020',
    md: 'editorialParagraph030',
  },
};

const unorderedListOverrides = {
  marker: {
    spaceInline: 'space020',
  },
  content: contentOverrides,
};

const Introduction = ({path, ...props}: LayoutProps) => (
  <Layout {...props} path={`${path}-new`}>
    <HeadNextSeo
      title="Terms and Conditions"
      description="Welcome to the Website Terms and Conditions of Us"
      image={{
        url: 'social/about.png',
        alt: 'Terms and Conditions',
      }}
    />
    <PageIntroduction
      nameAs="h1"
      introductionAs="h2"
      name="Website terms and conditions of use"
      introduction={
        <>
          Welcome to the Website Terms and Conditions of Use (<b>Terms</b>)
          which apply to{' '}
          <Link href="https://newskit.co.uk" external={false}>
            newskit.co.uk
          </Link>{' '}
          (the <b>Website</b>).
        </>
      }
    />
    <ComponentPageCell>
      <ContentSection>
        <ContentSecondary
          description={
            <>
              By using our Website you agree to be legally bound by these Terms.
              If you do not agree to these Terms, you should not use our
              Website.
              <br />
              <br />
              On this Website, we make available various software components,
              features and tools (<b>Components</b>), including code which has
              been developed by or on behalf of News UK to form the basis of
              NewsKit (<b>NewsKit OSS</b>).
              <br />
              <br />
              Separate terms may apply to your usage of NewsKit OSS and other
              Components, including these{' '}
              <Link
                href="https://github.com/newscorp-ghfb/newskit/blob/main/LICENSE"
                target="_blank"
              >
                Open Source Terms
              </Link>
              . You should ensure that you check, and comply with, the terms of
              the licences for any such Components before using them.
              <br />
              <br />
              In the event of a conflict between these Terms and the Open Source
              Terms in any way, the Open Source Terms shall prevail in relation
              to your usage of any Components (including NewsKit OSS).
            </>
          }
        />
      </ContentSection>
    </ComponentPageCell>

    <ComponentPageCell>
      <ContentSection sectionName="accessing and using our website">
        <ContentSecondary
          headline="Accessing and using our website"
          description={
            <>
              Access to our Website is permitted on a temporary basis and we
              reserve the right to suspend, withdraw, discontinue or change any
              part of our Website, including the availability of any content,
              without notice. We will not be liable to you if for any reason our
              Website is unavailable at any time or for any period.
              <br />
              <br />
              You are responsible for ensuring that all persons accessing our
              Website through your connection are aware of these Terms and that
              they comply with them.
              <br />
              <br />
              The content on our Website is provided for information only.
              Although we make reasonable efforts to update the information on
              our Website, we make no representations, warranties or guarantees,
              whether express or implied, that the content on our Website is
              accurate, complete or up-to-date.
            </>
          }
          childrenColSpan={ContentColSpan.TEXT}
        >
          <P overrides={contentOverrides}>
            In accessing any part of our Website, you agree not to:
          </P>
          <Block spaceStack="space040" />
          <UnorderedList markerAlign="start" overrides={unorderedListOverrides}>
            <>
              Use our Website in such a way that disrupts, interferes with or
              restricts the use of our Website by other users;
            </>
            <>
              Use our Website for any activities which breach any laws or
              regulations or infringe any third party rights;
            </>
            <>
              Use the personal information of another person in order to access
              or use our Website;
            </>
            <>
              Remove, obscure, or alter any copyright notices, trademarks, or
              other proprietary rights notices of ours or any third party;
            </>
            <>
              Decompile, reverse engineer, disassemble, copy or adapt any
              software or other code or scripts forming part of our Website;
            </>
            <>
              Transmit any viruses, Trojans, worms, logic bombs or other
              material which is malicious or technologically harmful through our
              Website.
            </>
          </UnorderedList>
        </ContentSecondary>

        <ContentSecondary
          headline="Our content"
          description={
            <>
              Our content, trademarks, copyright, patents, logos, domain names
              and other related intellectual property rights or other features
              of our brand belong to us or to our licensors.
              <br />
              <br />
              Unless otherwise expressly stated, your use of our Website does
              not grant you any rights in our and/or our licensors’ intellectual
              property whether for commercial or non-commercial use.
              <br />
              <br />
              For the avoidance of doubt, you may use the NewsKit OSS in
              accordance with the{' '}
              <Link
                href="https://github.com/newscorp-ghfb/newskit/blob/main/LICENSE"
                target="_blank"
              >
                Open Source Terms.
              </Link>
            </>
          }
        />
      </ContentSection>

      <ContentSecondary
        headline="Links to third party websites"
        description="Our Website may include links to third party internet websites which are controlled and maintained by others. These links are provided for information and convenience and we have no control over and cannot therefore accept responsibility or liability for the content of any linked third party website. We do not endorse any linked website. It is your responsibility to become familiar with such third party websites’ terms and conditions and any other policies of such websites."
      />

      <ContentSecondary
        headline="Privacy"
        description={
          <>
            If you supply personal details to us through our Website then you
            consent to our maintaining, recording, holding and using such
            personal data in accordance with our{' '}
            <Link href="https://newsprivacy.co.uk/single/" target="_blank">
              Privacy Policy.
            </Link>
          </>
        }
      />

      <ContentSecondary
        headline="Changes to our terms"
        description="We may amend these Terms at any time, so please ensure that you check our Terms frequently. By continuing to use any of our Website after changes are made, you are accepting those changes and will be bound by them."
      />

      <ContentSecondary
        headline="Disclaimer"
        description={
          <>
            Information and content on our Website is provided &quot;as is&quot;
            and for general information purposes only and should not be relied
            upon as a specific source of information. From time to time, it may
            be the case that certain information and content is supplied to us
            by our third party partners. We have no control over third party
            content and we are unable to guarantee the accuracy of such third
            party content.
            <br />
            <br />
            Whilst we will do our best to ensure that our Website is fully
            operational at all times, we are not responsible for any problems or
            temporary interruptions in using our Website arising from factors
            outside of our control (e.g. technical problems from traffic
            congestion on the internet) or for any problems arising from
            participating in or from downloading third party content.
            <br />
            <br />
            Under no circumstances shall we be responsible for any loss or
            damage resulting from the use of our Website and/or from the use of
            information presented on our Website.
          </>
        }
      />

      <ContentSecondary
        headline="Limitation of our liability to you"
        description="You agree that to the extent permissible by law, your sole and only remedy for any problems, issues or concerns arising from the use of our Website is to stop using our Website."
      />

      <ContentSecondary
        headline="Indemnity"
        description="By using our Website, you agree to indemnify us and our agents, and any third party contributors to our Website, against any loss, damages or expenses incurred by us as a result of your breach of these Terms."
      />

      <ContentSecondary
        headline="Law and jurisdiction"
        description="Any dispute or claim arising out of or in connection with our Website, these Terms and/or our Privacy Policy (including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of England and Wales and will be subject to the exclusive jurisdiction of the English courts."
      />

      <ContentSecondary
        headline="Other information"
        childrenColSpan={ContentColSpan.TEXT}
      >
        <P overrides={contentOverrides}>
          In these Terms, the following words and expressions have the following
          meanings:
        </P>
        <Block spaceStack="space040" />
        <UnorderedList markerAlign="start" overrides={unorderedListOverrides}>
          <>
            Use our Website in such a way that disrupts, interferes with or
            restricts the use of our Website by other users;
          </>
          <>
            <b>News UK</b> means News Corp UK & Ireland Limited, 1 London Bridge
            Street, London, SE1 9GF, together with any of its subsidiaries from
            time to time.
          </>
          <>
            <b>Our content</b> means any text, files, images, photos, graphics,
            video, sounds, musical works or any other materials that we post on
            or through the Website.
          </>
          <>
            <b>Third party content</b> means any text, files, images, photos,
            graphics, video, sounds, musical works or any other materials posted
            on or through the Website by our third party partners.
          </>
          <>
            <b>Us, our, we</b> means News UK.
          </>
          <>
            <b>You, your, yours</b> means you as a user of the Website.
          </>
        </UnorderedList>
      </ContentSecondary>
    </ComponentPageCell>
  </Layout>
);

export default Introduction;

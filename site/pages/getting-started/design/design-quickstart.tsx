import React from 'react';
import {
  Block,
  OrderedList,
  InlineMessage,
  styled,
  getSizingCssFromTheme,
} from 'newskit';
import {LayoutProps} from '../../../components/layout';
import {Link} from '../../../components/link';
import {GuidePageTemplate} from '../../../templates/guide-page-template/guide-page-template';
import {ComponentPageCell} from '../../../components/layout-cells';
import {Step} from '../../../components/step';
import {Illustration} from '../../../components/illustrations/illustration-loader';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
} from '../../../components/content-structure';

const orderedListOverrides = {
  spaceInline: 'space040',
  content: {
    typographyPreset: 'editorialParagraph020',
  },
  counter: {
    typographyPreset: 'editorialParagraph020',
    minWidth: 'sizing040',
  },
};

const ImageContainer = styled.div`
  ${getSizingCssFromTheme('marginTop', 'sizing040')};
  ${getSizingCssFromTheme('marginBottom', 'sizing050')}
`;

export default (layoutProps: LayoutProps) => (
  <GuidePageTemplate
    headTags={{
      title: 'Design quickstart',
      description:
        'This page describes how to get started designing a digital product with NewsKit.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Guides',
      name: 'Design quickstart',
      hero: {
        illustration: 'guides/design-quickstart/hero',
      },
      introduction: `This page describes how to get started designing a digital product with NewsKit.`,
    }}
    featureCard={{
      title: 'Need help?',
      description: 'Can’t find what you’re looking for?',
      href: 'about/contact-us/',
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="introduction description">
        <ContentPrimary
          description={
            <>
              The following guidance is compatible with{' '}
              <Link href="https://releases.figma.com/" target="_blank">
                Figma version 104.1
              </Link>{' '}
              and earlier.
            </>
          }
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="step 1">
        <ContentPrimary showSeparator>
          <Step
            media="guides/design-quickstart/step1/hero"
            stepText="Step 1"
            timerText="3+ mins"
          />
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="access to figma">
        <ContentPrimary
          id="access-to-figma"
          toc="Access to Figma"
          headline="Access to Figma"
          description="News UK Designers are given access to the News UK Figma account when onboarding to the company. To access a Figma account, follow these simple steps:"
        >
          <OrderedList overrides={orderedListOverrides}>
            <>
              <Link
                href="https://www.figma.com/downloads/?fuid=991535588482779467"
                target="_blank"
              >
                Download the Figma desktop app.
              </Link>
            </>
            <>
              Go to the{' '}
              <Link href="https://www.figma.com/login" target="_blank">
                Figma login page.
              </Link>
            </>
            <>
              Select the “Log in with SAML SSO” link at the bottom of the form.
              <ImageContainer>
                <Illustration path="guides/design-quickstart/step1/access-to-figma-log-in" />
              </ImageContainer>
            </>
            <>
              Enter a work email address in the form e.g. Joe.Bloggs@news.co.uk.
            </>
            <>
              Press “Log in” button - you will be taken to OKTA (account
              management). If you have not already been assigned the app in
              OKTA,{' '}
              <Link href="https://newscorp.service-now.com/sp" target="_blank">
                contact the service desk to gain access.
              </Link>
            </>
            <>
              Enter OKTA credentials for work email address (you may be asked to
              authenticate via your phone).
            </>
            <>
              Once Figma has opened in the browser, open the Figma desktop app.
            </>
            <>
              In the Figma desktop app, press “Log in with browser” - a new
              browser window will open.
              <ImageContainer>
                <Illustration path="guides/design-quickstart/step1/access-to-figma-browser-launch" />
              </ImageContainer>
            </>
            <>
              In the newly opened browser window, press “Open the desktop app”.
              A browser dialog screen will appear, check the “Always allow Figma
              to open links of this type in the associated app”
              <ImageContainer>
                <Illustration path="guides/design-quickstart/step1/access-to-figma-open-in-app" />
              </ImageContainer>
            </>
            <>You will now be taken to the Figma desktop app - enjoy!</>
          </OrderedList>
        </ContentPrimary>

        <ContentSecondary showSeparator>
          <InlineMessage role="region" aria-label="NewsCorp teams">
            For other NewsCorp teams, please get in touch with the design
            systems team via Slack:{' '}
            <Link
              href="https://newsuktechnology.slack.com/archives/CTFGLAK9C"
              target="_blank"
            >
              #newskit
            </Link>
            <br />
            If you are not part of NewsCorp but require access, please contact
            us via{' '}
            <Link
              href="https://www.newskit.co.uk/about/contact-us/"
              target="_blank"
            >
              this form.
            </Link>
          </InlineMessage>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="step 2">
        <ContentPrimary showSeparator>
          <Step
            media="guides/design-quickstart/step2/hero"
            stepText="Step 2"
            timerText="<1 min"
          />
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="joining a team workspace">
        <ContentPrimary
          id="joiningateamworkspace"
          toc="Joining a team workspace"
          headline="Joining a team workspace"
          description="To join a team workspace, follow these simple steps:"
        >
          <OrderedList overrides={orderedListOverrides}>
            <>
              <Link
                href="https://www.figma.com/files/885972051699405879?fuid=991535588482779467"
                target="_blank"
              >
                View teams in the News UK Figma organisation.
              </Link>
            </>
            <>
              Find your team(s), and press “Request to join” or “Join” button(s)
              to get access to a team workspace.
              <ImageContainer>
                <Illustration path="guides/design-quickstart/step2/joining-a-workspace-request" />
              </ImageContainer>
            </>
            <>
              Once you have access to a team(s), you will see the structure of
              project files and associated libraries on the main Figma screen.
              News UK Figma workspaces are structured in a particular way, learn
              more about News UK Figma workspaces.
            </>
          </OrderedList>
        </ContentPrimary>

        <ContentSecondary showSeparator>
          <InlineMessage role="region" aria-label="Tip">
            Tip - to see projects in a team in the left-hand navigation on the
            main Figma screen,be sure to “star” them in the team view screen.
          </InlineMessage>
          <Block spaceStack="space050" />
          <InlineMessage role="region" aria-label="Having trouble">
            Having trouble joining a team? Get in touch with the design systems
            team via Slack:{' '}
            <Link
              href="https://newsuktechnology.slack.com/archives/CTFGLAK9C"
              target="_blank"
            >
              #newskit
            </Link>
          </InlineMessage>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="step 3">
        <ContentPrimary showSeparator>
          <Step
            media="guides/design-quickstart/step3/hero"
            stepText="Step 3"
            timerText="5+ mins"
          />
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="installing and setting up figma plugins">
        <ContentPrimary
          id="installing-settingup-figma-plugins"
          toc="Installing & setting up Figma plugins"
          headline="Installing & setting up Figma plugins"
          description="NewsKit provides custom Figma plugins to improve the design process workflow, follow these simple steps to install and set up:"
        >
          <OrderedList overrides={orderedListOverrides}>
            <>
              <Link
                href="https://www.figma.com/proto/44FDCMcOPHd5m29NKTESm7/NK-Component-Overviews?page-id=190%3A60380&node-id=204%3A0&viewport=368%2C48%2C0.5&scaling=scale-down-width&hide-ui=1"
                target="_blank"
              >
                View setup & installation guidance for the Theme Swapper plugin.
              </Link>
            </>
            <>
              <Link
                href="https://www.figma.com/proto/44FDCMcOPHd5m29NKTESm7/NK-Component-Overviews?page-id=218%3A62928&node-id=218%3A62929&viewport=410%2C48%2C0.06&scaling=scale-down-width&hide-ui=1"
                target="_blank"
              >
                View setup & installation guidance for the Text Crop plugin.
              </Link>
            </>
            <>
              <Link
                href="https://www.figma.com/proto/44FDCMcOPHd5m29NKTESm7/NK-Component-Overviews?page-id=190%3A60380&node-id=204%3A0&viewport=368%2C48%2C0.5&scaling=scale-down-width&hide-ui=1"
                target="_blank"
              >
                View setup & installation guidance for the Theme Exporter plugin
              </Link>{' '}
              (optional - only required if you are going to be managing a
              brand’s theme).
            </>
          </OrderedList>
        </ContentPrimary>

        <ContentSecondary showSeparator>
          <InlineMessage role="region" aria-label="Figma plugins">
            In addition to the above, view a list of optional{' '}
            <Link
              href="https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/3704423476/old+design+overview+content+-+Web+Documentation#:~:text=refer%20to%20the-,Figma%20plugins%20guide,-"
              target="_blank"
            >
              recommended Figma plugins
            </Link>{' '}
            from the Figma Community to improve the design workflow.
          </InlineMessage>
        </ContentSecondary>
      </ContentSection>
    </ComponentPageCell>
  </GuidePageTemplate>
);

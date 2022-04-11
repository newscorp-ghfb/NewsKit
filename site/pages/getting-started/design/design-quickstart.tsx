import React from 'react';
import {
  Block,
  InlineMessage,
  styled,
  getSizingCssFromTheme,
  OrderedList,
  UnorderedList,
} from 'newskit';
import {LayoutProps} from '../../../components/layout';
import {Link} from '../../../components/link';
import {GuidePageTemplate} from '../../../templates/guide-page-template/guide-page-template';
import {ComponentPageCell} from '../../../components/layout-cells';
import {Step} from '../../../components/step';
import {Illustration} from '../../../components/illustrations/illustration-loader';
import {IconFilledCircle} from '../../../components/icons';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
  ContentTertiary,
  ContentColSpan,
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

const DesignQuickstart = (layoutProps: LayoutProps) => (
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
          childrenColSpan={ContentColSpan.TEXT}
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

        <ContentSecondary showSeparator childrenColSpan={ContentColSpan.TEXT}>
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
          childrenColSpan={ContentColSpan.TEXT}
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

        <ContentSecondary showSeparator childrenColSpan={ContentColSpan.TEXT}>
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
          description={
            <>
              NewsKit provides{' '}
              <Link href="/getting-started/design/design-overview/#plugins">
                custom Figma plugins
              </Link>{' '}
              to improve the design process workflow, follow these simple steps
              to install and set up:
            </>
          }
          childrenColSpan={ContentColSpan.TEXT}
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

        <ContentSecondary showSeparator childrenColSpan={ContentColSpan.TEXT}>
          <InlineMessage role="region" aria-label="Figma plugins">
            In addition to the above, view a list of optional{' '}
            <Link
              href="https://www.figma.com/file/JCXJnEdPgFVWocU3LYk6YW/Figma-Plugins?node-id=301%3A19"
              target="_blank"
            >
              recommended Figma plugins
            </Link>{' '}
            from the Figma Community to improve the design workflow.
          </InlineMessage>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="step 4">
        <ContentPrimary showSeparator>
          <Step
            media="guides/design-quickstart/step4/hero"
            stepText="Step 4"
            timerText="<1 min"
          />
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="starting a figma project">
        <ContentPrimary
          id="starting-figma-project"
          toc="Starting a Figma project"
          headline="Starting a Figma project"
          description="To start a Figma project, follow these simple steps:"
          childrenColSpan={ContentColSpan.TEXT}
        >
          <OrderedList overrides={orderedListOverrides}>
            <>
              In your team area, hover over the team name, and press the “+”
              icon (labeled “New project” on hover) to add a new project.
              <ImageContainer>
                <Illustration path="guides/design-quickstart/step4/starting-a-figma-project-new-project-01" />
              </ImageContainer>
            </>
            <>
              Give your new project a clear and distinctive name [Product/Brand
              Name], with an emoji to identify the project’s purpose (optional).
            </>
            <>
              You will also see permissions options for the new project -
              everyone in the team can edit, everyone in the team can view, or
              via invite-only.
            </>
            <>
              In your newly created project, hover over the project name, and
              press the “+” icon (New file) to add a new project.
              <ImageContainer>
                <Illustration path="guides/design-quickstart/step4/starting-a-figma-project-new-project-02" />
              </ImageContainer>
            </>
            <>
              You will see options to add a design file, FigJam file, or to
              import a file locally.
            </>
            <>
              Select the “Design file” option to create a new file, and the new
              file will open in a tab.
              <ImageContainer>
                <Illustration path="guides/design-quickstart/step4/starting-a-figma-project-new-project-03" />
              </ImageContainer>
            </>
          </OrderedList>
        </ContentPrimary>

        <ContentSecondary
          headline="Using the NewsKit project template files"
          description={
            <>
              NewsKit provides template Figma files to kickstart design
              processes, helping to develop a consistent workflow.
              <br />
              <br />
              To use a{' '}
              <Link
                href="https://www.figma.com/file/iH4aqnno7MHwUMUW1QUr4S/%5BProduct%2FBrand-Name%5D-UX-project-template?node-id=0%3A1"
                target="_blank"
              >
                UX Project Template file
              </Link>
              , or{' '}
              <Link
                href="https://www.figma.com/file/BnIKQwut4dqqrfghSlsRV1/%5BProduct%2FBrand-Name%5D-UI-project-template?node-id=0%3A1"
                target="_blank"
              >
                UI Project Template file
              </Link>
              , follow these simple steps:
            </>
          }
        />
        <ContentTertiary showSeparator childrenColSpan={ContentColSpan.TEXT}>
          <OrderedList overrides={orderedListOverrides}>
            <>
              Select “Duplicate” from the dropdown of options next to the file
              name.
              <ImageContainer>
                <Illustration path="guides/design-quickstart/step4/using-the-newskit-project-template-files-using-template-01" />
              </ImageContainer>
            </>
            <>
              At the bottom of the screen, a notification telling you that the
              file was duplicated will appear. Press “Open”, and the newly
              duplicated project template file will open in a new tab.
              <ImageContainer>
                <Illustration path="guides/design-quickstart/step4/using-the-newskit-project-template-files-using-template-02" />
              </ImageContainer>
            </>
            <>
              Select “Move to project…” from the dropdown of options next to the
              file name, and you will be given the option of selecting a project
              from a list, or you can search for a project name to move the file
              to.
              <ImageContainer>
                <Illustration path="guides/design-quickstart/step4/using-the-newskit-project-template-files-using-template-03" />
              </ImageContainer>
            </>
          </OrderedList>
        </ContentTertiary>
      </ContentSection>

      <ContentSection sectionName="step 5">
        <ContentPrimary showSeparator>
          <Step
            media="guides/design-quickstart/step5/hero"
            stepText="Step 5"
            timerText="<1 min"
          />
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="linking newsKit figma libraries">
        <ContentPrimary
          id="linking-newsKit-figma-libraries"
          toc="Linking NewsKit Figma libraries"
          headline="Linking NewsKit Figma libraries"
          description="To link a NewsKit Figma library to a project, follow these simple steps:"
          childrenColSpan={ContentColSpan.TEXT}
        >
          <OrderedList overrides={orderedListOverrides}>
            <>
              In your design file, select the “Assets” tab in the left-hand
              panel.
              <ImageContainer>
                <Illustration path="guides/design-quickstart/step5/linking-newskit-figma-libraries-libraries-01" />
              </ImageContainer>
            </>
            <>
              Press the “book” icon (labeled “Team library” on hover), to bring
              up a list of libraries in a modal dialog.
              <ImageContainer>
                <Illustration path="guides/design-quickstart/step5/linking-newskit-figma-libraries-libraries-02" />
              </ImageContainer>
            </>
            <>
              In the list, you will see the available libraries available to
              link to your design file, categorised by teams.
            </>
            <>
              The libraries that are already enabled are indicated in the list
              with a switch on the left-hand side of each library set to
              “Enabled”.
            </>
            <>
              The{' '}
              <Link
                href="https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components"
                target="_blank"
              >
                NK-Web Gallery
              </Link>
              , &{' '}
              <Link
                href="https://www.figma.com/file/Q3OTJ4RZWJGTCaWuS8sWsL/%F0%9F%9F%A2-NK-Utilities"
                target="_blank"
              >
                NK-Utilities
              </Link>
              Figma libraries are automatically linked when you add a new design
              file or duplicate one of the NewsKit project template files.
            </>
            <>
              To link your design file to one of your team’s libraries, or the
              available NewsKit Design Systems libraries simply enable the
              library you want to link to via the corresponding switch on the
              left-hand side.
              <ImageContainer>
                <Illustration path="guides/design-quickstart/step5/linking-newskit-figma-libraries-libraries-03" />
              </ImageContainer>
            </>
          </OrderedList>
        </ContentPrimary>

        <ContentSecondary showSeparator childrenColSpan={ContentColSpan.TEXT}>
          <InlineMessage role="region" aria-label="library">
            Note - Any library that you link to your design file will give you
            access to all the components in that library. If your team has its
            own local library, you should be linking to that local library as it
            will contain all of the components available that are specific to
            your brand.
            <br />
            <br />
            If your team has its own local library, you should be linking to
            that local library as it will contain all of the components
            available that are specific to your brand.
          </InlineMessage>
        </ContentSecondary>

        <ContentTertiary showSeparator childrenColSpan={ContentColSpan.TEXT}>
          <InlineMessage role="region" aria-label="Design community">
            <Link href="https://www.figma.com/@newsuk" target="_blank">
              Follow the News UK Figma design community
            </Link>{' '}
            to stay up to date with community resources.
          </InlineMessage>
        </ContentTertiary>
      </ContentSection>

      <ContentSection sectionName="what’s next?">
        <ContentPrimary
          id="whats-next"
          toc="What’s next?"
          headline="What’s next?"
          description="To link a NewsKit Figma library to a project, follow these simple steps:"
          showSeparator
          childrenColSpan={ContentColSpan.TEXT}
        >
          <UnorderedList
            markerAlign="start"
            listItemMarker={IconFilledCircle}
            overrides={{
              spaceStack: 'space050',
              marker: {
                spaceInline: 'space020',
              },
              content: {
                typographyPreset: 'editorialParagraph030',
              },
            }}
          >
            <>
              For an overview of the design working process, getting started,
              Figma setup and toolkits, resources, and more{' '}
              <Link
                href="https://www.figma.com/proto/GzKdlZVkuR7tpv0kBwaFD6/Figma-for-Designers?page-id=3%3A6&node-id=57%3A55&viewport=350%2C48%2C0.5&scaling=min-zoom&hide-ui=1"
                target="_blank"
              >
                view the ways of working guidance.
              </Link>
            </>
            <>
              <Link href="/theme/theming/creating-a-theme/">
                View creating a theme in design guidance.
              </Link>
            </>
            <>
              <Link
                href="https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/2670919872/Read+Me+-+NewsKit+Website"
                target="_blank"
              >
                View the NewsKit Read Me document.
              </Link>
            </>
          </UnorderedList>
        </ContentPrimary>
      </ContentSection>
    </ComponentPageCell>
  </GuidePageTemplate>
);

export default DesignQuickstart;

import React from 'react';
import {Block, UnorderedList} from 'newskit';
import {Code} from '../../../components/code';
import {Link} from '../../../components/link';
import {InlineCode} from '../../../components/markdown-elements';
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

const GridLayoutStepByStep = (layoutProps: LayoutProps) => (
  <GuidePageTemplate
    headTags={{
      title: 'Grid Layout step-by-step',
      description:
        'The grid layout component is a wrapper around CSS grid that maps all CSS grid properties to React props. ',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Guides',
      name: 'Grid Layout step-by-step',
      hero: {
        illustration: 'guides/grid-layout-guide/hero',
      },
      introduction: `The grid layout component is a wrapper around CSS grid that maps all CSS grid properties to React props. `,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="guide">
        <ContentSecondary
          description="Out of the box, all React props support media query objects as values so that you can easily create responsive layouts."
          childrenColSpan={ContentColSpan.TEXT}
        />
      </ContentSection>

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
            }}
          >
            <>Support media query objects</>
            <>Allows usage for sizing and spacing tokens</>
            <>Allows composition when using naming areas</>
          </UnorderedList>
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="first layout">
        <ContentPrimary
          id="first-layout"
          toc="First layout"
          headline="First layout"
          description={
            <>
              Let&lsquo;s create our first layout.
              <br />
              <br />
              Consider the following UI element as our end goal:
            </>
          }
        >
          <Illustration
            viewBox="0 0 1345 759"
            path="guides/grid-layout-guide/steps/first-layout"
          />
        </ContentPrimary>
        <ContentSecondary
          description="Following best practices, we’re going to start with a mobile design and gradually move upward to larger screens."
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="create">
        <ContentPrimary
          id="creating-component"
          toc="Create"
          headline="Creating a component"
          description="Create a component."
          showSeparator
        >
          <Code>
            {`// src/components/card.tsx

import React from 'react';

export const Card = () => <p>Nothing here yet</p>;
`}
          </Code>
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="using grid layout and naming areas">
        <ContentPrimary
          id="using-gridlayout"
          toc="Using"
          headline="Using GridLayout and naming areas"
          description={
            <>
              Next step, let&lsquo;s import the{' '}
              <Link href="/components/grid-layout/">
                NewsKit grid layout component.
              </Link>
            </>
          }
        >
          <Code>
            {`// src/components/card.tsx

import React from 'react';
import { GridLayout } from 'newskit';

export const Card = () => <p>Nothing here yet</p>;

`}
          </Code>
        </ContentPrimary>
        <ContentSecondary description="When describing layouts we can split our UI element into areas. Looking at our design, we could have the following areas:">
          <Illustration
            viewBox="0 0 1345 759"
            path="guides/grid-layout-guide/steps/grid-layout"
          />
        </ContentSecondary>
        <ContentSecondary
          description={
            <>
              Try to name areas in a meaningful way, and use names like
              <InlineCode>image</InlineCode>, <InlineCode>content</InlineCode>,
              and <InlineCode>action</InlineCode> instead of{' '}
              <InlineCode>top</InlineCode>, <InlineCode>middle</InlineCode>, and{' '}
              <InlineCode>bottom</InlineCode>. This is useful when you create
              responsive layouts and the position of the areas may change.
              <br />
              <br />
              Let’s create our first areas. We create a string with tree areas
              and describe their relation and position. Then pass it to the{' '}
              <InlineCode>GridLayout</InlineCode> component.
            </>
          }
        >
          <Code>
            {`// src/components/card.tsx

const mobileAreas = \`
  image
  content
  action
\`;

export Card = () => (
	<GridLayout areas={mobileAreas}>Nothing yet</GridLayout>
);
`}
          </Code>
        </ContentSecondary>
        <ContentSecondary
          description={
            <>
              When you use areas prop on <InlineCode>GridLayout</InlineCode>{' '}
              component, it returns React components with names generated from
              passed areas. Those components are available in the children
              render function as arguments:
            </>
          }
        >
          <Code>
            {`// src/components/card.tsx

export Card = () => (
	<GridLayout areas={mobileAreas}>
	{
		(Areas) => (
			<> // <- notice the React.Fragment wrapper
          <Areas.Image>Image</Areas.Image>
          <Areas.Content>Content</Areas.Content>
          <Areas.Action>Action</Areas.Action>
        </>
		)
	}
	</GridLayout>
);
`}
          </Code>
        </ContentSecondary>
        <ContentSecondary
          description={
            <>
              Now we can render other components inside those area components to
              make up the desired appearance. We also need to import a few more{' '}
              <Link href="/components/overview/">components</Link> from NewsKit.
              Here&lsquo;s an example of what this looks like:
            </>
          }
          showSeparator
        >
          <Code>
            {`// src/components/card.tsx

import { Image, Headline, TextBlock, Button, GridLayout } from 'newskit';

export Card = ({imageUrl, headline, short, url}) => (
	<GridLayout areas={mobileAreas}>
	{
		(Areas) => (
			<>
          <Areas.Image>
            <Image src={imageUrl} />
          </Areas.Image>
          <Areas.Content>
            <Headline>{headline}</Headline>
            <TextBlock>{short}</TextBlock>
          </Areas.Content>
          <Areas.Action>
            <Button url={url}>read more</Button>
          </Areas.Action>
		</>
		)
	}
	</GridLayout>
);
`}
          </Code>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="areas relations">
        <ContentPrimary
          id="areas-relations"
          toc="Areas relations"
          headline="Areas relations"
          description={
            <>
              The areas prop describes the position of the areas inside the
              grid. When we want to specify things like dimension and spacing
              between areas we need to add <InlineCode>columns</InlineCode>,{' '}
              <InlineCode>rows</InlineCode>, <InlineCode>columnGap</InlineCode>,
              and <InlineCode>rowGap</InlineCode>. In the following example, we
              add space between each row using the{' '}
              <InlineCode>rowGap</InlineCode> prop and passing the space token
              from NewsKit.
            </>
          }
          showSeparator
        >
          <Code>
            {`// src/components/card.tsx
import { Image, Headline, TextBlock, Button, GridLayout } from 'newskit';

export Card = ({imageUrl, headline, short, url}) => (
	<GridLayout areas={mobileAreas} rowGap="space030">
	{
		(Areas) => (
			/* Same as above... */
		)
 }
</GridLayout>
);
`}
          </Code>
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="responsive props">
        <ContentPrimary
          id="responsive-props"
          toc="Responsive props"
          headline="Responsive props"
          description={
            <>
              The <InlineCode>GridLayout</InlineCode> component supports
              responsive props, which means we can have different values for{' '}
              <InlineCode>areas</InlineCode>, <InlineCode>rowGap</InlineCode>,
              and other props for different breakpoints.
              <br />
              <br />
              In order to do that, we need to pass objects with values per each
              breakpoint. In the example below, we specify a different
              <InlineCode>rowGap</InlineCode> value for mobile, tablet and
              desktop screens.
            </>
          }
        >
          <Code>
            {`<GridAres rowGap={{xs: '10px', sm: '15px', md: '20px', lg: '25px', xl: '30px'}}>`}
          </Code>
        </ContentPrimary>
        <ContentSecondary
          description={
            <>
              We can apply the same principle to our areas prop so that our{' '}
              <Link href="/components/card/">card</Link> component changes its
              layout on a desktop breakpoint and achieves this UI:
            </>
          }
          showSeparator
        >
          <Block spaceStack="space070">
            <Illustration
              viewBox="0 0 1345 759"
              path="guides/grid-layout-guide/steps/responsive-props"
            />
          </Block>
          <Code>
            {`// src/components/card.tsx

const mobileAreas = \`
  image
  content
  action
\`;

const desktopAreas = \`
	image content
	image action
\`;

export const Card = ({imageUrl, headline, short, url}) => (
	<GridLayout
		areas={{xs: mobileAreas, md: desktopAreas}}
		rowGap="space030"
		columnGap="space030">
	{
		(Areas) => (
			/* Same as above... */
		)
	}
	</GridLayout>
);
`}
          </Code>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="summary">
        <ContentPrimary
          id="summary"
          toc="Summary"
          headline="Summary"
          description="Here’s all of the code together:"
          showSeparator
        >
          <Code>
            {`// src/components/card.tsx

import React from 'react';
import { Image, Headline, TextBlock, Button, GridLayout } from 'newskit';

const mobileAreas = \`
  image
  content
  action
\`;

const desktopAreas = \`
	image content
	image action
\`;

export const Card = ({imageUrl, headline, short, url}) => (
  <GridLayout
    areas={{xs: mobileAreas, md: desktopAreas}}
    rowGap="space030"
    columnGap="space030"
  >
    {Areas => (
      <>
        <Areas.Image>
          <Image src={imageUrl} />
        </Areas.Image>
        <Areas.Content>
          <Headline>{headline}</Headline>
          <TextBlock>{short}</TextBlock>
        </Areas.Content>
        <Areas.Action>
          <Button href={url}>read more</Button>
        </Areas.Action>
      </>
    )}
  </GridLayout>
);`}
          </Code>
        </ContentPrimary>
      </ContentSection>
    </ComponentPageCell>
  </GuidePageTemplate>
);

export default GridLayoutStepByStep;

import React from 'react';
import {P} from 'newskit';
import Layout from '../components/layout';
import {
  Tutorial,
  TutorialFile,
  TutorialStepProps,
} from '../components/tutorial/tutorial';

const fileContent = `
import React from 'react';
import { Image, Headline, TextBlock, Button, GridLayout } from 'newskit';

const mobileAreas = \`
	image
	content
	action
\`;

const desktopAres = \`
	image content
	image action
\`;

export Card = ({imageUrl, headline, short, url}) => (
	<GridLayout 
		areas={{xs: mobileAreas, md: desktopAreas} 
		rowGap="space030" 
		columnGap="space030">
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
`;

const steps: TutorialStepProps[] = [
  {
    title: 'Creating a component',
    children: (
      <>
        <P>
          Let's create our first layout. Consider the following UI element as
          our end goal
        </P>
        --- IMAGE PLACEHOLDER ---
        <P>
          Create a file and import newskit component as well as create and
          export Card component, for the component we will need the fallowing
          props: imageUrl, headline, short, url
        </P>
      </>
    ),
    ranges: [
      [2, 3],
      [16, 16],
    ],
  },
  {
    title: 'Using GridLayout and naming areas',
    children: (
      <>
        <P>Next step, let's import the GridLayout component from newskit</P>
        <P>
          When describing a layouts we can split our UI element in areas.
          Looking at our design, we could have the following areas:
        </P>
        --- IMAGE PLACEHOLDER ---
        <P>
          Try to name areas in a meaningful way, use names like image, content
          and action instead of top, middle and bottom. This is useful when you
          create responsive layouts and the position of the areas may change.
        </P>
        <P>
          Let’s create our first areas, we create a string with tree areas and
          describe their relation and position. Then pass it to GridLayout
          component.
        </P>
      </>
    ),
    ranges: [
      [5, 9],
      [18, 18],
    ],
  },
  {
    title: 'Naming Areas Components',
    children: (
      <>
        <P>
          When you use areas prop on GridLayout component, it returns React
          components with names generated from passed areas. Those components
          are available in the children render function as arguments:
        </P>
      </>
    ),
    ranges: [
      [22, 24],
      [26, 27],
      [30, 31],
      [33, 35],
    ],
  },
  {
    title: 'Placing components into Areas',
    children: (
      <>
        <P>
          Now we can render other components inside those area components to
          make up the desired appearance. We also need to import few more
          components from newskit. This is an example of how this would look
          like:
        </P>
      </>
    ),
    ranges: [
      [25, 25],
      [28, 29],
      [32, 32],
    ],
  },
  {
    title: 'Areas relations',
    children: (
      <>
        <P>
          areas prop describe the position of the areas inside the Grid, when we
          want to specify things like dimension and spacing between areas we
          need to add columns, rows, columnGap and rowGap. In the fallowing
          example we add space between each row using rowGap prop and passing
          space token from newskit.
        </P>
      </>
    ),
    ranges: [[19, 20]],
  },
  {
    title: 'Responsive props',
    children: (
      <>
        <P>
          `GridLayout` component supports responsive props, which means we cam
          have different values for `areas`, `rowGap` and other props for
          different breakpoints.
        </P>
        <P>
          In order to do that, we need to pass object with values per each
          breakpoint, in the example bellow we specify a different `rowGap`
          value for mobile tablet and desktop screens.
        </P>
        -- PLACEHOLDER INLINE CODE --
        {`
            <GridAres rowGap={{ xs: '10px', sm: '15px', md: '20px', lg: '25px', xl: '30px' >
            `}
        <P>
          We can apply the same principle to our areas prop so that our Card
          component change its layout on desktop breakpoint and achieves this
          UI:
        </P>
        -- PLACEHOLDER IMAGE --
      </>
    ),
    ranges: [
      [11, 14],
      [18, 18],
    ],
  },
  {
    title: 'All together',
    children: (
      <>
        <P>That's all</P>
      </>
    ),
    ranges: [],
  },
];
const files: TutorialFile[] = [
  {name: 'card.tsx', content: fileContent},
  {name: 'theme.tsx', content: fileContent},

];

const Page: React.FC<{
  toggleTheme: () => void;
  themeMode: string;
}> = ({toggleTheme, themeMode}) => (
  <Layout toggleTheme={toggleTheme} themeMode={themeMode} path="/">
    <Tutorial steps={steps} files={files} />
  </Layout>
);

export default Page;

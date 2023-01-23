import React from 'react';
import {Divider, GridLayout} from 'newskit';
import {MetaProps} from './types';
import {GitHubButton} from './github-button';
import {FigmaButton} from './figma-button';
import {StorybookButton} from './storybook-button';
import {Status} from './status';
import {Introduced} from './introduce';

const smallAreas = `
  intro
  divider
  buttons
  dividerEnd
`;

const mediumAreas = `
  intro
  buttons
`;

const largeAreas = `
  intro   buttons
  divider divider
`;

export const Meta = ({
  status,
  introduced,
  introducedLink = true,
  codeUrl,
  figmaUrl,
  storybookId,
}: MetaProps) => (
  <GridLayout
    areas={{xs: smallAreas, md: mediumAreas, lg: largeAreas}}
    columns={{xs: '1fr', lg: '1fr 2fr'}}
    rowGap="space050"
    justifyContent="space-between"
    overrides={{marginBlockEnd: {xs: 'space080', md: 'space060'}}}
  >
    {Area => (
      <>
        <Area.Intro>
          <GridLayout
            columns={{
              sm: '1fr min-content 1fr',
              md: 'min-content min-content min-content',
            }}
            columnGap="space060"
            justifyContent="start"
          >
            <Status status={status} />
            <Divider vertical />
            <Introduced
              introduced={introduced}
              introducedLink={introducedLink}
            />
          </GridLayout>
        </Area.Intro>
        <Area.Divider>
          <Divider />
        </Area.Divider>
        <Area.Buttons>
          <GridLayout
            columns={{
              xs: '1fr',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(3, fit-content(100%))',
            }}
            columnGap={{md: 'space040'}}
            rowGap={{xs: 'space040'}}
            justifyContent="end"
          >
            <GitHubButton href={codeUrl} />
            <StorybookButton storybookId={storybookId} />
            <FigmaButton href={figmaUrl} />
          </GridLayout>
        </Area.Buttons>
        <Area.DividerEnd>
          <Divider />
        </Area.DividerEnd>
      </>
    )}
  </GridLayout>
);

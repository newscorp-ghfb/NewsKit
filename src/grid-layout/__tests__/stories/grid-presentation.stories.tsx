import * as React from 'react';
import {styled} from '../../../utils';
import {Block} from '../../../block';
import {Divider} from '../../../divider';
import {GridBox} from './common';
import {Grid, Cell} from '../../../grid';
import {Label} from '../../..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../../test/storybook-comps';
import {GridLayout, GridLayoutItem} from '../../grid-layout';

export default {
  title: 'NewsKit Light/grid-layout-presentation',
  component: () => 'None',
};

const Item = styled.div`
  padding: 10px;
  border: 5px solid rgb(17, 105, 121);
  background-color: rgba(17, 105, 121, 0.1);
  border-radius: 5px;
`;

// Basics
export const Example1 = () => (
  <GridLayout
    columns={{xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr'}}
    rows="200px 200px 200px"
    rowGap="space030"
    columnGap="space030"
  >
    <Item>One</Item>
    <Item>Two</Item>
    <Item>Three</Item>
    <Item>Four</Item>
    <Item>Fibe</Item>
  </GridLayout>
);

const StyledGridLayout = styled(GridLayoutItem)`
  padding: 10px;
  border: 5px solid rgb(17, 105, 121);
  background-color: rgba(17, 105, 121, 0.1);
  border-radius: 5px;
`;

// Placement
export const Example2 = () => (
  <GridLayout
    columns="repeat(4, 1fr)"
    rows="repeat(4, 100px)"
    rowGap="space030"
    columnGap="space030"
  >
    <StyledGridLayout column="auto / span 2" row="auto / span 3">
      1
    </StyledGridLayout>
    <StyledGridLayout column="auto / span 2">2</StyledGridLayout>
    <StyledGridLayout>3</StyledGridLayout>
    <StyledGridLayout>4</StyledGridLayout>
    <StyledGridLayout column="auto / span 2">5</StyledGridLayout>
  </GridLayout>
);

const areas = {
  xs: `
    header
    main
    sidebar
    footer
  `,
  md: `
    "header header header header"
    "sidebar main main main"
    "footer footer footer footer"
  `,
};

// Named areas
export const Example3 = () => (
  <GridLayout areas={areas}>
    {({Header, Main, Sidebar, Footer}) => (
      <>
        <Sidebar>sidebar</Sidebar>
        <Header>Header</Header>
        <Footer>footer</Footer>
        <Main>Main</Main>
      </>
    )}
  </GridLayout>
);

const cardAreas = {
  xs: `
    thumb   content
    action share
  `,
  md: `
    thumb   thumb
    content content
    action  share
  `,
};

// Advanced examples
export const Example4 = () => (
  <GridLayout
    areas={cardAreas}
    columns={{xs: '200px 1fr', md: '1fr 1fr'}}
    columnGap="20px"
    overrides={{maxWidth: '400px'}}
  >
    {({Thumb, Content, Action, Share}) => (
      <>
        <Thumb>
          <img src="http://placekitten.com/200/200" alt="" />
        </Thumb>
        <Content>
          <h1>Title</h1>
          <p>leading text</p>
        </Content>
        <Action>Date: Today</Action>
        <Share justifySelf="end">
          <a href="#">share here</a>
        </Share>
        <Thumb alignSelf="end">
          <a href="#">tag of the image</a>
        </Thumb>
      </>
    )}
  </GridLayout>
);

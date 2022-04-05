import * as React from 'react';
import {styled} from '../../../utils';
import {Button, Flag, Headline, IconFilledEmail} from '../../..';
import {GridLayout, GridLayoutItem} from '../../grid-layout';
import {TextBlock} from '../../../text-block';

export default {
  title: 'NewsKit Light/grid-layout-presentation',
  component: () => 'None',
};

const ImagePlaceholder = () => (
  <img
    src="https://picsum.photos/200/200"
    alt=""
    style={{width: '100%', height: '100%'}}
  />
);
const TitlePlaceholder = () => (
  <Headline
    kickerText="Lorem Ipsum"
    overrides={{
      typographyPreset: {
        xs: 'editorialHeadline020',
      },
    }}
  >
    Lorem Ipsum is simply dummy text
  </Headline>
);
const TextPlaceholder = () => (
  <TextBlock typographyPreset="editorialParagraph020">
    It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout.
  </TextBlock>
);

const ActionPlaceholder = () => (
  <Button
    href="#"
    size="small"
    overrides={{
      stylePreset: `buttonMinimalPrimary`,
    }}
  >
    Button
    <IconFilledEmail />
  </Button>
);

const SharePlaceholder = () => (
  <Button
    size="small"
    href="#"
    overrides={{
      stylePreset: `buttonMinimalPositive`,
    }}
  >
    <IconFilledEmail />
    Share
  </Button>
);

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

// Card examples
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
          <ImagePlaceholder />
        </Thumb>
        <Content>
          <TitlePlaceholder />
          <TextPlaceholder />
        </Content>
        <Action>
          <ActionPlaceholder />
        </Action>
        <Share justifySelf="end">
          <SharePlaceholder />
        </Share>
        <Thumb alignSelf="end">
          <Flag>tag of the image</Flag>
        </Thumb>
      </>
    )}
  </GridLayout>
);

const layoutAreas = {
  xs: `
    a
    b
    c
    d
    e
  `,
  md: `
    a a
    b c
    d e
  `,
  lg: `
    a b
    a c
    a d
    a e  
  `,
};

const layoutColumns = {
  xs: '1fr',
  md: '1fr 1fr',
  lg: 'auto 200px',
};

const layoutRows = {
  xs: 'repeat(5, 150px)',
  md: '300px 150px 150px',
  lg: 'repeat(4, 150px)',
};

// Layout example
export const Example5 = () => (
  <GridLayout
    areas={layoutAreas}
    columns={layoutColumns}
    rows={layoutRows}
    columnGap="space050"
    rowGap="space050"
  >
    {({A, B, C, D, E}) => (
      <>
        <A>
          <ImagePlaceholder />
        </A>
        <B>
          <ImagePlaceholder />
        </B>
        <C>
          <ImagePlaceholder />
        </C>
        <D>
          <ImagePlaceholder />
        </D>
        <E>
          <ImagePlaceholder />
        </E>
      </>
    )}
  </GridLayout>
);

import * as React from 'react';
import {Grid, Cell} from '../../../grid';

import {Block} from '../../../block';
import {Divider} from '../../../divider';

import {GridLayout, GridLayoutItem} from '../../grid-layout';
import {GridCard, GridTeaser} from './grid-card';
import {GridBox} from './common';
import {StorybookHeading} from '../../../test/storybook-comps';
import {Label} from '../../..';

export default {
  title: 'NewsKit Light/grid-layout',
  component: () => 'None',
};

export const ResponsiveExample = () => (
  <>
    <StorybookHeading>Responsive grids</StorybookHeading>
    <GridLayout
      columns={{md: '1fr 1fr', lg: '1fr {{sizing040}} 1fr 1fr'}}
      rowGap={{xs: 'space010', md: 'space040'}}
      columnGap={{md: 'space030', lg: 'space050'}}
    >
      <GridBox>1</GridBox>
      <GridBox>2</GridBox>
      <GridBox>3</GridBox>
      <GridBox>4</GridBox>
    </GridLayout>
    <br />
    <br />
    <br />
    <Divider />
    <br />
    <br />
    <br />
    <GridLayout
      areas={{
        xs: `
         "A"
         "B"
         "C"
         "D"
         "E"
         `,
        md: `
          "A A"
          "B C"
          "D E"`,
        lg: `
          "A B"
          "A C"
          "A D"
          "A E"
    `,
      }}
      rowGap={{xs: 'space010', md: 'space040'}}
      columnGap={{md: 'space030', lg: 'space050'}}
    >
      <GridLayoutItem area="A">
        <GridBox>A</GridBox>
      </GridLayoutItem>
      <GridLayoutItem area="B">
        <GridBox>B</GridBox>
      </GridLayoutItem>
      <GridLayoutItem area="C">
        <GridBox>C</GridBox>
      </GridLayoutItem>
      <GridLayoutItem area="D">
        <GridBox>D</GridBox>
      </GridLayoutItem>
      <GridLayoutItem area="E">
        <GridBox>E</GridBox>
      </GridLayoutItem>
    </GridLayout>
    <br />
    <br />
    <br />
    <Divider />
    <br />
    <br />
    <br />
    <GridLayout
      areas={{
        xs: `
         "A"
         "B"
         "C"
         "D"
         "E"
         `,
        md: ` 
          "A A"
          "B C"
          "D E"`,
        lg: `
          "A B"
          "A C"
          "A D"
          "A E"  
    `,
      }}
      rowGap={{xs: 'space010', md: 'space040'}}
      columnGap={{md: 'space030', lg: 'space050'}}
    >
      {Arias => (
        <>
          <Arias.A>
            <GridBox>A</GridBox>
          </Arias.A>
          <Arias.B>
            <GridBox>B</GridBox>
          </Arias.B>
          <Arias.C>
            <GridBox>C</GridBox>
          </Arias.C>
          <Arias.D>
            <GridBox>D</GridBox>
          </Arias.D>
          <Arias.E>
            <GridBox>E</GridBox>
          </Arias.E>
        </>
      )}
    </GridLayout>
  </>
);

export const MinMaxRepeat = () => {
  const boxes = Array.from(Array(20)).map((_, i) => <GridBox>{i} box</GridBox>);
  return (
    <>
      <StorybookHeading>MinMax with repeat</StorybookHeading>
      <GridLayout
        columns="repeat(4, minmax(100px, 200px))"
        columnGap="20px"
        rowGap="20px"
      >
        {boxes}
      </GridLayout>
    </>
  );
};

export const ItemOrder = () => {
  const [order, setOrder] = React.useState<number>(1);
  return (
    <>
      <StorybookHeading>Grid item order</StorybookHeading>
      <Label>
        Order:{' '}
        <input
          type="number"
          id="order"
          name="order"
          value={order}
          onChange={event => {
            setOrder(Number(event.target.value));
          }}
        />
      </Label>

      <Block spaceStack="space020" />
      <GridLayout columnGap="20px" rowGap="20px" columns="1fr 1fr 1fr 1fr 1fr">
        <GridLayoutItem order={order}>
          <GridBox style={{border: '2px solid red'}}>Order {order}</GridBox>
        </GridLayoutItem>
        <GridLayoutItem order={1}>
          <GridBox>Order 1</GridBox>
        </GridLayoutItem>
        <GridLayoutItem order={2}>
          <GridBox>Order 2</GridBox>
        </GridLayoutItem>
        <GridLayoutItem order={3}>
          <GridBox>Order 3</GridBox>
        </GridLayoutItem>
        <GridLayoutItem order={4}>
          <GridBox>Order 4</GridBox>
        </GridLayoutItem>
      </GridLayout>
    </>
  );
};

export const CardWithGrid = () => (
  <>
    <StorybookHeading>Card with grid</StorybookHeading>
    <GridCard
      href="#"
      image="/placeholder-3x2.png"
      title="title of the card describing the main content"
      teaser="this is the teaser"
    />
    <Block spaceStack="100px" />
    <hr />
    <Block spaceStack="100px" />
    <GridTeaser
      image="/placeholder-3x2.png"
      title="title of the card describing the main content"
      teaser="this is the teaser"
    />
  </>
);

export const GridComparison = () => (
  <>
    <StorybookHeading>Grid comparison</StorybookHeading>
    <Grid xsMargin="space000" xsColumnGutter="space050">
      <Cell xs={4}>
        <GridBox>4</GridBox>
      </Cell>
      <Cell xs={4}>
        <GridBox>4</GridBox>
      </Cell>
      <Cell xs={4}>
        <GridBox>4</GridBox>
      </Cell>
    </Grid>
    <GridLayout columns="4fr 4fr 4fr" columnGap="space050">
      <GridBox>4</GridBox>
      <GridBox>4</GridBox>
      <GridBox>4</GridBox>
    </GridLayout>
    <hr />
    <Grid xsMargin="space000" xsColumnGutter="space050">
      <Cell xs={8}>
        <GridBox>8</GridBox>
      </Cell>
      <Cell xs={4}>
        <GridBox>4</GridBox>
      </Cell>
    </Grid>
    <GridLayout columns="8fr 4fr" columnGap="space050">
      <GridBox>8</GridBox>
      <GridBox>4</GridBox>
    </GridLayout>
    <hr />
    <Grid xsMargin="space000" xsColumnGutter="space050">
      <Cell xs={2}>
        <GridBox>2</GridBox>
      </Cell>
      <Cell xs={6}>
        <GridBox>6</GridBox>
      </Cell>
      <Cell xs={4}>
        <GridBox>4</GridBox>
      </Cell>
    </Grid>
    <GridLayout columns="2fr 6fr 4fr" columnGap="space050">
      <GridBox>2</GridBox>
      <GridBox>6</GridBox>
      <GridBox>2</GridBox>
    </GridLayout>
    <hr />
    <Grid xsMargin="space000" xsColumnGutter="space050">
      <Cell xs={2}>
        <GridBox>2</GridBox>
      </Cell>
      <Cell xs={8}>
        <GridBox>8</GridBox>
      </Cell>
      <Cell xs={2}>
        <GridBox>2</GridBox>
      </Cell>
    </Grid>
    <GridLayout columns="2fr 8fr 2fr" columnGap="space050">
      <GridBox>2</GridBox>
      <GridBox>8</GridBox>
      <GridBox>2</GridBox>
    </GridLayout>
  </>
);

export * from './the-times';
export * from './the-sun';

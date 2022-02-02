import * as React from 'react';
import {styled} from '../../../utils';
import {Block} from '../../../block';
import {Divider} from '../../../divider';
import {GridLayout, GridLayoutItem} from '../../grid-layout';
import {GridCard, GridTeaser} from './grid-card';
import {GridBox} from './common';
import {Label} from '../../..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../../test/storybook-comps';

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
      {Areas => (
        <>
          <Areas.A>
            <GridBox>A</GridBox>
          </Areas.A>
          <Areas.B>
            <GridBox>B</GridBox>
          </Areas.B>
          <Areas.C>
            <GridBox>C</GridBox>
          </Areas.C>
          <Areas.D>
            <GridBox>D</GridBox>
          </Areas.D>
          <Areas.E>
            <GridBox>E</GridBox>
          </Areas.E>
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

const BigRedBlock = styled(Block)`
  width: 200px;
  height: 200px;
  background: red;
`;

export const WithOverrides = () => (
  <>
    <StorybookHeading>With overrides</StorybookHeading>
    <StorybookSubHeading>Unconstrained width</StorybookSubHeading>
    <GridLayout columns="1fr 1fr" columnGap="20px" rowGap="20px">
      <GridLayoutItem>
        <BigRedBlock />
      </GridLayoutItem>
      <GridLayoutItem>
        <BigRedBlock />
      </GridLayoutItem>
    </GridLayout>
    <StorybookSubHeading>Width 500px</StorybookSubHeading>
    <GridLayout
      columns="1fr 1fr"
      columnGap="20px"
      rowGap="20px"
      overrides={{width: '500px'}}
    >
      <GridLayoutItem>
        <BigRedBlock />
      </GridLayoutItem>
      <GridLayoutItem>
        <BigRedBlock />
      </GridLayoutItem>
    </GridLayout>
  </>
);

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

export * from './the-times';
export * from './the-sun';

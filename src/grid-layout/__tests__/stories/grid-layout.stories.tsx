import * as React from 'react';
import {styled} from '../../../utils';
import {Block} from '../../../block';
import {Divider} from '../../../divider';
import {GridLayout, GridLayoutItem} from '../../grid-layout';
import {GridCard, GridTeaser} from './grid-card';
import {GridBox} from './common';
import {Grid, Cell} from '../../../grid';
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
    <StorybookHeading>Responsive grid with mixed sizing</StorybookHeading>
    <GridLayout
      columns={{md: '1fr 1fr', lg: '1fr sizing120 300px 1fr'}}
      rows={{md: '1fr 1fr', lg: '1fr sizing120 300px 1fr'}}
      rowGap={{xs: 'space010', md: 'space040'}}
      columnGap={{md: 'space030', lg: 'space050'}}
    >
      <GridBox>1</GridBox>
      <GridBox>2</GridBox>
      <GridBox>3</GridBox>
      <GridBox>4</GridBox>
      <GridBox>5</GridBox>
      <GridBox>6</GridBox>
      <GridBox>7</GridBox>
      <GridBox>8</GridBox>
      <GridBox>9</GridBox>
      <GridBox>10</GridBox>
      <GridBox>11</GridBox>
      <GridBox>12</GridBox>
      <GridBox>13</GridBox>
      <GridBox>14</GridBox>
      <GridBox>15</GridBox>
      <GridBox>16</GridBox>
    </GridLayout>
    <br />
    <br />
    <br />
    <Divider />
    <br />
    <br />
    <br />

    <StorybookHeading>
      Responsive grid with children explicitly tagged with relevant areas
    </StorybookHeading>
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
    <StorybookHeading>
      Responsive grid with children generated using a function that has access
      to the &apos;Areas&apos; object
    </StorybookHeading>
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
    <GridLayout columns="1fr 1fr" columnGap="20px">
      <GridLayoutItem>
        <BigRedBlock />
      </GridLayoutItem>
      <GridLayoutItem>
        <BigRedBlock />
      </GridLayoutItem>
    </GridLayout>
    <StorybookSubHeading>Width 500px</StorybookSubHeading>
    <GridLayout columns="1fr 1fr" columnGap="20px" overrides={{width: '500px'}}>
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

const NewBox = styled.div`
  height: 50px;
  background: red;
  border: 2px dotted black;
`;
const OldBox = styled(NewBox)`
  background: green;
`;

// @ts-ignore
const NewBoxWithSpan = styled(NewBox)`
  grid-column: ${props => props.column};
`;

const createItems = (count: number) => Array.from(Array(count));

const sameColumns = [12, 6, 4, 3, 2, 1];
const differentColumns = [
  [8, 4],
  [9, 3],
  [3, 6, 3],
  [5, 5, 2],
  [1, 2, 3, 4, 2],
];
const columnGap = 'space030';
const rowGap = 'space020';

const Container = styled.div`
  width: 1000px;
`;

export const GridComparison = () => (
  <Container>
    {differentColumns.map(columns => (
      <>
        <GridLayout columns="repeat(12, 1fr)" columnGap={columnGap}>
          {columns.map(span => (
            <NewBoxWithSpan column={`auto / span ${span}`} />
          ))}
        </GridLayout>
        <Grid xsColumnGutter={columnGap} xsMargin="space000">
          {columns.map(n => (
            <Cell xs={n}>
              <OldBox />
            </Cell>
          ))}
        </Grid>
        <hr />
      </>
    ))}
    <br />
    <br />
    <br />
    <hr />
    <br />
    <br />
    <br />
    {differentColumns.map(columns => (
      <>
        <GridLayout
          columns={columns.map(c => `${c}fr`).join(' ')}
          columnGap={columnGap}
        >
          {columns.map(() => (
            <NewBox />
          ))}
        </GridLayout>
        <Grid xsColumnGutter={columnGap} xsMargin="space000">
          {columns.map(n => (
            <Cell xs={n}>
              <OldBox />
            </Cell>
          ))}
        </Grid>
        <hr />
      </>
    ))}

    <br />
    <br />
    <br />
    <hr />
    <br />
    <br />
    <br />

    {sameColumns.map(n => (
      <>
        <GridLayout
          columns={`repeat(${n}, 1fr)`}
          columnGap={columnGap}
          rowGap={rowGap}
        >
          {createItems(n * 2).map(() => (
            <NewBox />
          ))}
        </GridLayout>
        <Grid
          xsColumnGutter={columnGap}
          xsMargin="space000"
          xsRowGutter={rowGap}
        >
          {createItems(n * 2).map(() => (
            <Cell xs={12 / n}>
              <OldBox />
            </Cell>
          ))}
        </Grid>
        <hr />
      </>
    ))}
  </Container>
);

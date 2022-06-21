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
  StorybookSpan,
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
      <GridBox>
        <StorybookSpan>1</StorybookSpan>
      </GridBox>
      <GridBox>
        <StorybookSpan>2</StorybookSpan>
      </GridBox>
      <GridBox>
        <StorybookSpan>3</StorybookSpan>
      </GridBox>
      <GridBox>
        <StorybookSpan>4</StorybookSpan>
      </GridBox>
      <GridBox>
        <StorybookSpan>5</StorybookSpan>
      </GridBox>
      <GridBox>
        <StorybookSpan>6</StorybookSpan>
      </GridBox>
      <GridBox>
        <StorybookSpan>7</StorybookSpan>
      </GridBox>
      <GridBox>
        <StorybookSpan>8</StorybookSpan>
      </GridBox>
      <GridBox>
        <StorybookSpan>9</StorybookSpan>
      </GridBox>
      <GridBox>
        <StorybookSpan>10</StorybookSpan>
      </GridBox>
      <GridBox>
        <StorybookSpan>11</StorybookSpan>
      </GridBox>
      <GridBox>
        <StorybookSpan>12</StorybookSpan>
      </GridBox>
      <GridBox>
        <StorybookSpan>13</StorybookSpan>
      </GridBox>
      <GridBox>
        <StorybookSpan>14</StorybookSpan>
      </GridBox>
      <GridBox>
        <StorybookSpan>15</StorybookSpan>
      </GridBox>
      <GridBox>
        <StorybookSpan>16</StorybookSpan>
      </GridBox>
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
        <GridBox>
          <StorybookSpan>A</StorybookSpan>
        </GridBox>
      </GridLayoutItem>
      <GridLayoutItem area="B">
        <GridBox>
          <StorybookSpan>B</StorybookSpan>
        </GridBox>
      </GridLayoutItem>
      <GridLayoutItem area="C">
        <GridBox>
          <StorybookSpan>C</StorybookSpan>
        </GridBox>
      </GridLayoutItem>
      <GridLayoutItem area="D">
        <GridBox>
          <StorybookSpan>D</StorybookSpan>
        </GridBox>
      </GridLayoutItem>
      <GridLayoutItem area="E">
        <GridBox>
          <StorybookSpan>E</StorybookSpan>
        </GridBox>
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
            <GridBox>
              <StorybookSpan>A</StorybookSpan>
            </GridBox>
          </Areas.A>
          <Areas.B>
            <GridBox>
              <StorybookSpan>B</StorybookSpan>
            </GridBox>
          </Areas.B>
          <Areas.C>
            <GridBox>
              <StorybookSpan>C</StorybookSpan>
            </GridBox>
          </Areas.C>
          <Areas.D>
            <GridBox>
              <StorybookSpan>D</StorybookSpan>
            </GridBox>
          </Areas.D>
          <Areas.E>
            <GridBox>
              <StorybookSpan>E</StorybookSpan>
            </GridBox>
          </Areas.E>
        </>
      )}
    </GridLayout>
  </>
);

export const MinMaxRepeat = () => {
  const boxes = Array.from(Array(20)).map((_, i) => (
    <GridBox>
      <StorybookSpan>{i} box</StorybookSpan>
    </GridBox>
  ));
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
          <GridBox style={{border: '2px solid red'}}>
            <StorybookSpan>Order {order}</StorybookSpan>
          </GridBox>
        </GridLayoutItem>
        <GridLayoutItem order={1}>
          <GridBox>
            <StorybookSpan>Order 1</StorybookSpan>
          </GridBox>
        </GridLayoutItem>
        <GridLayoutItem order={2}>
          <GridBox>
            <StorybookSpan>Order 2</StorybookSpan>
          </GridBox>
        </GridLayoutItem>
        <GridLayoutItem order={3}>
          <GridBox>
            <StorybookSpan>Order 3</StorybookSpan>
          </GridBox>
        </GridLayoutItem>
        <GridLayoutItem order={4}>
          <GridBox>
            <StorybookSpan>Order 4</StorybookSpan>
          </GridBox>
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

export const WithLogicalPropsOverrides = () => (
  <>
    <StorybookHeading>With logical props overrides</StorybookHeading>
    <StorybookSubHeading>logical padding</StorybookSubHeading>
    <GridLayout
      columns="1fr 1fr"
      rowGap="20px"
      columnGap="20px"
      overrides={{paddingBlock: 'space030', paddingInline: 'space030'}}
      style={{border: '1px solid red'}}
    >
      <GridLayoutItem>
        <BigRedBlock />
      </GridLayoutItem>
      <GridLayoutItem>
        <BigRedBlock />
      </GridLayoutItem>
      <GridLayoutItem>
        <BigRedBlock />
      </GridLayoutItem>
      <GridLayoutItem>
        <BigRedBlock />
      </GridLayoutItem>
    </GridLayout>
    <StorybookSubHeading>logical margin</StorybookSubHeading>
    <div style={{border: '1px solid green'}}>
      <GridLayout
        columns="1fr 1fr"
        columnGap="20px"
        overrides={{marginBlock: 'space030', marginInline: 'space030'}}
        style={{border: '1px solid red'}}
      >
        <GridLayoutItem>
          <BigRedBlock />
        </GridLayoutItem>
        <GridLayoutItem>
          <BigRedBlock />
        </GridLayoutItem>
      </GridLayout>
    </div>
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
  font-weight: bold;
  text-align: center;
  font-size: 1.5rem;
  color: #fff;
  line-height: 50px;
`;
const OldBox = styled(NewBox)`
  background: green;
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
    <StorybookHeading>Legend</StorybookHeading>
    <GridLayout columns="auto auto">
      <NewBox>Red - GridLayout component</NewBox>
      <OldBox>Green - Legacy Grid component</OldBox>
    </GridLayout>

    <StorybookHeading>GridLayout with 12 Columns</StorybookHeading>
    {differentColumns.map(columns => (
      <>
        <GridLayout columns="repeat(12, 1fr)" columnGap={columnGap}>
          {columns.map(span => (
            <GridLayoutItem column={`auto / span ${span}`}>
              <NewBox>{span}</NewBox>
            </GridLayoutItem>
          ))}
        </GridLayout>
        <Grid xsColumnGutter={columnGap} xsMargin="space000">
          {columns.map(n => (
            <Cell xs={n}>
              <OldBox>{n}</OldBox>
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
    <StorybookHeading>GridLayout with columns per size</StorybookHeading>
    {differentColumns.map(columns => (
      <>
        <GridLayout
          columns={columns.map(c => `${c}fr`).join(' ')}
          columnGap={columnGap}
        >
          {columns.map(n => (
            <NewBox>{n}</NewBox>
          ))}
        </GridLayout>
        <Grid xsColumnGutter={columnGap} xsMargin="space000">
          {columns.map(n => (
            <Cell xs={n}>
              <OldBox>{n}</OldBox>
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
    <StorybookHeading>Same amount of columns</StorybookHeading>

    {sameColumns.map(n => (
      <>
        <GridLayout
          columns={`repeat(${n}, 1fr)`}
          columnGap={columnGap}
          rowGap={rowGap}
        >
          {createItems(n * 2).map(() => (
            <NewBox>{12 / n}</NewBox>
          ))}
        </GridLayout>
        <Grid
          xsColumnGutter={columnGap}
          xsMargin="space000"
          xsRowGutter={rowGap}
        >
          {createItems(n * 2).map(() => (
            <Cell xs={12 / n}>
              <OldBox>{12 / n}</OldBox>
            </Cell>
          ))}
        </Grid>
        <hr />
      </>
    ))}
  </Container>
);

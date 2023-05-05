import * as React from 'react';
import {styled} from '../../../utils';
import {Block} from '../../../block';
import {Divider} from '../../../divider';
import {GridLayout, GridLayoutItem} from '../../grid-layout';
import {GridBox} from './common';
import {Grid, Cell} from '../../../grid';
import {Label} from '../../..';
import {
  StorybookHeading,
  StorybookSubHeading,
  StorybookCase,
} from '../../../test/storybook-comps';

const BigRedBlock = styled(Block)`
  width: 200px;
  height: 200px;
  background: red;
`;

const QueryContainerSmall = styled(Block)`
  width: 200px;
  container-type: inline-size;
  container-name: grid-container;
`;

const QueryContainerLarge = styled(Block)`
  width: 400px;
  container-type: inline-size;
  container-name: grid-container;
`;

export const StoryResponsiveExample = () => (
  <>
    <StorybookSubHeading>Responsive grid with mixed sizing</StorybookSubHeading>
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
      columns={{xs: '1fr', md: '1fr 1fr', lg: '1fr 200px'}}
      rows={{
        xs: '100px repeat(4, 50px)',
        md: '100px repeat(2, 50px)',
        lg: 'repeat(4, 50px)',
      }}
      rowGap={{xs: 'space010', md: 'space040'}}
      columnGap={{md: 'space030', lg: 'space050'}}
    >
      <GridLayoutItem area="A">
        <GridBox style={{minHeight: '100%'}}>A</GridBox>
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
      columns={{xs: '1fr', md: '1fr 1fr', lg: '1fr 200px'}}
      rows={{
        xs: '100px repeat(4, 50px)',
        md: '100px repeat(2, 50px)',
        lg: 'repeat(4, 50px)',
      }}
      rowGap={{xs: 'space010', md: 'space040'}}
      columnGap={{md: 'space030', lg: 'space050'}}
    >
      {Areas => (
        <>
          <Areas.A>
            <GridBox style={{minHeight: '100%'}}>A</GridBox>
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
StoryResponsiveExample.storyName = 'responsive';

export const StoryContainerQueryExample = () => {
  const QueryGridLayout = () => (
    <GridLayout
      rows={{
        rules: [
          {
            rule: '@container grid-container (width <= 200px)',
            value: '1fr 1fr',
          },
          {
            rule: '@container grid-container (width > 200px)',
            value: '1fr',
          },
        ],
      }}
      columns={{
        rules: [
          {
            rule: '@container grid-container (width <= 200px)',
            value: '1fr 1fr',
          },
          {
            rule: '@container grid-container (width > 200px)',
            value: '1fr',
          },
        ],
      }}
    >
      <GridBox>1</GridBox>
      <GridBox>2</GridBox>
    </GridLayout>
  );

  return (
    <>
      <StorybookCase title="Container query < 200px">
        <QueryContainerSmall>
          <QueryGridLayout />
        </QueryContainerSmall>
      </StorybookCase>
      <StorybookCase title="Container query > 200px">
        <QueryContainerLarge>
          <QueryGridLayout />
        </QueryContainerLarge>
      </StorybookCase>
    </>
  );
};
StoryContainerQueryExample.storyName = 'Container Queries';

export const StoryMinMaxRepeat = () => {
  const boxes = Array.from(Array(20)).map((_, i) => <GridBox>{i} box</GridBox>);
  return (
    <>
      <StorybookHeading>Repeat with auto-fill and minmax</StorybookHeading>
      <GridLayout
        columns="repeat(auto-fill, minmax(200px, 1fr))"
        columnGap="20px"
        rowGap="20px"
      >
        {boxes}
      </GridLayout>
    </>
  );
};
StoryMinMaxRepeat.storyName = 'minmax-repeat';

export const StoryItemOrder = () => {
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
StoryItemOrder.storyName = 'item-order';

export const StoryAutoFlow = () => (
  <>
    <StorybookHeading>autoFlow: row</StorybookHeading>
    <GridLayout
      columnGap="20px"
      columns="repeat(5, 60px)"
      rows="30px 30px"
      autoFlow="row"
    >
      <GridLayoutItem column="1" row="1 / 3">
        <GridBox>A</GridBox>
      </GridLayoutItem>
      <GridLayoutItem>
        <GridBox>B</GridBox>
      </GridLayoutItem>
      <GridLayoutItem>
        <GridBox>C</GridBox>
      </GridLayoutItem>
      <GridLayoutItem>
        <GridBox>D</GridBox>
      </GridLayoutItem>
      <GridLayoutItem column="5" row="1 / 3">
        <GridBox>E</GridBox>
      </GridLayoutItem>
    </GridLayout>
    <br />
    <br />
    <br />
    <StorybookHeading>autoFlow: column</StorybookHeading>
    <GridLayout
      columnGap="20px"
      columns="repeat(5, 60px)"
      rows="30px 30px"
      autoFlow="column"
    >
      <GridLayoutItem column="1" row="1 / 3">
        <GridBox>A</GridBox>
      </GridLayoutItem>
      <GridLayoutItem>
        <GridBox>B</GridBox>
      </GridLayoutItem>
      <GridLayoutItem>
        <GridBox>C</GridBox>
      </GridLayoutItem>
      <GridLayoutItem>
        <GridBox>D</GridBox>
      </GridLayoutItem>
      <GridLayoutItem column="5" row="1 / 3">
        <GridBox>E</GridBox>
      </GridLayoutItem>
    </GridLayout>
    <br />
    <br />
    <br />
    <StorybookHeading>autoFlow: dense</StorybookHeading>
    <GridLayout
      columnGap="20px"
      columns="repeat(3, 100px)"
      rows="repeat(3, 1fr)"
      autoFlow="dense"
    >
      <GridLayoutItem>
        <GridBox>A</GridBox>
      </GridLayoutItem>
      <GridLayoutItem>
        <GridBox>B</GridBox>
      </GridLayoutItem>
      <GridLayoutItem>
        <GridBox>C</GridBox>
      </GridLayoutItem>
      <GridLayoutItem column="2 / span 2">
        <GridBox>D</GridBox>
      </GridLayoutItem>
      <GridLayoutItem>
        <GridBox>E</GridBox>
      </GridLayoutItem>
      <GridLayoutItem>
        <GridBox>F</GridBox>
      </GridLayoutItem>
    </GridLayout>
  </>
);

StoryAutoFlow.storyName = 'auto-flow';

export const StoryAutoRowsAndColumns = () => (
  <>
    <StorybookSubHeading>autoColumns</StorybookSubHeading>
    <GridLayout columnGap="10px" rowGap="10px" areas="a a" autoColumns="200px">
      <GridLayoutItem>
        <GridBox>A</GridBox>
      </GridLayoutItem>
      <GridLayoutItem>
        <GridBox>B</GridBox>
      </GridLayoutItem>
      <GridLayoutItem>
        <GridBox>C</GridBox>
      </GridLayoutItem>
    </GridLayout>
    <br />
    <br />
    <br />
    <StorybookSubHeading>autoRows</StorybookSubHeading>
    <GridLayout columnGap="10px" rowGap="10px" areas="a a" autoRows="100px">
      <GridLayoutItem>
        <GridBox>A</GridBox>
      </GridLayoutItem>
      <GridLayoutItem>
        <GridBox>B</GridBox>
      </GridLayoutItem>
      <GridLayoutItem>
        <GridBox>C</GridBox>
      </GridLayoutItem>
    </GridLayout>
  </>
);

StoryAutoRowsAndColumns.storyName = 'auto-rows-columns';

export const StoryWithOverrides = () => (
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

StoryWithOverrides.storyName = 'with-overrides';

export const StoryWithLogicalPropsOverrides = () => (
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

StoryWithLogicalPropsOverrides.storyName = 'with-logical-props';

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

export const StoryGridComparison = () => (
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
StoryGridComparison.storyName = 'grid-comparison';

export default {
  title: 'Components/grid-layout',
  component: () => 'None',
};

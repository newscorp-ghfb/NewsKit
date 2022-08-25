import * as React from 'react';
import {styled} from '../../../utils/style';
import {GridLayout} from '../../grid-layout';
import {Visible} from '../../../grid';
import {Divider} from '../../../divider';

export const LargeItemBody = styled.div`
  min-height: 92px;
`;

// 1 large item, 4 small items in a grid
export const BlockLayout1L4S = ({
  placeholders = [],
}: {
  placeholders: React.ReactNode[];
}) => {
  const [large, small1, small2, small3, small4] = placeholders;
  return (
    <GridLayout
      columns={{lg: '2fr 1fr'}}
      rowGap="space050"
      columnGap="space050"
    >
      {large}

      <GridLayout
        rowGap={{xs: '10px', md: '10px', lg: '0'}}
        columnGap={{md: '20px'}}
        columns={{xs: '1fr', md: '1fr 1fr', lg: '1fr'}}
        justifyContent={{lg: 'stretch'}}
        alignContent={{lg: 'space-between'}}
        overrides={{height: '100%'}}
      >
        {small1}

        <Visible sm lg>
          <Divider />
        </Visible>

        {small2}

        <Visible sm lg>
          <Divider />
        </Visible>

        {small3}

        <Visible sm lg>
          <Divider />
        </Visible>

        {small4}
      </GridLayout>
    </GridLayout>
  );
};

// 4 horizontal items
export const BlockLayout4H = ({
  placeholders = [],
}: {
  placeholders: React.ReactNode[];
}) => {
  const [ph1, ph2, ph3, ph4] = placeholders;
  return (
    <GridLayout
      columns={{xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr 1fr'}}
      rowGap="space050"
      columnGap="space050"
    >
      {ph1}
      {ph2}
      {ph3}
      {ph4}
    </GridLayout>
  );
};

// 3 horizontal items
export const BlockLayout3H = ({
  placeholders = [],
}: {
  placeholders: React.ReactNode[];
}) => {
  const [ph1, ph2, ph3] = placeholders;
  return (
    <GridLayout
      areas={{
        xs: `
         "A"
         "B"
         "C"
         `,
        md: ` 
          "A B"
          "A C"
        `,
        lg: `
          "A B C"
    `,
      }}
      rowGap={{xs: 'space010', md: 'space040'}}
      columnGap={{md: 'space050', lg: 'space050'}}
    >
      {Areas => (
        <>
          <Areas.A>{ph1}</Areas.A>
          <Areas.B>{ph2}</Areas.B>
          <Areas.C>{ph3}</Areas.C>
        </>
      )}
    </GridLayout>
  );
};

export const GridBox = styled.div`
  padding: 10px;
  border: 1px solid orange;
  box-sizing: border-box;
`;

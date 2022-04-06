import * as React from 'react';
import {styled} from '../../../utils';
import {GridLayout} from '../../grid-layout';

const Item = styled.div`
  padding: 10px;
  border: 5px solid rgb(17, 105, 121);
  background-color: rgba(17, 105, 121, 0.1);
  border-radius: 5px;
`;

// Named areas
export const Example3 = () => (
  <GridLayout>
    <Item>Header</Item>
    <Item>Main</Item>
    <Item>Sidebar</Item>
    <Item>Footer</Item>
  </GridLayout>
);

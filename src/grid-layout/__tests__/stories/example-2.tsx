import * as React from 'react';
import {styled} from '../../../utils';
import {GridLayout, GridLayoutItem} from '../../grid-layout';

const Item = styled.div`
  padding: 10px;
  border: 5px solid rgb(17, 105, 121);
  background-color: rgba(17, 105, 121, 0.1);
  border-radius: 5px;
  height: 100%;
  box-sizing: border-box;
`;

// Basics
export const Example2 = () => (
  <GridLayout rows="repeat(3, 100px)" columns="repeat(3, 100px)">
    <GridLayoutItem column=" 1 / 4" row=" 1 / 3">
      <Item>One</Item>
    </GridLayoutItem>
    <GridLayoutItem column="auto / span 3">
      <Item>Two</Item>
    </GridLayoutItem>
    <GridLayoutItem column=" 2 / 3" row=" 1 / 3">
      <Item>Three</Item>
    </GridLayoutItem>
    <Item>Four</Item>
    <Item>Five</Item>
  </GridLayout>
);

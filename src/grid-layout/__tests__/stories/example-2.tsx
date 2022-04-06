import * as React from 'react';
import {styled} from '../../../utils';
import {GridLayout} from '../../grid-layout';

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
    <Item>One</Item>
    <Item>Two</Item>
    <Item>Three</Item>
    <Item>Four</Item>
    <Item>Five</Item>
  </GridLayout>
);

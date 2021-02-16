import * as React from 'react';
import {styled, Scroll, ScrollSnapAlignment} from 'newskit';

const Container = styled.div`
  width: 250px;
  height: 100px;
`;

const Flex = styled.div`
  display: flex;
`;

const Box = styled.div`
  box-sizing: border-box;
  flex: none;
  width: 100px;
  height: 100px;
  background: #577ffb;
  border: 1px solid red;
  text-align: center;
  vertical-align: middle;
  line-height: 100px;
`;

export const ScrollSnap = () => (
  <Container>
    <Scroll arrows="static" snapAlign="start">
      <Flex>
        <ScrollSnapAlignment>
          <Box>Item 1</Box>
        </ScrollSnapAlignment>
        <ScrollSnapAlignment>
          <Box>Item 2</Box>
        </ScrollSnapAlignment>
        <ScrollSnapAlignment snapAlign="end">
          <Box>Item 3</Box>
        </ScrollSnapAlignment>
        <ScrollSnapAlignment>
          <Box>Item 4</Box>
        </ScrollSnapAlignment>
        <ScrollSnapAlignment>
          <Box>Item 5</Box>
        </ScrollSnapAlignment>
        <ScrollSnapAlignment>
          <Box>Item 6</Box>
        </ScrollSnapAlignment>
      </Flex>
    </Scroll>
  </Container>
);

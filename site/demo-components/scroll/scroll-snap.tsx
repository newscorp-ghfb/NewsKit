import * as React from 'react';
import {
  styled,
  Scroll,
  ScrollSnapAlignment,
  getColorCssFromTheme,
  getTypographyPresetFromTheme,
} from 'newskit';

const Container = styled.div`
  width: 250px;
  height: 100px;
`;

const Flex = styled.div`
  display: flex;
`;

export const Box = styled.div`
  box-sizing: border-box;
  flex: none;
  width: 100px;
  height: 100px;
  border: 1px solid;
  color: #000;
  text-align: center;
  vertical-align: middle;
  ${getColorCssFromTheme('background', 'interface020')}
  ${getColorCssFromTheme('borderColor', 'interface040')}
  ${getTypographyPresetFromTheme('utilityLabel030')}
  line-height: 100px;
`;

export const ScrollSnap = () => (
  <Container>
    <Scroll controls="static" snapAlign="start">
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

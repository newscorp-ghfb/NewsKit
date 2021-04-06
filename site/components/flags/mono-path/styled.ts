import {styled, Block} from 'newskit';

export const IndentationBlock = styled(Block)<{depth: number}>`
  margin-left: ${({theme, depth}) =>
    `${parseInt(theme.spacePresets.space020, 10) * depth * 2}px`};
`;

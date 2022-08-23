import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Stack} from '../stack';
import {Flow, StackDistribution} from '../types';
import {getColorCssFromTheme, styled} from '../../utils/style';

const Box = styled.div`
  width: 150px;
  height: 150px;
  ${getColorCssFromTheme('backgroundColor', 'green030')};
  ${getColorCssFromTheme(color => ({border: `1px solid ${color}`}), 'red030')};
`;
const FlowTypes = [
  'vertical-left',
  'vertical-center',
  'vertical-right',
  'vertical-stretch',
  'horizontal-top',
  'horizontal-center',
  'horizontal-bottom',
  'horizontal-stretch',
];

const StackDistributionTypes = [
  'flex-start',
  'flex-end',
  'center',
  'space-around',
  'space-between',
  'space-evenly',
];

const children = [<Box>child 1</Box>, <Box>child 2</Box>, <Box>child 3</Box>];
describe('Stack', () => {
  test(`renders with defaults only`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      children,
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`renders with valid stack flow`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      flow: 'horizontal-bottom',
      children,
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`renders with invalid stack flow`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      flow: 'blahblahblah' as any,
      children,
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`renders with valid stack distribution`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      stackDistribution: 'center',
      children,
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`renders with invalid stack distribution`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      stackDistribution: 'blahblahblah' as any,
      children,
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`renders with flex grow and shrink`, () => {
    const fragment1 = renderToFragmentWithTheme(Stack, {
      flexGrow: true,
      flexShrink: true,
      children,
    });

    expect(fragment1).toMatchSnapshot();

    const fragment2 = renderToFragmentWithTheme(Stack, {
      flexGrow: 10,
      flexShrink: 20,
      children,
    });

    expect(fragment2).toMatchSnapshot();
  });

  test(`renders as span`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      children,
      as: 'span',
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`renders as span with space`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      children,
      as: 'span',
      spaceInline: 'space030',
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`renders inline stack`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      children,
      inline: true,
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`renders reverse stack`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      children,
      flowReverse: true,
    });

    expect(fragment).toMatchSnapshot();
  });

  test('render with responsive props', () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      children,
      stackDistribution: {sm: 'flex-end', md: 'flex-start'},
      flow: {sm: 'horizontal-center', lg: 'vertical-center'},
      wrap: {md: true},
      inline: {md: true},
      spaceStack: {xs: 'space010', md: 'space030'},
      flowReverse: {md: true},
      flexGrow: {xs: 2, sm: 10},
      flexShrink: {xs: 2, sm: 10},
      height: {md: '50vh'},
    });
    expect(fragment).toMatchSnapshot();

    // with spaceInline
    const fragmentSpaceInline = renderToFragmentWithTheme(Stack, {
      children,
      spaceInline: {xs: 'space010', md: 'space030'},
    });
    expect(fragmentSpaceInline).toMatchSnapshot();
  });

  FlowTypes.forEach(flowKey => {
    StackDistributionTypes.forEach(stackDistributionKey => {
      test(`renders where the stack flow is ${flowKey} and the stack distribution is ${stackDistributionKey}`, () => {
        const fragment = renderToFragmentWithTheme(Stack, {
          flow: flowKey as Flow,
          stackDistribution: stackDistributionKey as StackDistribution,
          children: [
            <Box>child 1</Box>,
            <Box>child 2</Box>,
            <Box>child 3</Box>,
          ],
        });

        expect(fragment).toMatchSnapshot();
      });
    });
  });

  FlowTypes.forEach(flowKey => {
    ['space000', 'space090', 'space120'].forEach(space => {
      Object.values(['wrap', 'nowrap']).forEach(wrapType => {
        test(`renders where the stack flow is ${flowKey} and the spaceInline & spaceStack is set to ${space}`, () => {
          const fragment = renderToFragmentWithTheme(Stack, {
            flow: flowKey as Flow,
            spaceInline: space,
            spaceStack: space,
            wrap: wrapType as 'wrap' | 'nowrap',
            children: [
              <Box>child 1</Box>,
              <Box>child 2</Box>,
              <Box>child 3</Box>,
            ],
          });

          expect(fragment).toMatchSnapshot();
        });
      });
    });
  });

  FlowTypes.forEach(flowKey => {
    Object.values(['wrap', 'nowrap']).forEach(wrapType => {
      test(`renders where the stack flow is ${flowKey} and only spaceStack is set to space090`, () => {
        const fragment = renderToFragmentWithTheme(Stack, {
          flow: flowKey as Flow,
          spaceStack: 'space090',
          wrap: wrapType as 'wrap' | 'nowrap',
          children: [
            <Box>child 1</Box>,
            <Box>child 2</Box>,
            <Box>child 3</Box>,
          ],
        });

        expect(fragment).toMatchSnapshot();
      });
    });
  });

  FlowTypes.forEach(flowKey => {
    Object.values(['wrap', 'nowrap']).forEach(wrapType => {
      test(`renders where the stack flow is ${flowKey} and only spaceInline is set to space090`, () => {
        const fragment = renderToFragmentWithTheme(Stack, {
          flow: flowKey as Flow,
          spaceInline: 'space090',
          wrap: wrapType as 'wrap' | 'nowrap',
          children: [
            <Box>child 1</Box>,
            <Box>child 2</Box>,
            <Box>child 3</Box>,
          ],
        });

        expect(fragment).toMatchSnapshot();
      });
    });
  });
});

describe('Nested stacks', () => {
  test(`render in vertical flow`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      children: [
        <Stack>
          <Box>child 1</Box>, <Box>child 2</Box>, <Box>child 3</Box>
        </Stack>,
        <Stack>
          <Box>child 4</Box>, <Box>child 5</Box>, <Box>child 6</Box>
        </Stack>,
        <Stack>
          <Box>child 7</Box>, <Box>child 8</Box>, <Box>child 9</Box>
        </Stack>,
      ],
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`render in vertical flow with space`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      spaceInline: 'space030',
      children: [
        <Stack>
          <Box>child 1</Box>, <Box>child 2</Box>, <Box>child 3</Box>
        </Stack>,
        <Stack>
          <Box>child 4</Box>, <Box>child 5</Box>, <Box>child 6</Box>
        </Stack>,
        <Stack>
          <Box>child 7</Box>, <Box>child 8</Box>, <Box>child 9</Box>
        </Stack>,
      ],
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`render in vertical flow with space and height`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      spaceInline: 'space030',
      height: 'auto',
      children: [
        <Stack>
          <Box>child 1</Box>, <Box>child 2</Box>, <Box>child 3</Box>
        </Stack>,
        <Stack>
          <Box>child 4</Box>, <Box>child 5</Box>, <Box>child 6</Box>
        </Stack>,
        <Stack>
          <Box>child 7</Box>, <Box>child 8</Box>, <Box>child 9</Box>
        </Stack>,
      ],
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`render in horizontal flow`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      flow: 'horizontal-top',
      children: [
        <Stack flow="horizontal-top">
          <Box>child 1</Box>, <Box>child 2</Box>, <Box>child 3</Box>
        </Stack>,
        <Stack flow="horizontal-top">
          <Box>child 4</Box>, <Box>child 5</Box>, <Box>child 6</Box>
        </Stack>,
        <Stack flow="horizontal-top">
          <Box>child 7</Box>, <Box>child 8</Box>, <Box>child 9</Box>
        </Stack>,
      ],
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`render in horizontal flow with space`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      spaceInline: 'space030',
      flow: 'horizontal-top',
      children: [
        <Stack flow="horizontal-top">
          <Box>child 1</Box>, <Box>child 2</Box>, <Box>child 3</Box>
        </Stack>,
        <Stack flow="horizontal-top">
          <Box>child 4</Box>, <Box>child 5</Box>, <Box>child 6</Box>
        </Stack>,
        <Stack flow="horizontal-top">
          <Box>child 7</Box>, <Box>child 8</Box>, <Box>child 9</Box>
        </Stack>,
      ],
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`render with stackDistribution`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      stackDistribution: 'center',
      children: [
        <Stack>
          <Box>child 1</Box>, <Box>child 2</Box>, <Box>child 3</Box>
        </Stack>,
        <Stack>
          <Box>child 4</Box>, <Box>child 5</Box>, <Box>child 6</Box>
        </Stack>,
        <Stack>
          <Box>child 7</Box>, <Box>child 8</Box>, <Box>child 9</Box>
        </Stack>,
      ],
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`render mixed content`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      flow: 'horizontal-top',
      children: [
        <Box>child 1</Box>,
        <Box>child 2</Box>,
        <Box>child 3</Box>,
        <Stack flow="horizontal-top">
          <Box>child 4</Box>, <Box>child 5</Box>, <Box>child 6</Box>
        </Stack>,
      ],
    });

    expect(fragment).toMatchSnapshot();
  });
});

describe('Stack as list', () => {
  test(`renders correctly`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      children,
      list: true,
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`renders with spacing`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      list: true,
      ariaLabel: 'Tag list',
      spaceInline: 'space020',
      children,
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`renders with spacing and wrap`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      list: true,
      ariaLabel: 'Tag list',
      spaceInline: 'space020',
      spaceStack: 'space020',
      wrap: 'wrap',
      children,
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`renders horizontally`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      children,
      list: true,
      flow: 'horizontal-top',
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`renders horizontally with spacing`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      list: true,
      ariaLabel: 'Tag list',
      spaceInline: 'space020',
      flow: 'horizontal-top',
      children,
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`renders horizontally with spacing and wrap`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      list: true,
      ariaLabel: 'Tag list',
      spaceInline: 'space020',
      spaceStack: 'space020',
      wrap: 'wrap',
      flow: 'horizontal-top',
      children,
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`renders nested stack`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      list: true,
      children: [
        <Stack>
          <Box>child 1</Box>, <Box>child 2</Box>, <Box>child 3</Box>
        </Stack>,
        <Stack>
          <Box>child 4</Box>, <Box>child 5</Box>, <Box>child 6</Box>
        </Stack>,
        <Stack>
          <Box>child 7</Box>, <Box>child 8</Box>, <Box>child 9</Box>
        </Stack>,
        <Box>child 10</Box>,
      ],
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`renders nested stack as list`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      list: true,
      children: [
        <Stack list>
          <Box>child 1</Box>, <Box>child 2</Box>, <Box>child 3</Box>
        </Stack>,
        <Stack list>
          <Box>child 4</Box>, <Box>child 5</Box>, <Box>child 6</Box>
        </Stack>,
      ],
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`renders with logical props`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      children,
      marginBlock: '30px',
      paddingBlock: '30px',
    });

    expect(fragment).toMatchSnapshot();
  });
});

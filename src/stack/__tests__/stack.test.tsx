import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {SizingKeys} from '../../theme';
import {Stack} from '../stack';
import {Flow, StackDistribution} from '../types';
import {getColorFromTheme, styled} from '../../utils/style';

const Box = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${getColorFromTheme('green030')};
  border: 1px solid ${getColorFromTheme('red030')};
`;

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
      flow: Flow.HorizontalBottom,
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
      stackDistribution: StackDistribution.Center,
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
      spaceInline: 'sizing030',
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

  Object.values(Flow).forEach(flowKey => {
    Object.values(StackDistribution).forEach(stackDistributionKey => {
      test(`renders where the stack flow is ${flowKey} and the stack distribution is ${stackDistributionKey}`, () => {
        const fragment = renderToFragmentWithTheme(Stack, {
          flow: flowKey,
          stackDistribution: stackDistributionKey,
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

  Object.values(Flow).forEach(flowKey => {
    (['sizing000', 'sizing090', 'sizing120'] as SizingKeys[]).forEach(size => {
      Object.values(['wrap', 'nowrap']).forEach(wrapType => {
        test(`renders where the stack flow is ${flowKey} and the spaceInline & spaceStack is set to ${size}`, () => {
          const fragment = renderToFragmentWithTheme(Stack, {
            flow: flowKey,
            spaceInline: size,
            spaceStack: size,
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

  Object.values(Flow).forEach(flowKey => {
    Object.values(['wrap', 'nowrap']).forEach(wrapType => {
      test(`renders where the stack flow is ${flowKey} and only spaceStack is set to sizing090`, () => {
        const fragment = renderToFragmentWithTheme(Stack, {
          flow: flowKey,
          spaceStack: 'sizing090',
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

  Object.values(Flow).forEach(flowKey => {
    Object.values(['wrap', 'nowrap']).forEach(wrapType => {
      test(`renders where the stack flow is ${flowKey} and only spaceInline is set to sizing090`, () => {
        const fragment = renderToFragmentWithTheme(Stack, {
          flow: flowKey,
          spaceInline: 'sizing090',
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
      spaceInline: 'sizing030',
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
      flow: Flow.HorizontalTop,
      children: [
        <Stack flow={Flow.HorizontalTop}>
          <Box>child 1</Box>, <Box>child 2</Box>, <Box>child 3</Box>
        </Stack>,
        <Stack flow={Flow.HorizontalTop}>
          <Box>child 4</Box>, <Box>child 5</Box>, <Box>child 6</Box>
        </Stack>,
        <Stack flow={Flow.HorizontalTop}>
          <Box>child 7</Box>, <Box>child 8</Box>, <Box>child 9</Box>
        </Stack>,
      ],
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`render in horizontal flow with space`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      spaceInline: 'sizing030',
      flow: Flow.HorizontalTop,
      children: [
        <Stack flow={Flow.HorizontalTop}>
          <Box>child 1</Box>, <Box>child 2</Box>, <Box>child 3</Box>
        </Stack>,
        <Stack flow={Flow.HorizontalTop}>
          <Box>child 4</Box>, <Box>child 5</Box>, <Box>child 6</Box>
        </Stack>,
        <Stack flow={Flow.HorizontalTop}>
          <Box>child 7</Box>, <Box>child 8</Box>, <Box>child 9</Box>
        </Stack>,
      ],
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`render with stackDistribution`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      stackDistribution: StackDistribution.Center,
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
      flow: Flow.HorizontalTop,
      children: [
        <Box>child 1</Box>,
        <Box>child 2</Box>,
        <Box>child 3</Box>,
        <Stack flow={Flow.HorizontalTop}>
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
      spaceInline: 'sizing020',
      children,
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`renders with spacing and wrap`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      list: true,
      ariaLabel: 'Tag list',
      spaceInline: 'sizing020',
      spaceStack: 'sizing020',
      wrap: 'wrap',
      children,
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`renders horizontally`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      children,
      list: true,
      flow: Flow.HorizontalTop,
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`renders horizontally with spacing`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      list: true,
      ariaLabel: 'Tag list',
      spaceInline: 'sizing020',
      flow: Flow.HorizontalTop,
      children,
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`renders horizontally with spacing and wrap`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      list: true,
      ariaLabel: 'Tag list',
      spaceInline: 'sizing020',
      spaceStack: 'sizing020',
      wrap: 'wrap',
      flow: Flow.HorizontalTop,
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
});

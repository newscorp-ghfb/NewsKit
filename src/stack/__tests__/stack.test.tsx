import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {SizingKeys} from '../../themes/newskit-light/spacing';
import {Stack} from '../stack';
import {Tag} from '../../tag/tag';
import {Flow, StackDistribution} from '../types';

describe('Stack', () => {
  test(`renders stack when no properties are set`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      children: [<Tag>child 1</Tag>, <Tag>child 2</Tag>, <Tag>child 3</Tag>],
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
            <Tag>child 1</Tag>,
            <Tag>child 2</Tag>,
            <Tag>child 3</Tag>,
          ],
        });

        expect(fragment).toMatchSnapshot();
      });
    });
  });

  Object.values(Flow).forEach(flowKey => {
    (['sizing000', 'sizing090', 'sizing120'] as SizingKeys[]).forEach(size => {
      Object.values(['wrap', 'nowrap']).forEach(wrapType => {
        test(`renders where the stack flow is ${flowKey} and the space is set to ${size}`, () => {
          const fragment = renderToFragmentWithTheme(Stack, {
            flow: flowKey,
            space: size,
            wrap: wrapType as 'wrap' | 'nowrap',
            children: [
              <Tag>child 1</Tag>,
              <Tag>child 2</Tag>,
              <Tag>child 3</Tag>,
            ],
          });

          expect(fragment).toMatchSnapshot();
        });
      });
    });
  });
});

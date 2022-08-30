import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Stack} from '../../stack';
import {Tag} from '../../tag/tag';
import {StackChild} from '..';

describe('StackChild', () => {
  test(`renders null`, () => {
    const fragment = renderToFragmentWithTheme(StackChild, {
      children: [<Tag>child 1</Tag>, <Tag>child 2</Tag>, <Tag>child 3</Tag>],
      order: 1,
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`renders within a Stack with custom order`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      children: [
        <StackChild order={2}>
          <Tag>child 1</Tag>
        </StackChild>,
        <StackChild order={3}>
          <Tag>child 2</Tag>
        </StackChild>,
        <StackChild order={1}>
          <Tag>child 3</Tag>
        </StackChild>,
      ],
    });

    expect(fragment).toMatchSnapshot();
  });

  test('renders within a Stack, when Stack is a list', () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      list: true,
      children: [
        <StackChild order={2}>
          <Tag>child 1</Tag>
        </StackChild>,
        <StackChild order={3}>
          <Tag>child 2</Tag>
        </StackChild>,
        <StackChild order={1}>
          <Tag>child 3</Tag>
        </StackChild>,
      ],
    });

    expect(fragment).toMatchSnapshot();
  });

  test('renders within a Stack, with align self property', () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      spaceInline: 'space020',
      children: [
        <StackChild alignSelf="stretch">
          <Tag>child 1</Tag>
        </StackChild>,
        <StackChild alignSelf="stretch">
          <Tag>child 2</Tag>
        </StackChild>,
        <StackChild alignSelf="stretch">
          <Tag>child 3</Tag>
        </StackChild>,
      ],
    });

    expect(fragment).toMatchSnapshot();
  });

  test('renders within a Stack with logical props', () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      spaceInline: 'space020',
      children: [
        <StackChild order={1} paddingInline="30px" paddingBlock="20px">
          <Tag>With padding props</Tag>
        </StackChild>,
        <StackChild order={2} marginInline="30px" marginBlock="20px">
          <Tag>With margin props</Tag>
        </StackChild>,
      ],
    });

    expect(fragment).toMatchSnapshot();
  });
});

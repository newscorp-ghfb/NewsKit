import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Stack} from '../../stack';
import {Tag} from '../../tag/tag';
import {StackChild, isStackChild} from '..';

describe('StackChild', () => {
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

  test('isStackChild should return true for StackChild', () => {
    const fragment = (
      <StackChild order={2}>
        <Tag>child</Tag>
      </StackChild>
    );
    expect(isStackChild(fragment)).toBe(true);
  });

  test("isStackChild should return false for a component that isn't a StackChild", () => {
    const fragment = <Tag>child</Tag>;
    expect(isStackChild(fragment)).toBe(false);
  });
});

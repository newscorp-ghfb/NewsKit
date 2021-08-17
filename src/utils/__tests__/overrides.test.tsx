import React from 'react';
import {getComponentOverrides} from '../overrides';
import {TagProps, Tag} from '../../tag';

const DefaultComponent = ({children, overrides}: TagProps) => (
  <Tag overrides={overrides}>{children}</Tag>
);

const defaultProps: TagProps = {children: 'hello', size: 'small'};

describe('Overrides utils', () => {
  test('getComponentOverrides with default component and props', () => {
    const [component, componentProps] = getComponentOverrides(
      {},
      DefaultComponent,
      defaultProps,
    );
    expect(componentProps).toEqual({...defaultProps, overrides: {}});
    expect(component).toBe(DefaultComponent);
  });

  test('getComponentOverrides with default custom component and props', () => {
    // @ts-ignore
    const CustomComponent = ({children}) => <div>{children}</div>;

    const [component, componentProps] = getComponentOverrides(
      CustomComponent,
      DefaultComponent,
      defaultProps,
    );
    expect(componentProps).toEqual(defaultProps);
    expect(component).toBe(CustomComponent);
  });

  test('getComponentOverrides with props overrides', () => {
    const [component, componentProps] = getComponentOverrides<TagProps>(
      {props: {size: 'large'}},
      DefaultComponent,
      defaultProps,
    );
    expect(componentProps).toEqual({
      ...defaultProps,
      size: 'large',
    });
    expect(component).toBe(DefaultComponent);
  });
});

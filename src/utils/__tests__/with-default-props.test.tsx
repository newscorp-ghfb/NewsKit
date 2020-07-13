import React from 'react';
import {withDefaultProps} from '../with-default-props';
import {renderToFragmentWithTheme} from '../../test/test-utils';

describe('withDefaultProps', () => {
  const DummyComp: React.FC<any> = props => (
    <div>{JSON.stringify(props, null, 2)}</div>
  );

  test('will return a component with merged props taking a function as defaultProps', () => {
    const functionMock = jest.fn().mockReturnValue({functionMock: 'props'});
    const wrappedComponent = withDefaultProps(
      DummyComp,
      functionMock,
      'linkStandalone',
    );
    const props = {
      test: 'props',
    };

    const fragment = renderToFragmentWithTheme(wrappedComponent, props);

    expect(fragment).toMatchSnapshot();
    expect(functionMock).toHaveBeenCalledWith(props);
  });

  test('will return a component with merged props taking an object as defaultProps', () => {
    const fragment = renderToFragmentWithTheme(
      withDefaultProps(DummyComp, {test: 'prop'}, 'linkStandalone'),
    );

    expect(fragment).toMatchSnapshot();
  });

  test('will return a component with merged props taking undefined as defaultProps', () => {
    const fragment = renderToFragmentWithTheme(
      withDefaultProps(DummyComp, undefined, 'linkStandalone'),
    );

    expect(fragment).toMatchSnapshot();
  });
});

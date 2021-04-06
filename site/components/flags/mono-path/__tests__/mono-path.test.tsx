import React from 'react';
import {Block} from 'newskit';
import {renderToFragmentWithTheme} from '../../../../utils/test-utils';
import {MonoPath} from '..';

function mockComp(name: string) {
  return ({children, ...props}: any) => (
    <span data-testid={name} data-props={JSON.stringify(props, null, 2)}>
      {children}
    </span>
  );
}

jest.mock('../../mono', () => ({
  ...(jest.requireActual('../../mono') as any),
  Mono: mockComp('Mono'),
}));

const WrappedMonoPath: React.FC<any> = props => (
  <Block>
    <MonoPath {...props} />
  </Block>
);

describe('MonoPath', () => {
  describe('with single level path', () => {
    it('should render as expected', () => {
      const fragment = renderToFragmentWithTheme(WrappedMonoPath, {
        children: 'level1Value',
      });
      expect(fragment).toMatchSnapshot();
    });
  });

  describe('with 2 level path', () => {
    it('should render as expected', () => {
      const fragment = renderToFragmentWithTheme(WrappedMonoPath, {
        children: 'level1Value.level2Value',
      });
      expect(fragment).toMatchSnapshot();
    });
  });

  describe('with 3 level path', () => {
    it('should render as expected', () => {
      const fragment = renderToFragmentWithTheme(WrappedMonoPath, {
        children: 'level1Value.level2Value.level3Value',
      });
      expect(fragment).toMatchSnapshot();
    });
  });
});

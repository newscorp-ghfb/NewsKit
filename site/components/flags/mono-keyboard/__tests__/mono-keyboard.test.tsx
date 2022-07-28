import React from 'react';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../../../utils/test-utils';
import {MonoKeyboard} from '..';

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

describe('MonoKeyboard', () => {
  describe('with single key', () => {
    it('should render with no icon for unrecognised key', () => {
      const fragment = renderToFragmentWithTheme(MonoKeyboard, {
        children: 'Ctrl',
      });
      expect(fragment).toMatchSnapshot();
    });

    [
      ['Rtn', 'IconOutlinedKeyboardReturn'],
      ['Backspace', 'IconOutlinedKeyboardBackspace'],
      ['Down', 'IconOutlinedKeyboardArrowDown'],
      ['Left', 'IconOutlinedKeyboardArrowLeft'],
      ['Right', 'IconOutlinedKeyboardArrowRight'],
      ['Space', 'IconOutlinedSpaceBar'],
      ['Tab', 'IconOutlinedKeyboardTab'],
      ['Up', 'IconOutlinedKeyboardArrowUp'],
    ].forEach(([key, icon]) => {
      it(`should render the ${icon} for the ${key} key`, () => {
        const dom = renderWithTheme(MonoKeyboard, {
          children: key,
        });

        expect(dom.asFragment()).toMatchSnapshot();
      });
    });
  });

  describe('with multiple keys', () => {
    it('should render as expected', () => {
      const fragment = renderToFragmentWithTheme(MonoKeyboard, {
        children: ['Ctrl', 'Rtn', 'Left'],
      });
      expect(fragment).toMatchSnapshot();
    });
  });
});

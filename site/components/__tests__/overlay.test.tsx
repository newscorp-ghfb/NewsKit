import * as React from 'react';
import {renderToFragmentWithTheme, render} from 'newskit/test/test-utils';

import {Overlay} from '../overlay';

describe('Overlay', () => {
  test('when closed', () => {
    const fragment = renderToFragmentWithTheme(Overlay);
    expect(fragment).toMatchSnapshot();
  });

  test('when open', () => {
    const fragment = renderToFragmentWithTheme(Overlay, {isOpen: true});
    expect(fragment).toMatchSnapshot();
  });

  test('when hidden at breakpoint', () => {
    const fragment = renderToFragmentWithTheme(Overlay, {
      isOpen: true,
      hideAtBreakpoint: 'md',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('with z-index', () => {
    const fragment = renderToFragmentWithTheme(Overlay, {
      isOpen: true,
      zIndex: 1,
    });
    expect(fragment).toMatchSnapshot();
  });

  it('disables scroll when lockScroll updates to true', () => {
    const initialProps = {
      isOpen: true,
      lockScroll: false,
    };

    const nextProps = {
      isOpen: true,
      lockScroll: true,
    };

    const {rerender} = render(<Overlay {...initialProps} />);
    expect(document.body.style.overflow).toBe('');

    rerender(<Overlay {...nextProps} />);
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('enables scroll when lockScroll updates to false', () => {
    const initialProps = {
      isOpen: true,
      lockScroll: false,
    };

    const propsFirstUpdate = {
      isOpen: true,
      lockScroll: true,
    };

    const propsSecondUpdate = {
      isOpen: true,
      lockScroll: false,
    };

    const {rerender} = render(<Overlay {...initialProps} />);
    expect(document.body.style.overflow).toBe('');

    rerender(<Overlay {...propsFirstUpdate} />);
    expect(document.body.style.overflow).toBe('hidden');

    rerender(<Overlay {...propsSecondUpdate} />);
    expect(document.body.style.overflow).toBe('');
  });

  it('keeps body overflow styles when no chnages in lockScroll', () => {
    const initialProps = {
      isOpen: true,
      lockScroll: false,
    };

    const nextProps = {
      isOpen: true,
      lockScroll: false,
    };

    const {rerender} = render(<Overlay {...initialProps} />);
    expect(document.body.style.overflow).toBe('');

    rerender(<Overlay {...nextProps} />);
    expect(document.body.style.overflow).toBe('');
  });
});

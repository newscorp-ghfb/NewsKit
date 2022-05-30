import React from 'react';
import {
  IconFilledAccountBalance,
  IconFilledExpandLess,
  IconFilledExpandMore,
} from '../../icons';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {TextBlock} from '../../text-block';
import {Accordion} from '../accordion';

describe('Accordion', () => {
  const defaultProps = {
    children: (
      <TextBlock>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </TextBlock>
    ),
    header: 'Header',
    label: 'Label',
  };
  test('renders with default props', () => {
    const fragment = renderToFragmentWithTheme(Accordion, defaultProps);
    expect(fragment).toMatchSnapshot();
  });
  test('renders with startEnhancer', () => {
    const props = {
      ...defaultProps,
      startEnhancer: (
        <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
      ),
    };
    const fragment = renderToFragmentWithTheme(Accordion, props);
    expect(fragment).toMatchSnapshot();
  });
  test('renders with expanded state and icon', () => {
    const props = {
      ...defaultProps,
      expanded: true,
      label: 'Label',
      startEnhancer: (
        <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
      ),
      indicatorIcon: (
        <IconFilledExpandMore
          overrides={{
            size: 'iconSize020',
          }}
        />
      ),
    };
    const fragment = renderToFragmentWithTheme(Accordion, props);
    expect(fragment).toMatchSnapshot();
  });
  test('renders with collapsed state and icon', () => {
    const props = {
      ...defaultProps,
      expanded: false,
      label: 'Label',
      startEnhancer: (
        <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
      ),
      indicatorIcon: (
        <IconFilledExpandLess
          overrides={{
            size: 'iconSize020',
          }}
        />
      ),
    };
    const fragment = renderToFragmentWithTheme(Accordion, props);
    expect(fragment).toMatchSnapshot();
  });
  test('renders with disabled state', () => {
    const props = {
      ...defaultProps,
      disabled: true,
      label: 'Label',
      startEnhancer: (
        <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
      ),
      indicatorIcon: (
        <IconFilledExpandLess
          overrides={{
            size: 'iconSize020',
          }}
        />
      ),
    };
    const fragment = renderToFragmentWithTheme(Accordion, props);
    expect(fragment).toMatchSnapshot();
  });
  test('renders with no divider', () => {
    const props = {
      ...defaultProps,
      expanded: true,
      applyDivider: false,
      label: 'Label',
      startEnhancer: (
        <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
      ),
      indicatorIcon: (
        <IconFilledExpandLess
          overrides={{
            size: 'iconSize020',
          }}
        />
      ),
    };
    const fragment = renderToFragmentWithTheme(Accordion, props);
    expect(fragment).toMatchSnapshot();
  });
  test('renders as a h4', () => {
    const props = {
      ...defaultProps,
      headingAs: 'h4' as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span',
      expanded: true,
      label: 'Label',
      startEnhancer: (
        <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
      ),
      indicatorIcon: (
        <IconFilledExpandLess
          overrides={{
            size: 'iconSize020',
          }}
        />
      ),
    };
    const fragment = renderToFragmentWithTheme(Accordion, props);
    expect(fragment).toMatchSnapshot();
  });
});

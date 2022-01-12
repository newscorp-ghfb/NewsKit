import {renderToFragmentWithTheme} from 'newskit/test/test-utils';
import {FontAttributesProps} from '..';
import {FontAttributes} from '../font-attributes';

describe('FontAttributes', () => {
  test('renders default font attributes', () => {
    const fragment = renderToFragmentWithTheme(FontAttributes);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with fontSize token', () => {
    const props: FontAttributesProps = {
      fontSizeToken: 'fontSize010',
    };
    const fragment = renderToFragmentWithTheme(FontAttributes, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with fontWeightToken token', () => {
    const props: FontAttributesProps = {
      fontWeightToken: 'fontWeight010',
    };
    const fragment = renderToFragmentWithTheme(FontAttributes, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with fontLineHeight token', () => {
    const props: FontAttributesProps = {
      fontLineHeight: 'fontLineHeight010',
    };
    const fragment = renderToFragmentWithTheme(FontAttributes, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with fontLetterSpacing token', () => {
    const props: FontAttributesProps = {
      fontLetterSpacing: 'fontLetterSpacing030',
    };
    const fragment = renderToFragmentWithTheme(FontAttributes, props);
    expect(fragment).toMatchSnapshot();
  });
});

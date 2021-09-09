import {renderToFragmentWithTheme} from '../../../utils/test-utils';
import {docsThemeLight} from '../../../theme/doc-theme';
import {ContentText} from '..';

describe('ContentText', () => {
  test('renders with title and description', () => {
    const props = {
      title: 'Title',
      children: 'description',
    };
    const fragment = renderToFragmentWithTheme(
      ContentText,
      props,
      docsThemeLight,
    );
    expect(fragment).toMatchSnapshot();
  });
  test('renders with only the description', () => {
    const props = {
      children: 'description',
    };
    const fragment = renderToFragmentWithTheme(
      ContentText,
      props,
      docsThemeLight,
    );
    expect(fragment).toMatchSnapshot();
  });
  test('renders with only the title', () => {
    const props = {
      title: 'Title',
    };
    const fragment = renderToFragmentWithTheme(
      ContentText,
      props,
      docsThemeLight,
    );
    expect(fragment).toMatchSnapshot();
  });
});

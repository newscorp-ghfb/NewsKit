import {Label, LabelProps} from '..';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {TextFieldSize} from '../../text-field';

describe('Label', () => {
  ['small', 'medium', 'large'].forEach(size => {
    test(`renders ${size} label`, () => {
      const props: LabelProps = {
        children: 'A Label',
        state: 'valid',
        size: size as TextFieldSize,
      };
      const fragment = renderToFragmentWithTheme(Label, props);
      expect(fragment).toMatchSnapshot();
    });
  });

  test('should render disabled Label', () => {
    const props: LabelProps = {
      children: 'Label',
      state: 'disabled',
    };

    const fragment = renderToFragmentWithTheme(Label, props);
    expect(fragment).toMatchSnapshot();
  });
});

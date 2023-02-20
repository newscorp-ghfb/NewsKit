import {AssistiveText} from '../assistive-text';
import {AssistiveTextProps} from '..';
import {TextFieldSize} from '../../text-field';
import {renderToFragmentWithTheme} from '../../test/test-utils';

describe('Assistive Text', () => {
  ['small', 'medium', 'large'].forEach(size => {
    test(`renders ${size} AssistiveText`, () => {
      const props: AssistiveTextProps = {
        children: 'Assistive Text',
        size: size as TextFieldSize,
      };
      const fragment = renderToFragmentWithTheme(AssistiveText, props);
      expect(fragment).toMatchSnapshot();
    });
  });

  test('should render invalid Assistive Text', () => {
    const props: AssistiveTextProps = {
      children: 'Assistive Text',
      state: 'invalid',
    };

    const fragment = renderToFragmentWithTheme(AssistiveText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('should render disabled Assistive Text', () => {
    const props: AssistiveTextProps = {
      children: 'Assistive Text',
      state: 'disabled',
    };

    const fragment = renderToFragmentWithTheme(AssistiveText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('should render with enhancer', () => {
    const props: AssistiveTextProps = {
      children: 'Assistive Text',
      startEnhancer: 'start',
      endEnhancer: 'start',
    };

    const fragment = renderToFragmentWithTheme(AssistiveText, props);
    expect(fragment).toMatchSnapshot();
  });
  test('should render logical props overrides', () => {
    const props: AssistiveTextProps = {
      children: 'Assistive Text',
      startEnhancer: 'start',
      endEnhancer: 'start',
      overrides: {paddingBlock: '30px', marginBlock: '30px'},
    };

    const fragment = renderToFragmentWithTheme(AssistiveText, props);
    expect(fragment).toMatchSnapshot();
  });
});

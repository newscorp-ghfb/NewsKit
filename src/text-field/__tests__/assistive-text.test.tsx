import React from 'react';
import {AssistiveText} from '../assistive-text';
import {AssistiveTextProps, TextFieldSize} from '..';
import {renderToFragmentWithTheme} from '../../test/test-utils';

const renderValidAssistiveText = () => (
  <>
    <AssistiveText state="invalid">AssistiveText</AssistiveText>
  </>
);

describe('Assistive Text', () => {
  [TextFieldSize.Small, TextFieldSize.Medium, TextFieldSize.Large].forEach(
    size => {
      test(`renders ${size} AssistiveText`, () => {
        const props: AssistiveTextProps = {
          children: 'Assistive Text',
          size,
        };
        const fragment = renderToFragmentWithTheme(AssistiveText, props);
        expect(fragment).toMatchSnapshot();
      });
    },
    test('should render invalid Assistive Text', () => {
      const props: AssistiveTextProps = {
        children: 'Assistive Text',
        state: 'invalid',
      };

      const fragment = renderToFragmentWithTheme(
        renderValidAssistiveText,
        props,
      );
      expect(fragment).toMatchSnapshot();
    }),
  );
});

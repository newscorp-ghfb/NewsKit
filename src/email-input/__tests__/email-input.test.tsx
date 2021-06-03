import React from 'react';
import {EmailInput} from '..';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {TextInputProps} from '../../text-input';

const renderEmailInputWithLabelHidden = (props: TextInputProps) => (
  <EmailInput hideLabel assistiveText="assistiveText" {...props} />
);

describe('EmailInput', () => {
  test('renders correctly with label hidden', () => {
    const fragment = renderToFragmentWithTheme(renderEmailInputWithLabelHidden);
    expect(fragment).toMatchSnapshot();
  });
});

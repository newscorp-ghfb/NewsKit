import React from 'react';
import {renderToFragmentWithTheme} from 'newskit/test/test-utils';
import {PropTable, Prop} from '..';

describe('prop table', () => {
  test('renders a prop table as expected', () => {
    const fragment = renderToFragmentWithTheme(() => (
      <PropTable>
        <Prop name="defaultTest" type="string" default="123">
          Testing number defaults
        </Prop>
        <Prop name="enumTest" type="MyEnumType" default="EnumValue1" enum>
          Testing enum default value
        </Prop>
        <Prop name="enumTest" type="MyEnumType" enum>
          Testing enum without default
        </Prop>
        <Prop name="requiredTest" type="number" required>
          Testing required values
        </Prop>
        <Prop name="nestedTest" type="object">
          Some text for nestedTest
          <Prop name="nestedChild1" type="object">
            Some text for nestedChild1
            <Prop name="nestedChild2" type="string">
              Some text for nestedChild2
            </Prop>
          </Prop>
        </Prop>
      </PropTable>
    ));
    expect(fragment).toMatchSnapshot();
  });
});

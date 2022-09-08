import React from 'react';
import {TextAreaProps, TextArea} from '..';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {FormInput, FormInputTextArea} from '../../form/form-input';
import {Form} from '../../form';

describe('TextArea', () => {
  test('render default', () => {
    const props = {
      name: 'text-area',
    };
    const fragment = renderToFragmentWithTheme(TextArea, props);
    expect(fragment).toMatchSnapshot();
  });

  ['small', 'medium', 'large'].forEach(size => {
    test(`render size: ${size}`, () => {
      const props = {
        name: 'textArea',
        size: size as TextAreaProps['size'],
      };
      const fragment = renderToFragmentWithTheme(TextArea, props);
      expect(fragment).toMatchSnapshot();
    });
  });

  ['valid', 'invalid', 'disabled'].forEach(state => {
    test(`render state: ${state}`, () => {
      const props = {
        name: 'textArea',
        state: state as TextAreaProps['state'],
      };
      const fragment = renderToFragmentWithTheme(TextArea, props);
      expect(fragment).toMatchSnapshot();
    });
  });

  ['none', 'vertical', 'horizontal', 'both'].forEach(resize => {
    test(`render resize: ${resize}`, () => {
      const props = {
        name: 'textArea',
        resize: resize as TextAreaProps['resize'],
      };
      const fragment = renderToFragmentWithTheme(TextArea, props);
      expect(fragment).toMatchSnapshot();
    });
  });

  describe('FormInputTextArea', () => {
    test('render invalid form', () => {
      const Component = () => (
        <Form onSubmit={() => null} reValidationMode="onSubmit">
          <FormInput name="name" state="invalid">
            <FormInputTextArea />
          </FormInput>
        </Form>
      );
      const fragment = renderToFragmentWithTheme(Component, {});
      expect(fragment).toMatchSnapshot();
    });

    test('render valid form', () => {
      const Component = () => (
        <Form onSubmit={() => null} reValidationMode="onSubmit">
          <FormInput
            name="name"
            state="valid"
            rules={{
              required: 'Required field',
            }}
          >
            <FormInputTextArea />
          </FormInput>
        </Form>
      );
      const fragment = renderToFragmentWithTheme(Component, {});
      expect(fragment).toMatchSnapshot();
    });
  });
});

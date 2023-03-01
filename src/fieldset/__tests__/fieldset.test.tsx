import * as React from 'react';
import {Fieldset, FieldsetProps} from '..';
import {
  FormInput,
  FormInputCheckbox,
  FormInputTextField,
} from '../../form/form-input';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {createTheme} from '../../theme';

describe('Fieldset', () => {
  test('should render tags correctly', () => {
    const props: FieldsetProps = {
      children: [
        <label key="1" htmlFor="search">
          <input type="text" id="search" name="search" />
          Search input:
        </label>,
      ],
    };

    const fragment = renderToFragmentWithTheme(Fieldset, props);
    expect(fragment).toMatchSnapshot();
  });

  test('should render with legend', () => {
    const props: FieldsetProps = {
      legend: 'Search Legend',
      children: [
        <label key="1" htmlFor="search">
          <input type="text" id="search" name="search" />
          Search input:
        </label>,
      ],
    };

    const fragment = renderToFragmentWithTheme(Fieldset, props);
    expect(fragment).toMatchSnapshot();
  });

  ['small', 'medium', 'large'].forEach(size => {
    test(`renders ${size} legend`, () => {
      const props: FieldsetProps = {
        legend: 'Search Legend',
        overrides: {
          legend: {
            props: {
              size: size as 'small' | 'medium' | 'large',
            },
          },
        },
        children: [
          <label key="1" htmlFor="search">
            <input type="text" id="search" name="search" />
            Search input:
          </label>,
        ],
      };

      const fragment = renderToFragmentWithTheme(Fieldset, props);
      expect(fragment).toMatchSnapshot();
    });
  });

  test('should render with button inside the legend element', () => {
    const props: FieldsetProps = {
      legend: () => <button type="button">Legend as a button</button>,
      children: [
        <label key="1" htmlFor="search">
          <input type="text" id="search" name="search" />
          Search input:
        </label>,
      ],
    };

    const fragment = renderToFragmentWithTheme(Fieldset, props);
    expect(fragment).toMatchSnapshot();
  });

  test('should render with overrides', () => {
    const myCustomTheme = createTheme({
      name: 'my-custom-select-theme',
      overrides: {
        stylePresets: {
          fieldsetCustom: {
            base: {
              backgroundColor: '{{colors.amber040}}',
              borderColor: '{{colors.purple060}}',
              borderWidth: '1px',
              borderStyle: 'solid',
            },
          },
          legendCustom: {
            base: {
              backgroundColor: '{{colors.green040}}',
            },
          },
        },
      },
    });

    const props: FieldsetProps = {
      legend: 'Search Legend',
      children: [
        <label key="1" htmlFor="search">
          <input type="text" id="search" name="search" />
          Search input:
        </label>,
      ],
      overrides: {
        stylePreset: 'fieldsetCustom',
        paddingBlock: 'space010',
        paddingInline: 'space010',
        legend: {
          stylePreset: 'legendCustom',
          typographyPreset: 'utilityBody030',
          spaceStack: 'space020',
        },
      },
    };

    const fragment = renderToFragmentWithTheme(Fieldset, props, myCustomTheme);
    expect(fragment).toMatchSnapshot();
  });

  ['small', 'medium', 'large'].forEach(size => {
    test(`renders fieldset with ${size} form inputs`, () => {
      const props: FieldsetProps = {
        legend: `${size} legend`,
        size: size as 'small' | 'medium' | 'large',
        children: [
          <FormInput key="1" name={`input-text-field-${size}`}>
            <FormInputTextField />
          </FormInput>,
          <FormInput key="2" name={`input-checkbox-${size}`}>
            <FormInputCheckbox label={`Agree with T&C ${size}`} value="tc" />
          </FormInput>,
        ],
      };

      const fragment = renderToFragmentWithTheme(Fieldset, props);
      expect(fragment).toMatchSnapshot();
    });
  });
  test('should render with logical props overrides', () => {
    const props: FieldsetProps = {
      legend: 'Search Legend',
      children: [
        <label key="1" htmlFor="search">
          <input type="text" id="search" name="search" />
          Search input:
        </label>,
      ],
      overrides: {
        paddingInline: '30px',
        marginInline: '30px',
      },
    };

    const fragment = renderToFragmentWithTheme(Fieldset, props);
    expect(fragment).toMatchSnapshot();
  });
});

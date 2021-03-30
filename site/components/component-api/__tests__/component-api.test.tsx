import {renderToFragmentWithTheme} from '../../../utils/test-utils';
import {ComponentAPI} from '..';
import {ComponentAPIProps} from '../types';

describe('ComponentAPI', () => {
  test('renders with mandatory props for one component', () => {
    const props: ComponentAPIProps = {
      components: [
        {
          propsTable: {
            columns: ['Name', 'Type', 'Default', 'Description', 'Required'],
            rows: [
              {
                name: 'children',
                type: 'string',
                required: true,
                description: `Description.`,
              },
            ],
          },
        },
      ],
    };
    const fragment = renderToFragmentWithTheme(
      ComponentAPI,
      props as ComponentAPIProps,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders with props for multiple components', () => {
    const props: ComponentAPIProps = {
      components: [
        {
          title: 'Button1',
          summary: 'Component Props',
          propsTable: {
            columns: ['Name', 'Type', 'Default', 'Description', 'Required'],
            rows: [
              {
                name: 'children',
                type: 'string',
                required: true,
                description: `Description`,
              },
            ],
          },
        },
        {
          title: 'Button2',
          summary: 'Component Props',
          propsTable: {
            columns: ['Name', 'Type', 'Default', 'Description', 'Required'],
            rows: [
              {
                name: 'children',
                type: 'string',
                required: true,
                description: `Description`,
              },
            ],
          },
          overridesTable: {
            columns: ['Name', 'Type', 'Description'],
            rows: [
              {
                name: 'spaceInset',
                type: 'MQ<string>',
                description: 'Description.',
              },
            ],
          },
        },
      ],
    };
    const fragment = renderToFragmentWithTheme(
      ComponentAPI,
      props as ComponentAPIProps,
    );
    expect(fragment).toMatchSnapshot();
  });
});

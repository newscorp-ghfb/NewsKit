import * as React from 'react';
import * as icons from '..';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {createTheme} from '../../theme';

Object.entries(icons)
  .filter(icon => icon[0] !== 'Svg')
  .forEach((entry: any) => {
    const [name, Icon] = entry as [string, React.ComponentType<any>];
    const props = {
      // n.b. color prop not supported on all icons.
      color: 'inkSubtle',
      size: 'iconSize050',
    };

    describe(name, () => {
      test(`renders the ${name} icon with specified style`, () => {
        const fragment = renderToFragmentWithTheme(Icon, props);
        expect(fragment).toMatchSnapshot();
      });

      test(`renders the ${name} icon with title override`, () => {
        const fragment = renderToFragmentWithTheme(Icon, {
          ...props,
          title: 'override title value',
        });
        expect(fragment).toMatchSnapshot();
      });

      test(`renders the ${name} icon from theme override`, () => {
        const DiffIcon: React.FC = () => (
          <svg>
            <path>a different icon</path>
          </svg>
        );
        const theme = createTheme({
          name: 'icon-test-theme',
          overrides: {
            icons: {
              [name]: DiffIcon,
            },
          },
        });
        const fragment = renderToFragmentWithTheme(Icon, props, theme);
        expect(fragment).toMatchSnapshot();
      });
    });
  });

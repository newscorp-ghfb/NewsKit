import * as React from 'react';
import * as icons from '..';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {createTheme} from '../../themes';

Object.entries(icons)
  .filter(icon => icon[0] !== 'Svg')
  .forEach((entry: any) => {
    const [name, Comp] = entry as [string, React.ComponentType<any>];
    const props = {
      // n.b. color prop not supported on all icons.
      $color: 'inkSubtle',
      $size: 'iconSize050',
    };

    describe(name, () => {
      test(`renders the ${name} icon with specified style`, () => {
        const fragment = renderToFragmentWithTheme(Comp, props);
        expect(fragment).toMatchSnapshot();
      });
      test(`renders the ${name} icon from theme override`, () => {
        const fragment = renderToFragmentWithTheme(
          Comp,
          props,
          createTheme('icon-test-theme', {
            themeOverrider: () => ({
              icons: {
                [name]: () => (
                  <svg>
                    <path>a different icon</path>
                  </svg>
                ),
              },
            }),
          }),
        );
        expect(fragment).toMatchSnapshot();
      });
    });
  });

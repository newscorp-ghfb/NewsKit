import * as React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {createTheme} from '../../theme';
import {customToNewsKitIcon} from '../custom-to-newskit-icon';
import * as customFilledIcons from '../filled/custom';
import * as customOutlinedIcons from '../outlined/custom';
import {Svg} from '../svg';

Object.entries({...customFilledIcons, ...customOutlinedIcons}).forEach(
  (entry: any) => {
    const [name, Icon] = entry as [string, React.ComponentType<any>];

    const customTheme = createTheme({
      name: 'icon-test-theme',
      overrides: {
        stylePresets: {
          customIcon: {
            base: {
              iconColor: '{{colors.inkSubtle}}',
            },
          },
        },
      },
    });

    const props = {
      overrides: {
        stylePreset: 'customIcon',
        size: 'iconSize050',
      },
    };

    describe(name, () => {
      test(`renders the ${name} icon with specified style`, () => {
        const fragment = renderToFragmentWithTheme(Icon, props, customTheme);
        expect(fragment).toMatchSnapshot();
      });

      test(`renders the ${name} icon with title override`, () => {
        const fragment = renderToFragmentWithTheme(
          Icon,
          {
            ...props,
            title: 'override title value',
          },
          customTheme,
        );
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
  },
);

describe('customToNewsKit', () => {
  test(`renders icon with overrides`, () => {
    const IconFilledStop = customToNewsKitIcon(
      'IconOutlinedCustomClose',
      props => (
        <Svg {...props} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" />
        </Svg>
      ),
      {size: 'iconSize040'},
    );

    const fragment = renderToFragmentWithTheme(IconFilledStop);
    expect(fragment).toMatchSnapshot();
  });
});

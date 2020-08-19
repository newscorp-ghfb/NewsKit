import {breakpoints} from '../../theme/primitives/breakpoints';
import {OverrideProp, getOverridableProp} from '../utils';
import {GridKeys, BreakpointKeys} from '../../theme';

type Test = [OverrideProp, GridKeys];

const breakpointKeys = Object.keys(breakpoints);

describe('Grid utils', () => {
  ([
    [OverrideProp.Margin, 'containerMargin'],
    [OverrideProp.ColumnGutter, 'columnGutters'],
    [OverrideProp.RowGutter, 'rowGutters'],
  ] as Test[]).forEach(([overrideProp, themeKey]) => {
    breakpointKeys.forEach(currentBreakpoint => {
      breakpointKeys.forEach(propOverrideBreakpoint => {
        describe(`when at "${currentBreakpoint}" breakpoint and "${propOverrideBreakpoint}${overrideProp}" prop is set`, () => {
          const mockSizingTokenPixels = 123;
          const mockProps: any = {
            theme: {
              breakpoints,
              componentDefaults: {
                grid: {
                  [themeKey]: {
                    xs: `xs-theme-value`,
                    sm: `sm-theme-value`,
                    md: `md-theme-value`,
                    lg: `lg-theme-value`,
                  },
                },
              },
              sizing: {
                'the-override-token': `${mockSizingTokenPixels}px`,
              },
            },
            [`${propOverrideBreakpoint}${overrideProp}`]: 'the-override-token',
          };

          if (
            // e.g. current breakpoint is "sm" and prop override is "md"
            breakpointKeys.indexOf(currentBreakpoint) <
            breakpointKeys.indexOf(propOverrideBreakpoint)
          ) {
            it('should use the default value from the theme', () => {
              expect(
                getOverridableProp(
                  overrideProp,
                  currentBreakpoint as BreakpointKeys,
                  mockProps,
                ),
              ).toEqual(
                mockProps.theme.componentDefaults.grid[themeKey][
                  currentBreakpoint
                ],
              );
            });
          } else {
            it(`should use the ${propOverrideBreakpoint} override token value`, () => {
              expect(
                getOverridableProp(
                  overrideProp,
                  currentBreakpoint as BreakpointKeys,
                  mockProps,
                ),
              ).toEqual(mockSizingTokenPixels);
            });
          }
        });
      });
    });
  });
});

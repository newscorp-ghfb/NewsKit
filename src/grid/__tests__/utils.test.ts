import {breakpoints} from '../../theme/foundations/breakpoints';
import {OverrideProp, getOverridableProp} from '../utils';
import {BreakpointKeys} from '../../theme';

type Test = [OverrideProp, string];

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
              spacePresets: {
                'xs-theme-value': '12px',
                'sm-theme-value': '14px',
                'md-theme-value': '16px',
                'lg-theme-value': '18px',
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
              const token =
                mockProps.theme.componentDefaults.grid[themeKey][
                  currentBreakpoint
                ];
              const tokenValue =
                parseInt(mockProps.theme.spacePresets[token], 10) || 0;
              expect(
                getOverridableProp(
                  overrideProp,
                  currentBreakpoint as BreakpointKeys,
                  mockProps,
                ),
              ).toEqual(tokenValue);
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

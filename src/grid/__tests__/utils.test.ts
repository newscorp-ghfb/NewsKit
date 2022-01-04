import {OverrideProp, getOverridableProp} from '../utils';
import {GridKeys} from '../../themes/newskit-light/grid';
import {
  breakpointPrimitives,
  BreakpointKeys,
} from '../../themes/newskit-light/breakpoints';

type Test = [OverrideProp, GridKeys];

const breakpointKeys = Object.keys(breakpointPrimitives);

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
              breakpoints: breakpointPrimitives,
              grid: {
                [themeKey]: {
                  xs: `xs-theme-value`,
                  sm: `sm-theme-value`,
                  md: `md-theme-value`,
                  lg: `lg-theme-value`,
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
              ).toEqual(mockProps.theme.grid[themeKey][currentBreakpoint]);
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

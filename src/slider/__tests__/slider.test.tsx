import React from 'react';
import {Slider} from '../slider';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {SliderProps, LabelPosition} from '../types';
import {Theme, createTheme, compileTheme} from '../../theme';
import {StyledThumbValue} from '../styled';
import {IconOutlinedImage} from '../../icons';
import stylePresets from '../style-presets';
import componentDefaults from '../defaults';

let mockRange: jest.Mock;
jest.mock('react-range', () => {
  mockRange = jest.fn().mockImplementation(() => <div>react-range</div>);
  return {
    ...(jest.requireActual('react-range') as {}),
    Range: mockRange,
  };
});

describe('slider', () => {
  beforeAll(() => {
    // Hides needless forwardRef React errors (because of our mockRange above).
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  beforeEach(() => {
    mockRange.mockClear();
  });

  describe('react-range', () => {
    it('should pass the expected props to Range component', () => {
      renderWithTheme(Slider, {
        values: [20, 80],
        min: 0,
        max: 100,
        onChange: () => {},
      });

      expect(mockRange.mock.calls[0][0]).toMatchInlineSnapshot(`
        Object {
          "direction": "to right",
          "disabled": undefined,
          "max": 100,
          "min": 0,
          "onChange": [Function],
          "onFinalChange": undefined,
          "renderThumb": [Function],
          "renderTrack": [Function],
          "step": 1,
          "values": Array [
            20,
            80,
          ],
        }
      `);
    });

    it('should pass additional HTML attributes to the Range component', () => {
      const fragment = renderToFragmentWithTheme(Slider, {
        values: [20, 80],
        min: 0,
        max: 100,
        onChange: () => {},
        id: 'slider-id',
      });

      expect(fragment).toMatchSnapshot();
    });

    it('should allow overriding the renderTrack and renderThumb function', () => {
      const renderTrack: any = () => {};
      const renderThumb: any = () => {};
      renderWithTheme(Slider, {
        values: [20, 80],
        min: 0,
        max: 100,
        onChange: () => {},
        renderTrack,
        renderThumb,
      });

      expect(mockRange.mock.calls[0][0].renderTrack).toBe(renderTrack);
      expect(mockRange.mock.calls[0][0].renderThumb).toBe(renderThumb);
    });

    it('should pass logical prop overrides to Stack', () => {
      const {asFragment} = renderWithTheme(Slider, {
        values: [20, 80],
        min: 0,
        max: 100,
        onChange: () => {},
        overrides: {
          paddingInline: '50px',
          marginBlock: '20px',
        },
      });

      expect(asFragment()).toMatchSnapshot();
    });

    it('should pass custom optional props to Range component', () => {
      renderWithTheme(Slider, {
        values: [22.5],
        min: 20,
        max: 30,
        step: 2.5,
        disabled: true,
        vertical: true,
        onChange: () => {},
        onFinalChange: () => {},
      });

      expect(mockRange.mock.calls[0][0]).toMatchInlineSnapshot(`
          Object {
            "direction": "to top",
            "disabled": true,
            "max": 30,
            "min": 20,
            "onChange": [Function],
            "onFinalChange": [Function],
            "renderThumb": [Function],
            "renderTrack": [Function],
            "step": 2.5,
            "values": Array [
              22.5,
            ],
          }
      `);
    });

    describe('Range function props', () => {
      let onChange: jest.Mock;
      let onFinalChange: jest.Mock;
      let rangeProps: any;

      const sliderTheme = compileTheme(
        createTheme({
          overrides: {
            stylePresets,
            componentDefaults,
          },
        }),
      );

      const renderSlider = (
        props: Partial<SliderProps> = {},
        theme?: Theme,
      ) => {
        mockRange.mockClear();

        onChange = jest.fn();
        onFinalChange = jest.fn();

        renderWithTheme(
          Slider,
          {
            values: [25],
            min: 10,
            max: 30,
            step: 2.5,
            onChange,
            onFinalChange,
            ...props,
          },
          theme,
        );

        [[rangeProps]] = mockRange.mock.calls;
      };

      beforeEach(() => renderSlider());

      test('onChange should call the passed onChange function', () => {
        rangeProps.onChange([22.5, 27.5]);
        expect(onChange).toHaveBeenCalledWith([22.5, 27.5]);
      });

      test('onFinalChange should call the passed onFinalChange function', () => {
        rangeProps.onFinalChange([14, 44]);
        expect(onFinalChange).toHaveBeenCalledWith([14, 44]);
      });

      describe('renderThumb', () => {
        it('should render undragged slider thumb', () => {
          const fragment = renderToFragmentWithTheme(
            rangeProps.renderThumb,
            {
              props: {
                one: 'prop',
                two: 'props',
              },
              index: 0,
              isDragged: false,
            },
            sliderTheme,
          );
          expect(fragment).toMatchSnapshot();
        });

        it('should render custom aria-label slider thumb', () => {
          renderSlider({
            ariaLabel: 'my custom aria label',
          });
          const fragment = renderToFragmentWithTheme(
            rangeProps.renderThumb,
            {
              props: {
                one: 'prop',
                two: 'props',
              },
              index: 0,
              isDragged: false,
            },
            sliderTheme,
          );
          expect(fragment).toMatchSnapshot();
        });

        it('should render vertical slider thumb', () => {
          renderSlider({
            vertical: true,
            thumbLabel: true,
          });

          const fragment = renderToFragmentWithTheme(
            rangeProps.renderThumb,
            {
              props: {
                one: 'prop',
                two: 'props',
              },
              index: 0,
              isDragged: false,
            },
            sliderTheme,
          );
          expect(fragment).toMatchSnapshot();
        });

        it('should render slider thumb with an icon', () => {
          renderSlider({
            thumbIcon: IconOutlinedImage,
          });

          const fragment = renderToFragmentWithTheme(
            rangeProps.renderThumb,
            {
              props: {
                one: 'prop',
                two: 'props',
              },
              index: 0,
              isDragged: false,
            },
            sliderTheme,
          );
          expect(fragment).toMatchSnapshot();
        });

        it('should render default StyledThumbValue with custom thumbSize prop', () => {
          const customTheme = createTheme({
            name: 'myTestTheme',
            overrides: {
              componentDefaults,
              stylePresets: {
                ...stylePresets,
                presetWithBorderRadius: {
                  base: {
                    backgroundColor: 'red',
                    borderRadius: 'borderRadiusRounded020',
                  },
                },
              },
            },
          });
          const fragment = renderToFragmentWithTheme(
            StyledThumbValue,
            {
              overrides: {
                thumb: {
                  stylePreset: 'presetWithBorderRadius',
                  size: 'sizing070',
                },
              },
              children: 'test',
            },
            customTheme,
          );
          expect(fragment).toMatchSnapshot();
        });

        it('should render dragged slider thumb', () => {
          const fragment = renderToFragmentWithTheme(
            rangeProps.renderThumb,
            {
              props: {
                one: 'prop',
                two: 'props',
              },
              index: 0,
              isDragged: true,
            },
            sliderTheme,
          );
          expect(fragment).toMatchSnapshot();
        });

        it('should render multiple index slider thumb', () => {
          renderSlider({
            values: [10, 20, 30],
          });

          const fragment = renderToFragmentWithTheme(
            rangeProps.renderThumb,
            {
              props: {
                one: 'prop',
                two: 'props',
              },
              index: 2,
              isDragged: false,
            },
            sliderTheme,
          );
          expect(fragment).toMatchSnapshot();
        });

        it('should render range label slider thumb', () => {
          renderSlider({
            thumbLabel: true,
          });

          const fragment = renderToFragmentWithTheme(
            rangeProps.renderThumb,
            {
              props: {
                one: 'prop',
                two: 'props',
              },
              index: 0,
              isDragged: false,
            },
            sliderTheme,
          );
          expect(fragment).toMatchSnapshot();
        });

        it('should render custom label component slider thumb', () => {
          const thumbLabel = jest.fn().mockReturnValue(<span />);
          renderSlider({
            thumbLabel,
            values: [10, 20, 30],
          });

          const fragment = renderToFragmentWithTheme(
            rangeProps.renderThumb,
            {
              props: {
                one: 'prop',
                two: 'props',
              },
              index: 1,
              isDragged: true,
            },
            sliderTheme,
          );
          expect(fragment).toMatchSnapshot();
          expect(thumbLabel).toHaveBeenCalledWith(
            {
              children: 20,
              index: 1,
              dragged: true,
              overrides: {},
              values: [10, 20, 30],
              vertical: undefined,
            },
            {},
          );
        });
      });

      describe('renderTrack', () => {
        it('should render default slider track', () => {
          const fragment = renderToFragmentWithTheme(
            rangeProps.renderTrack,
            {
              props: {
                one: 'prop',
                two: 'props',
              },
              children: <div>children</div>,
              isDragged: false,
            },
            sliderTheme,
          );
          expect(fragment).toMatchSnapshot();
        });

        it('should render disabled slider track', () => {
          renderSlider({
            disabled: true,
          });

          const fragment = renderToFragmentWithTheme(
            rangeProps.renderTrack,
            {
              props: {
                one: 'prop',
                two: 'props',
              },
              children: <div>children</div>,
              isDragged: false,
            },
            sliderTheme,
          );
          expect(fragment).toMatchSnapshot();
        });

        it('should render disabled slider track', () => {
          renderSlider({
            disabled: true,
          });

          const fragment = renderToFragmentWithTheme(
            rangeProps.renderTrack,
            {
              props: {
                one: 'prop',
                two: 'props',
              },
              children: <div>children</div>,
              isDragged: false,
            },
            sliderTheme,
          );
          expect(fragment).toMatchSnapshot();
        });

        it('should render grabbed slider track', () => {
          const fragment = renderToFragmentWithTheme(
            rangeProps.renderTrack,
            {
              props: {
                one: 'prop',
                two: 'props',
              },
              children: <div>children</div>,
              isDragged: true,
            },
            sliderTheme,
          );
          expect(fragment).toMatchSnapshot();
        });

        it('should render vertical slider track', () => {
          renderSlider({
            vertical: true,
          });

          const fragment = renderToFragmentWithTheme(
            rangeProps.renderTrack,
            {
              props: {
                one: 'prop',
                two: 'props',
              },
              children: <div>children</div>,
              isDragged: false,
            },
            sliderTheme,
          );
          expect(fragment).toMatchSnapshot();
        });

        it('should render multi-thumb slider track', () => {
          renderSlider({
            values: [10, 20],
          });

          const fragment = renderToFragmentWithTheme(
            rangeProps.renderTrack,
            {
              props: {
                one: 'prop',
                two: 'props',
              },
              children: <div>children</div>,
              isDragged: false,
            },
            sliderTheme,
          );
          expect(fragment).toMatchSnapshot();
        });
      });
    });
  });

  describe('labels', () => {
    it('should not render labels by default', () => {
      const fragment = renderToFragmentWithTheme(Slider, {
        values: [10],
        min: 0,
        max: 100,
        onChange: () => {},
      });
      expect(fragment).toMatchSnapshot();
    });

    it('should render horizontal labels', () => {
      const fragment = renderToFragmentWithTheme(Slider, {
        values: [10],
        min: 0,
        max: 100,
        onChange: () => {},
        minLabel: '0',
        maxLabel: '100',
      });
      expect(fragment).toMatchSnapshot();
    });

    it('should render vertical labels', () => {
      const fragment = renderToFragmentWithTheme(Slider, {
        values: [10],
        min: 0,
        max: 100,
        onChange: () => {},
        minLabel: '0',
        maxLabel: '100',
        vertical: true,
      });
      expect(fragment).toMatchSnapshot();
    });

    it('should render min label', () => {
      const fragment = renderToFragmentWithTheme(Slider, {
        values: [10],
        min: 0,
        max: 100,
        onChange: () => {},
        minLabel: '0',
      });
      expect(fragment).toMatchSnapshot();
    });

    it('should render max label', () => {
      const fragment = renderToFragmentWithTheme(Slider, {
        values: [10],
        min: 0,
        max: 100,
        onChange: () => {},
        maxLabel: '0',
      });
      expect(fragment).toMatchSnapshot();
    });

    it('should render custom component min, max labels', () => {
      const fragment = renderToFragmentWithTheme(Slider, {
        values: [10],
        min: 0,
        max: 100,
        onChange: () => {},
        minLabel: () => <span>0</span>,
        maxLabel: () => <span>100</span>,
      });
      expect(fragment).toMatchSnapshot();
    });

    it('should be rendered in vertical slider with labelContainer and LabelPosition.Before', () => {
      const fragment = renderToFragmentWithTheme(Slider, {
        values: [10],
        min: 0,
        max: 100,
        vertical: true,
        onChange: () => {},
        labelPosition: LabelPosition.Before,
      });
      expect(fragment).toMatchSnapshot();
    });

    it('should be rendered in horisontal slider with labelContainer and LabelPosition.Before', () => {
      const fragment = renderToFragmentWithTheme(Slider, {
        values: [10],
        min: 0,
        max: 100,
        vertical: false,
        onChange: () => {},
        labelPosition: LabelPosition.Before,
      });
      expect(fragment).toMatchSnapshot();
    });

    it('should be rendered in vertical slider with labelContainer and LabelPosition.After', () => {
      const fragment = renderToFragmentWithTheme(Slider, {
        values: [10],
        min: 0,
        max: 100,
        vertical: true,
        onChange: () => {},
        labelPosition: LabelPosition.After,
      });
      expect(fragment).toMatchSnapshot();
    });
  });
});

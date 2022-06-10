import {Alignment, Side} from '@floating-ui/react-dom-interactions';
import {
  calculateInset,
  getOffsetAxis,
  getOffsetAxisDirection,
  getSide,
} from '../utils';

describe('Tooltip', () => {
  describe('utils', () => {
    const sides: Side[] = ['top', 'right', 'bottom', 'left'];
    const alignments: Alignment[] = ['start', 'end'];

    describe('getSide', () => {
      test('should return correct side', () => {
        sides.forEach(side => {
          expect(getSide(side)).toEqual(side);
          alignments.forEach(alignment => {
            expect(getSide(`${side}-${alignment}`)).toEqual(side);
          });
        });
      });
    });

    describe('getOffsetAxis', () => {
      test('should return correct axis for offset to be applied along', () => {
        expect(getOffsetAxis('top')).toEqual('y');
        expect(getOffsetAxis('bottom')).toEqual('y');
        expect(getOffsetAxis('right')).toEqual('x');
        expect(getOffsetAxis('left')).toEqual('x');
      });
    });

    describe('getOffsetAxisDirection', () => {
      test('should return correct direction for offset to be applied in', () => {
        expect(getOffsetAxisDirection('top')).toEqual(-1);
        expect(getOffsetAxisDirection('bottom')).toEqual(1);
        expect(getOffsetAxisDirection('right')).toEqual(1);
        expect(getOffsetAxisDirection('left')).toEqual(-1);
      });
    });

    describe('calculateInset', () => {
      const insetValue: number = 10;
      const offsetValue: string = '5px';

      test('should return an empty string if there is no inset value', () => {
        expect(calculateInset(null, 'left', offsetValue, 'right')).toEqual('');
        expect(calculateInset(undefined, 'left', offsetValue, 'right')).toEqual(
          '',
        );
      });

      test('should return the original inset value if there is no offset value', () => {
        expect(calculateInset(insetValue, 'left', undefined, 'right')).toEqual(
          '10px',
        );
        expect(calculateInset(insetValue, 'left', undefined, 'right')).toEqual(
          '10px',
        );
      });

      test('should return the original inset value if there is an offset value even if it is 0', () => {
        expect(calculateInset(0, 'left', undefined, 'right')).toEqual('0px');
        expect(calculateInset(0, 'left', undefined, 'right')).toEqual('0px');
      });

      test('should return the original inset value if the offset should not be applied to this axis', () => {
        expect(calculateInset(insetValue, 'left', offsetValue, 'top')).toEqual(
          '10px',
        );
        expect(
          calculateInset(insetValue, 'left', offsetValue, 'bottom'),
        ).toEqual('10px');
        expect(calculateInset(insetValue, 'top', offsetValue, 'left')).toEqual(
          '10px',
        );
        expect(calculateInset(insetValue, 'top', offsetValue, 'right')).toEqual(
          '10px',
        );
      });

      describe('when the offset should be applied to this axis', () => {
        test('should increase the inset value by the offset value if the tooltip is positioned right or bottom', () => {
          expect(
            calculateInset(insetValue, 'left', offsetValue, 'right'),
          ).toEqual('calc(10px + (5px * 1))');
          expect(
            calculateInset(insetValue, 'top', offsetValue, 'bottom'),
          ).toEqual('calc(10px + (5px * 1))');
        });
        test('should decrease the inset value by the offset value if the tooltip is positioned left or top', () => {
          expect(
            calculateInset(insetValue, 'left', offsetValue, 'left'),
          ).toEqual('calc(10px + (5px * -1))');
          expect(calculateInset(insetValue, 'top', offsetValue, 'top')).toEqual(
            'calc(10px + (5px * -1))',
          );
        });
      });
    });
  });
});

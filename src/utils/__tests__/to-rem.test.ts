import {pixelStringToRemString} from '../to-rem';

describe('pixelStringToRemString', () => {
  test('unchanged if empty, number, already rem or less than 1 pixel', () => {
    expect(pixelStringToRemString('')).toBe('');
    //@ts-ignore
    expect(pixelStringToRemString(123)).toBe(123);
    expect(pixelStringToRemString('1.000rem')).toBe('1.000rem');
    expect(pixelStringToRemString('0.5px')).toBe('0.5px');
  });

  test('converted if non-zero pixels', () => {
    expect(pixelStringToRemString('32px')).toBe('2.000rem');
    expect(pixelStringToRemString('24px')).toBe('1.500rem');
    expect(pixelStringToRemString('16px')).toBe('1.000rem');
    expect(pixelStringToRemString('8px')).toBe('0.500rem');
  });
});

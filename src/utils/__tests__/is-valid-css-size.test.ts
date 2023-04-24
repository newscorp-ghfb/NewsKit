import {isValidCSSSizeUnit} from '../style/utils';

describe('isValidCSSSizeUnit', () => {
  it('should return true for valid CSS size units', () => {
    expect(isValidCSSSizeUnit('12px')).toBe(true);
    expect(isValidCSSSizeUnit('100%')).toBe(true);
    expect(isValidCSSSizeUnit('10em')).toBe(true);
    expect(isValidCSSSizeUnit('24pt')).toBe(true);
    expect(isValidCSSSizeUnit('100cm')).toBe(true);
    expect(isValidCSSSizeUnit('0.5rem')).toBe(true);
    expect(isValidCSSSizeUnit('0.5vmin')).toBe(true);
  });

  it('should return false for invalid CSS size units', () => {
    expect(isValidCSSSizeUnit('10')).toBe(false);
    expect(isValidCSSSizeUnit('10pt ')).toBe(false);
    expect(isValidCSSSizeUnit('abc')).toBe(false);
    expect(isValidCSSSizeUnit('50deg')).toBe(false);
    expect(isValidCSSSizeUnit('2px2em')).toBe(false);
  });
});

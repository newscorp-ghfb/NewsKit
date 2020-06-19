import {isLinkExternal} from '../utils';

describe('isLinkExternal', () => {
  it('should return false when window object is undefined', () => {
    const windowSpy = jest.spyOn(global as any, 'window', 'get');
    windowSpy.mockImplementation(() => undefined);
    expect(isLinkExternal('www.google.it')).toEqual(false);
    windowSpy.mockRestore();
  });
  it('should return true when window object is defined and link external', () => {
    expect(isLinkExternal('www.google.it')).toEqual(true);
  });
});

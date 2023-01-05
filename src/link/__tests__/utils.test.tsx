import {isLinkExternal} from '../utils';

describe('isLinkExternal', () => {
  let windowSpy: any;
  beforeEach(() => {
    windowSpy = jest.spyOn(global as any, 'window', 'get');
    windowSpy.mockImplementation(() => ({location: {host: 'newskit.co.uk'}}));
  });

  afterEach(() => {
    windowSpy.mockRestore();
  });

  it('should return false if the link is falsy', () => {
    expect(isLinkExternal('')).toEqual(false);
  });

  it('should return false if the window is undefined', () => {
    windowSpy.mockImplementation(() => undefined);
    expect(isLinkExternal('http://www.google.com')).toEqual(false);
  });

  it('should return false if the window object is defined and the link is internal', () => {
    expect(isLinkExternal('www.google.it')).toEqual(false);
    expect(isLinkExternal('newskit.co.uk')).toEqual(false);
    expect(isLinkExternal('http://newskit.co.uk')).toEqual(false);
    expect(isLinkExternal('http://www.newskit.co.uk')).toEqual(false);
    expect(isLinkExternal('https://www.newskit.co.uk')).toEqual(false);
    expect(isLinkExternal('/link')).toEqual(false);
    expect(isLinkExternal('images')).toEqual(false);
    expect(isLinkExternal('mailto:test@test.com')).toEqual(false);
    expect(isLinkExternal('tel:+1-555-555-5555')).toEqual(false);
    expect(isLinkExternal('#link')).toEqual(false);
  });

  it('should return true if the window is defined and the hosts of the current website and the target href do not match', () => {
    expect(isLinkExternal('http://www.google.com')).toEqual(true);
    expect(isLinkExternal('https://www.google.com')).toEqual(true);
  });
});

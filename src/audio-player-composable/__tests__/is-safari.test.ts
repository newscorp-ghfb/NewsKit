import {isSafari} from '../utils';

describe('isSafari', () => {
  afterEach(() => {
    delete (window as any).safari;
    jest.restoreAllMocks();
  });

  it('should return true when Safari-specific API is present', () => {
    Object.defineProperty(window, 'safari', {
      value: {
        pushNotification: {},
      },
      writable: true,
      configurable: true,
    });

    expect(isSafari()).toBe(true);
  });

  it('should return true for desktop Safari user agent', () => {
    jest
      .spyOn(navigator, 'userAgent', 'get')
      .mockReturnValue(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15',
      );

    expect(isSafari()).toBe(true);
  });

  it('should return true for iOS Safari user agent', () => {
    jest
      .spyOn(navigator, 'userAgent', 'get')
      .mockReturnValue(
        'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
      );

    expect(isSafari()).toBe(true);
  });

  it('should return false for Chrome user agent', () => {
    jest
      .spyOn(navigator, 'userAgent', 'get')
      .mockReturnValue(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36',
      );

    expect(isSafari()).toBe(false);
  });

  it('should return false for Chrome on iOS', () => {
    jest
      .spyOn(navigator, 'userAgent', 'get')
      .mockReturnValue(
        'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/142.0.0.0 Mobile/15E148 Safari/604.1',
      );

    expect(isSafari()).toBe(false);
  });

  it('should return false for Firefox', () => {
    jest
      .spyOn(navigator, 'userAgent', 'get')
      .mockReturnValue(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/119.0',
      );

    expect(isSafari()).toBe(false);
  });
});

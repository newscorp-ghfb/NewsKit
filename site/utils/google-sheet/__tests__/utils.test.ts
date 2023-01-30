import {
  CMSError,
  formatSheetData,
  getCMSPropsWithPrefix,
  parseCMSResponse,
} from '../utils';

describe('formatSheetData', () => {
  it('should convert google sheet data to an object', () => {
    const values = [
      ['HeroCardTitle', 'Latest Blog'],
      ['', 'NewsKit'],
    ];
    const result = formatSheetData(values);
    expect(result).toEqual({
      herocardtitle: 'Latest Blog',
      '': 'NewsKit',
    });
  });
  it('should remove the item whose value is undefined', () => {
    const values = [['HeroCardTitle', 'Latest Blog'], ['NewsKit']];
    const result = formatSheetData(values);
    expect(result).toEqual({
      herocardtitle: 'Latest Blog',
    });
  });
});

describe('getCMSPropsWithPrefix', () => {
  it('should return an array of items starting with a key', () => {
    const values = [
      ['foo_li_1', 'foo1'],
      ['foo_li_2', 'foo2'],
      ['foo_li_3', 'foo3'],
      ['bar', 'bar'],
      ['baz', 'baz'],
    ];
    const content = formatSheetData(values);
    const result = getCMSPropsWithPrefix(content, 'foo_li');
    expect(result).toEqual([
      ['foo_li_1', 'foo1'],
      ['foo_li_2', 'foo2'],
      ['foo_li_3', 'foo3'],
    ]);
  });
});

describe('parseCMSResponse', () => {
  it('should throw an error if the response is empty', () => {
    const response = null;
    expect(() => {
      parseCMSResponse(response, {required: {}});
    }).toThrowError(new CMSError('No CMS data found'));
  });
  it('should throw an error if there are missing keys', () => {
    const response: string[][] = [];
    expect(() => {
      parseCMSResponse(response, {
        required: {
          key_1: 'key_1',
        },
      });
    }).toThrowError(new CMSError('MISSING_KEYS: key_1. '));
  });
  it('should throw an error if there are invalid keys', () => {
    const response = [
      ['key_1', 'value_1'],
      ['key_2', 'value_2'],
    ];
    expect(() => {
      parseCMSResponse(response, {
        required: {
          key_1: 'key_1',
        },
      });
    }).toThrowError(new CMSError('INVALID_KEYS: key_2. '));
  });
  it('should throw an error if there are missing and invalid keys', () => {
    const response = [['key_2', 'value_2']];
    expect(() => {
      parseCMSResponse(response, {
        required: {
          key_1: 'key_1',
        },
      });
    }).toThrowError(new CMSError('MISSING_KEYS: key_1. INVALID_KEYS: key_2. '));
  });
  it('should return the parsed content if all keys are valid', () => {
    const response = [
      ['required_key', 'required_value'],
      ['dynamic_key_0', 'dynamic_value_0'],
      ['dynamic_key_1', 'dynamic_value_1'],
    ];
    const parsed = parseCMSResponse(response, {
      required: {
        required_key: 'required_key',
      },
      dynamic: {
        dynamic_key_: 'dynamic_key_',
      },
    });
    expect(parsed).toEqual({
      required_key: 'required_value',
      dynamic_key_0: 'dynamic_value_0',
      dynamic_key_1: 'dynamic_value_1',
    });
  });
});

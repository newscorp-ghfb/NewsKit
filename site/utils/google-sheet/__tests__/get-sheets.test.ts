import {google} from 'googleapis';
import {getSheets} from '../get-sheets';

const homePageContent = [
  ['hero_card_link_text', 'Read on Medium'],
  ['hero_card_link', 'https://medium.com/test'],
];

// The google.sheets() constructor returns a sheets function instance
const mockGoogleSheets = (values: string[][]) => () => ({
  spreadsheets: {
    values: {
      get: jest.fn(() => ({
        data: {
          values: Promise.resolve(values),
        },
      })),
    },
  },
});

describe('getSheets', () => {
  const {env} = process;
  let googleSheetsSpy: jest.SpyInstance;
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    jest.resetModules();
    process.env = {...env};
    googleSheetsSpy = jest
      // @ts-ignore
      .spyOn(google, 'sheets');
    consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(jest.fn());
  });

  afterEach(() => {
    process.env = env;
    jest.restoreAllMocks();
  });

  it('should returned populated array on success', async () => {
    process.env.GOOGLE_SHEETS_CLIENT_EMAIL = 'test';
    process.env.GOOGLE_SHEETS_PRIVATE_KEY = 'test';
    process.env.SPREADSHEET_ID = 'test';
    googleSheetsSpy.mockImplementation(mockGoogleSheets(homePageContent));
    const result = await getSheets('Homepage');
    expect(googleSheetsSpy).toBeCalled();
    expect(consoleErrorSpy).not.toBeCalled();
    expect(result).toEqual(homePageContent);
  });

  it('should return empty array when unset env vars', async () => {
    process.env.GOOGLE_SHEETS_CLIENT_EMAIL = undefined;
    process.env.GOOGLE_SHEETS_PRIVATE_KEY = undefined;
    process.env.SPREADSHEET_ID = undefined;
    const result = await getSheets('Homepage');
    expect(googleSheetsSpy).not.toBeCalled();
    expect(consoleErrorSpy).toBeCalled();
    expect(result).toEqual([]);
  });

  it('should return empty array on google failure', async () => {
    process.env.GOOGLE_SHEETS_CLIENT_EMAIL = 'test';
    process.env.GOOGLE_SHEETS_PRIVATE_KEY = 'test';
    process.env.SPREADSHEET_ID = 'test';
    googleSheetsSpy.mockImplementation(() => () =>
      Promise.reject(new Error('Google error')),
    );
    const result = await getSheets('Homepage');
    expect(googleSheetsSpy).toBeCalled();
    expect(consoleErrorSpy).toBeCalled();
    expect(result).toEqual([]);
  });
});

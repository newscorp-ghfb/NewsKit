import {google} from 'googleapis';
import {CMSDataProps} from './types';

// Define the required scopes. In our case we only need read access.
const SCOPE = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

export async function getSheets(range: string) {
  try {
    // generate a JWT
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      undefined,
      // we need to replace the escaped newline characters
      // https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
      process.env.GOOGLE_SHEETS_PRIVATE_KEY!.replace(/\\n/g, '\n'),
      SCOPE,
    );

    // initialize the Google Sheets API
    const sheets = google.sheets({version: 'v4', auth: jwt});
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range,
    });
    return response.data.values;
  } catch (err) {
    console.log(`>> ERROR: Cannot fetch data from googlesheet api: ${err}`);
  }
  return [];
}

export const formatSheetData = (data: string[][] | undefined | null) => {
  if (data === undefined || data === null || data.length === 0) {
    return {};
  }
  const transformedArray = data.map(([key, value]) => [
    key.toLowerCase(),
    value,
  ]);
  // Hack needed to avoid JSON-Serialization validation error from Next.js https://github.com/zeit/next.js/discussions/11209
  // >>> Reason: `undefined` cannot be serialized as JSON. Please use `null` or omit this value all together.
  return JSON.parse(JSON.stringify(Object.fromEntries(transformedArray)));
};

export const getValueFromCMS = (
  obj: CMSDataProps,
  key: string,
  fallback: string,
) => {
  const newKey = key.toLowerCase();
  if (obj[newKey]) {
    return obj[newKey];
  }
  return fallback;
};

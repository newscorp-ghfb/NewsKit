/* eslint-disable no-console */
import {google} from 'googleapis';

require('dotenv').config();

// Define the required scopes. In our case we only need read access.
const SCOPE = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

const handleError = (err: unknown) => {
  console.error('>> ERROR: Cannot fetch data from googlesheet API.', err);
};

// Range is typically the sheet name
export async function getSheets(range: string) {
  const {
    GOOGLE_SHEETS_CLIENT_EMAIL,
    GOOGLE_SHEETS_PRIVATE_KEY,
    SPREADSHEET_ID,
  } = process.env;
  if (
    !GOOGLE_SHEETS_CLIENT_EMAIL &&
    !GOOGLE_SHEETS_PRIVATE_KEY &&
    !SPREADSHEET_ID
  ) {
    // Fail fast without a stacktrace
    handleError('Have you added the .env file for local builds?');
    handleError(`failed to fetch spreadsheet: ${SPREADSHEET_ID}`);
    return [];
  }

  try {
    // generate a JWT
    const jwt = new google.auth.JWT(
      GOOGLE_SHEETS_CLIENT_EMAIL,
      undefined,
      // we need to replace the escaped newline characters
      // https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
      GOOGLE_SHEETS_PRIVATE_KEY!.replace(/\\n/g, '\n'),
      SCOPE,
    );

    // initialize the Google Sheets API
    const sheets = google.sheets({version: 'v4', auth: jwt});
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range,
    });
    return response.data.values;
  } catch (err: unknown) {
    handleError(err);
  }

  return [];
}

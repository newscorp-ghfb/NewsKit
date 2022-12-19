/* eslint-disable no-console */
import {google} from 'googleapis';

require('dotenv').config();

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
    console.error('>> ERROR: Cannot fetch data from googlesheet api');
    console.log('Have you added the .env file for local builds?');
    console.error(err);
  }

  return [];
}

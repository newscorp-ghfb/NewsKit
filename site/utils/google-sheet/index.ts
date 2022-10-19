import {google} from 'googleapis';

// The sheet name
const RANGE = 'Homepage';
// Define the required scopes. In our case we only need read access.
const SCOPE = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

export async function getSheet() {
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
      range: RANGE,
    });
    return response.data.values;
  } catch (err) {
    console.log(err);
  }

  return [];
}

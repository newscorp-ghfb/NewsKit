import {google} from 'googleapis';

const RANGE = 'Homepage';

export async function getSheet() {
  try {
    const scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      undefined,
      // we need to replace the escaped newline characters
      // https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
      process.env.GOOGLE_SHEETS_PRIVATE_KEY!.replace(/\\n/g, '\n'),
      scopes,
    );

    const sheets = google.sheets({version: 'v4', auth: jwt});
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: RANGE,
    });

    const rows = response.data.values;

    if (rows && rows.length) {
      return rows.map(row => ({
        title: row[0],
        description: row[1],
        linkText: row[2] || null,
        href: row[3] || null,
      }));
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }

  return [];
}

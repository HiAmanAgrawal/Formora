// import { google } from "googleapis";
// import { OAuth2Client } from "google-auth-library";

// // Your Google Sheets API setup here
// const oAuth2Client = new OAuth2Client(
//   process.env.CLIENT_ID,
//   process.env.CLIENT_SECRET,
//   process.env.REDIRECT_URI
// );

// // Set your Google Sheet ID here
// const spreadsheetId = 'YOUR_SPREADSHEET_ID'; // Replace with your Google Sheets ID

// // Function to append data to the Google Sheet
// export const appendToSheet = async (data) => {
//   try {
//     // Authenticate and authorize the client
//     oAuth2Client.setCredentials({
//       refresh_token: process.env.REFRESH_TOKEN, // You should generate and store refresh tokens
//     });

//     const sheets = google.sheets({ version: 'v4', auth: oAuth2Client });

//     // Append data to the sheet, assuming the first row is for headers
//     const appendResponse = await sheets.spreadsheets.values.append({
//       spreadsheetId,
//       range: "Sheet1!A1", // You can change this based on your sheet range
//       valueInputOption: "RAW", // or "USER_ENTERED" if you want Google Sheets to interpret data
//       resource: {
//         values: [data], // Assuming data is an array of strings like ["John", "john@example.com", "Software Engineer"]
//       },
//     });

//     return appendResponse.status === 200;
//   } catch (error) {
//     console.error("Google Sheets Append Error:", error);
//     return false;
//   }
// };

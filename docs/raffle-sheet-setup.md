# Raffle entries -> Google Sheet

The raffle form on `/raffle` posts each entry to `/api/raffle`, which
forwards it to a Google Sheet through a small Apps Script "web app". This
is a one-time setup you do in your own Google account.

## 1. Create the sheet

1. Create a new Google Sheet (e.g. "Stars Raffle Entries").
2. In row 1, add headers: `Timestamp`, `First Name`, `Last Name`, `Phone`,
   `Email`, `Player`, `Package`, `Price`.

## 2. Add the Apps Script

1. In the sheet, go to **Extensions -> Apps Script**.
2. Delete the placeholder code and paste this:

   ```javascript
   function doPost(e) {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     var data = JSON.parse(e.postData.contents);

     sheet.appendRow([
       data.timestamp,
       data.firstName,
       data.lastName,
       data.phone,
       data.email,
       data.player,
       data.packageLabel,
       data.packagePrice,
     ]);

     return ContentService.createTextOutput(
       JSON.stringify({ ok: true }),
     ).setMimeType(ContentService.MimeType.JSON);
   }
   ```

3. Click **Save** (name the project something like "Raffle Webhook").

## 3. Deploy it as a web app

1. Click **Deploy -> New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set:
   - **Execute as:** Me (your account)
   - **Who has access:** Anyone
4. Click **Deploy** and authorize it when prompted (it's your own script,
   so this is safe).
5. Copy the **Web app URL** it gives you — it looks like
   `https://script.google.com/macros/s/AKfycb.../exec`.

## 4. Add the URL to the site

Set it as an environment variable named `RAFFLE_SHEET_WEBHOOK_URL`:

- **Local dev:** copy `.env.example` to `.env.local` and paste the URL in.
- **Production (Vercel):** Project Settings -> Environment Variables ->
  add `RAFFLE_SHEET_WEBHOOK_URL` with the same value, then redeploy.

Once set, submissions on `/raffle` will append a row to the sheet
automatically. If you ever need to change spreadsheets, redeploy the
Apps Script from the new sheet and update the environment variable —
no code changes needed.

## Notes

- The web app URL is only ever used server-side (inside
  `src/app/api/raffle/route.ts`); it is never sent to the browser.
- "Anyone" access on the Apps Script deployment means anyone with the
  exact URL can post rows to the sheet. Keep the URL out of public
  places (it's not committed to the repo — it lives in environment
  variables only).

/**
 * PolyPal waitlist → Google Sheet
 * Receives a POST from the landing page form and appends one row per signup.
 *
 * SETUP (one time, ~3 min):
 *  1. Create a Google Sheet. In row 1 put headers: Timestamp | Email | Source | Referrer
 *  2. Extensions → Apps Script. Delete any code, paste THIS file, Save.
 *  3. Deploy → New deployment → type "Web app".
 *       - Execute as: Me
 *       - Who has access: Anyone
 *     Deploy, authorise, and COPY the Web app URL (ends in /exec).
 *  4. Paste that URL into index.html as SHEET_ENDPOINT.
 *
 * Give co-founders access: just Share the Sheet (top-right Share button) →
 * add their emails as Viewer or Editor. They see the live list instantly.
 */
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    var p = (e && e.parameter) ? e.parameter : {};
    var email = (p.email || '').trim();

    if (!email) {
      return json({ ok: false, error: 'no email' });
    }

    // Optional: skip exact-duplicate emails already in column B
    var existing = sheet.getRange(2, 2, Math.max(sheet.getLastRow() - 1, 1), 1).getValues();
    var dup = existing.some(function (row) {
      return String(row[0]).trim().toLowerCase() === email.toLowerCase();
    });

    if (!dup) {
      sheet.appendRow([
        new Date(),
        email,
        p.source || '',
        p.referrer || ''
      ]);
    }

    return json({ ok: true, duplicate: dup });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json({ ok: true, message: 'PolyPal waitlist endpoint is live.' });
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

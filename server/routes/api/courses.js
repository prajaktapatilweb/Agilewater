const express = require('express');
const {
  getAuthToken,
  getSpreadSheetValues,
} = require('../../Database/googleSheetsService');
const router = express.Router();

router.get('/googlesheet', async (req, res) => {
  const spreadsheetId = process.env.SHEET_ID;
  const sheetName = 'DataSheet!A24:K';

  console.log('In request google sheet ');
  const auth = await getAuthToken();
  try {
    const responseRec = await getSpreadSheetValues({
      spreadsheetId,
      sheetName,
      auth,
    });

    // logger.info('User List Request Successful', { by: req.user.gid, for: [0], info: {} })
    return res.status(200).json(responseRec.data.values);
  } catch (err) {
    // logger.error(`Catch Block - User List Request Block ${err}`, { by: req.user.gid, for: [0], info: {} })
    return res.status(500).json({error: `Server Error: ${err}`});
  }
});
module.exports = router;

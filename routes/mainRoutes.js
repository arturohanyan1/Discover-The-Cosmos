const router = require('express').Router();
const { Album } = require('../db/models');

router.post('/addPhoto', async (req, res) => {
  try {
    const title = req.body.titleText;
    const explanation = req.body.explanationText;
    const url = req.body.imgUrl;
    const date = req.body.picDate;
    const user_id = req.session.superuserID;

    const album = await Album.create({ title, explanation, url, date, user_id });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

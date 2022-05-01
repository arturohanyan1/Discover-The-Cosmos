const router = require('express').Router();
const async = require('hbs/lib/async');
// const async = require('hbs/lib/async');
const { Album } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const user_id = req.session.superuserID;
    // console.log(user_id);
    const albums = await Album.findAll({ where: { user_id }, raw: true });
    // console.log(albums);
    res.render('entries/myAlbum', { albums });
  } catch (err) {
    console.log(err);
  }
});

router.post('/new', async (req, res) => {
  try {
    const { title, explanation, url, day } = req.body;
    const user_id = req.session.superuserID;

    const album = await Album.create({ title, explanation, url, date: day, user_id });
    console.log(album);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user_id = req.session.superuserID;
    await Album.destroy({ where: { id, user_id } });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

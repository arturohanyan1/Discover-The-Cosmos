const router = require('express').Router();
// const async = require('hbs/lib/async');
const { User, Album } = require('../db/models');

router.get('/', async (req, res) => {
  if (req.session.superuser) {
    try {
      res.render('entries/findAlbum');
    } catch (err) {
      console.log(err);
    }
  } else {
    res.redirect('/');
  }
});

router.post('/new', async (req, res) => {
  try {
    const { getEmail } = req.body;
    const user = await User.findOne({ where: { email: getEmail }, raw: true });
    if (user) {
      const user_id = user.id;
      const albums = await Album.findAll({ where: { user_id }, raw: true });
      // console.log(albums);
      res.render('entries/otherAlbum', { albums });
    } else {
      const message = { reg: 'noEmail' };
      res.render('entries/findAlbum', { message });
    }
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;

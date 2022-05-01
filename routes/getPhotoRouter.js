const router = require('express').Router();

router.get('/', async (req, res) => {
  if (req.session.superuser) {
    try {
      res.render('entries/getPhoto');
    } catch (err) {
      console.log(err);
    }
  } else {
    res.redirect('/');
  }
});

module.exports = router;

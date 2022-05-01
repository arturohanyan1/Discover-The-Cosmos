const router = require('express').Router();

router.get('/', async (req, res) => {
  if (req.session.superuser) {
    await req.session.destroy();
    res.clearCookie('MyCookieName');
    res.redirect('/');
  } else {
    res.redirect('/');
  }
  res.render('entries/main');
});

module.exports = router;

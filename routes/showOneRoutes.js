const router = require('express').Router();

router.get('/:val', async (req, res) => {
  if (req.session.superuser) {
    try {
      res.render('entries/showOne');
    } catch (err) {
      console.log(err);
    }
  } else {
    res.redirect('/');
  }
});

module.exports = router;

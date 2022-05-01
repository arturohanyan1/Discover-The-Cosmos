const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.render('entries/about');
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

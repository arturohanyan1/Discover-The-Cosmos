const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.render('entries/main');
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

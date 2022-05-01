// const async = require('hbs/lib/async');
const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.get('/', (req, res) => {
  res.render('entries/login');
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(email, password);
    const user = await User.findOne({ where: { email }, raw: true });
    if (user) {
      const passCheck = await bcrypt.compare(password, user.password);
      // console.log('passcheck', passCheck);
      if (passCheck) {
        // console.log(user.name);
        req.session.superuser = user.name;
        req.session.superuserID = user.id;
        const message = { login: 'login' };
        res.json(message);
      } else {
        const message = { login: 'password' };
        res.json(message);
      }
    } else {
      const message = { login: 'email' };
      res.json(message);
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

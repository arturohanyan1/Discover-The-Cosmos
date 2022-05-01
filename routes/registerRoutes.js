const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../db/models');

router.get('/', async (req, res) => {
  res.render('entries/register');
});

router.post('/new', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userOne = await User.findOne({ where: { email }, raw: true });
    // console.log(userOne);
    if (userOne === null) {
      const hash = await bcrypt.hash(password, 10);
      const user = await User.create({ name, email, password: hash });
      // console.log(user.dataValues.name);
      req.session.superuser = user.dataValues.name;
      req.session.superuserID = user.dataValues.id;
      console.log(req.session.superuserID);
      res.json(user);
    } else {
      const message = { reg: 'email' };
      res.json(message);
    }
  } catch (err) {
    console.error(err);
    res.json(err);
  }
});

module.exports = router;

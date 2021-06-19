const { userSchema } = require('../models/userSchema.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.registerUser = (req, res) => {
  try {
    userSchema.findOne({ email: req.body.email }).then(async (user) => {
      if (user) {
        return res.status(401).send({ msg: 'Email already exists' });
      } else {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new userSchema({
          email: req.body.email,
          password: hashedPassword,
        });
        newUser
          .save()
          .then(() => {
            res.status(200).json('user saved');
          })
          .catch((err) => res.status(500).json({ err }));
      }
    });
  } catch (err) {
    res.status(401).send({ msg: 'Something went wrong' });
  }
};

module.exports.loginUser = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  userSchema.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(401).send({ msg: 'Email incorrect ' });
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        const token = jwt.sign(
          {
            _id: user._id,
            email: user.email,
          },
          process.env.JWT_KEY,
          { expiresIn: '1h' }
        );
        return res
          .status(200)
          .json({ message: 'success', token: token, id: user._id });
      } else {
        return res.status(401).send({ msg: 'Password incorrect' });
      }
    });
  });
};

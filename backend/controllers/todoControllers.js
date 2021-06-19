const jwtDecode = require('jwt-decode');
const { todoSchema } = require('../models/todoSchema.js');

module.exports.getAll = async (req, res) => {
  const userId = jwtDecode(req.body.token.split(' ')[1])._id;
  try {
    const data = await todoSchema.find({ userId });
    res.status(200).send(data);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports.addItem = (req, res) => {
  const { text, completed, token } = req.body;
  const userId = jwtDecode(token.split(' ')[1])._id;
  try {
    const newTodo = new todoSchema({
      text,
      completed,
      userId,
    });
    newTodo
      .save()
      .then((user) => res.status(200).json({ _id: user._id }))
      .catch(() => res.status(500).json({ err: 'cant save item' }));
  } catch (err) {
    res.send({ err: 'can not add item' });
  }
};

module.exports.deleteItem = (req, res) => {
  todoSchema
    .findByIdAndRemove(req.params.id)
    .then((data) => {
      if (data) {
        res.status(200).json({ msg: 'congrats', data });
      } else {
        res.status(500).json({ msg: "todo doesn't exist" });
      }
    })
    .catch((err) => res.status(500).json({ msg: err }));
};

module.exports.editItem = (req, res) => {
  todoSchema
    .findByIdAndUpdate(req.params.id, { text: req.body.editedText })
    .then((data) => {
      if (data) {
        res.status(200).json({ msg: 'congrats', data });
      } else {
        res.status(500).json({ msg: "todo doesn't exist" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: err });
    });
};

module.exports.toggleCompleted = (req, res) => {
  todoSchema
    .findByIdAndUpdate(req.params.id, { completed: req.body.completed })
    .then((data) => {
      if (data) {
        res.status(200).json({ msg: 'congrats', data });
      } else {
        res.status(500).json({ msg: "todo doesn't exist" });
      }
    })
    .catch((err) => res.status(500).json({ msg: err }));
};

module.exports.selectAll = (req, res) => {
  todoSchema
    .updateMany({ completed: false }, { $set: { completed: true } })
    .then((data) => {
      if (data) {
        res.status(200).json({ msg: 'congrats', data });
      } else {
        res.status(500).json({ msg: 'error' });
      }
    })
    .catch((err) => res.status(500).json({ msg: err }));
};

module.exports.unSelectAll = (req, res) => {
  todoSchema
    .updateMany({ completed: true }, { $set: { completed: false } })
    .then((data) => {
      if (data) {
        res.status(200).json({ msg: 'congrats', data });
      } else {
        res.status(500).json({ msg: 'error' });
      }
    })
    .catch((err) => res.status(500).json({ msg: err }));
};

module.exports.deleteSelected = (req, res) => {
  todoSchema
    .deleteMany({ completed: true })
    .then((data) => {
      if (data) {
        res.status(200).json({ msg: 'congrats', data });
      } else {
        res.status(500).json({ msg: 'error' });
      }
    })
    .catch((err) => res.status(500).json({ msg: err }));
};

require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const todoRoutes = require('./routes/todoRouter.js');
const userRoutes = require('./routes/userRouter.js');
const checkAuth = require('./middleware/check-auth.js');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use('/todo', todoRoutes);
app.use('/user', userRoutes);

app.post('/checkAuth', checkAuth);
app.get('*', (req, res) => res.sendStatus(404));

const connectUrl = process.env.MONGO_URL;
mongoose
  .connect(connectUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() =>
    app.listen(8080, () => console.log('server started on port 8080'))
  )
  .catch((err) => console.log(err, 'error'));

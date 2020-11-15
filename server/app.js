const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const passportConfig = require('./passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const hpp = require('hpp');
const helmet = require('helmet');
const db = require('./models');
const PORT = 3010;

const loginRouter = require('./routes/login');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const commentRouter = require('./routes/comment');

dotenv.config();
const app = express();
db.sequelize
  .sync()
  .then(() => console.log('DataBase Connected'))
  .catch((err) => console.error(err));
passportConfig();

process.env.NODE_ENV = 'production';

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined'));
  app.use(helmet());
  app.use(hpp());
  app.use(
    cors({
      origin: 'https://chifuyu.site',
      credentials: true,
    }),
  );
} else {
  app.use(morgan('dev'));
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    }),
  );
}

app.enable('trust proxy');

app.use(express.static(path.join(__dirname, 'upload')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
    proxy: true,
    cookie: {
      httpOnly: true,
      secure: false,
      domain: process.env.NODE_ENV === 'production' ? '.chifuyu.site' : 'http://localhost:3000',
    },
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/comment', commentRouter);
app.use('/post', postRouter);

app.get('/', (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    res.send('hello sns');
  } else res.send('sns dev');
});

app.listen(PORT, () => {
  console.log(`running at port ${PORT}`);
});

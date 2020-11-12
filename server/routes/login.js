const express = require('express');
const bcrypt = require('bcrypt');
const { User, ProfileImage, Post } = require('../models');
const passport = require('passport');
const { isNotLogin, isLogin } = require('../middlewares/middlewares');
const router = express.Router();

// GET SIGN IN

router.get('/user', async (req, res, next) => {
  try {
    if (req.user) {
      const user = await User.findOne({
        where: { id: parseInt(req.user.id, 10) },
        attributes: {
          exclude: ['password', 'createdAt', 'UserId', 'updatedAt'],
        },
        include: [
          {
            model: ProfileImage,
            attributes: ['src'],
          },
          {
            model: Post,
            attributes: ['id'],
          },
          {
            model: User,
            as: 'Friends',
            through: { attributes: ['FriendId'] },
            attributes: ['id', 'username'],
          },
          {
            model: User,
            as: 'Ignorings',
            through: { attributes: ['ignoredId'] },
            attributes: ['id', 'username'],
          },
          {
            model: Post,
            as: 'Likes',
            through: { attributes: ['PostId'] },
            attributes: {
              exclude: ['updatedAt', 'createdAt', 'title', 'content'],
            },
          },
        ],
      });
      res.status(200).json(user);
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// LOG OUT
router.post('/logout', isLogin, (req, res) => {
  req.logout();
  req.session.destroy((err) => console.error(err));
  res.send('Logout Success');
});

// SIGN IN
router.post('/signin', isNotLogin, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (error) => {
      if (error) {
        console.error(error);
        return next(error);
      }
      const passUser = await User.findOne({
        where: { username: user.username },
        attributes: {
          exclude: ['password', 'createdAt', 'UserId', 'updatedAt'],
        },
        include: [
          {
            model: ProfileImage,
            attributes: ['src'],
          },
          {
            model: Post,
            attributes: ['id'],
          },
          {
            model: User,
            as: 'Friends',
            through: { attributes: ['FriendId'] },
            attributes: ['id', 'username'],
          },
          {
            model: User,
            as: 'Ignorings',
            through: { attributes: ['ignoredId'] },
            attributes: ['id', 'username'],
          },
          {
            model: Post,
            as: 'Likes',
            through: { attributes: ['PostId'] },
            attributes: {
              exclude: ['updatedAt', 'createdAt', 'title', 'content'],
            },
          },
        ],
      });
      return res.json(passUser);
    });
  })(req, res, next);
});

// SIGN UP
router.post('/signup', isNotLogin, async (req, res, next) => {
  try {
    const findUsername = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (findUsername) {
      return res.status(403).send('이미 사용 중인 닉네임입니다.');
    }
    const hashPassword = await bcrypt.hash(req.body.pw, 12);

    await User.create({
      username: req.body.username,
      password: hashPassword,
      power: req.body.power,
    });
    res.status(201).send('Sign Up Success');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;

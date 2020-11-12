const express = require('express');
const { isLogin } = require('../middlewares/middlewares');
const router = express.Router();
const { User, Post, ProfileImage } = require('../models');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

try {
  fs.accessSync('./server/upload');
} catch (err) {
  console.log('not exist upload folder');
  fs.mkdirSync('./server/upload');
}

// ADD FRIEND
router.patch('/addFriend/:myId/:id', isLogin, async (req, res, next) => {
  // PATCH /user/addFriend
  try {
    const myId = parseInt(req.params.myId, 10);
    const id = parseInt(req.params.id, 10);
    const me = await User.findOne({ where: { id: myId } });
    if (!me) {
      res.status(403).send('No exist userInfo');
    }
    const you = await User.findOne({ where: { id: id } });
    await me.addFriend(req.body.id);
    res.status(200).json({ id, myId, username: you.username });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// GET FRIEND

// REMOVE FRIEND
router.delete('/removeFriend/:myId/:id', isLogin, async (req, res, next) => {
  // DELETE /user/removeFriend
  try {
    const myId = parseInt(req.params.myId, 10);
    const id = parseInt(req.params.id, 10);
    const me = await User.findOne({ where: { id: myId } });
    if (!me) {
      res.status(404).send('No exist users, removeFriend');
    }
    const you = await User.findOne({
      where: { id: id },
      attributes: ['username'],
    });
    await me.removeFriend(id);

    res.status(200).json({ id, myId, username: you.username });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// SEND MESSAGE

// RECIEVE MESSAE

// ADD IGNORE
router.patch('/addIgnore/:myId/:id', isLogin, async (req, res, next) => {
  // PATCH /user/addIgnore/
  try {
    const myId = parseInt(req.params.myId, 10);
    const id = parseInt(req.params.id, 10);
    const me = await User.findOne({ where: { id: myId } });
    if (!me) {
      res.status(403).send('No exist userInfo');
    }
    const you = await User.findOne({ where: { id: id } });
    // const posts = await Post.findAll({
    //   where: {
    //     UserId: { [Op.ne]: id },
    //   },
    // });

    await me.addIgnoring(id);
    res.status(200).json({ id, myId, username: you.username });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// REMOVE IGNORE
router.delete('/removeIgnore/:myId/:id', isLogin, async (req, res, next) => {
  // DELETE /user/removeIgnore
  try {
    const myId = parseInt(req.params.myId, 10);
    const id = parseInt(req.params.id, 10);
    const me = await User.findOne({ where: { id: myId } });
    if (!me) {
      res.status(404).send('No exist users, removeIgnore');
    }
    const you = await User.findOne({
      where: { id: id },
      attributes: ['username'],
    });
    await me.removeIgnoring(id);

    res.status(200).json({ id, myId, username: you.username });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// ADD PROFILE IMAGE
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, './server/upload');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext);
      console.log(basename, ext);
      done(null, basename + '_' + new Date().getTime() + ext);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
});

router.patch(
  '/profileImage',
  isLogin,
  upload.single('profileImage'),
  async (req, res, next) => {
    // PATCH /user/profileImage
    try {
      const user = await User.findOne({ where: { id: req.body.id } });
      const image = await ProfileImage.findOne({
        where: { UserId: req.body.id },
      });
      if (!image) {
        const profile = await ProfileImage.create({
          src: req.file.filename,
          UserId: user.id,
        });
        res.status(200).json({ src: profile.src, id: req.body.id });
      } else {
        const profile = await image.update({ src: req.file.filename });
        res.status(200).json({ src: profile.src, id: req.body.id });
      }
    } catch (err) {
      console.error(err);
      next(err);
    }
  },
);

// REMOVE PROFILE IMAGE
router.patch(
  '/profileImage/:id',
  isLogin,
  upload.single('profileImage'),
  async (req, res, next) => {
    // PATCH /user/profileImage/1
    try {
      const UserId = parseInt(req.params.id, 10);
      const image = await ProfileImage.findOne({
        where: { UserId },
      });
      await image.update({ src: '' });
      res.status(200).json({ id: UserId });
    } catch (err) {
      console.error(err);
      next(err);
    }
  },
);

// ADD LIKE
router.post('/like/:UserId/:PostId', isLogin, async (req, res, next) => {
  try {
    const UserId = parseInt(req.params.UserId, 10);
    const PostId = parseInt(req.params.PostId, 10);
    const user = await User.findOne({ where: { id: UserId } });

    const post = await Post.findOne({ where: { id: PostId } });
    if (!post) {
      return res.status(404).send('게시글이 존재하지 않습니다.');
    }
    const isLike = await post.hasLikes(UserId);

    if (isLike) {
      return res.status(403).send('이미 표시한 상태입니다.');
    } else {
      await post.addLike(UserId);
      return res
        .status(200)
        .json({ id: PostId, username: user.username, UserId: user.id });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// REMOVE LIKE
router.delete('/unlike/:UserId/:PostId', isLogin, async (req, res, next) => {
  try {
    const UserId = parseInt(req.params.UserId, 10);
    const PostId = parseInt(req.params.PostId, 10);
    const post = await Post.findOne({ where: { id: PostId } });
    const isLike = await post.hasLikes(UserId);
    if (isLike) {
      await post.removeLikes(UserId);
      res.status(200).json({ id: PostId, UserId });
    } else return res.status(403).json('이미 제거된 상태입니다.');
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;

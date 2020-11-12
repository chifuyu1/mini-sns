const express = require('express');
const { isLogin } = require('../middlewares/middlewares');
const { Comment, ProfileImage, User } = require('../models');
const router = express.Router();

router.get('/:commentId', async (req, res, next) => {
  try {
    const comment = await Comment.findAll({
      where: { PostId: parseInt(req.params.commentId, 10) },
      exclude: ['updatedAt', 'UserId'],
      include: [
        {
          model: User,
          attributes: ['id', 'username'],
          include: [
            {
              model: ProfileImage,
              attributes: {
                exclude: ['id', 'createdAt', 'updatedAt', 'UserId'],
              },
            },
          ],
        },
      ],
    });
    res.status(200).json({ id: parseInt(req.params.commentId, 10), comment });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/', isLogin, async (req, res, next) => {
  // POST /comment/
  try {
    await Comment.create({
      content: req.body.content,
      UserId: req.body.UserId,
      PostId: req.body.PostId,
    });
    const newComment = await Comment.findOne({
      where: {
        PostId: req.body.PostId,
        UserId: req.body.UserId,
        content: req.body.content,
      },
      exclude: ['updatedAt', 'UserId'],
      include: [
        {
          model: User,
          attributes: {
            exclude: ['password', 'power', 'createdAt', 'updatedAt'],
          },
          include: [
            {
              model: ProfileImage,
              attributes: {
                exclude: ['id', 'createdAt', 'updatedAt', 'UserId'],
              },
            },
          ],
        },
      ],
    });
    res.status(200).json(newComment);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.patch('/', isLogin, async (req, res, next) => {
  try {
    let comment = await Comment.findOne({
      where: {
        id: req.body.id,
      },
    });
    await comment.update({ content: req.body.content });
    res.status(200).json(comment);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.delete('/:PostId/:id', isLogin, async (req, res, next) => {
  try {
    await Comment.destroy({
      where: {
        id: parseInt(req.params.id),
        PostId: parseInt(req.params.PostId),
      },
    });
    res.status(200).json({
      id: parseInt(req.params.id),
      PostId: parseInt(req.params.PostId),
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;

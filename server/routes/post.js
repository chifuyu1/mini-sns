const express = require('express');
const { Op } = require('sequelize');
const { isLogin } = require('../middlewares/middlewares');
const { User, Post, Comment, ProfileImage } = require('../models');
const router = express.Router();

// ADD POST
router.post('/', isLogin, async (req, res, next) => {
  // POST /post
  try {
    await Post.create({
      UserId: req.body.id,
      title: req.body.title,
      content: req.body.content,
    });
    const post = await Post.findOne({
      where: { UserId: req.body.id, title: req.body.title, content: req.body.content },
      include: [
        {
          model: User,
          attributes: ['username'],
          include: [
            {
              model: ProfileImage,
              attributes: ['src'],
            },
          ],
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['username'],
            },
          ],
        },
        {
          model: User,
          as: 'Likes',
          through: { attributes: ['UserId'] },
          attributes: {
            exclude: ['updatedAt', 'createdAt', 'password', 'power', 'id'],
          },
        },
      ],
    });
    res.status(200).json(post);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// UPDATE POST
router.patch('/', isLogin, async (req, res, next) => {
  // PATCH /post
  try {
    const post = await Post.findOne({
      where: {
        id: req.body.id,
      },
    });
    await post.update({ title: req.body.title, content: req.body.content });
    res.status(200).json({
      id: req.body.id,
      title: req.body.title,
      content: req.body.content,
    });
  } catch (err) {
    console.err(err);
    next(err);
  }
});

// REMOVE POST
router.delete('/:id', isLogin, async (req, res, next) => {
  // DELETE /post
  try {
    const post = await Post.findOne({
      where: {
        id: parseInt(req.params.id),
      },
    });
    await post.destroy();
    // 글 지우고 댓글 데이터도 모두 지워야 하는지?
    res.status(200).json({ id: parseInt(req.params.id) });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// GET POST
router.get('/', async (req, res, next) => {
  // GET /post
  try {
    const where = {};
    if (parseInt(req.query.lastId, 10)) {
      // 초기 로딩이 아닐 때
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
    }
    const posts = await Post.findAll({
      where,
      limit: 5,
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: User,
          attributes: ['username'],
          include: [
            {
              model: ProfileImage,
              attributes: ['src'],
            },
          ],
        },
        {
          model: Comment,
          attributes: ['id', 'createdAt', 'content', 'PostId', 'UserId'],
          include: [
            {
              model: User,
              attributes: ['username'],
              include: [
                {
                  model: ProfileImage,
                  attributes: ['src'],
                },
              ],
            },
          ],
        },
        {
          model: User,
          as: 'Likes',
          through: { attributes: ['UserId'] },
          attributes: {
            exclude: ['updatedAt', 'createdAt', 'password', 'power', 'id'],
          },
        },
      ],
    });

    return res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// UNBLOCK IGNORED
router.get('/unBlockIgnore', async (req, res, next) => {
  // GET /post
  try {
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
    await user.update({ blockIgnore: false });
    const ignorings = await User.findAll({
      attributes: ['id'],
      include: [
        {
          model: User,
          as: 'Ignored',
          where: { id: req.user.id },
        },
      ],
    });
    const where = {
      UserId: { [Op.in]: ignorings.map((info) => info.id) },
    };
    if (parseInt(req.query.lastId, 10)) {
      // 초기 로딩이 아닐 때
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
    }
    const posts = await Post.findAll({
      where,
      limit: 5,
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: User,
          attributes: ['username'],
          include: [
            {
              model: ProfileImage,
              attributes: ['src'],
            },
          ],
        },
        {
          model: Comment,
          attributes: ['id', 'createdAt', 'content', 'PostId', 'UserId'],
          include: [
            {
              model: User,
              attributes: ['username'],
              include: [
                {
                  model: ProfileImage,
                  attributes: ['src'],
                },
              ],
            },
          ],
        },
        {
          model: User,
          as: 'Likes',
          through: { attributes: ['UserId'] },
          attributes: {
            exclude: ['updatedAt', 'createdAt', 'password', 'power', 'id'],
          },
        },
      ],
    });

    return res.status(200).json({ posts, user });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// BLOCK IGNORE
router.get('/blockIgnore', async (req, res, next) => {
  // GET /post
  try {
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
    await user.update({ blockIgnore: true });
    const ignorings = await User.findAll({
      attributes: ['id'],
      include: [
        {
          model: User,
          as: 'Ignored',
          where: { id: req.user.id },
        },
      ],
    });
    const where = {
      UserId: {
        [Op.notIn]: ignorings.map((info) => info.id).concat(req.user.id),
      },
    };
    if (parseInt(req.query.lastId, 10)) {
      // 초기 로딩이 아닐 때
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
    }
    const posts = await Post.findAll({
      where,
      limit: 5,
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: User,
          attributes: ['username'],
          include: [
            {
              model: ProfileImage,
              attributes: ['src'],
            },
          ],
        },
        {
          model: Comment,
          attributes: ['id', 'createdAt', 'content', 'PostId', 'UserId'],
          include: [
            {
              model: User,
              attributes: ['username'],
              include: [
                {
                  model: ProfileImage,
                  attributes: ['src'],
                },
              ],
            },
          ],
        },
        {
          model: User,
          as: 'Likes',
          through: { attributes: ['UserId'] },
          attributes: {
            exclude: ['updatedAt', 'createdAt', 'password', 'power', 'id'],
          },
        },
      ],
    });
    return res.status(200).json({ posts, user });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// SEARCH
router.post('/search', async (req, res, next) => {
  try {
    const word = req.body.word;
    const post = await Post.findAll({
      where: { [Op.or]: [{ content: word }, { title: word }] },
      include: [
        {
          model: User,
          attributes: ['username'],
          include: [
            {
              model: ProfileImage,
              attributes: ['src'],
            },
          ],
        },
        {
          model: Comment,
          attributes: ['id', 'createdAt', 'content', 'PostId', 'UserId'],
          include: [
            {
              model: User,
              attributes: ['username'],
              include: [
                {
                  model: ProfileImage,
                  attributes: ['src'],
                },
              ],
            },
          ],
        },
        {
          model: User,
          as: 'Likes',
          through: { attributes: ['UserId'] },
          attributes: {
            exclude: ['updatedAt', 'createdAt', 'password', 'power', 'id'],
          },
        },
      ],
    });
    if (!post) {
      res.status(404).send('해당 키워드로 검색한 결과가 없습니다.');
    } else {
      res.status(200).json(post);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;

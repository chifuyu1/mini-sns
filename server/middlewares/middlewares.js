exports.isLogin = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send('로그인이 필요합니다.');
  }
};

exports.isNotLogin = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send('Login is not required.');
  }
};

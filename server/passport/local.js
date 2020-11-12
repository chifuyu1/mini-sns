const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');
const { User } = require('../models');

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'pw',
      },
      async (username, pw, done) => {
        try {
          const user = await User.findOne({
            where: { username },
          });
          if (!user) {
            return done(null, false, { reason: '존재하지 않는 이름입니다.' });
          }
          const result = await bcrypt.compare(pw, user.password);
          if (result) {
            return done(null, user);
          }
          return done(null, false, { reason: '비밀번호가 일치하지 않습니다.' });
        } catch (error) {
          console.error(error);
          return done(error);
        }
      },
    ),
  );
};
